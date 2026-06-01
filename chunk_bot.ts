import { type Kana, hiragana } from './kana';
import { type FillBlankProblem } from '../components/games/FillInBlank';

export type LessonType = 'kana' | 'conversation' | 'checkpoint' | 'boss' | 'adventure';

export interface ConversationLine { id: string; speaker: 'npc' | 'user'; text: string; english: string; }
export interface ConversationChoice { id: string; text: string; english: string; isCorrect: boolean; feedback: string; }
export interface ConversationScenario {
    id: string; npcName: string; npcAvatar: string; background: string; intro: string;
    exchanges: { npcQuery: ConversationLine; options: ConversationChoice[]; }[];
}
export interface GrammarSlide {
    type: 'grammar'; title: string; content: string;
    structure: { label: string; color: string; example: string; }[];
    exampleSentence: { japanese: string; romaji: string; english: string; };
}
export interface SentenceProblem {
    id: string; english: string; japanese: string;
    romaji?: string;
    literal?: string;
    emoji?: string;
    words: { id: string; text: string; meaning?: string; romaji?: string }[];
    solution: string[];
}
export interface KanjiLogicSlide {
    type: 'kanji-logic';
    title: string;
    kanji: string;
    meaning: string;
    description: string;
    parts: { kanji: string; meaning: string; color: string }[];
    reading: { on: string; kun: string };
    example: { word: string; meaning: string; romaji: string };
}
export interface LessonData {
    id: string; worldId: string; title: string; type: LessonType;
    content: (Kana | GrammarSlide | KanjiLogicSlide)[] | ConversationScenario;
    fillBlanks?: FillBlankProblem[];
    sentences?: SentenceProblem[];
    xp: number;
}

export let allLessons: LessonData[] = [];

export const WORLDS = [
    { id: 'beginner-1', title: 'Beginner 1', description: 'The Basics' },
    { id: 'verbs-1', title: 'World 2: The Way of the Verb', description: 'Mastering Actions' },
];

export interface VerbInfo {
    id: string;
    dictionary: string;
    masu: string;
    mashita: string;
    masen: string;
    masendeshita: string;
    meaning: string;
    romaji: string;
}

export const essentialVerbs: VerbInfo[] = [
    { id: 'v1', dictionary: '食べる', masu: '食べます', mashita: '食べました', masen: '食べません', masendeshita: '食べませんでした', meaning: 'eat', romaji: 'taberu' },
    { id: 'v2', dictionary: '飲む', masu: '飲みます', mashita: '飲みました', masen: '飲みません', masendeshita: '飲みませんでした', meaning: 'drink', romaji: 'nomu' },
    { id: 'v3', dictionary: '行く', masu: '行きます', mashita: '行きました', masen: '行きません', masendeshita: '行きませんでした', meaning: 'go', romaji: 'iku' },
    { id: 'v4', dictionary: '来る', masu: '来ます', mashita: '来ました', masen: '来ません', masendeshita: '来ませんでした', meaning: 'come', romaji: 'kuru' },
    { id: 'v5', dictionary: '帰る', masu: '帰ります', mashita: '帰りました', masen: '帰りません', masendeshita: '帰りませんでした', meaning: 'return', romaji: 'kaeru' },
    { id: 'v6', dictionary: '話す', masu: '話します', mashita: '話しました', masen: '話しません', masendeshita: '話しませんでした', meaning: 'speak', romaji: 'hanasu' },
    { id: 'v7', dictionary: '読む', masu: '読みます', mashita: '読みました', masen: '読みません', masendeshita: '読みませんでした', meaning: 'read', romaji: 'yomu' },
    { id: 'v8', dictionary: '書く', masu: '書きます', mashita: '書きました', masen: '書きません', masendeshita: '書きませんでした', meaning: 'write', romaji: 'kaku' },
    { id: 'v9', dictionary: '聞く', masu: '聞きます', mashita: '聞きました', masen: '聞きません', masendeshita: '聞きませんでした', meaning: 'listen', romaji: 'kiku' },
    { id: 'v10', dictionary: '見る', masu: '見ます', mashita: '見ました', masen: '見ません', masendeshita: '見ませんでした', meaning: 'see', romaji: 'miru' },
    { id: 'v11', dictionary: '寝る', masu: '寝ます', mashita: '寝ました', masen: '寝ません', masendeshita: '寝ませんでした', meaning: 'sleep', romaji: 'neru' },
    { id: 'v12', dictionary: '起きる', masu: '起きます', mashita: '起きました', masen: '起きません', masendeshita: '起きませんでした', meaning: 'wake up', romaji: 'okiru' },
    { id: 'v13', dictionary: '会う', masu: '会います', mashita: '会いました', masen: '会いません', masendeshita: '会いませんでした', meaning: 'meet', romaji: 'au' },
    { id: 'v14', dictionary: '買う', masu: '買います', mashita: '買いました', masen: '買いません', masendeshita: '買いませんでした', meaning: 'buy', romaji: 'kau' },
    { id: 'v15', dictionary: '遊ぶ', masu: '遊びます', mashita: '遊びました', masen: '遊びません', masendeshita: '遊びませんでした', meaning: 'play', romaji: 'asobu' },
    { id: 'v16', dictionary: '休む', masu: '休みます', mashita: '休みました', masen: '休みません', masendeshita: '休みませんでした', meaning: 'rest', romaji: 'yasumu' },
    { id: 'v17', dictionary: '待つ', masu: '待ちます', mashita: '待ちました', masen: '待ちません', masendeshita: '待ちませんでした', meaning: 'wait', romaji: 'matsu' },
    { id: 'v18', dictionary: '持つ', masu: '持ちます', mashita: '持ちました', masen: '持ちません', masendeshita: '持ちませんでした', meaning: 'hold', romaji: 'motsu' },
    { id: 'v19', dictionary: 'する', masu: 'します', mashita: 'しました', masen: 'しません', masendeshita: 'しませんでした', meaning: 'do', romaji: 'suru' },
];

// ── Fill-blank problem banks (3 per lesson, 2 blanks each) ───────────────────

const fillBlankBanks: Record<number, FillBlankProblem[]> = {
    1: [
        {
            id: 'f1-1', japanese: 'こんにちは！',
            english: 'Hello! / Good afternoon!',
            romaji: 'Konnichiwa!',
            literal: 'ko-n-ni-chi-wa',
            emoji: '👋',
            parts: ['_', 'んにちは'],
            blanks: [{ position: 0, answer: 'こ', choices: [{ id: 'a', text: 'こ', romaji: 'ko' }, { id: 'b', text: 'は', romaji: 'wa' }, { id: 'c', text: 'に', romaji: 'ni' }, { id: 'd', text: 'ち', romaji: 'chi' }] }]
        },
        {
            id: 'f1-2', japanese: 'こんにちは！',
            english: 'Hello! — fill in the 3rd character',
            romaji: 'Konnichiwa!',
            literal: 'ko-n-ni-chi-wa',
            emoji: '👋',
            parts: ['こんに', '_', 'は'],
            blanks: [{ position: 1, answer: 'ち', choices: [{ id: 'a', text: 'ち', romaji: 'chi' }, { id: 'b', text: 'に', romaji: 'ni' }, { id: 'c', text: 'わ', romaji: 'wa' }, { id: 'd', text: 'こ', romaji: 'ko' }] }]
        },
        {
            id: 'f1-3', japanese: 'こんにちは！',
            english: 'Hello! — complete the greeting',
            romaji: 'Konnichiwa!',
            literal: 'ko-n-ni-chi-wa',
            emoji: '👋',
            parts: ['こんにち', '_'],
            blanks: [{ position: 1, answer: 'は', choices: [{ id: 'a', text: 'は', romaji: 'wa (ha)' }, { id: 'b', text: 'わ', romaji: 'wa' }, { id: 'c', text: 'に', romaji: 'ni' }, { id: 'd', text: 'ち', romaji: 'chi' }] }]
        }
    ],
    2: [
        {
            id: 'f2-1', japanese: 'さようなら！',
            english: 'Goodbye!',
            romaji: 'Sayounara!',
            literal: 'sa-yo-u-na-ra',
            emoji: '👋',
            parts: ['_', 'ようなら'],
            blanks: [{ position: 0, answer: 'さ', choices: [{ id: 'a', text: 'さ', romaji: 'sa' }, { id: 'b', text: 'な', romaji: 'na' }, { id: 'c', text: 'よ', romaji: 'yo' }, { id: 'd', text: 'う', romaji: 'u' }] }]
        },
        {
            id: 'f2-2', japanese: 'さようなら！',
            english: 'Goodbye! — fill in the 2nd character',
            romaji: 'Sayounara!',
            literal: 'sa-yo-u-na-ra',
            emoji: '👋',
            parts: ['さ', '_', 'うなら'],
            blanks: [{ position: 1, answer: 'よ', choices: [{ id: 'a', text: 'よ', romaji: 'yo' }, { id: 'b', text: 'さ', romaji: 'sa' }, { id: 'c', text: 'ら', romaji: 'ra' }, { id: 'd', text: 'な', romaji: 'na' }] }]
        },
        {
            id: 'f2-3', japanese: 'さようなら！',
            english: 'Goodbye! — complete the greeting',
            romaji: 'Sayounara!',
            literal: 'sa-yo-u-na-ra',
            emoji: '👋',
            parts: ['さよう', '_', 'ら'],
            blanks: [{ position: 1, answer: 'な', choices: [{ id: 'a', text: 'な', romaji: 'na' }, { id: 'b', text: 'う', romaji: 'u' }, { id: 'c', text: 'よ', romaji: 'yo' }, { id: 'd', text: 'さ', romaji: 'sa' }] }]
        }
    ],
    3: [
        {
            id: 'f3-1', japanese: 'おはようございます！',
            english: 'Good morning! — first character',
            romaji: 'Ohayou gozaimasu!',
            literal: 'o-ha-yo-u go-za-i-ma-su',
            emoji: '🌅',
            parts: ['_', 'はようございます'],
            blanks: [{ position: 0, answer: 'お', choices: [{ id: 'a', text: 'お', romaji: 'o' }, { id: 'b', text: 'は', romaji: 'ha' }, { id: 'c', text: 'ご', romaji: 'go' }, { id: 'd', text: 'よ', romaji: 'yo' }] }]
        },
        {
            id: 'f3-2', japanese: 'おはようございます！',
            english: 'Good morning! — fill the 2nd character',
            romaji: 'Ohayou gozaimasu!',
            literal: 'o-ha-yo-u go-za-i-ma-su',
            emoji: '🌅',
            parts: ['お', '_', 'ようございます'],
            blanks: [{ position: 1, answer: 'は', choices: [{ id: 'a', text: 'は', romaji: 'ha' }, { id: 'b', text: 'お', romaji: 'o' }, { id: 'c', text: 'よ', romaji: 'yo' }, { id: 'd', text: 'が', romaji: 'ga' }] }]
        },
        {
            id: 'f3-3', japanese: 'おはよう！',
            english: 'Good morning! (casual) — complete it',
            romaji: 'Ohayou!',
            literal: 'o-ha-yo-u',
            emoji: '🌅',
            parts: ['おは', '_', 'う'],
            blanks: [{ position: 1, answer: 'よ', choices: [{ id: 'a', text: 'よ', romaji: 'yo' }, { id: 'b', text: 'は', romaji: 'ha' }, { id: 'c', text: 'お', romaji: 'o' }, { id: 'd', text: 'ご', romaji: 'go' }] }]
        }
    ],
    4: [
        {
            id: 'f4-1', japanese: 'ありがとうございます！',
            english: 'Thank you very much! — first character',
            romaji: 'Arigatou gozaimasu!',
            literal: 'a-ri-ga-to-u go-za-i-ma-su',
            emoji: '🙏',
            parts: ['_', 'りがとうございます'],
            blanks: [{ position: 0, answer: 'あ', choices: [{ id: 'a', text: 'あ', romaji: 'a' }, { id: 'b', text: 'り', romaji: 'ri' }, { id: 'c', text: 'と', romaji: 'to' }, { id: 'd', text: 'が', romaji: 'ga' }] }]
        },
        {
            id: 'f4-2', japanese: 'ありがとうございます！',
            english: 'Thank you very much! — 3rd character',
            romaji: 'Arigatou gozaimasu!',
            literal: 'a-ri-ga-to-u go-za-i-ma-su',
            emoji: '🙏',
            parts: ['あり', '_', 'とうございます'],
            blanks: [{ position: 1, answer: 'が', choices: [{ id: 'a', text: 'が', romaji: 'ga' }, { id: 'b', text: 'あ', romaji: 'a' }, { id: 'c', text: 'り', romaji: 'ri' }, { id: 'd', text: 'て', romaji: 'te' }] }]
        },
        {
            id: 'f4-3', japanese: 'ありがとう！',
            english: 'Thank you! (casual) — complete it',
            romaji: 'Arigatou!',
            literal: 'a-ri-ga-to-u',
            emoji: '🙏',
            parts: ['ありが', '_', 'う'],
            blanks: [{ position: 1, answer: 'と', choices: [{ id: 'a', text: 'と', romaji: 'to' }, { id: 'b', text: 'が', romaji: 'ga' }, { id: 'c', text: 'あ', romaji: 'a' }, { id: 'd', text: 'り', romaji: 'ri' }] }]
        }
    ],
    5: [
        {
            id: 'f5-1', japanese: 'おげんきですか？',
            english: 'How are you? — first character',
            romaji: 'O-genki desu ka?',
            literal: 'o-ge-n-ki de-su-ka',
            emoji: '❓',
            parts: ['_', 'げんきですか'],
            blanks: [{ position: 0, answer: 'お', choices: [{ id: 'a', text: 'お', romaji: 'o' }, { id: 'b', text: 'で', romaji: 'de' }, { id: 'c', text: 'す', romaji: 'su' }, { id: 'd', text: 'か', romaji: 'ka' }] }]
        },
        {
            id: 'f5-2', japanese: 'おげんきですか？',
            english: 'How are you? — the question marker',
            romaji: 'O-genki desu ka?',
            literal: 'o-ge-n-ki de-su-ka',
            emoji: '❓',
            parts: ['おげんきです', '_'],
            blanks: [{ position: 1, answer: 'か', choices: [{ id: 'a', text: 'か', romaji: 'ka' }, { id: 'b', text: 'す', romaji: 'su' }, { id: 'c', text: 'で', romaji: 'de' }, { id: 'd', text: 'お', romaji: 'o' }] }]
        },
        {
            id: 'f5-3', japanese: 'はい、げんきです。',
            english: 'Yes, I am fine.',
            romaji: 'Hai, genki desu.',
            literal: 'yes, fine is.',
            emoji: '💪',
            parts: ['はい、げんき', '_', 'す'],
            blanks: [{ position: 1, answer: 'で', choices: [{ id: 'a', text: 'で', romaji: 'de' }, { id: 'b', text: 'す', romaji: 'su' }, { id: 'c', text: 'は', romaji: 'wa' }, { id: 'd', text: 'か', romaji: 'ka' }] }]
        }
    ],
    6: [
        {
            id: 'f6-1', japanese: 'はじめまして！',
            english: 'Nice to meet you! — first characters',
            romaji: 'Hajimemashite!',
            literal: 'ha-ji-me-ma-shi-te',
            emoji: '🤝',
            parts: ['_', 'じめまして'],
            blanks: [{ position: 0, answer: 'は', choices: [{ id: 'a', text: 'は', romaji: 'ha' }, { id: 'b', text: 'じ', romaji: 'ji' }, { id: 'c', text: 'め', romaji: 'me' }, { id: 'd', text: 'し', romaji: 'shi' }] }]
        },
        {
            id: 'f6-2', japanese: 'はじめまして！',
            english: 'Nice to meet you! — middle of the word',
            romaji: 'Hajimemashite!',
            literal: 'ha-ji-me-ma-shi-te',
            emoji: '🤝',
            parts: ['はじ', '_', 'まして'],
            blanks: [{ position: 1, answer: 'め', choices: [{ id: 'a', text: 'め', romaji: 'me' }, { id: 'b', text: 'は', romaji: 'ha' }, { id: 'c', text: 'し', romaji: 'shi' }, { id: 'd', text: 'ま', romaji: 'ma' }] }]
        },
        {
            id: 'f6-3', japanese: 'はじめまして！',
            english: 'Nice to meet you! — last sounds',
            romaji: 'Hajimemashite!',
            literal: 'ha-ji-me-ma-shi-te',
            emoji: '🤝',
            parts: ['はじめま', '_', 'て'],
            blanks: [{ position: 1, answer: 'し', choices: [{ id: 'a', text: 'し', romaji: 'shi' }, { id: 'b', text: 'め', romaji: 'me' }, { id: 'c', text: 'ま', romaji: 'ma' }, { id: 'd', text: 'は', romaji: 'ha' }] }]
        }
    ],
    7: [
        {
            id: 'f7-1', japanese: 'よろしくおねがいします！',
            english: 'Please be good to me! — first character',
            romaji: 'Yoroshiku onegai shimasu!',
            literal: 'yo-ro-shi-ku o-ne-ga-i shi-ma-su',
            emoji: '🙇',
            parts: ['_', 'ろしくおねがいします'],
            blanks: [{ position: 0, answer: 'よ', choices: [{ id: 'a', text: 'よ', romaji: 'yo' }, { id: 'b', text: 'お', romaji: 'o' }, { id: 'c', text: 'ね', romaji: 'ne' }, { id: 'd', text: 'し', romaji: 'shi' }] }]
        },
        {
            id: 'f7-2', japanese: 'どうぞよろしく！',
            english: 'Please treat me well! — first two',
            romaji: 'Douzo yoroshiku!',
            literal: 'please, treat-me-well',
            emoji: '🙇',
            parts: ['_', 'うぞよろしく'],
            blanks: [{ position: 0, answer: 'ど', choices: [{ id: 'a', text: 'ど', romaji: 'do' }, { id: 'b', text: 'よ', romaji: 'yo' }, { id: 'c', text: 'ぞ', romaji: 'zo' }, { id: 'd', text: 'ろ', romaji: 'ro' }] }]
        },
        {
            id: 'f7-3', japanese: 'こちらこそよろしく！',
            english: 'Likewise, nice to meet you!',
            romaji: 'Kochira koso yoroshiku!',
            literal: 'this-side (emphasis) treat-me-well',
            emoji: '🙇',
            parts: ['こちらこそ', '_', 'ろしく'],
            blanks: [{ position: 1, answer: 'よ', choices: [{ id: 'a', text: 'よ', romaji: 'yo' }, { id: 'b', text: 'ど', romaji: 'do' }, { id: 'c', text: 'そ', romaji: 'so' }, { id: 'd', text: 'ろ', romaji: 'ro' }] }]
        }
    ],
    8: [
        {
            id: 'f8-1', japanese: 'ごめんなさい！',
            english: 'I am sorry! — first character',
            romaji: 'Gomennasai!',
            literal: 'go-me-n-na-sa-i',
            emoji: '😔',
            parts: ['_', 'めんなさい'],
            blanks: [{ position: 0, answer: 'ご', choices: [{ id: 'a', text: 'ご', romaji: 'go' }, { id: 'b', text: 'め', romaji: 'me' }, { id: 'c', text: 'な', romaji: 'na' }, { id: 'd', text: 'さ', romaji: 'sa' }] }]
        },
        {
            id: 'f8-2', japanese: 'ごめんなさい！',
            english: 'I am sorry! — fill the nasal sound',
            romaji: 'Gomennasai!',
            literal: 'go-me-n-na-sa-i',
            emoji: '😔',
            parts: ['ごめ', '_', 'なさい'],
            blanks: [{ position: 1, answer: 'ん', choices: [{ id: 'a', text: 'ん', romaji: 'n' }, { id: 'b', text: 'め', romaji: 'me' }, { id: 'c', text: 'な', romaji: 'na' }, { id: 'd', text: 'ご', romaji: 'go' }] }]
        },
        {
            id: 'f8-3', japanese: 'すみません！',
            english: 'Excuse me / I am sorry! — complete it',
            romaji: 'Sumimasen!',
            literal: 'su-mi-ma-se-n',
            emoji: '🙇',
            parts: ['すみま', '_', 'ん'],
            blanks: [{ position: 1, answer: 'せ', choices: [{ id: 'a', text: 'せ', romaji: 'se' }, { id: 'b', text: 'す', romaji: 'su' }, { id: 'c', text: 'ま', romaji: 'ma' }, { id: 'd', text: 'み', romaji: 'mi' }] }]
        }
    ],
    9: [
        {
            id: 'f9-1', japanese: 'いただきます！',
            english: 'I humbly receive! (before eating)',
            romaji: 'Itadakimasu!',
            literal: 'i-ta-da-ki-ma-su',
            emoji: '🍱',
            parts: ['_', 'ただきます'],
            blanks: [{ position: 0, answer: 'い', choices: [{ id: 'a', text: 'い', romaji: 'i' }, { id: 'b', text: 'た', romaji: 'ta' }, { id: 'c', text: 'だ', romaji: 'da' }, { id: 'd', text: 'き', romaji: 'ki' }] }]
        },
        {
            id: 'f9-2', japanese: 'いただきます！',
            english: 'I humbly receive! — fill 3rd character',
            romaji: 'Itadakimasu!',
            literal: 'i-ta-da-ki-ma-su',
            emoji: '🍱',
            parts: ['いた', '_', 'きます'],
            blanks: [{ position: 1, answer: 'だ', choices: [{ id: 'a', text: 'だ', romaji: 'da' }, { id: 'b', text: 'い', romaji: 'i' }, { id: 'c', text: 'た', romaji: 'ta' }, { id: 'd', text: 'き', romaji: 'ki' }] }]
        },
        {
            id: 'f9-3', japanese: 'ごちそうさまでした！',
            english: 'Thank you for the meal! (after eating)',
            romaji: 'Gochisousama deshita!',
            literal: 'go-chi-so-u-sa-ma de-shi-ta',
            emoji: '🍽️',
            parts: ['_', 'ちそうさまでした'],
            blanks: [{ position: 0, answer: 'ご', choices: [{ id: 'a', text: 'ご', romaji: 'go' }, { id: 'b', text: 'ち', romaji: 'chi' }, { id: 'c', text: 'そ', romaji: 'so' }, { id: 'd', text: 'さ', romaji: 'sa' }] }]
        }
    ],
    10: [
        {
            id: 'f10-1', japanese: 'はい！',
            english: 'Yes! — the word for yes',
            romaji: 'Hai!',
            literal: 'ha-i',
            emoji: '👍',
            parts: ['_', 'い'],
            blanks: [{ position: 0, answer: 'は', choices: [{ id: 'a', text: 'は', romaji: 'ha' }, { id: 'b', text: 'い', romaji: 'i' }, { id: 'c', text: 'え', romaji: 'e' }, { id: 'd', text: 'お', romaji: 'o' }] }]
        },
        {
            id: 'f10-2', japanese: 'いいえ！',
            english: 'No! — the word for no',
            romaji: 'Iie!',
            literal: 'i-i-e',
            emoji: '❌',
            parts: ['い', '_', 'え'],
            blanks: [{ position: 1, answer: 'い', choices: [{ id: 'a', text: 'い', romaji: 'i' }, { id: 'b', text: 'え', romaji: 'e' }, { id: 'c', text: 'は', romaji: 'ha' }, { id: 'd', text: 'お', romaji: 'o' }] }]
        },
        {
            id: 'f10-3', japanese: 'わたしもそうです。',
            english: 'Me too! / I am the same.',
            romaji: 'Watashi mo sou desu.',
            literal: 'I too same is.',
            emoji: '🧍',
            parts: ['わたし', '_', 'そうです'],
            blanks: [{ position: 1, answer: 'も', choices: [{ id: 'a', text: 'も', romaji: 'mo' }, { id: 'b', text: 'は', romaji: 'wa' }, { id: 'c', text: 'が', romaji: 'ga' }, { id: 'd', text: 'を', romaji: 'wo' }] }]
        }
    ],
    11: [
        {
            id: 'l11-s1', english: 'Please take your time.', japanese: 'ゆっくりしてください。',
            emoji: '🐌',
            romaji: 'yukkuri shite kudasai.',
            literal: 'slowly doing please.',
            words: [{ id: 'w1', text: 'ゆっくり', meaning: 'Slowly', romaji: 'yukkuri' }, { id: 'w2', text: 'して', meaning: 'Do', romaji: 'shite' }, { id: 'w3', text: 'ください', meaning: 'Please', romaji: 'kudasai' }],
            solution: ['ゆっくり', 'して', 'ください']
        },
        {
            id: 'l11-s2', english: 'Please make yourself comfortable.', japanese: 'らくにしてください。',
            emoji: '🛋️',
            romaji: 'raku ni shite kudasai.',
            literal: 'easy in doing please.',
            words: [{ id: 'w1', text: 'らく', meaning: 'Comfort', romaji: 'raku' }, { id: 'w2', text: 'に', meaning: 'In/At', romaji: 'ni' }, { id: 'w3', text: 'して', meaning: 'Do', romaji: 'shite' }, { id: 'w4', text: 'ください', meaning: 'Please', romaji: 'kudasai' }],
            solution: ['らく', 'に', 'して', 'ください']
        },
        {
            id: 'l11-s3', english: 'That is right, isn\'t it!', japanese: 'そうですね！',
            emoji: '💭',
            romaji: 'sou desu ne!',
            literal: 'so is (agreement)!',
            words: [{ id: 'w1', text: 'そう', meaning: 'So', romaji: 'sou' }, { id: 'w2', text: 'です', meaning: 'Is', romaji: 'desu' }, { id: 'w3', text: 'ね', meaning: 'Right?', romaji: 'ne' }],
            solution: ['そう', 'です', 'ね']
        }
    ],
    12: [
        {
            id: 'l12-s1', english: 'Where is the room?', japanese: 'へやはどこですか？',
            emoji: '🚪',
            romaji: 'heya wa doko desu ka?',
            literal: 'room (topic) where is?',
            words: [{ id: 'w1', text: 'へや', meaning: 'Room', romaji: 'heya' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'どこ', meaning: 'Where', romaji: 'doko' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }, { id: 'w5', text: 'か', meaning: 'Question', romaji: 'ka' }],
            solution: ['へや', 'は', 'どこ', 'です', 'か']
        },
        {
            id: 'l12-s2', english: 'Please go ahead!', japanese: 'どうぞ！',
            emoji: '🙇',
            romaji: 'douzo!',
            literal: 'please!',
            words: [{ id: 'w1', text: 'どうぞ', meaning: 'Here you go / Please', romaji: 'douzo' }],
            solution: ['どうぞ']
        },
        {
            id: 'l12-s3', english: 'It is my name.', japanese: 'わたしのなまえです。',
            emoji: '📛',
            romaji: 'watashi no namae desu.',
            literal: 'I (possessive) name is.',
            words: [{ id: 'w1', text: 'わたし', meaning: 'I/Me', romaji: 'watashi' }, { id: 'w2', text: 'の', meaning: 'Possessive', romaji: 'no' }, { id: 'w3', text: 'なまえ', meaning: 'Name', romaji: 'namae' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['わたし', 'の', 'なまえ', 'です']
        }
    ],
    13: [
        {
            id: 'l13-s1', english: 'Who is that person?', japanese: 'あのひとはだれですか？',
            emoji: '👤',
            romaji: 'ano hito wa dare desu ka?',
            literal: 'that person (topic) who is?',
            words: [{ id: 'w1', text: 'あの', meaning: 'That', romaji: 'ano' }, { id: 'w2', text: 'ひと', meaning: 'Person', romaji: 'hito' }, { id: 'w3', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w4', text: 'だれ', meaning: 'Who', romaji: 'dare' }, { id: 'w5', text: 'ですか', meaning: 'Is it?', romaji: 'desu ka' }],
            solution: ['あの', 'ひと', 'は', 'だれ', 'ですか']
        },
        {
            id: 'l13-s2', english: 'The water is lukewarm.', japanese: 'みずがぬるいです。',
            emoji: '💧',
            romaji: 'mizu ga nurui desu.',
            literal: 'water (subject) lukewarm is.',
            words: [{ id: 'w1', text: 'みず', meaning: 'Water', romaji: 'mizu' }, { id: 'w2', text: 'が', meaning: 'Subject', romaji: 'ga' }, { id: 'w3', text: 'ぬるい', meaning: 'Lukewarm', romaji: 'nurui' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['みず', 'が', 'ぬるい', 'です']
        },
        {
            id: 'l13-s3', english: 'It is impossible for me.', japanese: 'わたしにはむりです。',
            emoji: '🚫',
            romaji: 'watashi ni wa muri desu.',
            literal: 'me for (topic) impossible is.',
            words: [{ id: 'w1', text: 'わたし', meaning: 'Me', romaji: 'watashi' }, { id: 'w2', text: 'には', meaning: 'For (topic)', romaji: 'ni wa' }, { id: 'w3', text: 'むり', meaning: 'Impossible', romaji: 'muri' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['わたし', 'には', 'むり', 'です']
        }
    ],
    14: [
        {
            id: 'l14-s1', english: 'Please listen to the music.', japanese: 'おんがくをきいてください。',
            emoji: '🎧',
            romaji: 'ongaku o kiite kudasai.',
            literal: 'music (object) listening please.',
            words: [{ id: 'w1', text: 'おんがく', meaning: 'Music', romaji: 'ongaku' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: 'きいて', meaning: 'Listen', romaji: 'kiite' }, { id: 'w4', text: 'ください', meaning: 'Please', romaji: 'kudasai' }],
            solution: ['おんがく', 'を', 'きいて', 'ください']
        },
        {
            id: 'l14-s2', english: 'I am very happy!', japanese: 'わたしはとてもうれしいです！',
            emoji: '😄',
            romaji: 'watashi wa totemo ureshii desu!',
            literal: 'I (topic) very happy am!',
            words: [{ id: 'w1', text: 'わたし', meaning: 'I', romaji: 'watashi' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'とても', meaning: 'Very', romaji: 'totemo' }, { id: 'w4', text: 'うれしい', meaning: 'Happy', romaji: 'ureshii' }, { id: 'w5', text: 'です', meaning: 'Am', romaji: 'desu' }],
            solution: ['わたし', 'は', 'とても', 'うれしい', 'です']
        },
        {
            id: 'l14-s3', english: 'Where is this place?', japanese: 'ここはどこですか？',
            emoji: '📍',
            romaji: 'koko wa doko desu ka?',
            literal: 'here (topic) where is?',
            words: [{ id: 'w1', text: 'ここ', meaning: 'Here', romaji: 'koko' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'どこ', meaning: 'Where', romaji: 'doko' }, { id: 'w4', text: 'ですか', meaning: 'Is it?', romaji: 'desu ka' }],
            solution: ['ここ', 'は', 'どこ', 'ですか']
        }
    ],
    15: [
        {
            id: 'l15-s1', english: 'I am starving.', japanese: 'おなかがぺこぺこです。',
            emoji: '🤤',
            romaji: 'onaka ga pekopeko desu.',
            literal: 'stomach (subject) starving is.',
            words: [{ id: 'w1', text: 'おなか', meaning: 'Stomach', romaji: 'onaka' }, { id: 'w2', text: 'が', meaning: 'Subject', romaji: 'ga' }, { id: 'w3', text: 'ぺこぺこ', meaning: 'Starving', romaji: 'pekopeko' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['おなか', 'が', 'ぺこぺこ', 'です']
        },
        {
            id: 'l15-s2', english: 'I like ice cream.', japanese: 'アイスがすきです。',
            emoji: '🍦',
            romaji: 'aisu ga suki desu.',
            literal: 'ice-cream (subject) like is.',
            words: [{ id: 'w1', text: 'アイス', meaning: 'Ice cream', romaji: 'aisu' }, { id: 'w2', text: 'が', meaning: 'Subject', romaji: 'ga' }, { id: 'w3', text: 'すき', meaning: 'Like', romaji: 'suki' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['アイス', 'が', 'すき', 'です']
        },
        {
            id: 'l15-s3', english: 'Where is the toilet?', japanese: 'トイレはどこですか？',
            emoji: '🚻',
            romaji: 'toire wa doko desu ka?',
            literal: 'toilet (topic) where is?',
            words: [{ id: 'w1', text: 'トイレ', meaning: 'Toilet', romaji: 'toire' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'どこ', meaning: 'Where', romaji: 'doko' }, { id: 'w4', text: 'ですか', meaning: 'Is it?', romaji: 'desu ka' }],
            solution: ['トイレ', 'は', 'どこ', 'ですか']
        }
    ],
    16: [
        {
            id: 'l16-s1', english: 'Please give me an orange.', japanese: 'オレンジをください。',
            emoji: '🍊',
            romaji: 'orenji o kudasai.',
            literal: 'orange (object) please.',
            words: [{ id: 'w1', text: 'オレンジ', meaning: 'Orange', romaji: 'orenji' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: 'ください', meaning: 'Please', romaji: 'kudasai' }],
            solution: ['オレンジ', 'を', 'ください']
        },
        {
            id: 'l16-s2', english: 'They are a person from Spain.', japanese: 'スペインのひとです。',
            emoji: '🇪🇸',
            romaji: 'supein no hito desu.',
            literal: 'Spain \'s person is.',
            words: [{ id: 'w1', text: 'スペイン', meaning: 'Spain', romaji: 'supein' }, { id: 'w2', text: 'の', meaning: 'Possessive', romaji: 'no' }, { id: 'w3', text: 'ひと', meaning: 'Person', romaji: 'hito' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['スペイン', 'の', 'ひと', 'です']
        },
        {
            id: 'l16-s3', english: 'The elevator is here.', japanese: 'エレベーターはここです。',
            emoji: '🛗',
            romaji: 'erebeetaa wa koko desu.',
            literal: 'elevator (topic) here is.',
            words: [{ id: 'w1', text: 'エレベーター', meaning: 'Elevator', romaji: 'erebeetaa' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'ここ', meaning: 'Here', romaji: 'koko' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['エレベーター', 'は', 'ここ', 'です']
        }
    ]
        },
        {
            id: 'f16-2', japanese: '一緒に遊びましょう。', english: "Let's play together.",
            romaji: 'issho ni asobimashou.',
            literal: 'together let-play.',
            emoji: '👯',
            parts: ['一緒に', '_'],
            blanks: [
                {
                    position: 1, answer: '遊びましょう', choices: [{ id: 'a', text: '遊びましょう', romaji: 'asobimashou', meaning: 'let play' }, { id: 'b', text: '帰りましょう', romaji: 'kaerimashou', meaning: 'let return' }]
                }
            ]
        },
        {
            id: 'f16-3', japanese: '富士山に登ります。', english: 'I climb Mt. Fuji.',
            romaji: 'fujisan ni noborimasu.',
            literal: 'Mt. Fuji in climb.',
            emoji: '⛰️',
            parts: ['_', 'に登ります'],
            blanks: [
                {
                    position: 0, answer: '富士山', choices: [{ id: 'a', text: '富士山', romaji: 'fujisan', meaning: 'Mt. Fuji' }, { id: 'b', text: '高尾山', romaji: 'takaosan', meaning: 'Mt. Takao' }]
                }
            ]
        }
    ]
};

// ── Helper functions for bank retrieval ──────────────────────────────────────

export const getFillBlanks = (n: number): FillBlankProblem[] => {
    // If we're looking for a lesson that might be procedural (World 2),
    // and allLessons is already populated, try to get it from there.
    if (allLessons.length >= n) {
        const lesson = allLessons[n - 1];
        if (lesson && lesson.fillBlanks && lesson.fillBlanks.length > 0) {
            return lesson.fillBlanks;
        }
    }
    const bank = fillBlankBanks[n] || fillBlankBanks[1];
    return bank.map(p => ({ ...p, id: `f${n}-${p.id.split('-')[1]}` }));
};

export const getSentences = (n: number): SentenceProblem[] => {
    if (allLessons.length >= n) {
        const lesson = allLessons[n - 1];
        if (lesson && lesson.sentences && lesson.sentences.length > 0) {
            return lesson.sentences;
        }
    }
    const bank = sentenceBanks[n] || sentenceBanks[1];
    return bank.map(p => ({ ...p, id: `${n}-${p.id}` }));
};

const sentenceBanks: Record<number, SentenceProblem[]> = {
    1: [
        {
            id: 'l1-s1',
            english: 'Hello! Good afternoon!',
            japanese: 'こんにちは！',
            emoji: '👋',
            romaji: 'Konnichiwa!',
            literal: 'ko-n-ni-chi-wa',
            words: [
                { id: 'w1', text: 'こ', meaning: 'Ko', romaji: 'ko' },
                { id: 'w2', text: 'ん', meaning: 'N', romaji: 'n' },
                { id: 'w3', text: 'に', meaning: 'Ni', romaji: 'ni' },
                { id: 'w4', text: 'ち', meaning: 'Chi', romaji: 'chi' },
                { id: 'w5', text: 'は', meaning: 'Wa (written は)', romaji: 'wa' }
            ],
            solution: ['こ', 'ん', 'に', 'ち', 'は']
        },
        {
            id: 'l1-s2',
            english: 'How are you?',
            japanese: 'おげんきですか？',
            emoji: '❓',
            romaji: 'O-genki desu ka?',
            literal: 'honorable-fine is question?',
            words: [
                { id: 'w1', text: 'おげんき', meaning: 'Fine/Healthy', romaji: 'o-genki' },
                { id: 'w2', text: 'です', meaning: 'Is', romaji: 'desu' },
                { id: 'w3', text: 'か', meaning: '? (question)', romaji: 'ka' }
            ],
            solution: ['おげんき', 'です', 'か']
        },
        {
            id: 'l1-s3',
            english: 'Yes, I am fine!',
            japanese: 'はい、げんきです！',
            emoji: '💪',
            romaji: 'Hai, genki desu!',
            literal: 'yes, fine is!',
            words: [
                { id: 'w1', text: 'はい', meaning: 'Yes', romaji: 'hai' },
                { id: 'w2', text: 'げんき', meaning: 'Fine/Healthy', romaji: 'genki' },
                { id: 'w3', text: 'です', meaning: 'Is', romaji: 'desu' }
            ],
            solution: ['はい', 'げんき', 'です']
        }
    ],
    2: [
        {
            id: 'l2-s1',
            english: 'Goodbye!',
            japanese: 'さようなら！',
            emoji: '👋',
            romaji: 'Sayounara!',
            literal: 'sa-yo-u-na-ra',
            words: [
                { id: 'w1', text: 'さ', meaning: 'Sa', romaji: 'sa' },
                { id: 'w2', text: 'よ', meaning: 'Yo', romaji: 'yo' },
                { id: 'w3', text: 'う', meaning: 'U', romaji: 'u' },
                { id: 'w4', text: 'な', meaning: 'Na', romaji: 'na' },
                { id: 'w5', text: 'ら', meaning: 'Ra', romaji: 'ra' }
            ],
            solution: ['さ', 'よ', 'う', 'な', 'ら']
        },
        {
            id: 'l2-s2',
            english: 'See you later!',
            japanese: 'またね！',
            emoji: '👋',
            romaji: 'Mata ne!',
            literal: 'again (friendly particle)!',
            words: [
                { id: 'w1', text: 'また', meaning: 'Again / See you', romaji: 'mata' },
                { id: 'w2', text: 'ね', meaning: 'Friendly particle', romaji: 'ne' }
            ],
            solution: ['また', 'ね']
        },
        {
            id: 'l2-s3',
            english: 'See you tomorrow!',
            japanese: 'またあした！',
            emoji: '📅',
            romaji: 'Mata ashita!',
            literal: 'again tomorrow!',
            words: [
                { id: 'w1', text: 'また', meaning: 'Again', romaji: 'mata' },
                { id: 'w2', text: 'あした', meaning: 'Tomorrow', romaji: 'ashita' }
            ],
            solution: ['また', 'あした']
        }
    ],
    3: [
        {
            id: 'l3-s1',
            english: 'Good morning!',
            japanese: 'おはようございます！',
            emoji: '🌅',
            romaji: 'Ohayou gozaimasu!',
            literal: 'o-ha-yo-u go-za-i-ma-su',
            words: [
                { id: 'w1', text: 'おはよう', meaning: 'Good morning', romaji: 'ohayou' },
                { id: 'w2', text: 'ございます', meaning: '(polite ending)', romaji: 'gozaimasu' }
            ],
            solution: ['おはよう', 'ございます']
        },
        {
            id: 'l3-s2',
            english: 'Good morning! (casual between friends)',
            japanese: 'おはよう！',
            emoji: '🌅',
            romaji: 'Ohayou!',
            literal: 'good-morning (casual)',
            words: [
                { id: 'w1', text: 'お', meaning: 'O (honorific)', romaji: 'o' },
                { id: 'w2', text: 'は', meaning: 'Ha', romaji: 'ha' },
                { id: 'w3', text: 'よ', meaning: 'Yo', romaji: 'yo' },
                { id: 'w4', text: 'う', meaning: 'U', romaji: 'u' }
            ],
            solution: ['お', 'は', 'よ', 'う']
        },
        {
            id: 'l3-s3',
            english: 'Good evening!',
            japanese: 'こんばんは！',
            emoji: '🌆',
            romaji: 'Konbanwa!',
            literal: 'this-evening (topic)',
            words: [
                { id: 'w1', text: 'こんばん', meaning: 'This evening', romaji: 'konban' },
                { id: 'w2', text: 'は', meaning: 'Wa (topic marker)', romaji: 'wa' }
            ],
            solution: ['こんばん', 'は']
        }
    ],
    4: [
        {
            id: 'l4-s1',
            english: 'Thank you very much!',
            japanese: 'ありがとうございます！',
            emoji: '🙏',
            romaji: 'Arigatou gozaimasu!',
            literal: 'a-ri-ga-to-u go-za-i-ma-su',
            words: [
                { id: 'w1', text: 'ありがとう', meaning: 'Thank you', romaji: 'arigatou' },
                { id: 'w2', text: 'ございます', meaning: '(polite ending)', romaji: 'gozaimasu' }
            ],
            solution: ['ありがとう', 'ございます']
        },
        {
            id: 'l4-s2',
            english: 'Thank you! (casual)',
            japanese: 'ありがとう！',
            emoji: '🙏',
            romaji: 'Arigatou!',
            literal: 'a-ri-ga-to-u (casual)',
            words: [
                { id: 'w1', text: 'あり', meaning: 'Ari', romaji: 'ari' },
                { id: 'w2', text: 'が', meaning: 'Ga', romaji: 'ga' },
                { id: 'w3', text: 'とう', meaning: 'Tou', romaji: 'tou' }
            ],
            solution: ['あり', 'が', 'とう']
        },
        {
            id: 'l4-s3',
            english: 'You are welcome! / Not at all!',
            japanese: 'どういたしまして！',
            emoji: '😊',
            romaji: 'Dou itashimashite!',
            literal: 'how have-done (humble)!',
            words: [
                { id: 'w1', text: 'どう', meaning: 'How', romaji: 'dou' },
                { id: 'w2', text: 'いたし', meaning: 'Did (humble)', romaji: 'itashi' },
                { id: 'w3', text: 'まして', meaning: '(polite ending)', romaji: 'mashite' }
            ],
            solution: ['どう', 'いたし', 'まして']
        }
    ],
    5: [
        {
            id: 'l5-s1',
            english: 'How are you? Are you well?',
            japanese: 'おげんきですか？',
            emoji: '❓',
            romaji: 'O-genki desu ka?',
            literal: 'honorable-genki is question?',
            words: [
                { id: 'w1', text: 'お', meaning: 'O (honorific)', romaji: 'o' },
                { id: 'w2', text: 'げんき', meaning: 'Well/Healthy', romaji: 'genki' },
                { id: 'w3', text: 'です', meaning: 'Is', romaji: 'desu' },
                { id: 'w4', text: 'か', meaning: '? (question)', romaji: 'ka' }
            ],
            solution: ['お', 'げんき', 'です', 'か']
        },
        {
            id: 'l5-s2',
            english: 'Yes, I am fine, thank you!',
            japanese: 'はい、げんきです。ありがとう！',
            emoji: '🙏',
            romaji: 'Hai, genki desu. Arigatou!',
            literal: 'yes, fine is. thank-you!',
            words: [
                { id: 'w1', text: 'はい', meaning: 'Yes', romaji: 'hai' },
                { id: 'w2', text: 'げんきです', meaning: 'I am fine', romaji: 'genki desu' },
                { id: 'w3', text: 'ありがとう', meaning: 'Thank you', romaji: 'arigatou' }
            ],
            solution: ['はい', 'げんきです', 'ありがとう']
        },
        {
            id: 'l5-s3',
            english: 'And you? (response to how are you)',
            japanese: 'あなたは？',
            emoji: '👉',
            romaji: 'Anata wa?',
            literal: 'you (topic)?',
            words: [
                { id: 'w1', text: 'あなた', meaning: 'You', romaji: 'anata' },
                { id: 'w2', text: 'は', meaning: 'Topic marker / And?', romaji: 'wa' }
            ],
            solution: ['あなた', 'は']
        }
    ],
    6: [
        {
            id: 'l6-s1', english: 'Nice to meet you! (First time)', japanese: 'はじめまして！',
            emoji: '🤝',
            romaji: 'Hajimemashite!',
            literal: 'for the first time!',
            words: [{ id: 'w1', text: 'はじめ', meaning: 'Beginning/First time', romaji: 'hajime' }, { id: 'w2', text: 'まして', meaning: 'polite ending', romaji: 'mashite' }],
            solution: ['はじめ', 'まして']
        },
        {
            id: 'l6-s2', english: 'I am Ken.', japanese: 'わたしはケンです。',
            emoji: '🧍',
            romaji: 'Watashi wa Ken desu.',
            literal: 'I (topic) Ken am.',
            words: [{ id: 'w1', text: 'わたし', meaning: 'I/Me', romaji: 'watashi' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: 'ケン', meaning: 'Ken', romaji: 'ken' }, { id: 'w4', text: 'です', meaning: 'Am/Is', romaji: 'desu' }],
            solution: ['わたし', 'は', 'ケン', 'です']
        },
        {
            id: 'l6-s3', english: 'Nice to meet you.', japanese: 'はじめまして、わたしです。',
            emoji: '👋',
            romaji: 'Hajimemashite, watashi desu.',
            literal: 'first time, I am.',
            words: [{ id: 'w1', text: 'はじめまして', meaning: 'Nice to meet you', romaji: 'hajimemashite' }, { id: 'w2', text: '、', meaning: 'Comma', romaji: ',' }, { id: 'w3', text: 'わたし', meaning: 'I', romaji: 'watashi' }, { id: 'w4', text: 'です', meaning: 'am', romaji: 'desu' }],
            solution: ['はじめまして', '、', 'わたし', 'です']
        }
    ],
    7: [
        {
            id: 'l7-s1', english: 'Please treat me well!', japanese: 'どうぞよろしく！',
            emoji: '🙇',
            romaji: 'Douzo yoroshiku!',
            literal: 'please favorably!',
            words: [{ id: 'w1', text: 'どうぞ', meaning: 'Please (go ahead)', romaji: 'douzo' }, { id: 'w2', text: 'よろしく', meaning: 'favorably', romaji: 'yoroshiku' }],
            solution: ['どうぞ', 'よろしく']
        },
        {
            id: 'l7-s2', english: 'Please be good to me. (Polite)', japanese: 'よろしくおねがいします。',
            emoji: '🙏',
            romaji: 'Yoroshiku onegai shimasu.',
            literal: 'favorably request do.',
            words: [{ id: 'w1', text: 'よろしく', meaning: 'Favorably', romaji: 'yoroshiku' }, { id: 'w2', text: 'おねがい', meaning: 'Request', romaji: 'onegai' }, { id: 'w3', text: 'します', meaning: 'Do', romaji: 'shimasu' }],
            solution: ['よろしく', 'おねがい', 'します']
        },
        {
            id: 'l7-s3', english: 'The pleasure is mine!', japanese: 'こちらこそ！',
            emoji: '😊',
            romaji: 'Kochira koso!',
            literal: 'this side (emphasis)!',
            words: [{ id: 'w1', text: 'こちら', meaning: 'This side / Me', romaji: 'kochira' }, { id: 'w2', text: 'こそ', meaning: 'For sure / Emphasis', romaji: 'koso' }],
            solution: ['こちら', 'こそ']
        }
    ],
    8: [
        {
            id: 'l8-s1', english: 'I am sorry!', japanese: 'ごめんなさい！',
            emoji: '😔',
            romaji: 'Gomennasai!',
            literal: 'forgive me!',
            words: [{ id: 'w1', text: 'ごめん', meaning: 'Sorry / Forgive me', romaji: 'gomen' }, { id: 'w2', text: 'なさい', meaning: 'Polite command', romaji: 'nasai' }],
            solution: ['ごめん', 'なさい']
        },
        {
            id: 'l8-s2', english: 'Excuse me!', japanese: 'すみません！',
            emoji: '🙇',
            romaji: 'Sumimasen!',
            literal: 'excuse me!',
            words: [{ id: 'w1', text: 'すみ', meaning: 'Excuse', romaji: 'sumi' }, { id: 'w2', text: 'ません', meaning: 'Me', romaji: 'masen' }],
            solution: ['すみ', 'ません']
        },
        {
            id: 'l8-s3', 'english': 'Are you okay?', japanese: 'だいじょうぶですか？',
            emoji: '❓',
            romaji: 'Daijoubu desu ka?',
            literal: 'fine is question?',
            words: [{ id: 'w1', text: 'だいじょうぶ', meaning: 'Fine/Okay', romaji: 'daijoubu' }, { id: 'w2', text: 'です', meaning: 'Is', romaji: 'desu' }, { id: 'w3', text: 'か', meaning: 'Question marker', romaji: 'ka' }],
            solution: ['だいじょうぶ', 'です', 'か']
        }
    ],
    9: [
        {
            id: 'l9-s1', english: 'I humbly receive! (Before eating)', japanese: 'いただきます！',
            emoji: '🍱',
            romaji: 'Itadakimasu!',
            literal: 'I humbly receive!',
            words: [{ id: 'w1', text: 'いただき', meaning: 'Receive (humble)', romaji: 'itadaki' }, { id: 'w2', text: 'ます', meaning: 'Polite suffix', romaji: 'masu' }],
            solution: ['いただき', 'ます']
        },
        {
            id: 'l9-s2', english: 'Thank you for the meal! (After eating)', japanese: 'ごちそうさまでした！',
            emoji: '🍽️',
            romaji: 'Gochisousama deshita!',
            literal: 'It was a feast!',
            words: [{ id: 'w1', text: 'ごちそうさま', meaning: 'Feast / Thank you for meal', romaji: 'gochisousama' }, { id: 'w2', text: 'でした', meaning: 'Was', romaji: 'deshita' }],
            solution: ['ごちそうさま', 'でした']
        },
        {
            id: 'l9-s3', english: 'I am going to Japan.', japanese: 'わたしは日本へ行きます。',
            emoji: '🇯🇵',
            romaji: 'Watashi wa Nihon e ikimasu.',
            literal: 'I (topic) Japan to go.',
            words: [{ id: 'w1', text: 'わたし', meaning: 'I', romaji: 'watashi' }, { id: 'w2', text: 'は', meaning: 'Topic marker', romaji: 'wa' }, { id: 'w3', text: '日本', meaning: 'Japan', romaji: 'nihon' }, { id: 'w4', text: 'へ', meaning: 'To', romaji: 'e' }, { id: 'w5', text: '行きます', meaning: 'Go', romaji: 'ikimasu' }],
            solution: ['わたし', 'は', '日本', 'へ', '行きます']
        }
    ],
    10: [
        {
            id: 'l10-s1', english: 'Yes, that is correct.', japanese: 'はい、そうです。',
            emoji: '👍',
            romaji: 'Hai, sou desu.',
            literal: 'yes, so is.',
            words: [{ id: 'w1', text: 'はい', meaning: 'Yes', romaji: 'hai' }, { id: 'w2', text: '、', meaning: 'Comma', romaji: ',' }, { id: 'w3', text: 'そう', meaning: 'So / That way', romaji: 'sou' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['はい', '、', 'そう', 'です']
        },
        {
            id: 'l10-s2', english: 'No, it is not.', japanese: 'いいえ、ちがいます。',
            emoji: '❌',
            romaji: 'Iie, chigaimasu.',
            literal: 'no, differs.',
            words: [{ id: 'w1', text: 'いいえ', meaning: 'No', romaji: 'iie' }, { id: 'w2', text: '、', meaning: 'Comma', romaji: ',' }, { id: 'w3', text: 'ちがいます', meaning: 'Differs / Is wrong', romaji: 'chigaimasu' }],
            solution: ['いいえ', '、', 'ちがいます']
        },
        {
            id: 'l10-s3', english: 'I am fine, thank you.', japanese: 'はい、げんきです。',
            emoji: '💪',
            romaji: 'Hai, genki desu.',
            literal: 'yes, fine is.',
            words: [{ id: 'w1', text: 'はい', meaning: 'Yes', romaji: 'hai' }, { id: 'w2', text: '、', meaning: 'Comma', romaji: ',' }, { id: 'w3', text: 'げんき', meaning: 'Fine', romaji: 'genki' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['はい', '、', 'げんき', 'です']
        }
    ],
    11: [
        {
            id: 'l11-s1', english: 'Please open the window.', japanese: '窓を開けてください。',
            emoji: '🪟',
            romaji: 'mado o akete kudasai.',
            literal: 'window (object) opening please.',
            words: [{ id: 'w1', text: '窓', meaning: 'Window', romaji: 'mado' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '開けてください', meaning: 'Please open', romaji: 'akete kudasai' }],
            solution: ['窓', 'を', '開けてください']
        },
        {
            id: 'l11-s2', english: 'I take off my shoes.', japanese: '靴を脱ぎます。',
            emoji: '👞',
            romaji: 'kutsu o nugimasu.',
            literal: 'shoes (object) take-off.',
            words: [{ id: 'w1', text: '靴', meaning: 'Shoes', romaji: 'kutsu' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '脱ぎます', meaning: 'Take off', romaji: 'nugimasu' }],
            solution: ['靴', 'を', '脱ぎます']
        },
        {
            id: 'l11-s3', english: 'I am hungry.', japanese: 'お腹が空きました。',
            emoji: '🤤',
            romaji: 'onaka ga sukimashita.',
            literal: 'stomach (subject) became-empty.',
            words: [{ id: 'w1', text: 'お腹', meaning: 'Stomach', romaji: 'onaka' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: '空きました', meaning: 'Became empty', romaji: 'sukimashita' }],
            solution: ['お腹', 'が', '空きました']
        }
    ],
    12: [
        {
            id: 'l12-s1', english: 'I go to the company by car.', japanese: '車で会社へ行きます。',
            emoji: '🚗',
            romaji: 'kuruma de kaisha e ikimasu.',
            literal: 'car by company to go.',
            words: [{ id: 'w1', text: '車', meaning: 'Car', romaji: 'kuruma' }, { id: 'w2', text: 'で', meaning: 'By', romaji: 'de' }, { id: 'w3', text: '会社', meaning: 'Company', romaji: 'kaisha' }, { id: 'w4', text: 'へ', meaning: 'To', romaji: 'e' }, { id: 'w5', text: '行きます', meaning: 'Go', romaji: 'ikimasu' }],
            solution: ['車', 'で', '会社', 'へ', '行きます']
        },
        {
            id: 'l12-s2', english: 'Please write your name.', japanese: '名前を書いてください。',
            emoji: '📛',
            romaji: 'namae o kaite kudasai.',
            literal: 'name (object) writing please.',
            words: [{ id: 'w1', text: '名前', meaning: 'Name', romaji: 'namae' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '書いてください', meaning: 'Please write', romaji: 'kaite kudasai' }],
            solution: ['名前', 'を', '書いてください']
        },
        {
            id: 'l12-s3', english: 'The weather is good.', japanese: '天気がいいです。',
            emoji: '☀️',
            romaji: 'tenki ga ii desu.',
            literal: 'weather (subject) good is.',
            words: [{ id: 'w1', text: '天気', meaning: 'Weather', romaji: 'tenki' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: 'いい', meaning: 'Good', romaji: 'ii' }, { id: 'w4', text: 'です', meaning: 'Is', romaji: 'desu' }],
            solution: ['天気', 'が', 'いい', 'です']
        }
    ],
    13: [
        {
            id: 'l13-s1', english: 'The cat is curled up.', japanese: '猫が丸まっています。',
            emoji: '🐈',
            romaji: 'neko ga marumatte imasu.',
            literal: 'cat (subject) curling exists.',
            words: [{ id: 'w1', text: '猫', meaning: 'Cat', romaji: 'neko' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: '丸まっています', meaning: 'Curled up', romaji: 'marumatte imasu' }],
            solution: ['猫', 'が', '丸まっています']
        },
        {
            id: 'l13-s2', english: 'I take a bath.', japanese: 'お風呂に入ります。',
            emoji: '🛁',
            romaji: 'ofuro ni hairimasu.',
            literal: 'bath in enter.',
            words: [{ id: 'w1', text: 'お風呂', meaning: 'Bath', romaji: 'ofuro' }, { id: 'w2', text: 'に', meaning: 'In', romaji: 'ni' }, { id: 'w3', text: '入ります', meaning: 'Enter', romaji: 'hairimasu' }],
            solution: ['お風呂', 'に', '入ります']
        },
        {
            id: 'l13-s3', english: 'I forgot my wallet.', japanese: '財布を忘れました。',
            emoji: '👛',
            romaji: 'saifu o wasuremashita.',
            literal: 'wallet (object) forgot.',
            words: [{ id: 'w1', text: '財布', meaning: 'Wallet', romaji: 'saifu' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '忘れました', meaning: 'Forgot', romaji: 'wasuremashita' }],
            solution: ['財布', 'を', '忘れました']
        }
    ],
    14: [
        {
            id: 'l14-s1', english: 'The sky became dark.', japanese: '空が暗くなりました。',
            emoji: '🌌',
            romaji: 'sora ga kuraku narimashita.',
            literal: 'sky (subject) dark became.',
            words: [{ id: 'w1', text: '空', meaning: 'Sky', romaji: 'sora' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: '暗く', meaning: 'Darkly', romaji: 'kuraku' }, { id: 'w4', text: 'なりました', meaning: 'Became', romaji: 'narimashita' }],
            solution: ['空', 'が', '暗く', 'なりました']
        },
        {
            id: 'l14-s2', english: 'I want to eat delicious sushi.', japanese: '美味しい sushi を食べたい。',
            emoji: '💬',
            romaji: 'oishii sushi o tabetai.',
            literal: 'delicious sushi (object) want-to-eat.',
            words: [{ id: 'w1', text: '美味しい', meaning: 'Delicious', romaji: 'oishii' }, { id: 'w2', text: '寿司', meaning: 'Sushi', romaji: 'sushi' }, { id: 'w3', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w4', text: '食べたい', meaning: 'Want to eat', romaji: 'tabetai' }],
            solution: ['美味しい', '寿司', 'を', '食べたい']
        },
        {
            id: 'l14-s3', english: 'The work finished.', japanese: '仕事が終わりました。',
            emoji: '💼',
            romaji: 'shigoto ga owarimashita.',
            literal: 'work (subject) finished.',
            words: [{ id: 'w1', text: '仕事', meaning: 'Work', romaji: 'shigoto' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: '終わりました', meaning: 'Finished', romaji: 'owarimashita' }],
            solution: ['仕事', 'が', '終わりました']
        }
    ],
    15: [
        {
            id: 'l15-s1', english: 'I am studying Japanese.', japanese: '日本語を勉強しています。',
            emoji: '📚',
            romaji: 'nihongo o benkyou shite imasu.',
            literal: 'Japanese (object) studying exist.',
            words: [{ id: 'w1', text: '日本語', meaning: 'Japanese', romaji: 'nihongo' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '勉強', meaning: 'Study', romaji: 'benkyou' }, { id: 'w4', text: 'して', meaning: 'Doing', romaji: 'shite' }, { id: 'w5', text: 'います', meaning: 'Is/Existing', romaji: 'imasu' }],
            solution: ['日本語', 'を', '勉強', 'して', 'います']
        },
        {
            id: 'l15-s2', english: "Let's swim in the sea.", japanese: '海で泳ぎましょう。',
            romaji: 'umi de oyogimashou.',
            literal: 'sea in let-swim.',
            words: [{ id: 'w1', text: '海', meaning: 'Sea', romaji: 'umi' }, { id: 'w2', text: 'で', meaning: 'In', romaji: 'de' }, { id: 'w3', text: '泳ぎましょう', meaning: 'Let swim', romaji: 'oyogimashou' }],
            solution: ['海', 'で', '泳ぎましょう']
        },
        {
            id: 'l15-s3', english: 'I put on a hat.', japanese: '帽子を被ります。',
            emoji: '🧢',
            romaji: 'boushi o kaburimasu.',
            literal: 'hat (object) put-on.',
            words: [{ id: 'w1', text: '帽子', meaning: 'Hat', romaji: 'boushi' }, { id: 'w2', text: 'を', meaning: 'Object marker', romaji: 'o' }, { id: 'w3', text: '被ります', meaning: 'Put on', romaji: 'kaburimasu' }],
            solution: ['帽子', 'を', '被ります']
        }
    ],
    16: [
        {
            id: 'l16-s1', english: 'Cherry blossoms bloomed.', japanese: '桜が咲きました。',
            emoji: '🌸',
            romaji: 'sakura ga sakimashita.',
            literal: 'cherry-blossom (subject) bloomed.',
            words: [{ id: 'w1', text: '桜', meaning: 'Cherry blossom', romaji: 'sakura' }, { id: 'w2', text: 'が', meaning: 'Subject marker', romaji: 'ga' }, { id: 'w3', text: '咲きました', meaning: 'Bloomed', romaji: 'sakimashita' }],
            solution: ['桜', 'が', '咲きました']
        },
        {
            id: 'l16-s2', english: "Let's play together.", japanese: '一緒に遊びましょう。',
            romaji: 'issho ni asobimashou.',
            literal: 'together let-play.',
            words: [{ id: 'w1', text: '一緒に', meaning: 'Together', romaji: 'issho ni' }, { id: 'w2', text: '遊びましょう', meaning: 'Let play', romaji: 'asobimashou' }],
            solution: ['一緒に', '遊びましょう']
        },
        {
            id: 'l16-s3', english: 'I climb Mt. Fuji.', japanese: '富士山に登ります。',
            emoji: '⛰️',
            romaji: 'fujisan ni noborimasu.',
            literal: 'Mt. Fuji in climb.',
            words: [{ id: 'w1', text: '富士山', meaning: 'Mt. Fuji', romaji: 'fujisan' }, { id: 'w2', text: 'に', meaning: 'In/To', romaji: 'ni' }, { id: 'w3', text: '登ります', meaning: 'Climb', romaji: 'noborimasu' }],
            solution: ['富士山', 'に', '登ります']
        }
    ],
};



// ── Grammar slide ─────────────────────────────────────────────────────────────

const grammarSlide: GrammarSlide = {
    type: 'grammar',
    title: '⚔️ Your First Weapon: こんにちは',
    content: 'You have unlocked your first Japanese spell! こんにちは (konnichiwa) means Hello. Now that you know the 4 sounds that build it, you can READ it — not from memory, but from understanding each sound.',
    structure: [
        { label: 'こ → ko', color: 'bg-indigo-100 text-indigo-700', example: '+ ん' },
        { label: 'に → ni', color: 'bg-rose-100 text-rose-700', example: '+ ち' },
        { label: 'は → wa!', color: 'bg-green-100 text-green-700', example: '= こんにちは' },
    ],
    exampleSentence: { japanese: 'こんにちは、おげんきですか？', romaji: 'Konnichiwa, o-genki desu ka?', english: 'Hello — how are you?' },
};

// ── Conversation scenarios ────────────────────────────────────────────────────

const conversationScenarios: ConversationScenario[] = [
    {
        id: 'conv-cafe', npcName: 'Yuki ☕', npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki',
        background: 'from-amber-50 to-orange-50', intro: 'You walk into a cosy café. Yuki, the barista, greets you.',
        exchanges: [
            {
                npcQuery: { id: 'q1', speaker: 'npc', text: 'いらっしゃいませ！ご注文は？', english: 'Welcome! What would you like?' },
                options: [{ id: 'o1', text: 'コーヒーをください。', english: 'Coffee please.', isCorrect: true, feedback: '✅ Yuki starts brewing!' },
                { id: 'o2', text: 'さようなら。', english: 'Goodbye.', isCorrect: false, feedback: '❌ That means goodbye!' },
                { id: 'o3', text: 'わかりません。', english: "I don't understand.", isCorrect: false, feedback: '❌ Try to order!' }]
            },
            {
                npcQuery: { id: 'q2', speaker: 'npc', text: 'お砂糖はいりますか？', english: 'Do you need sugar?' },
                options: [{ id: 'o1', text: 'はい、お願いします。', english: 'Yes please.', isCorrect: true, feedback: '✅ Perfect!' },
                { id: 'o2', text: 'いいえ、けっこうです。', english: "No thanks.", isCorrect: true, feedback: '✅ Also correct!' },
                { id: 'o3', text: 'あなたは誰？', english: 'Who are you?', isCorrect: false, feedback: '❌ Rude! Yuki frowns.' }]
            },
        ],
    },
    {
        id: 'conv-park', npcName: 'Ken 🌸', npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ken',
        background: 'from-green-50 to-emerald-50', intro: 'Relaxing in a park. Ken sits beside you.',
        exchanges: [
            {
                npcQuery: { id: 'q1', speaker: 'npc', text: 'こんにちは！天気がいいですね。', english: "Hello! Nice weather, isn't it?" },
                options: [{ id: 'o1', text: 'そうですね。とても気持ちいいです。', english: 'Yes, feels great.', isCorrect: true, feedback: '✅ Ken nods happily.' },
                { id: 'o2', text: 'うるさい！', english: 'Shut up!', isCorrect: false, feedback: '❌ Very rude! Ken moves away.' },
                { id: 'o3', text: 'わかりません。', english: "I don't understand.", isCorrect: false, feedback: '❌ You understood fine!' }]
            },
            {
                npcQuery: { id: 'q2', speaker: 'npc', text: '好きな食べ物は何ですか？', english: 'What is your favourite food?' },
                options: [{ id: 'o1', text: 'ラーメンが好きです。', english: 'I like ramen.', isCorrect: true, feedback: "✅ Ken's eyes light up!" },
                { id: 'o2', text: 'すしが大好きです！', english: 'I love sushi!', isCorrect: true, feedback: '✅ Ken suggests a place.' },
                { id: 'o3', text: 'ごめんなさい。', english: "I'm sorry.", isCorrect: false, feedback: '❌ Answer the question!' }]
            },
        ],
    },
    {
        id: 'conv-store', npcName: 'Aiko 🛍️', npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiko',
        background: 'from-pink-50 to-rose-50', intro: 'At a clothing store. Shopkeeper Aiko approaches.',
        exchanges: [
            {
                npcQuery: { id: 'q1', speaker: 'npc', text: 'なにかお探しですか？', english: 'Are you looking for something?' },
                options: [{ id: 'o1', text: 'はい、シャツを探しています。', english: "Yes, I'm looking for a shirt.", isCorrect: true, feedback: '✅ Aiko leads you over.' },
                { id: 'o2', text: 'いいえ、見ているだけです。', english: 'Just browsing.', isCorrect: true, feedback: '✅ Aiko smiles: "Take your time!"' },
                { id: 'o3', text: 'どこですか？', english: 'Where is it?', isCorrect: false, feedback: "❌ She hasn't pointed you anywhere yet!" }]
            },
            {
                npcQuery: { id: 'q2', speaker: 'npc', text: 'サイズはおいくつですか？', english: 'What is your size?' },
                options: [{ id: 'o1', text: 'Mサイズをください。', english: 'Medium please.', isCorrect: true, feedback: '✅ Aiko finds the right size.' },
                { id: 'o2', text: 'わかりません。', english: "I'm not sure.", isCorrect: false, feedback: '❌ Try being specific!' },
                { id: 'o3', text: '高いですね！', english: "That's expensive!", isCorrect: false, feedback: "❌ She hasn't told you the price yet." }]
            },
        ],
    },
    {
        id: 'conv-restaurant', npcName: 'Taro 🍜', npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taro',
        background: 'from-yellow-50 to-amber-50', intro: 'At a ramen restaurant. Waiter Taro comes over.',
        exchanges: [
            {
                npcQuery: { id: 'q1', speaker: 'npc', text: 'いらっしゃいませ！おひとりですか？', english: 'Welcome! Dining alone?' },
                options: [{ id: 'o1', text: 'はい、ひとりです。', english: 'Yes, just one.', isCorrect: true, feedback: '✅ Taro seats you at the counter.' },
                { id: 'o2', text: 'いいえ、ふたりです。', english: 'No, two of us.', isCorrect: true, feedback: '✅ Taro sets a table for two.' },
                { id: 'o3', text: 'トイレはどこですか。', english: 'Where is the toilet?', isCorrect: false, feedback: '❌ Let him seat you first!' }]
            },
            {
                npcQuery: { id: 'q2', speaker: 'npc', text: 'ご注文はお決まりですか？', english: 'Have you decided?' },
                options: [{ id: 'o1', text: '醤油ラーメンをください。', english: 'Soy sauce ramen please.', isCorrect: true, feedback: '✅ "Excellent choice!"' },
                { id: 'o2', text: 'もう少し待ってください。', english: 'Please wait a bit more.', isCorrect: true, feedback: '✅ "Of course, take your time."' },
                { id: 'o3', text: 'おいしい！', english: 'Delicious!', isCorrect: false, feedback: "❌ You haven't eaten yet!" }]
            },
        ],
    },
    {
        id: 'conv-train', npcName: 'Hana 🚃', npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HanaTrain',
        background: 'from-blue-50 to-indigo-50', intro: "You're lost at a train station. Hana notices.",
        exchanges: [
            {
                npcQuery: { id: 'q1', speaker: 'npc', text: 'どこかお探しですか？', english: 'Are you looking for somewhere?' },
                options: [{ id: 'o1', text: 'はい、新宿駅はどこですか？', english: 'Yes, where is Shinjuku?', isCorrect: true, feedback: '✅ Hana points to the right platform.' },
                { id: 'o2', text: 'いいえ、だいじょうぶです。', english: "No, I'm fine.", isCorrect: false, feedback: '❌ But you look clearly lost!' },
                { id: 'o3', text: 'おはようございます。', english: 'Good morning.', isCorrect: false, feedback: '❌ Answer her question!' }]
            },
            {
                npcQuery: { id: 'q2', speaker: 'npc', text: '新宿は3番線です。乗り換えが必要です。', english: 'Shinjuku is line 3. You need to transfer.' },
                options: [{ id: 'o1', text: 'ありがとうございます！', english: 'Thank you!', isCorrect: true, feedback: '✅ Hana smiles and waves.' },
                { id: 'o2', text: 'もう一度言ってください。', english: 'Please say it again.', isCorrect: true, feedback: '✅ Hana repeats slowly.' },
                { id: 'o3', text: 'うそをつくな！', english: "Don't lie!", isCorrect: false, feedback: '❌ So rude! Hana walks away.' }]
            },
        ],
    },
];

// ── Build all 20 lessons ──────────────────────────────────────────────────────

// ── Build all 20 lessons ──────────────────────────────────────────────────────

const kanaLessonTitles = [
    'こんにちは (Hello!)',
    'さようなら (Goodbye)',
    'おはようございます (Good Morning)',
    'ありがとう (Thank You)',
    'おげんきですか？(How Are You?)',
    'はじめまして (Nice to Meet You)',
    'よろしくおねがいします (Please Be Good to Me)',
    'ごめんなさい (I Am Sorry)',
    'いただきます (Bon Appétit)',
    'はいとiie (Yes and No)',
    'おやすみなさい (Good Night)',
    'またね (See You Again)',
    'どうぞ (Please / Go Ahead)',
    'すみません (Excuse Me)',
    'だいじょうぶ (I Am Fine)',
    'こちらこそ (The Pleasure Is Mine)'
];

const itemsPerLesson = 4;
const kanaLessons: LessonData[] = Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    const chars: (Kana | GrammarSlide | KanjiLogicSlide)[] = hiragana.slice(i * itemsPerLesson, i * itemsPerLesson + itemsPerLesson);

    if (n === 1) {
        // ── 6 Adventure intro slides prepended to Lesson 1 ────────────────────────
        chars.unshift(

            // SLIDE 1 — The World Is In Danger (adventure hook)
            {
                type: 'grammar',
                title: '🌑 Darkness Spreads Across the Land...',
                content: 'Ancient Yokai — demons born from forgotten words — have shattered the seals that protected the realm of Nihon. The only force that can stop them is language itself. Words are spells. Phrases are shields. And YOU are the last hope. Your journey begins here, with a single greeting.',
                structure: [
                    { label: '👹 Yokai', color: 'bg-red-100 text-red-700', example: 'Feed on silence' },
                    { label: '🗡️ Words', color: 'bg-indigo-100 text-indigo-700', example: 'Are your weapons' },
                    { label: '⚡ You', color: 'bg-amber-100 text-amber-700', example: 'Are the hero' },
                ],
                exampleSentence: { japanese: 'ようかいをたおせ！', romaji: 'Youkai o taose!', english: 'Defeat the Yokai!' },
            },

            // SLIDE 2 — The Trap of Memorization
            {
                type: 'grammar',
                title: '⚠️ The Trap Most Learners Fall Into',
                content: 'Most people try to memorize Japanese by brute force — repeating words until they stick. But memory fades. The real skill is UNDERSTANDING. When you understand WHY a word sounds the way it does, you never forget it. Every character has logic. Every sentence has a pattern. We will teach you both.',
                structure: [
                    { label: '❌ Memorize', color: 'bg-red-100 text-red-700', example: 'Fades quickly' },
                    { label: '✅ Understand', color: 'bg-green-100 text-green-700', example: 'Stays forever' },
                    { label: '🧠 Logic', color: 'bg-indigo-100 text-indigo-700', example: 'Is the shortcut' },
                ],
                exampleSentence: { japanese: 'りかいすることがたいせつです。', romaji: 'Rikai suru koto ga taisetsu desu.', english: 'Understanding is what matters.' },
            },

            // SLIDE 3 — How Hiragana Works
            {
                type: 'grammar',
                title: '🔤 Hiragana: The Sound Alphabet',
                content: 'Hiragana is a phonetic alphabet — each character is one pure sound. There is no silent letter, no spelling trap. Once you know the sound of こ (ko), に (ni), ち (chi), and は (wa), you can read こんにちは out loud immediately. That is the power of understanding the system.',
                structure: [
                    { label: 'こ = ko', color: 'bg-indigo-100 text-indigo-700', example: 'Always "ko"' },
                    { label: 'に = ni', color: 'bg-rose-100 text-rose-700', example: 'Always "ni"' },
                    { label: 'は = wa*', color: 'bg-green-100 text-green-700', example: '*in greetings' },
                ],
                exampleSentence: { japanese: 'こ＋に＋ち＋は ＝ こんにちは！', romaji: 'ko + ni + chi + wa = Konnichiwa!', english: 'Sounds build words — every time!' },
            },

            // SLIDE 4 — Kanji: Radicals (visual logic)
            {
                type: 'kanji-logic',
                title: '🧩 Kanji Secret: Parts Have Meaning',
                kanji: '休',
                meaning: 'Rest',
                description: 'Kanji look complex but they follow a logic. They are built from small picture-parts called radicals. When a PERSON (亻) leans against a TREE (木), what do they do? They REST. Once you see this, you never forget 休.',
                parts: [
                    { kanji: '亻', meaning: 'Person', color: 'bg-blue-100 text-blue-700' },
                    { kanji: '木', meaning: 'Tree', color: 'bg-green-100 text-green-700' }
                ],
                reading: { on: 'kyuu', kun: 'yasu(mu)' },
                example: { word: '休み', meaning: 'Day off / Rest', romaji: 'yasumi' }
            },

            // SLIDE 5 — Kanji: Combination (magnification)
            {
                type: 'kanji-logic',
                title: '💡 Kanji Secret: Combined Power',
                kanji: '明',
                meaning: 'Bright',
                description: 'Some kanji combine two ideas to create a third. The SUN (日) and the MOON (月) are both sources of light. Put them together and you get 明 — Brightness itself. The Yokai fear this character. It is one of your most powerful spells.',
                parts: [
                    { kanji: '日', meaning: 'Sun ☀️', color: 'bg-orange-100 text-orange-700' },
                    { kanji: '月', meaning: 'Moon 🌙', color: 'bg-yellow-100 text-yellow-700' }
                ],
                reading: { on: 'mei / myou', kun: 'aka(rui)' },
                example: { word: '明日', meaning: 'Tomorrow (bright day)', romaji: 'ashita' }
            },

            // SLIDE 6 — Sentence Structure logic
            {
                type: 'grammar',
                title: '🗺️ The Map of a Japanese Sentence',
                content: 'Japanese sentences follow a different order than English: Subject → Object → Verb. The VERB always comes last — like the final strike of a sword. Once you know this pattern, ANY sentence makes sense. This is not a rule to memorize. It is a pattern to FEEL.',
                structure: [
                    { label: '私は (I)', color: 'bg-blue-100 text-blue-700', example: 'Subject first' },
                    { label: 'すしを (sushi)', color: 'bg-rose-100 text-rose-700', example: 'Object middle' },
                    { label: '食べます (eat)', color: 'bg-green-100 text-green-700', example: 'Verb LAST ⚔️' },
                ],
                exampleSentence: { japanese: '私はすしを食べます。', romaji: 'Watashi wa sushi o tabemasu.', english: 'I eat sushi. (But in Japanese: I • sushi • eat!)' },
            },

            // SLIDE 7 — The Quest HUD
            {
                type: 'grammar',
                title: '🎮 Your Quest HUD — Know Your Power',
                content: 'At the top of every screen you will see three icons. These are NOT decorations — they track your power and your life force as you journey across Nihon. Master what they mean and you will always know exactly where you stand in the quest.',
                structure: [
                    { label: '⚡ Streak', color: 'bg-amber-100 text-amber-700', example: '10-in-a-row → 50 ⭐' },
                    { label: '⭐ Blue Stars', color: 'bg-blue-100 text-blue-700', example: 'XP → future Mana' },
                    { label: '❤️ Hearts', color: 'bg-red-100 text-red-700', example: 'Lives — 0 = reset!' },
                ],
                exampleSentence: { japanese: 'がんばれ！', romaji: 'Ganbare!', english: 'Do your best! (Keep going!)' },
            },

            // SLIDE 8 — The JSpellbook
            {
                type: 'grammar',
                title: '📖 Your JSpellbook — The Grimoire of Knowledge',
                content: 'As you journey across Nihon, the language you learn will be permanently inscribed into your JSpellbook. You can open it at any time from the top menu (next to your Streak). Use it to review Characters, Words, and Phrases before stepping into battle.',
                structure: [
                    { label: 'あ Characters', color: 'bg-sakura-pink/20 text-sakura-pink', example: 'The building blocks' },
                    { label: '単語 Words', color: 'bg-emerald-100 text-emerald-700', example: 'Your magical vocabulary' },
                    { label: '文 Phrases', color: 'bg-amber-100 text-amber-700', example: 'Sentences woven together' },
                ],
                exampleSentence: { japanese: '本を読みます。', romaji: 'Hon o yomimasu.', english: 'I read the book. (Your spellbook!)' },
            }

        );
        // Append the weapon-unlock slide AFTER the character cards
        chars.push(grammarSlide);
    }

    return {
        id: `lesson-${n}`,
        worldId: 'beginner-1',
        title: `Lesson ${n}: ${kanaLessonTitles[i] || 'Hiragana Basics'}`,
        type: 'kana' as const,
        xp: n === 1 ? 150 : 100,
        content: chars,
        fillBlanks: getFillBlanks(n),
        sentences: getSentences(n),
    };
});

const checkpointLesson: LessonData = {
    id: 'lesson-17', worldId: 'beginner-1', title: 'Lesson 17: 🏁 Checkpoint Quiz',
    type: 'checkpoint', xp: 300, content: [],
    fillBlanks: getFillBlanks(1),
    sentences: getSentences(1),
};

const conversationLessons: LessonData[] = Array.from({ length: 8 }, (_, i) => {
    const scenario = conversationScenarios[i % conversationScenarios.length];
    const n = 18 + i; // Offset after Kana(16) + Checkpoint(17)
    return {
        id: `lesson-${n}`,
        worldId: 'beginner-1',
        title: `Lesson ${n}: ${scenario.npcName} Conversation`,
        type: 'conversation' as const,
        xp: 150,
        content: scenario,
        fillBlanks: getFillBlanks(n % 10 + 1),
        sentences: getSentences(n % 10 + 1),
    };
});

const finalBossIndex = 26;
const finalBoss: LessonData = {
    id: `lesson-${finalBossIndex}`, worldId: 'beginner-1', title: `Lesson ${finalBossIndex}: 💀 Face Ryu`,
    type: 'boss', xp: 1000,
    fillBlanks: getFillBlanks(6), // Use some complex ones
    sentences: getSentences(6),
    content: {
        id: 'boss-ryu',
        npcName: '竜 Ryu — The Rival',
        npcAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RyuBoss&eyebrows=angryNatural&mouth=serious',
        background: 'from-red-900 to-slate-900',
        intro: '⚠️ WARNING: Ryu is looking for a fight. Choose your words carefully!',
        exchanges: [
            {
                npcQuery: { id: 'b1', speaker: 'npc', text: 'おい！お前は誰だ？', english: 'Oi! Who are you?!' },
                options: [{ id: 'o1', text: '私はただの旅人です。', english: 'Just a traveler. (Humble)', isCorrect: true, feedback: '✅ He scoffs but does nothing.' },
                { id: 'o2', text: 'お前こそ誰だ！', english: 'Who are YOU?! (Aggressive)', isCorrect: false, feedback: '❌ He cracks his knuckles. You lose a heart!' },
                { id: 'o3', text: '...（無視）', english: '...Ignored him.', isCorrect: false, feedback: '❌ He HATES being ignored. -1 heart!' }]
            },
            {
                npcQuery: { id: 'b2', speaker: 'npc', text: '日本語が話せると思っているのか？', english: 'You think you can speak Japanese?' },
                options: [{ id: 'o1', text: 'はい、少しですが話せます。', english: 'Yes, a little.', isCorrect: true, feedback: '✅ He raises an eyebrow. Impressed.' },
                { id: 'o2', text: 'お前より上手だ！', english: 'Better than you!', isCorrect: false, feedback: '❌ He lunges forward. -1 heart!' },
                { id: 'o3', text: 'わかりません。', english: "I don't understand.", isCorrect: false, feedback: '❌ "Then leave!" -1 heart!' }]
            },
            {
                npcQuery: { id: 'b3', speaker: 'npc', text: 'この国のことが好きか？', english: 'Do you like this country?' },
                options: [{ id: 'o1', text: 'とても好きです。文化が素晴らしい。', english: 'Very much. The culture is wonderful.', isCorrect: true, feedback: '✅ He pauses. "...Fine. You can stay."' },
                { id: 'o2', text: 'まあまあです。', english: "It's so-so.", isCorrect: false, feedback: '❌ "So-so?!" He looks furious. -1 heart!' },
                { id: 'o3', text: 'どうでもいい。', english: "I don't care.", isCorrect: false, feedback: '❌ Wrong answer. Big mistake. -1 heart!' }]
            },
        ],
    },
};

// ── Verb Lesson Generation ────────────────────────────────────────────────────

const createVerbGrammarSlide = (verb: VerbInfo): GrammarSlide => ({
    type: 'grammar',
    title: `Conjugating "${verb.dictionary}"`,
    content: `Master the 4 polite forms of "${verb.dictionary}" (${verb.meaning}). Japanese verbs are very regular!`,
    structure: [
        { label: 'Present (+)', color: 'bg-green-100 text-green-700', example: verb.masu },
        { label: 'Past (+)', color: 'bg-blue-100 text-blue-700', example: verb.mashita },
        { label: 'Present (-)', color: 'bg-rose-100 text-rose-700', example: verb.masen },
        { label: 'Past (-)', color: 'bg-slate-100 text-slate-700', example: verb.masendeshita },
    ],
    exampleSentence: {
        japanese: `昨日は${verb.masendeshita}。`,
        romaji: `Kinou wa ${verb.masendeshita}.`,
        english: `I did not ${verb.meaning} yesterday.`
    }
});

const generateVerbLessons = (): LessonData[] => {
    return essentialVerbs.map((verb, i) => {
        const n = 27 + i;
        return {
            id: `verb-lesson-${n}`,
            worldId: 'verbs-1',
            title: `Lesson ${n}: Verb "${verb.dictionary}"`,
            type: 'kana' as const, // Uses the slide-based UI
            xp: 200,
            content: [createVerbGrammarSlide(verb)],
            fillBlanks: [
                {
                    id: `fv-${n}-1`,
                    japanese: `毎日${verb.masu}。`,
                    english: `I ${verb.meaning} every day.`,
                    romaji: `mainichi ${verb.masu}.`,
                    parts: ['毎日', '_'],
                    blanks: [{ position: 1, answer: verb.masu, choices: [{ id: 'a', text: verb.masu, romaji: '' }, { id: 'b', text: verb.masen, romaji: '' }, { id: 'c', text: 'です', romaji: '' }] }]
                },
                {
                    id: `fv-${n}-2`,
                    japanese: `昨日は${verb.masendeshita}。`,
                    english: `I did not ${verb.meaning} yesterday.`,
                    romaji: `kinou wa ${verb.masendeshita}.`,
                    parts: ['昨日は', '_'],
                    blanks: [{ position: 1, answer: verb.masendeshita, choices: [{ id: 'a', text: verb.mashita, romaji: '' }, { id: 'b', text: verb.masendeshita, romaji: '' }] }]
                }
            ],
            sentences: [
                {
                    id: `sv-${n}-1`,
                    english: `He ${verb.meaning} (past).`,
                    japanese: `彼は${verb.mashita}。`,
                    romaji: `kare wa ${verb.mashita}.`,
                    words: [
                        { id: 'w1', text: '彼', meaning: 'He', romaji: 'kare' },
                        { id: 'w2', text: 'は', meaning: 'Topic', romaji: 'wa' },
                        { id: 'w3', text: verb.mashita, meaning: `did ${verb.meaning}`, romaji: '' }
                    ],
                    solution: ['彼', 'は', verb.mashita]
                }
            ]
        };
    });
};

const buildProceduralCurriculum = (): LessonData[] => {
    const lessons: LessonData[] = [];

    // Push first 5 Kana lessons
    lessons.push(...kanaLessons.slice(0, 5));

    // Adventure 1 (Consolidated 1-5)
    lessons.push({
        id: 'adventure-1', worldId: 'beginner-1', title: 'Legendary Adventure I', type: 'adventure', xp: 500,
        content: [] // Handled by RPGPage
    });

    // Kana 6-10
    lessons.push(...kanaLessons.slice(5, 10));

    // Adventure 2 (Consolidated 6-10)
    lessons.push({
        id: 'adventure-2', worldId: 'beginner-1', title: 'Legendary Adventure II', type: 'adventure', xp: 500,
        content: []
    });

    // Kana 11-15
    lessons.push(...kanaLessons.slice(10, 15));

    // Adventure 3 (Consolidated 11-15)
    lessons.push({
        id: 'adventure-3', worldId: 'beginner-1', title: 'Legendary Adventure III', type: 'adventure', xp: 500,
        content: []
    });

    // Last Kana lesson (16)
    lessons.push(kanaLessons[15]);

    // Checkpoint (17)
    lessons.push(checkpointLesson);

    // Conversations (18-25)
    lessons.push(...conversationLessons);

    // Final Boss (26)
    lessons.push({ ...finalBoss, type: 'boss' });

    // WORLD 2: VERBS (27-45)
    const verbLessons = generateVerbLessons();
    lessons.push(...verbLessons.slice(0, 10)); // First 10 verbs

    // Adventure 4 (Verb Practice)
    lessons.push({
        id: 'adventure-4', worldId: 'verbs-1', title: 'Verb Mastery Trial I', type: 'adventure', xp: 600,
        content: []
    });

    lessons.push(...verbLessons.slice(10)); // Remaining 9 verbs

    // Adventure 5 (Final Verb Mastery)
    lessons.push({
        id: 'adventure-5', worldId: 'verbs-1', title: 'Grand Spirit Adventure', type: 'adventure', xp: 800,
        content: []
    });

    // Update IDs to be sequential for the map
    return lessons.map((l, i) => ({ ...l, id: `lesson-${i + 1}`, originalId: l.id }));
};

allLessons = buildProceduralCurriculum();

export const getLesson = (id: string): LessonData | undefined =>
    allLessons.find(l => l.id === id);

export const getProblemPoolForAdventure = (lessonId: string): (FillBlankProblem | SentenceProblem)[] => {
    let pool: (FillBlankProblem | SentenceProblem)[] = [];

    // adventure-1: 1-5
    // adventure-2: 6-10
    // adventure-3: 11-15 
    // adventure-4 (Verbs 1): 27-36
    // adventure-5 (Verbs 2): 37-45

    let start = 1;
    let end = 5;

    // Support both original IDs and sequential Dashboard IDs
    if (lessonId === 'adventure-2' || lessonId === 'lesson-12') {
        start = 6; end = 10;
    } else if (lessonId === 'adventure-3' || lessonId === 'lesson-18') {
        start = 11; end = 15;
    } else if (lessonId === 'adventure-4' || lessonId === 'lesson-37') {
        start = 27; end = 36;
    } else if (lessonId === 'adventure-5' || lessonId === 'lesson-47') {
        start = 37; end = 45;
    } else if (lessonId === 'final-boss' || lessonId === 'lesson-26' || lessonId === 'lesson-48') {
        start = 1; end = 45;
    }

    for (let i = start; i <= end; i++) {
        pool.push(...getFillBlanks(i));
        pool.push(...getSentences(i));
    }

    if (pool.length === 0) {
        pool = [...getFillBlanks(1), ...getSentences(1)];
    }

    return pool;
};
