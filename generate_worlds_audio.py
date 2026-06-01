#!/usr/bin/env python3
"""
generate_worlds_audio.py
Generates VoiceVox audio (.wav) for all new Japanese strings in Worlds 2-6.
Uses speaker ID 13 (青山龍星). Outputs AUDIO_MAP entries to paste into useAudio.ts.
Starting from file number 778 (continuing after existing 777.wav).
"""

import requests, json, os, re

VOICEVOX_BASE = "http://localhost:50021"
SPEAKER_ID = 13
AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio")

# All existing keys - skip these
EXISTING_KEYS = {
    '毎日食べます。','毎日飲みます。','毎日行きます。','毎日来ます。','毎日帰ります。',
    '毎日話します。','毎日読みます。','毎日書きます。','毎日聞きます。','毎日見ます。',
    '毎日寝ます。','毎日起きます。','毎日会います。','毎日買います。','毎日遊びます。',
    '毎日休みます。','毎日待ちます。','毎日持ちます。','毎日します。',
    '彼は食べました。','彼は飲みました。','彼は行きました。','彼は来ました。',
    '彼は帰りました。','彼は話しました。','彼は読みました。','彼は書きました。',
    '彼は聞きました。','彼は見ました。','彼は寝ました。','彼は起きました。',
    '昨日は食べませんでした。','昨日は飲みませんでした。','昨日は行きませんでした。',
    '食べませんでした','食べません',
}

# New phrases to generate (World 2 patterns)
NEW_PHRASES = [
    # Te-form connecting phrases
    '食べて、寝ます。',
    '飲んで、行きます。',
    '読んで、書きます。',
    '聞いて、話します。',
    '見て、帰ります。',
    '来て、食べます。',
    '行って、帰ります。',
    # Te-form permission
    '食べてもいいですか？',
    '読んでもいいですか？',
    '行ってもいいですか？',
    '見てもいいですか？',
    '話してもいいですか？',
    # Tai-form (want to)
    '食べたいです。',
    '飲みたいです。',
    '行きたいです。',
    '見たいです。',
    '帰りたいです。',
    '話したいです。',
    'すしを食べたいです。',
    '日本語を話したいです。',
    # Nagara (while doing)
    '音楽を聞きながら、勉強します。',
    '食べながら、話します。',
    '歩きながら、見ます。',
    '聞きながら、書きます。',
    '読みながら、飲みます。',
    # Koto ga dekiru (can do)
    '日本語を話すことができます。',
    '食べることができます。',
    '読むことができます。',
    '書くことができます。',
    '聞くことができます。',
    '見ることができます。',
    # Conversation practice
    '今日は何をしたいですか？',
    '日本語を勉強したいです。',
    '毎日何をしますか？',
    '毎日日本語を勉強します。',
    '昨日は何をしましたか？',
    '本を読みました。',
    '週末は何をしますか？',
    '友達と遊びます。',
    '日本語を話すことができますか？',
    'はい、少し話すことができます。',
    # World 2 intro new sentences
    'かいじゅうをたおします！',
    'まいにちたべます。',
    'きのうはたべませんでした。',
    'にほんごをはなします！',
]

def generate_audio(text: str, output_path: str) -> bool:
    try:
        resp = requests.post(f"{VOICEVOX_BASE}/audio_query",
            params={"text": text, "speaker": SPEAKER_ID}, timeout=15)
        if resp.status_code != 200:
            print(f"  ERROR audio_query for '{text}': HTTP {resp.status_code}")
            return False
        query = resp.json()
        synth = requests.post(f"{VOICEVOX_BASE}/synthesis",
            params={"speaker": SPEAKER_ID},
            headers={"Content-Type": "application/json"},
            data=json.dumps(query), timeout=30)
        if synth.status_code != 200:
            print(f"  ERROR synthesis for '{text}': HTTP {synth.status_code}")
            return False
        with open(output_path, 'wb') as f:
            f.write(synth.content)
        return True
    except Exception as e:
        print(f"  EXCEPTION for '{text}': {e}")
        return False

def main():
    existing_nums = []
    for fname in os.listdir(AUDIO_DIR):
        m = re.match(r'^(\d+)\.wav$', fname)
        if m:
            existing_nums.append(int(m.group(1)))
    next_num = max(existing_nums) + 1 if existing_nums else 778
    print(f"Starting from audio file: {next_num:03d}.wav")

    new_entries = []
    for phrase in NEW_PHRASES:
        if phrase in EXISTING_KEYS:
            print(f"  SKIP: '{phrase}'")
            continue
        filename = f"{next_num:03d}.wav"
        path = os.path.join(AUDIO_DIR, filename)
        print(f"  Generating '{phrase}' -> {filename} ... ", end='', flush=True)
        if generate_audio(phrase, path):
            print("OK")
            new_entries.append((phrase, filename))
            EXISTING_KEYS.add(phrase)
            next_num += 1
        else:
            print("FAILED")

    print("\n\n=== NEW AUDIO_MAP ENTRIES (add to useAudio.ts) ===")
    for text, fname in new_entries:
        escaped = text.replace("'", "\\'")
        print(f"    '{escaped}': '{fname}',")

    out_file = os.path.join(os.path.dirname(__file__), "new_worlds_audio_entries.txt")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("// === WORLD 2-6 NEW AUDIO_MAP ENTRIES ===\n")
        for text, fname in new_entries:
            escaped = text.replace("'", "\\'")
            f.write(f"    '{escaped}': '{fname}',\n")
    print(f"\nEntries written to: {out_file}")
    print(f"Total new: {len(new_entries)}")

if __name__ == '__main__':
    main()
