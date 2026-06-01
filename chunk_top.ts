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
