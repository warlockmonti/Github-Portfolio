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
