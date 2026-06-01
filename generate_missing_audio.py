#!/usr/bin/env python3
"""
generate_missing_audio.py
Generates VOICEVOX audio (.wav) for all Japanese strings in kana.ts example words
that are NOT already covered by the AUDIO_MAP in useAudio.ts.
Uses VOICEVOX speaker ID 13 (青山龍星 Aoyama Ryusei).
Outputs the new AUDIO_MAP entries to paste into useAudio.ts.
"""

import requests
import json
import os
import re
import argparse

VOICEVOX_BASE = "http://localhost:50021"
SPEAKER_ID = 13  # 青山龍星 Aoyama Ryusei
AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio")

# ── Current AUDIO_MAP keys (extracted from useAudio.ts) ──────────────────────
# These are ALL the strings already mapped. Any example word NOT in this set needs a new file.
EXISTING_KEYS = {
    'Welcome to JQuest Japanese Tutor','Mサイズをください。','あ','あした','あなた',
    'あなたは誰？','あなたは？','あの','あのひとはだれですか？','あり','ありがとう',
    'ありがとうございます！','ありがとう！','い','いい','いいえ','いいえ、けっこうです。',
    'いいえ、だいじょうぶです。','いいえ、ちがいます。','いいえ、ふたりです。',
    'いいえ、見ているだけです。','いいえ！','いたし','いただき','いただきます！','います',
    'いらっしゃいませ！おひとりですか？','いらっしゃいませ！ご注文は？','う','うそをつくな！',
    'うるさい！','うれしい','え','お','おいしい！','おい！お前は誰だ？','おげんき',
    'おげんきですか？','おなか','おなかがぺこぺこです。','おねがい','おはよう',
    'おはようございます。','おはようございます！','おはよう！','おんがく',
    'おんがくをきいてください。','お前こそ誰だ！','お前より上手だ！','お砂糖はいりますか？',
    'お腹','お腹が空きました。','お風呂','お風呂に入ります。','か','が','がんばれ！','き',
    'きいて','ください','げんき','げんきです','こ','ここ','ここはどこですか？','こそ',
    'こちら','こちらこそよろしく！','こちらこそ！','この国のことが好きか？',
    'こんにちは、おげんきですか？','こんにちは！','こんにちは！天気がいいですね。',
    'こんばん','こんばんは！','こ＋に＋ち＋は ＝ こんにちは！','ご','ございます',
    'ごちそうさま','ごちそうさまでした！','ごめん','ごめんなさい。','ごめんなさい！',
    'ご注文はお決まりですか？','さ','さようなら。','さようなら！','し','して','しました',
    'します','しません','しませんでした','じ','す','すき','すしが大好きです！','すみ',
    'すみません！','する','せ','そ','そう','そうですね。とても気持ちいいです。',
    'そうですね！','ぞ','た','だ','だいじょうぶ','だいじょうぶですか？','だれ','ち',
    'ちがいます','て','で','でした','です','ですか','と','とう','とても',
    'とても好きです。文化が素晴らしい。','ど','どう','どういたしまして！','どうぞ',
    'どうぞよろしく！','どうぞ！','どうでもいい。','どこ','どこかお探しですか？',
    'どこですか？','な','なさい','なにかお探しですか？','なまえ','なりました','に','には',
    'ぬるい','ね','の','は','はい','はい、お願いします。','はい、げんきです。',
    'はい、げんきです。ありがとう！','はい、げんきです！','はい、そうです。',
    'はい、ひとりです。','はい、シャツを探しています。','はい、少しですが話せます。',
    'はい、新宿駅はどこですか？','はい！','はじめ','はじめまして','はじめまして、わたしです。',
    'はじめまして！','ひと','へ','へや','へやはどこですか？','ぺこぺこ','ま','まあまあです。',
    'まして','ます','ません','また','またあした！','またね！','み','みず','みずがぬるいです。',
    'むり','め','も','もう一度言ってください。','もう少し待ってください。','ゆっくり',
    'ゆっくりしてください。','よ','ようかいをたおせ！','よろしく','よろしくおねがいします。',
    'よろしくおねがいします！','ら','らく','らくにしてください。','り','りかいすることがたいせつです。',
    'ろ','わ','わかりません。','わたし','わたしにはむりです。','わたしのなまえです。',
    'わたしはとてもうれしいです！','わたしはケンです。','わたしは日本へ行きます。',
    'わたしもそうです。','を','ん','アイス','アイスがすきです。','エレベーター',
    'エレベーターはここです。','オレンジ','オレンジをください。','ケン','コーヒーをください。',
    'サイズはおいくつですか？','スペイン','スペインのひとです。','トイレ',
    'トイレはどこですか。','トイレはどこですか？','ラーメンが好きです。','一緒に',
    '一緒に遊びましょう。','丸まっています','亻','仕事','仕事が終わりました。','休','休み',
    '休みました','休みます','休みません','休みませんでした','休む','会いました','会います',
    '会いません','会いませんでした','会う','会社','入ります','勉強','名前','名前を書いてください。',
    '咲きました','天気','天気がいいです。','好きな食べ物は何ですか？','富士山',
    '富士山に登ります。','寝ました','寝ます','寝ません','寝ませんでした','寝る','寿司','帰りました',
    '帰りましょう','帰ります','帰りません','帰りませんでした','帰る','帽子','帽子を被ります。',
    '彼','待ちました','待ちます','待ちません','待ちませんでした','待つ','忘れました','持ちました',
    '持ちます','持ちません','持ちませんでした','持つ','新宿は3番線です。乗り換えが必要です。',
    '日','日本','日本語','日本語が話せると思っているのか？','日本語を勉強しています。','明',
    '明日','暗く','書いてください','書きました','書きます','書きません','書きませんでした','書く',
    '月','木','本を読みます。','来ました','来ます','来ません','来ませんでした','来る','桜',
    '桜が咲きました。','泳ぎましょう','海','海で泳ぎましょう。','猫','猫が丸まっています。',
    '登ります','私はすしを食べます。','私はただの旅人です。','空','空が暗くなりました。',
    '空きました','窓','窓を開けてください。','終わりました','美味しい','美味しいを食べたい。',
    '聞きました','聞きます','聞きません','聞きませんでした','聞く','脱ぎます','行きました',
    '行きます','行きません','行きませんでした','行く','被ります','見ました','見ます','見ません',
    '見ませんでした','見る','話しました','話します','話しません','話しませんでした','話す',
    '読みました','読みます','読みません','読みませんでした','読む','財布','財布を忘れました。',
    '買いました','買います','買いません','買いませんでした','買う','起きました','起きます',
    '起きません','起きませんでした','起きる','車','車で会社へ行きます。','遊びました',
    '遊びましょう','遊びます','遊びません','遊びませんでした','遊ぶ','醤油ラーメンをください。',
    '開けてください','靴','靴を脱ぎます。','食べたい','食べました','食べます','食べません',
    '食べませんでした','食べる','飲みました','飲みます','飲みません','飲みませんでした','飲む',
    '高いですね！','高尾山','青い空が見えます。','青い','赤い','白い','黒い','庭に猫がいます。',
    '犬','とり','さかな','山へ登りたいです。','山','川','速く行きます。','今日は静かです。',
    '静か','にぎやか','きれい','ひま','日本語を話します。','英語','中国語','韓国語',
    '私はすしを食べて水を飲みます。','私は','すしを','食べて','水を','刀で切ります。','刀',
    '剣','空手ですね。','空手','柔道','障子を閉めます。','障子','神社を守ります。','神社',
    '寺','俳句を読みます。','俳句','和歌','狐火が見えます。','狐火','焚火',
    '火遁、豪火球の術！','豪火球','水龍',
}

# ── All example words from kana.ts that need audio ───────────────────────────
# Format: (japanese_text, display_label)
# These are derived from stripping "(romaji)" from kana.ts example words
NEEDED_WORDS = [
    # Lesson 1 (こ,ん,に,ち)
    ('こんにちは', 'konnichiwa - already covered as こんにちは！ but WITHOUT ! needed'),
    ('こえ', 'koe - voice'),
    ('ほん', 'hon - book'),
    ('にほん', 'nihon - Japan'),
    ('にく', 'niku - meat'),
    ('ちかてつ', 'chikatetsu - subway'),
    ('ちず', 'chizu - map'),
    # Lesson 2 (は,わ,さ,よ)
    ('はじめまして', 'hajimemashite - already exists'),
    ('はな', 'hana - flower/nose'),
    ('わたし', 'watashi - already exists'),
    ('わかる', 'wakaru - to understand'),
    ('さようなら', 'sayounara - already exists variant'),
    ('さくら', 'sakura - cherry blossom'),
    ('よろしく', 'yoroshiku - already exists'),
    ('よる', 'yoru - night'),
    # Lesson 3 (な,う,ら,お)
    ('なまえ', 'namae - name - already exists'),
    ('なつ', 'natsu - summer'),
    ('うれしい', 'ureshii - already exists'),
    ('うみ', 'umi - sea'),
    ('らいねん', 'rainen - next year'),
    ('らく', 'raku - already exists'),
    ('おはよう', 'ohayou - already exists'),
    ('おちゃ', 'ocha - green tea'),
    # Lesson 4 (あ,り,と,が)
    ('ありがとう', 'arigatou - already exists'),
    ('あいさつ', 'aisatsu - greeting'),
    ('りかい', 'rikai - understanding'),
    ('りんご', 'ringo - apple'),
    ('ともだち', 'tomodachi - friend'),
    ('とけい', 'tokei - clock'),
    ('がんばって', 'ganbatte - good luck'),
    ('がっこう', 'gakkou - school'),
    # Lesson 5 (い,え,で,す)
    ('いいえ', 'iie - already exists'),
    ('いただきます', 'itadakimasu - needs non-! version'),
    ('えと', 'eto - umm'),
    ('えき', 'eki - train station'),
    ('でも', 'demo - but/however'),
    ('でんわ', 'denwa - telephone'),
    ('すみません', 'sumimasen - already exists as すみません！ but needs plain'),
    ('すし', 'sushi - sushi'),
    # Lesson 6 (か,ご,げ,じ)
    ('かえる', 'kaeru - to go home/frog'),
    ('かに', 'kani - crab'),
    ('ごめんなさい', 'gomennasai - already exists variant'),
    ('ごはん', 'gohan - rice/meal'),
    ('げんき', 'genki - already exists'),
    ('げすいどう', 'gesuidou - sewage'),
    ('じかん', 'jikan - time'),
    ('じしょ', 'jisho - dictionary'),
    ('あそこ', 'asoko - over there'),
    ('えきはあそこです。', 'ekivaasokodesu - the station is over there'),
    # Lesson 7 (め,ま,し,け)
    ('めがね', 'megane - glasses'),
    ('めいわく', 'meiwaku - nuisance'),
    ('まあまあ', 'maamaa - so-so'),
    ('まど', 'mado - window'),
    ('しつれい', 'shitsurei - excuse me/rude'),
    ('しごと', 'shigoto - work/job'),
    ('けっこうです', 'kekkoudesu - no thank you'),
    ('けむり', 'kemuri - smoke'),
    # Lesson 8 (て,き,た,だ)
    ('てがみ', 'tegami - letter'),
    ('てら', 'tera - temple'),
    ('きもち', 'kimochi - feeling'),
    ('きつね', 'kitsune - fox'),
    ('たべる', 'taberu - to eat'),
    ('たのしい', 'tanoshii - fun'),
    ('だいじょうぶ', 'daijoubu - already exists'),
    ('だれ', 'dare - already exists'),
    # Lesson 9 (つ,ず,ほ,も)
    ('つかれました', 'tsukaremashita - I am tired'),
    ('つき', 'tsuki - moon'),
    ('ずっと', 'zutto - always'),
    ('ずこう', 'zukou - art class'),
    ('ほんとう', 'hontou - truth/really'),
    ('ほし', 'hoshi - star'),
    ('わたしも', 'watashimo - me too'),
    ('もち', 'mochi - rice cake'),
    # Lesson 10 (く,や,み,ゆ)
    ('ください', 'kudasai - already exists'),
    ('くるま', 'kuruma - car'),
    ('おやすみ', 'oyasumi - good night'),
    ('やさしい', 'yasashii - kind/gentle'),
    ('みんな', 'minna - everyone'),
    ('みず', 'mizu - already exists'),
    ('ゆっくり', 'yukkuri - already exists'),
    ('ゆめ', 'yume - dream'),
    # Lesson 11 (る,を,そ,せ)
    ('るす', 'rusu - absence from home'),
    ('を', 'wo - already exists'),
    ('そうですね', 'soudesune - needs plain version'),
    ('そら', 'sora - sky'),
    ('せんせい', 'sensei - already exists'),
    ('せなか', 'senaka - back of body'),
    # Lesson 12 (ぞ,へ,の,ぬ)
    ('どうぞよろしく', 'douzo yoroshiku - already exists'),
    ('ぞう', 'zou - elephant'),
    ('へや', 'heya - already exists'),
    ('へんじ', 'henji - reply'),
    ('のり', 'nori - seaweed'),
    ('ぬるい', 'nurui - already exists'),
    ('ぬの', 'nuno - cloth'),
    # Lesson 13 (ひ,ろ,む,ふ)
    ('ひと', 'hito - already exists'),
    ('ひかり', 'hikari - light'),
    ('ろく', 'roku - six'),
    ('ろうか', 'rouka - hallway'),
    ('むり', 'muri - already exists'),
    ('むし', 'mushi - bug'),
    ('ふつう', 'futsuu - ordinary'),
    ('ふゆ', 'fuyu - winter'),
    # Lesson 14 (ど,れ,ね,ぺ)
    ('どうぞ', 'douzo - already exists'),
    ('どこ', 'doko - already exists'),
    ('れんしゅう', 'renshuu - practice'),
    ('れい', 'rei - zero/example'),
    ('ねがい', 'negai - wish'),
    ('ねこ', 'neko - cat'),
    ('ぺらぺら', 'perapera - fluent'),
    ('ぺん', 'pen - pen'),
    # Lesson 15 Katakana (ア,イ,ウ,エ)
    ('アイス', 'aisu - already exists'),
    ('アフリカ', 'afurika - Africa'),
    ('インク', 'inku - ink'),
    ('インド', 'indo - India'),
    ('ウエーター', 'ueetaa - waiter'),
    ('ウイスキー', 'uisukii - whisky'),
    ('エレベーター', 'erebeetaa - already exists'),
    ('エアコン', 'eakon - air conditioner'),
    # Lesson 16 Katakana (オ,カ,キ,ク,ケ,コ)
    ('オレンジ', 'orenji - already exists'),
    ('オートバイ', 'ootobai - motorcycle'),
    ('カメラ', 'kamera - camera'),
    ('カナダ', 'kanada - Canada'),
    ('キロ', 'kiro - kilo'),
    ('ケーキ', 'keeki - cake'),
    ('クラス', 'kurasu - class'),
    ('クリニック', 'kurinikku - clinic'),
    ('コーヒー', 'koohii - coffee'),
    # ─── New Expansion Words ───
    ('ぎんこう', 'bank'), ('かぎ', 'key'), ('ぐんま', 'Gunma'), ('かぐ', 'furniture'),
    ('ざっし', 'magazine'), ('ひざ', 'knee'), ('ぜんぜん', 'not at all'), ('かぜ', 'wind'),
    ('はなぢ', 'nosebleed'), ('ちぢむ', 'shrink'), ('つづく', 'continue'), ('てづくり', 'handmade'),
    ('ばんごう', 'number'), ('そば', 'soba'), ('びじゅつ', 'art'), ('てび', 'TV'),
    ('ぶんか', 'culture'), ('あぶない', 'dangerous'), ('べんきょう', 'study'), ('たべもの', 'food'),
    ('ぼうし', 'hat'), ('たぼう', 'busy'), ('ぱん', 'bread'), ('かっぱ', 'kappa'),
    ('ぴかぴか', 'shiny'), ('えんぴつ', 'pencil'), ('ぷんぷん', 'angry'), ('てんぷら', 'tempura'),
    ('ぽすと', 'post box'), ('さんぽ', 'stroll'),
    ('きゃく', 'guest'), ('きゅうり', 'cucumber'), ('きょう', 'today'), ('しゃしん', 'photo'),
    ('しゅくだい', 'homework'), ('しょくどう', 'dining hall'), ('ちゅうごく', 'China'), ('ちょこ', 'chocolate'),
    ('こんにゃく', 'konnyaku'), ('にゅうがく', 'admission'), ('にょろにょろ', 'wriggling'),
    ('ひゅうひゅう', 'whistling'), ('ひょう', 'leopard'), ('みゃく', 'pulse'), ('みゅーじあむ', 'museum'),
    ('みょうじ', 'surname'), ('りゃく', 'abbrev'), ('りゅう', 'dragon'), ('りょこう', 'travel'),
    ('ぎゃく', 'reverse'), ('ぎゅうにゅう', 'milk'), ('ぎょえ', 'gasp'), ('じゃあ', 'well then'),
    ('じゅんび', 'preparation'), ('じょおう', 'queen'), ('びゃく', 'white'), ('びゅんびゅん', 'whizzing'),
    ('びょうき', 'illness'), ('ぴゅあ', 'pure'), ('ぴょんぴょん', 'hopping'),
    # ─── New Expansion Sentences ───
    ('ぎんこうはどこですか？', 'Where is the bank?'), ('ざっしをよみます。', 'read magazine'),
    ('ばんごうをおねがいします。', 'number please'), ('ばんごうはごです。', 'number is 5'),
    ('きょうはいいてんきです。', 'today good weather'), ('きょうはげんきです。', 'today well'),
    ('しゃしんをとります。', 'take photo'), ('しゅくだいをします。', 'do homework'),
    ('りょこうにいきます。', 'go trip'), ('ぎゅうにゅうをのみます。', 'drink milk'),
    ('じゅんびができました。', 'prep done'), ('じゃあ、いきましょう。', 'lets go'),
    ('ひゃくえんですか？', '100 yen?'), ('びょうきですか？', 'sick?'),
    ('びょうきです。', 'im sick'), ('おめでとうございます！', 'congrats'),
    ('またあいましょう！', 'meet again'),
]

def generate_audio(text: str, output_path: str) -> bool:
    """Generate audio for text using VOICEVOX and save to output_path."""
    try:
        # Step 1: Generate audio query
        resp = requests.post(
            f"{VOICEVOX_BASE}/audio_query",
            params={"text": text, "speaker": SPEAKER_ID},
            timeout=15
        )
        if resp.status_code != 200:
            print(f"  ERROR audio_query for '{text}': HTTP {resp.status_code}")
            return False
        query = resp.json()

        # Step 2: Synthesize
        synth_resp = requests.post(
            f"{VOICEVOX_BASE}/synthesis",
            params={"speaker": SPEAKER_ID},
            headers={"Content-Type": "application/json"},
            data=json.dumps(query),
            timeout=30
        )
        if synth_resp.status_code != 200:
            print(f"  ERROR synthesis for '{text}': HTTP {synth_resp.status_code}")
            return False

        with open(output_path, 'wb') as f:
            f.write(synth_resp.content)
        return True
    except Exception as e:
        print(f"  EXCEPTION for '{text}': {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Generate VOICEVOX audio for missing words.")
    parser.add_argument('--input', type=str, help='Path to text file containing one word/phrase per line.')
    args = parser.parse_args()

    words_to_generate = []
    if args.input:
        if os.path.exists(args.input):
            with open(args.input, 'r', encoding='utf-8') as f:
                for line in f:
                    w = line.strip()
                    if w:
                        words_to_generate.append((w, 'from input file'))
        else:
            print(f"Error: input file {args.input} not found.")
            return
    else:
        words_to_generate = NEEDED_WORDS

    # Find highest existing numbered wav
    existing_nums = []
    for fname in os.listdir(AUDIO_DIR):
        m = re.match(r'^(\d+)\.wav$', fname)
        if m:
            existing_nums.append(int(m.group(1)))
    next_num = max(existing_nums) + 1 if existing_nums else 529
    print(f"Next audio file number: {next_num}")

    new_entries = []  # (text, filename)

    for word, comment in words_to_generate:
        if word in EXISTING_KEYS:
            print(f"  SKIP (exists): '{word}'")
            continue

        filename = f"{next_num:03d}.wav"
        output_path = os.path.join(AUDIO_DIR, filename)
        print(f"  Generating '{word}' -> {filename} ... ", end='', flush=True)

        if generate_audio(word, output_path):
            print("OK")
            new_entries.append((word, filename))
            EXISTING_KEYS.add(word)  # prevent duplicates if word appears twice
            next_num += 1
        else:
            print("FAILED")

    # Output the new AUDIO_MAP entries as a TypeScript snippet
    print("\n\n=== NEW AUDIO_MAP ENTRIES (add to useAudio.ts) ===")
    for text, fname in new_entries:
        escaped = text.replace("'", "\\'")
        print(f"  '{escaped}': '{fname}',")

    print(f"\nTotal new entries: {len(new_entries)}")
    print("Done!")

    # Also write to a file for easy copy-paste
    out_file = os.path.join(os.path.dirname(__file__), "new_audio_map_entries.txt")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("// === NEW AUDIO_MAP ENTRIES - add to useAudio.ts AUDIO_MAP ===\n")
        for text, fname in new_entries:
            escaped = text.replace("'", "\\'")
            f.write(f"  '{escaped}': '{fname}',\n")
    print(f"Entries also written to: {out_file}")

if __name__ == '__main__':
    main()
