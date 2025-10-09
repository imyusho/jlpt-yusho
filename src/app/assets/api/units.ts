export const DECKS: Deck[] = [
  {
    uuid: "f0b1c9a1-1d84-4c1e-a9d2-5b2d63f9a001",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 1",
      zh: "大家的日本語 初級I 第一課",
      ja: "みんなの日本語 初級I 第一課",
    },
    description: {
      en: "Learn basic self-introduction phrases, professions, nationalities, and polite expressions.",
      zh: "學習基本的自我介紹用語、職業、國籍，以及禮貌表達。",
      ja: "自己紹介、職業、国籍、丁寧な表現を学びます。",
    },
    words: [
      {
        uuid: "f0b1c9a1-1d84-4c1e-a9d2-5b2d63f9a801",
        expression: "私",
        reading: "わたし",
        definition: "一人称の代名詞",
        meaning: {
          en: "I",
          zh: "我",
        },
        example: "わたしはがくせいです。",
        exampleMeaning: {
          en: "I am a student.",
          zh: "我是學生。",
        },
      },
      {
        uuid: "2a3e5c7b-8f6d-41a2-b9c0-7d4f8e1g2h3i",
        expression: "私達",
        reading: "わたしたち",
        definition: "一人称複数の代名詞",
        meaning: {
          en: "we",
          zh: "我們",
        },
        example: "わたしたちは日本人です。",
        exampleMeaning: {
          en: "We are Japanese.",
          zh: "我們是日本人。",
        },
      },
      {
        uuid: "c9b0d1e2-3f4g-5h6i-7j8k-9l0m1n2o3p4q",
        expression: "貴方",
        reading: "あなた",
        definition: "二人称の代名詞",
        meaning: {
          en: "you",
          zh: "你",
        },
        example: "あなたはお名前は？",
        exampleMeaning: {
          en: "What is your name?",
          zh: "你的名字是？",
        },
      },
      {
        uuid: "d1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6s",
        expression: "あの人",
        reading: "あのひと",
        definition: "三人称の代名詞",
        meaning: {
          en: "that person, he, she",
          zh: "那個人、他、她",
        },
        example: "あの人はミラーさんです。",
        exampleMeaning: {
          en: "That person is Mr. Miller.",
          zh: "那個人是米勒先生/小姐。",
        },
      },
      {
        uuid: "e2f3g4h5-6i7j-8k9l-0m1n-2o3p4q5r6s7t",
        expression: "あの方",
        reading: "あのかた",
        definition: "三人称の代名詞 (あの人 の丁寧な言い方)",
        meaning: {
          en: "that person, he, she (more polite)",
          zh: "那位(先生/小姐)、他、她 (あの人 的敬語)",
        },
        example: "あの方はどなたですか。",
        exampleMeaning: {
          en: "Who is that person? (polite)",
          zh: "那位是誰？ (禮貌)",
        },
      },
      {
        uuid: "f3g4h5i6-7j8k-9l0m-1n2o-3p4q5r6s7t8u",
        expression: "皆さん",
        reading: "みなさん",
        definition: "複数の人を指す敬称",
        meaning: {
          en: "ladies and gentlemen, all of you",
          zh: "各位、大家",
        },
        example: "皆さん、おはようございます。",
        exampleMeaning: {
          en: "Good morning, everyone.",
          zh: "大家早安。",
        },
      },
      {
        uuid: "g4h5i6j7-8k9l-0m1n-2o3p-4q5r6s7t8u9v",
        expression: "～さん",
        reading: "～さん",
        definition: "人名に付けて敬意を表す接尾語",
        meaning: {
          en: "Mr. Ms. (title of respect added to a name)",
          zh: "～先生、～小姐 (加在人名後面的敬稱)",
        },
        example: "山田さん、お元気ですか。",
        exampleMeaning: {
          en: "Mr./Ms. Yamada, how are you?",
          zh: "山田先生/小姐，您好嗎？",
        },
      },
      {
        uuid: "h5i6j7k8-9l0m-1n2o-3p4q-5r6s7t8u9v0w",
        expression: "～ちゃん",
        reading: "～ちゃん",
        definition: "子供の名前に付けて親愛の情を表す接尾語",
        meaning: {
          en: "(suffix often added to a child's name)",
          zh: "～醬 (常加在小孩名字後面)",
        },
        example: "まりちゃんはかわいいです。",
        exampleMeaning: {
          en: "Mari-chan is cute.",
          zh: "小麻里很可愛。",
        },
      },
      {
        uuid: "i6j7k8l9-0m1n-2o3p-4q5r-6s7t8u9v0w1x",
        expression: "～君",
        reading: "～くん",
        definition: "男の子や目下の人に付けて親愛の情を表す接尾語",
        meaning: {
          en: "(suffix often added to a boy's name)",
          zh: "～君 (常加在男生或晚輩名字後面)",
        },
        example: "たかし君はまじめです。",
        exampleMeaning: {
          en: "Takashi-kun is serious.",
          zh: "小隆很認真。",
        },
      },
      {
        uuid: "j7k8l9m0-1n2o-3p4q-5r6s-7t8u9v0w1x2y",
        expression: "～人",
        reading: "～じん",
        definition: "国籍を表す接尾語",
        meaning: {
          en: '(suffix meaning "a national of")',
          zh: "～人 (表示國籍的後綴)",
        },
        example: "わたしはアメリカ人です。",
        exampleMeaning: {
          en: "I am American.",
          zh: "我是美國人。",
        },
      },
      {
        uuid: "k8l9m0n1-2o3p-4q5r-6s7t-8u9v0w1x2y3z",
        expression: "先生",
        reading: "せんせい",
        definition: "教師や専門家など尊敬すべき人を指す言葉",
        meaning: {
          en: "teacher, instructor (not used when referring to one's own job)",
          zh: "老師、教練、醫師 (用於稱呼別人，不自稱)",
        },
        example: "山田さんは先生です。",
        exampleMeaning: {
          en: "Mr./Ms. Yamada is a teacher.",
          zh: "山田先生/小姐是老師。",
        },
      },
      {
        uuid: "l9m0n1o2-3p4q-5r6s-7t8u-9v0w1x2y3z4a",
        expression: "教師",
        reading: "きょうし",
        definition: "学校などで教える職業",
        meaning: {
          en: "teacher, instructor (used when referring to one's own job)",
          zh: "教師 (用於說明自己的職業)",
        },
        example: "わたしは教師です。",
        exampleMeaning: {
          en: "I am a teacher.",
          zh: "我是教師。",
        },
      },
      {
        uuid: "m0n1o2p3-4q5r-6s7t-8u9v-0w1x2y3z4a5b",
        expression: "学生",
        reading: "がくせい",
        definition: "学校で勉強する人",
        meaning: {
          en: "student",
          zh: "學生",
        },
        example: "マイクさんは学生です。",
        exampleMeaning: {
          en: "Mike is a student.",
          zh: "麥克是學生。",
        },
      },
      {
        uuid: "n1o2p3q4-5r6s-7t8u-9v0w-1x2y3z4a5b6c",
        expression: "会社員",
        reading: "かいしゃいん",
        definition: "会社に勤めている人",
        meaning: {
          en: "company employee",
          zh: "公司職員",
        },
        example: "わたしは会社員です。",
        exampleMeaning: {
          en: "I am a company employee.",
          zh: "我是公司職員。",
        },
      },
      {
        uuid: "o2p3q4r5-6s7t-8u9v-0w1x-2y3z4a5b6c7d",
        expression: "社員",
        reading: "しゃいん",
        definition: "特定の会社の従業員",
        meaning: {
          en: "employee of ~ company (used with a company name)",
          zh: "～公司的職員",
        },
        example: "わたしはIMCの社員です。",
        exampleMeaning: {
          en: "I am an IMC employee.",
          zh: "我是IMC公司的職員。",
        },
      },
      {
        uuid: "p3q4r5s6-7t8u-9v0w-1x2y-3z4a5b6c7d8e",
        expression: "銀行員",
        reading: "ぎんこういん",
        definition: "銀行で働く人",
        meaning: {
          en: "bank employee",
          zh: "銀行職員",
        },
        example: "佐藤さんは銀行員です。",
        exampleMeaning: {
          en: "Mr./Ms. Sato is a bank employee.",
          zh: "佐藤先生/小姐是銀行職員。",
        },
      },
      {
        uuid: "q4r5s6t7-8u9v-0w1x-2y3z-4a5b6c7d8e9f",
        expression: "医者",
        reading: "いしゃ",
        definition: "病気やけがを治療する人",
        meaning: {
          en: "medical doctor",
          zh: "醫生",
        },
        example: "イムさんは医者です。",
        exampleMeaning: {
          en: "Ms./Mr. Im is a doctor.",
          zh: "林先生/小姐是醫生。",
        },
      },
      {
        uuid: "r5s6t7u8-9v0w-1x2y-3z4a-5b6c7d8e9f0g",
        expression: "研究者",
        reading: "けんきゅうしゃ",
        definition: "研究をする人",
        meaning: {
          en: "researcher, scholar",
          zh: "研究人員、學者",
        },
        example: "田中さんも研究者です。",
        exampleMeaning: {
          en: "Mr./Ms. Tanaka is also a researcher.",
          zh: "田中先生/小姐也是研究人員。",
        },
      },
      {
        uuid: "s6t7u8v9-0w1x-2y3z-4a5b-6c7d8e9f0g1h",
        expression: "エンジニア",
        reading: "エンジニア",
        definition: "技術者",
        meaning: {
          en: "engineer",
          zh: "工程師",
        },
        example: "わたしはエンジニアです。",
        exampleMeaning: {
          en: "I am an engineer.",
          zh: "我是工程師。",
        },
      },
      {
        uuid: "t7u8v9w0-1x2y-3z4a-5b6c-7d8e9f0g1h2i",
        expression: "大学",
        reading: "だいがく",
        definition: "高等教育機関",
        meaning: {
          en: "university",
          zh: "大學",
        },
        example: "彼女は大学の先生です。",
        exampleMeaning: {
          en: "She is a university professor.",
          zh: "她是大學老師。",
        },
      },
      {
        uuid: "u8v9w0x1-2y3z-4a5b-6c7d-8e9f0g1h2i3j",
        expression: "病院",
        reading: "びょういん",
        definition: "病気やけがを治療する施設",
        meaning: {
          en: "hospital",
          zh: "醫院",
        },
        example: "こちらは病院ですか。",
        exampleMeaning: {
          en: "Is this a hospital?",
          zh: "這裡是醫院嗎？",
        },
      },
      {
        uuid: "v9w0x1y2-3z4a-5b6c-7d8e-9f0g1h2i3j4k",
        expression: "電気",
        reading: "でんき",
        definition: "電力、照明",
        meaning: {
          en: "electricity, light",
          zh: "電、電燈",
        },
        example: "でんきをつけます。",
        exampleMeaning: {
          en: "I'll turn on the light/electricity.",
          zh: "我會把燈/電打開。",
        },
      },
      {
        uuid: "w0x1y2z3-4a5b-6c7d-8e9f-0g1h2i3j4k5l",
        expression: "誰",
        reading: "だれ",
        definition: "人を尋ねる疑問詞",
        meaning: {
          en: "who",
          zh: "誰",
        },
        example: "あの方はだれですか。",
        exampleMeaning: {
          en: "Who is that person?",
          zh: "那位是誰？",
        },
      },
      {
        uuid: "x1y2z3a4-5b6c-7d8e-9f0g-1h2i3j4k5l6m",
        expression: "何方",
        reading: "どなた",
        definition: "人を尋ねる疑問詞 (だれ の丁寧な言い方)",
        meaning: {
          en: "who (polite)",
          zh: "哪位 (だれ 的敬語)",
        },
        example: "あの人はどなたですか。",
        exampleMeaning: {
          en: "Who is that person? (polite)",
          zh: "那位是哪位？ (禮貌)",
        },
      },
      {
        uuid: "y2z3a4b5-6c7d-8e9f-0g1h-2i3j4k5l6m7n",
        expression: "～歳",
        reading: "～さい",
        definition: "年齢を表す助数詞",
        meaning: {
          en: "~years old",
          zh: "～歲",
        },
        example: "わたしは二十歳です。",
        exampleMeaning: {
          en: "I am 20 years old.",
          zh: "我二十歲。",
        },
      },
      {
        uuid: "z3a4b5c6-7d8e-9f0g-1h2i-3j4k5l6m7n8o",
        expression: "何歳",
        reading: "なんさい",
        definition: "年齢を尋ねる疑問詞",
        meaning: {
          en: "how old",
          zh: "幾歲",
        },
        example: "ミラーさんは何歳ですか。",
        exampleMeaning: {
          en: "How old is Mr. Miller?",
          zh: "米勒先生/小姐幾歲？",
        },
      },
      {
        uuid: "a4b5c6d7-8e9f-0g1h-2i3j-4k5l6m7n8o9p",
        expression: "おいくつ",
        reading: "おいくつ",
        definition: "年齢を尋ねる疑問詞 (何歳 の丁寧な言い方)",
        meaning: {
          en: "how old (polite)",
          zh: "貴庚 (何歳 的敬語)",
        },
        example: "おいくつですか。",
        exampleMeaning: {
          en: "How old are you? (polite)",
          zh: "您貴庚？ (禮貌)",
        },
      },
      {
        uuid: "b5c6d7e8-9f0g-1h2i-3j4k-5l6m7n8o9p0q",
        expression: "はい",
        reading: "はい",
        definition: "肯定の返事",
        meaning: {
          en: "yes",
          zh: "是",
        },
        example: "アンナさんは学生ですか。はい、学生です。",
        exampleMeaning: {
          en: "Is Anna a student? Yes, she is a student.",
          zh: "安娜是學生嗎？ 是，她是學生。",
        },
      },
      {
        uuid: "c6d7e8f9-0g1h-2i3j-4k5l-6m7n8o9p0q1r",
        expression: "いいえ",
        reading: "いいえ",
        definition: "否定の返事",
        meaning: {
          en: "no",
          zh: "不、不是",
        },
        example: "山田さんはエンジニアですか。いいえ、医者です。",
        exampleMeaning: {
          en: "Is Mr./Ms. Yamada an engineer? No, he/she is a doctor.",
          zh: "山田先生/小姐是工程師嗎？ 不，他是醫生。",
        },
      },
      {
        uuid: "d7e8f9g0-1h2i-3j4k-5l6m-7n8o9p0q1r2s",
        expression: "失礼ですが",
        reading: "しつれいですが",
        definition: "質問をする前に使う、前置きの表現",
        meaning: {
          en: "Excuse me, but (used when asking a personal question)",
          zh: "抱歉，請問 (詢問個人信息前的客套話)",
        },
        example: "失礼ですが、お名前は？",
        exampleMeaning: {
          en: "Excuse me, but may I have your name?",
          zh: "抱歉，請問您貴姓大名？",
        },
      },
      {
        uuid: "e8f9g0h1-2i3j-4k5l-6m7n-8o9p0q1r2s3t",
        expression: "お名前は",
        reading: "おなまえは",
        definition: "相手の名前を尋ねる丁寧な言い方",
        meaning: {
          en: "May I have your name? (polite)",
          zh: "您貴姓大名？ (禮貌)",
        },
        example: "失礼ですが、お名前は？",
        exampleMeaning: {
          en: "Excuse me, but may I have your name?",
          zh: "抱歉，請問您貴姓大名？",
        },
      },
      {
        uuid: "f9g0h1i2-3j4k-5l6m-7n8o-9p0q1r2s3t4u",
        expression: "初めまして",
        reading: "はじめまして",
        definition: "初めて会った時の挨拶",
        meaning: {
          en: "How do you do? (first time meeting)",
          zh: "初次見面",
        },
        example: "初めまして。わたしは山田です。",
        exampleMeaning: {
          en: "How do you do? I am Yamada.",
          zh: "初次見面。我是山田。",
        },
      },
      {
        uuid: "g0h1i2j3-4k5l-6m7n-8o9p-0q1r2s3t4u5v",
        expression: "どうぞよろしく（お願いします）",
        reading: "どうぞよろしく（おねがいします）",
        definition: "自己紹介の結びの言葉",
        meaning: {
          en: "Pleased to meet you (lit. Please be nice to me)",
          zh: "請多關照",
        },
        example: "どうぞよろしくおねがいします。",
        exampleMeaning: {
          en: "Pleased to meet you (Please take care of me).",
          zh: "請多關照。",
        },
      },
      {
        uuid: "h1i2j3k4-5l6m-7n8o-9p0q-1r2s3t4u5v6w",
        expression: "こちらは～さんです",
        reading: "こちらは～さんです",
        definition: "他人を紹介する時の表現",
        meaning: {
          en: "This is Mr. (Ms.) ~",
          zh: "這位是～先生/小姐",
        },
        example: "こちらはマイクさんです。",
        exampleMeaning: {
          en: "This is Mr. Mike.",
          zh: "這位是麥克先生。",
        },
      },
      {
        uuid: "i2j3k4l5-6m7n-8o9p-0q1r-2s3t4u5v6w7x",
        expression: "～から来ました",
        reading: "～からきました",
        definition: "出身地を伝える時の表現",
        meaning: {
          en: "I came (come) from ~",
          zh: "我來自～",
        },
        example: "わたしは日本から来ました。",
        exampleMeaning: {
          en: "I came from Japan.",
          zh: "我來自日本。",
        },
      },
      {
        uuid: "j3k4l5m6-7n8o-9p0q-1r2s-3t4u5v6w7x8y",
        expression: "アメリカ",
        reading: "アメリカ",
        definition: "国名",
        meaning: {
          en: "U.S.A.",
          zh: "美國",
        },
        example: "ミラーさんはアメリカ人です。",
        exampleMeaning: {
          en: "Mr. Miller is American.",
          zh: "米勒先生是美國人。",
        },
      },
      {
        uuid: "k4l5m6n7-8o9p-0q1r-2s3t-4u5v6w7x8y9z",
        expression: "イギリス",
        reading: "イギリス",
        definition: "国名",
        meaning: {
          en: "U.K.",
          zh: "英國",
        },
        example: "田中さんはイギリスから来ました。",
        exampleMeaning: {
          en: "Mr./Ms. Tanaka came from the U.K.",
          zh: "田中先生/小姐來自英國。",
        },
      },
      {
        uuid: "l5m6n7o8-9p0q-1r2s-3t4u-5v6w7x8y9z0a",
        expression: "インド",
        reading: "インド",
        definition: "国名",
        meaning: {
          en: "India",
          zh: "印度",
        },
        example: "サントスさんはインド人です。",
        exampleMeaning: {
          en: "Mr./Ms. Santos is Indian.",
          zh: "桑托斯先生/小姐是印度人。",
        },
      },
      {
        uuid: "m6n7o8p9-0q1r-2s3t-4u5v-6w7x8y9z0a1b",
        expression: "インドネシア",
        reading: "インドネシア",
        definition: "国名",
        meaning: {
          en: "Indonesia",
          zh: "印度尼西亞",
        },
        example: "わたしはインドネシアから来ました。",
        exampleMeaning: {
          en: "I came from Indonesia.",
          zh: "我來自印度尼西亞。",
        },
      },
      {
        uuid: "n7o8p9q0-1r2s-3t4u-5v6w-7x8y9z0a1b2c",
        expression: "韓国",
        reading: "かんこく",
        definition: "国名",
        meaning: {
          en: "South Korea",
          zh: "韓國",
        },
        example: "わたしたちは韓国人です。",
        exampleMeaning: {
          en: "We are South Korean.",
          zh: "我們是韓國人。",
        },
      },
      {
        uuid: "o8p9q0r1-2s3t-4u5v-6w7x-8y9z0a1b2c3d",
        expression: "タイ",
        reading: "タイ",
        definition: "国名",
        meaning: {
          en: "Thailand",
          zh: "泰國",
        },
        example: "ポーンさんはタイ人ですか。",
        exampleMeaning: {
          en: "Is Mr./Ms. Pohn Thai?",
          zh: "波恩先生/小姐是泰國人嗎？",
        },
      },
      {
        uuid: "p9q0r1s2-3t4u-5v6w-7x8y-9z0a1b2c3d4e",
        expression: "中国",
        reading: "ちゅうごく",
        definition: "国名",
        meaning: {
          en: "China",
          zh: "中國",
        },
        example: "王さんは中国から来ました。",
        exampleMeaning: {
          en: "Mr./Ms. Wang came from China.",
          zh: "王先生/小姐來自中國。",
        },
      },
      {
        uuid: "q0r1s2t3-4u5v-6w7x-8y9z-0a1b2c3d4e5f",
        expression: "ドイツ",
        reading: "ドイツ",
        definition: "国名",
        meaning: {
          en: "Germany",
          zh: "德國",
        },
        example: "わたしはドイツ人です。",
        exampleMeaning: {
          en: "I am German.",
          zh: "我是德國人。",
        },
      },
      {
        uuid: "r1s2t3u4-5v6w-7x8y-9z0a-1b2c3d4e5f6g",
        expression: "日本",
        reading: "にほん",
        definition: "国名",
        meaning: {
          en: "Japan",
          zh: "日本",
        },
        example: "マイクさんは日本から来ました。",
        exampleMeaning: {
          en: "Mike came from Japan.",
          zh: "麥克來自日本。",
        },
      },
      {
        uuid: "s2t3u4v5-6w7x-8y9z-0a1b-2c3d4e5f6g7h",
        expression: "フランス",
        reading: "フランス",
        definition: "国名",
        meaning: {
          en: "France",
          zh: "法國",
        },
        example: "マリーさんはフランス人です。",
        exampleMeaning: {
          en: "Marie is French.",
          zh: "瑪麗是法國人。",
        },
      },
      {
        uuid: "t3u4v5w6-7x8y-9z0a-1b2c-3d4e5f6g7h8i",
        expression: "ブラジル",
        reading: "ブラジル",
        definition: "国名",
        meaning: {
          en: "Brazil",
          zh: "巴西",
        },
        example: "エドワルドさんはブラジルから来ました。",
        exampleMeaning: {
          en: "Mr./Ms. Eduardo came from Brazil.",
          zh: "愛德華多先生/小姐來自巴西。",
        },
      },
    ],
  },
  {
    uuid: "g1h2i3j4-5k6l-7m8n-9o0p-1q2r3s4t5u02",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 2",
      zh: "大家的日本語 初級I 第二課",
      ja: "みんなの日本語 初級I 第二課",
    },
    description: {
      en: "Learn demonstrative pronouns (Kore/Sore/Are) and common classroom/office vocabulary.",
      zh: "學習指示代名詞（これ/それ/あれ）以及常見的教室/辦公室詞彙。",
      ja: "こそあど言葉と、教室や事務室の語彙を学びます。",
    },
    words: [
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4001",
        expression: "これ",
        reading: "これ",
        definition: "話し手の近くにあるものを指す",
        meaning: {
          en: "this (thing here, near me)",
          zh: "這個 (在我附近)",
        },
        example: "これはなんですか。",
        exampleMeaning: {
          en: "What is this?",
          zh: "這是什麼？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4002",
        expression: "それ",
        reading: "それ",
        definition: "聞き手の近くにあるものを指す",
        meaning: {
          en: "that (thing near you)",
          zh: "那個 (在你附近)",
        },
        example: "それはあなたの傘ですか。",
        exampleMeaning: {
          en: "Is that your umbrella?",
          zh: "那是你的傘嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4003",
        expression: "あれ",
        reading: "あれ",
        definition: "話し手と聞き手から遠くにあるものを指す",
        meaning: {
          en: "that (thing over there)",
          zh: "那個 (在那邊，離你我都遠)",
        },
        example: "あれは時計ですか。",
        exampleMeaning: {
          en: "Is that a clock?",
          zh: "那是手錶/時鐘嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4004",
        expression: "この～",
        reading: "この～",
        definition: "話し手の近くにある名詞を修飾する",
        meaning: {
          en: "this ~, this ~ here",
          zh: "這個～ (在我附近的)",
        },
        example: "この本はわたしのです。",
        exampleMeaning: {
          en: "This book is mine.",
          zh: "這本書是我的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4005",
        expression: "その～",
        reading: "その～",
        definition: "聞き手の近くにある名詞を修飾する",
        meaning: {
          en: "that ~, that ~ there",
          zh: "那個～ (在你附近的)",
        },
        example: "そのかばんはだれのですか。",
        exampleMeaning: {
          en: "Whose bag is that?",
          zh: "那個包包是誰的？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4006",
        expression: "あの～",
        reading: "あの～",
        definition: "話し手と聞き手から遠くにある名詞を修飾する",
        meaning: {
          en: "that ~, that ~ over there",
          zh: "那個～ (在那邊的)",
        },
        example: "あの机は木村さんのです。",
        exampleMeaning: {
          en: "That desk over there is Mr./Ms. Kimura's.",
          zh: "那邊那張桌子是木村先生/小姐的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4007",
        expression: "本",
        reading: "ほん",
        definition: "書物",
        meaning: {
          en: "book",
          zh: "書",
        },
        example: "これは日本語の本です。",
        exampleMeaning: {
          en: "This is a Japanese book.",
          zh: "這是日文書。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4008",
        expression: "辞書",
        reading: "じしょ",
        definition: "単語の意味や使い方などをまとめた書物",
        meaning: {
          en: "dictionary",
          zh: "字典",
        },
        example: "それは辞書ですか。",
        exampleMeaning: {
          en: "Is that a dictionary?",
          zh: "那是字典嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4009",
        expression: "雑誌",
        reading: "ざっし",
        definition: "定期的に発行される出版物",
        meaning: {
          en: "magazine",
          zh: "雜誌",
        },
        example: "これは何の雑誌ですか。",
        exampleMeaning: {
          en: "What kind of magazine is this?",
          zh: "這是什麼雜誌？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4010",
        expression: "新聞",
        reading: "しんぶん",
        definition: "ニュースや記事を伝える定期刊行物",
        meaning: {
          en: "newspaper",
          zh: "報紙",
        },
        example: "この新聞は古いです。",
        exampleMeaning: {
          en: "This newspaper is old.",
          zh: "這份報紙是舊的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4011",
        expression: "ノート",
        reading: "ノート",
        definition: "記録やメモをするための冊子",
        meaning: {
          en: "notebook",
          zh: "筆記本",
        },
        example: "これはあなたのノートですか。",
        exampleMeaning: {
          en: "Is this your notebook?",
          zh: "這是你的筆記本嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4012",
        expression: "手帳",
        reading: "てちょう",
        definition: "スケジュールなどを記録する小さな冊子",
        meaning: {
          en: "pocket notebook, planner",
          zh: "筆記本、手帳",
        },
        example: "わたしは手帳を持っています。",
        exampleMeaning: {
          en: "I have a pocket notebook.",
          zh: "我有一本手帳。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4013",
        expression: "名刺",
        reading: "めいし",
        definition: "氏名や連絡先が書かれたカード",
        meaning: {
          en: "business card",
          zh: "名片",
        },
        example: "これは田中さんの名刺です。",
        exampleMeaning: {
          en: "This is Mr./Ms. Tanaka's business card.",
          zh: "這是田中先生/小姐的名片。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4014",
        expression: "カード",
        reading: "カード",
        definition: "紙やプラスチックでできた四角いもの",
        meaning: {
          en: "card",
          zh: "卡片",
        },
        example: "それは何のカードですか。",
        exampleMeaning: {
          en: "What kind of card is that?",
          zh: "那是甚麼卡？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4015",
        expression: "テレホンカード",
        reading: "テレホンカード",
        definition: "公衆電話で使うカード",
        meaning: {
          en: "telephone card",
          zh: "電話卡",
        },
        example: "テレホンカードはありますか。",
        exampleMeaning: {
          en: "Do you have a telephone card?",
          zh: "你有電話卡嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4016",
        expression: "鉛筆",
        reading: "えんぴつ",
        definition: "筆記用具",
        meaning: {
          en: "pencil",
          zh: "鉛筆",
        },
        example: "これは鉛筆です。",
        exampleMeaning: {
          en: "This is a pencil.",
          zh: "這是鉛筆。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4017",
        expression: "ボールペン",
        reading: "ボールペン",
        definition: "筆記用具",
        meaning: {
          en: "ballpoint pen",
          zh: "原子筆",
        },
        example: "それはボールペンではありません。",
        exampleMeaning: {
          en: "That is not a ballpoint pen.",
          zh: "那不是原子筆。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4018",
        expression: "シャープペンシル",
        reading: "シャープペンシル",
        definition: "芯の太さを調節できる鉛筆",
        meaning: {
          en: "mechanical pencil",
          zh: "自動鉛筆",
        },
        example: "このシャープペンシルは高いです。",
        exampleMeaning: {
          en: "This mechanical pencil is expensive.",
          zh: "這支自動鉛筆很貴。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4019",
        expression: "鍵",
        reading: "かぎ",
        definition: "錠を開け閉めするための道具",
        meaning: {
          en: "key",
          zh: "鑰匙",
        },
        example: "これは何の鍵ですか。",
        exampleMeaning: {
          en: "What key is this?",
          zh: "這是什麼鑰匙？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4020",
        expression: "時計",
        reading: "とけい",
        definition: "時間を計る道具",
        meaning: {
          en: "watch, clock",
          zh: "手錶、時鐘",
        },
        example: "あの時計はだれのですか。",
        exampleMeaning: {
          en: "Whose watch/clock is that?",
          zh: "那個手錶/時鐘是誰的？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4021",
        expression: "傘",
        reading: "かさ",
        definition: "雨や日光を防ぐための道具",
        meaning: {
          en: "umbrella",
          zh: "傘",
        },
        example: "あなたの傘はこれですか。",
        exampleMeaning: {
          en: "Is your umbrella this one?",
          zh: "你的傘是這把嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4022",
        expression: "鞄",
        reading: "かばん",
        definition: "物を入れて持ち運ぶための袋",
        meaning: {
          en: "bag, briefcase",
          zh: "包包、公事包",
        },
        example: "そのかばんは安いです。",
        exampleMeaning: {
          en: "That bag is cheap.",
          zh: "那個包包很便宜。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4023",
        expression: "テープ",
        reading: "テープ",
        definition: "音声などを記録した磁気テープ",
        meaning: {
          en: "(cassette) tape",
          zh: "（卡式）錄音帶",
        },
        example: "このテープは英語です。",
        exampleMeaning: {
          en: "This tape is in English.",
          zh: "這個錄音帶是英語的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4024",
        expression: "テープレコーダー",
        reading: "テープレコーダー",
        definition: "テープを録音・再生する機器",
        meaning: {
          en: "tape recorder",
          zh: "錄音機",
        },
        example: "それはテープレコーダーではありません。",
        exampleMeaning: {
          en: "That is not a tape recorder.",
          zh: "那不是錄音機。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4025",
        expression: "テレビ",
        reading: "テレビ",
        definition: "映像と音声を送る機器",
        meaning: {
          en: "television",
          zh: "電視",
        },
        example: "あれは新しいテレビです。",
        exampleMeaning: {
          en: "That is a new television.",
          zh: "那是新的電視。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4026",
        expression: "ラジオ",
        reading: "ラジオ",
        definition: "音声を無線で聞く機器",
        meaning: {
          en: "radio",
          zh: "收音機",
        },
        example: "これはラジオですか。",
        exampleMeaning: {
          en: "Is this a radio?",
          zh: "這是收音機嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4027",
        expression: "カメラ",
        reading: "カメラ",
        definition: "写真を撮るための機器",
        meaning: {
          en: "camera",
          zh: "照相機",
        },
        example: "これはカメラです。",
        exampleMeaning: {
          en: "This is a camera.",
          zh: "這是照相機。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4028",
        expression: "コンピューター",
        reading: "コンピューター",
        definition: "電子計算機",
        meaning: {
          en: "computer",
          zh: "電腦",
        },
        example: "それはコンピューターのモニターです。",
        exampleMeaning: {
          en: "That is a computer monitor.",
          zh: "那是電腦螢幕。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4029",
        expression: "自動車",
        reading: "じどうしゃ",
        definition: "自分で動く車",
        meaning: {
          en: "automobile, car",
          zh: "汽車",
        },
        example: "あれは新しい自動車ですか。",
        exampleMeaning: {
          en: "Is that a new car?",
          zh: "那是新車嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4030",
        expression: "机",
        reading: "つくえ",
        definition: "物を置いたり、作業したりするための家具",
        meaning: {
          en: "desk",
          zh: "桌子、書桌",
        },
        example: "この机は古いです。",
        exampleMeaning: {
          en: "This desk is old.",
          zh: "這張桌子很舊。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4031",
        expression: "椅子",
        reading: "いす",
        definition: "座るための家具",
        meaning: {
          en: "chair",
          zh: "椅子",
        },
        example: "そのいすは誰のですか。",
        exampleMeaning: {
          en: "Whose chair is that?",
          zh: "那張椅子是誰的？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4032",
        expression: "チョコレート",
        reading: "チョコレート",
        definition: "菓子の一種",
        meaning: {
          en: "chocolate",
          zh: "巧克力",
        },
        example: "これはチョコレートですか。",
        exampleMeaning: {
          en: "Is this chocolate?",
          zh: "這是巧克力嗎？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4033",
        expression: "コーヒー",
        reading: "コーヒー",
        definition: "飲み物",
        meaning: {
          en: "coffee",
          zh: "咖啡",
        },
        example: "これはコーヒーです。",
        exampleMeaning: {
          en: "This is coffee.",
          zh: "這是咖啡。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4034",
        expression: "英語",
        reading: "えいご",
        definition: "言語",
        meaning: {
          en: "the English language",
          zh: "英語",
        },
        example: "あの本は英語です。",
        exampleMeaning: {
          en: "That book is in English.",
          zh: "那本書是英語的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4035",
        expression: "日本語",
        reading: "にほんご",
        definition: "言語",
        meaning: {
          en: "the Japanese language",
          zh: "日語",
        },
        example: "この辞書は日本語です。",
        exampleMeaning: {
          en: "This dictionary is Japanese.",
          zh: "這本字典是日語的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4036",
        expression: "～語",
        reading: "～ご",
        definition: "言語を表す接尾語",
        meaning: {
          en: "~ language",
          zh: "～語",
        },
        example: "中国語の新聞。",
        exampleMeaning: {
          en: "A Chinese newspaper.",
          zh: "一份中文報紙。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4037",
        expression: "何",
        reading: "なん",
        definition: "物を尋ねる疑問詞",
        meaning: {
          en: "what",
          zh: "什麼",
        },
        example: "これは何ですか。",
        exampleMeaning: {
          en: "What is this?",
          zh: "這是什麼？",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4038",
        expression: "そう",
        reading: "そう",
        definition: "その通りであること",
        meaning: {
          en: "so (used in confirmation or agreement)",
          zh: "是這樣、沒錯",
        },
        example: "そうです。",
        exampleMeaning: {
          en: "That's right/Yes, it is.",
          zh: "沒錯/是的。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4039",
        expression: "違います",
        reading: "ちがいます",
        definition: "否定や間違いを伝える丁寧な言い方",
        meaning: {
          en: "No it isn't, You are wrong",
          zh: "不是的、您錯了",
        },
        example: "いいえ、違います。",
        exampleMeaning: {
          en: "No, it is not. / No, that's wrong.",
          zh: "不，不是的。/ 不，您錯了。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4040",
        expression: "そうですか",
        reading: "そうですか",
        definition: "相手の発言に納得したり驚いたりした時の表現",
        meaning: {
          en: "I see, Is that so?",
          zh: "原來如此、是嗎？",
        },
        example: "そうですか。ありがとうございます。",
        exampleMeaning: {
          en: "I see. Thank you.",
          zh: "原來如此。謝謝您。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4041",
        expression: "あのう",
        reading: "あのう",
        definition: "話を切り出す時やためらう時の言葉",
        meaning: {
          en: "well (used to show hesitation or start a conversation)",
          zh: "那個... (用於引起注意或表示猶豫)",
        },
        example: "あのう、すみません。",
        exampleMeaning: {
          en: "Um, excuse me.",
          zh: "那個... 不好意思。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4042",
        expression: "ほんの気持ちです",
        reading: "ほんのきもちです",
        definition: "贈り物を渡す時の謙遜の表現",
        meaning: {
          en: "It's nothing, It's a token of my gratitude",
          zh: "一點心意、不足掛齒",
        },
        example: "これ、ほんの気持ちです。どうぞ。",
        exampleMeaning: {
          en: "This is just a token of my gratitude. Please.",
          zh: "這是一點心意。請收下。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4043",
        expression: "どうぞ",
        reading: "どうぞ",
        definition: "相手に許可を与えたり、促したりする言葉",
        meaning: {
          en: "Please, Here you are (when offering someone something)",
          zh: "請、請便、給您 (遞東西時)",
        },
        example: "どうぞ、コーヒーです。",
        exampleMeaning: {
          en: "Please, here's your coffee.",
          zh: "請，這是咖啡。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4044",
        expression: "どうも",
        reading: "どうも",
        definition: "感謝や恐縮の気持ちを表す省略された表現",
        meaning: {
          en: "Well, thanks (short for thank you)",
          zh: "謝謝 (簡短的感謝)",
        },
        example: "どうも、ありがとう。",
        exampleMeaning: {
          en: "Well, thanks.",
          zh: "嗯，謝謝。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4045",
        expression: "ありがとう",
        reading: "ありがとう",
        definition: "感謝の言葉",
        meaning: {
          en: "Thank you",
          zh: "謝謝",
        },
        example: "ありがとう。",
        exampleMeaning: {
          en: "Thank you.",
          zh: "謝謝。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4046",
        expression: "どうもありがとうございます",
        reading: "どうもありがとうございます",
        definition: "非常に丁寧な感謝の言葉",
        meaning: {
          en: "Thank you very much (polite)",
          zh: "非常感謝",
        },
        example: "どうもありがとうございます。",
        exampleMeaning: {
          en: "Thank you very much.",
          zh: "非常感謝您。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4047",
        expression: "これからお世話になります",
        reading: "これからおせわになります",
        definition: "これから世話になる人への挨拶",
        meaning: {
          en: "I hope for your kind assistance hereafter (lit. I will be in your care from now on)",
          zh: "今後請多關照",
        },
        example: "サントスです。これからお世話になります。",
        exampleMeaning: {
          en: "I'm Santos. I hope for your kind assistance hereafter.",
          zh: "我是桑托斯。今後請多關照。",
        },
      },
      {
        uuid: "20a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4048",
        expression: "こちらこそよろしく",
        reading: "こちらこそよろしく",
        definition: "「どうぞよろしくお願いします」への返答",
        meaning: {
          en: 'I am pleased to meet you too (polite reply to "Dōzo yoroshiku")',
          zh: "我才要請您多關照 (回應「請多關照」)",
        },
        example: "こちらこそよろしくおねがいします。",
        exampleMeaning: {
          en: "I am also pleased to meet you.",
          zh: "我才要請您多關照。",
        },
      },
    ],
  },
  {
    uuid: "h1i2j3k4-6m7n-8o9p-0q1r-2s3t4u5v03",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 3",
      zh: "大家的日本語 初級I 第三課",
      ja: "みんなの日本語 初級I 第三課",
    },
    description: {
      en: "Learn demonstrative adverbs (Koko/Soko/Asoko), polite directions (Kochira/Sochira/Achira), and how to ask about location and prices.",
      zh: "學習場所指示代名詞（ここ/そこ/あそこ），禮貌方向（こちら/そちら/あちら），以及詢問位置和價格。",
      ja: "場所の指示詞（こそあど言葉）と、丁寧な方向表現、場所と値段の尋ね方を学びます。",
    },
    words: [
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4001",
        expression: "ここ",
        reading: "ここ",
        definition: "話し手のいる場所",
        meaning: {
          en: "here, this place (near me)",
          zh: "這裡、這個地方",
        },
        example: "ここは会議室です。",
        exampleMeaning: {
          en: "This place (here) is the conference room.",
          zh: "這裡是會議室。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4002",
        expression: "そこ",
        reading: "そこ",
        definition: "聞き手のいる場所や、近い場所",
        meaning: {
          en: "there, that place (near you)",
          zh: "那裡、那個地方 (在你附近)",
        },
        example: "受付はそこですか。",
        exampleMeaning: {
          en: "Is the reception desk there (near you)?",
          zh: "服務台是在那裡嗎？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4003",
        expression: "あそこ",
        reading: "あそこ",
        definition: "話し手と聞き手から遠い場所",
        meaning: {
          en: "that place over there",
          zh: "那裡、那個地方 (在遠處)",
        },
        example: "トイレはあそこです。",
        exampleMeaning: {
          en: "The restroom is over there.",
          zh: "廁所在那邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4004",
        expression: "どこ",
        reading: "どこ",
        definition: "場所を尋ねる疑問詞",
        meaning: {
          en: "where, what place?",
          zh: "哪裡？什麼地方？",
        },
        example: "エレベーターはどこですか。",
        exampleMeaning: {
          en: "Where is the elevator?",
          zh: "電梯在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4005",
        expression: "こちら",
        reading: "こちら",
        definition: "この方向・場所 (ここ の丁寧な言い方)",
        meaning: {
          en: "this way, this place (polite)",
          zh: "這邊、這裡 (ここ 的敬語)",
        },
        example: "佐藤さんはこちらです。",
        exampleMeaning: {
          en: "Mr./Ms. Sato is this way (here).",
          zh: "佐藤先生/小姐在這邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4006",
        expression: "そちら",
        reading: "そちら",
        definition: "その方向・場所 (そこ の丁寧な言い方)",
        meaning: {
          en: "that way, that place near you (polite)",
          zh: "那邊、那裡 (そこ 的敬語)",
        },
        example: "会議室はそちらです。",
        exampleMeaning: {
          en: "The conference room is that way (near you).",
          zh: "會議室在那邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4007",
        expression: "あちら",
        reading: "あちら",
        definition: "あの方向・場所 (あそこ の丁寧な言い方)",
        meaning: {
          en: "that way, that place over there (polite)",
          zh: "那邊、那裡 (あそこ の敬語)",
        },
        example: "エスカレーターはあちらです。",
        exampleMeaning: {
          en: "The escalator is over that way.",
          zh: "電扶梯在那邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4008",
        expression: "どちら",
        reading: "どちら",
        definition: "方向や場所を尋ねる疑問詞 (どこ の丁寧な言い方)",
        meaning: {
          en: "which way, where (polite)",
          zh: "哪邊？哪裡？ (どこ 的敬語)",
        },
        example: "お手洗いはどちらですか。",
        exampleMeaning: {
          en: "Where is the restroom? (polite)",
          zh: "請問洗手間在哪邊？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4009",
        expression: "教室",
        reading: "きょうしつ",
        definition: "授業を行う部屋",
        meaning: {
          en: "classroom",
          zh: "教室",
        },
        example: "教室は2階です。",
        exampleMeaning: {
          en: "The classroom is on the second floor.",
          zh: "教室在二樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4010",
        expression: "食堂",
        reading: "しょくどう",
        definition: "食事をする場所",
        meaning: {
          en: "dining hall, canteen",
          zh: "餐廳、食堂",
        },
        example: "社員食堂はどこですか。",
        exampleMeaning: {
          en: "Where is the employee cafeteria?",
          zh: "員工餐廳在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4011",
        expression: "事務所",
        reading: "じむしょ",
        definition: "事務を行う場所",
        meaning: {
          en: "office",
          zh: "辦公室",
        },
        example: "事務所は3階にあります。",
        exampleMeaning: {
          en: "The office is on the third floor.",
          zh: "辦公室在三樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4012",
        expression: "会議室",
        reading: "かいぎしつ",
        definition: "会議をする部屋",
        meaning: {
          en: "conference room, assembly room",
          zh: "會議室",
        },
        example: "会議室はそこです。",
        exampleMeaning: {
          en: "The conference room is there (near you).",
          zh: "會議室就在那裡。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4013",
        expression: "受付",
        reading: "うけつけ",
        definition: "訪問者の応対や事務手続きを行う場所",
        meaning: {
          en: "reception desk, information desk",
          zh: "服務台、接待處",
        },
        example: "受付は1階でございます。",
        exampleMeaning: {
          en: "The reception desk is on the first floor (polite).",
          zh: "服務台在一樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4014",
        expression: "ロビー",
        reading: "ロビー",
        definition: "建物の入口にある広間",
        meaning: {
          en: "lobby",
          zh: "大廳",
        },
        example: "ロビーはこちらです。",
        exampleMeaning: {
          en: "The lobby is this way.",
          zh: "大廳在這邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4015",
        expression: "部屋",
        reading: "へや",
        definition: "仕切られた空間",
        meaning: {
          en: "room",
          zh: "房間",
        },
        example: "社長室はあそこです。",
        exampleMeaning: {
          en: "The president's office is over there.",
          zh: "總經理辦公室在那邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4016",
        expression: "トイレ",
        reading: "トイレ",
        definition: "排泄や身繕いをする場所",
        meaning: {
          en: "toilet, restroom",
          zh: "廁所",
        },
        example: "すみません、トイレはどこですか。",
        exampleMeaning: {
          en: "Excuse me, where is the restroom?",
          zh: "不好意思，廁所在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4017",
        expression: "お手洗い",
        reading: "おてあらい",
        definition: "トイレ (より丁寧な表現)",
        meaning: {
          en: "toilet, restroom (polite)",
          zh: "洗手間 (更禮貌的說法)",
        },
        example: "お手洗いはどちらですか。",
        exampleMeaning: {
          en: "Where is the restroom? (polite)",
          zh: "請問洗手間在哪邊？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4018",
        expression: "階段",
        reading: "かいだん",
        definition: "上り下りするための段差",
        meaning: {
          en: "staircase",
          zh: "樓梯",
        },
        example: "階段はあそこです。",
        exampleMeaning: {
          en: "The stairs are over there.",
          zh: "樓梯在那邊。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4019",
        expression: "エレベーター",
        reading: "エレベーター",
        definition: "人を上下に運ぶ機器",
        meaning: {
          en: "elevator, lift",
          zh: "電梯",
        },
        example: "エレベーターはどちらですか。",
        exampleMeaning: {
          en: "Which way is the elevator? (polite)",
          zh: "請問電梯在哪邊？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4020",
        expression: "エスカレーター",
        reading: "エスカレーター",
        definition: "自動で上下する階段",
        meaning: {
          en: "escalator",
          zh: "電扶梯",
        },
        example: "エスカレーターはすぐそちらにあります。",
        exampleMeaning: {
          en: "The escalator is right there (near you).",
          zh: "電扶梯就在您附近。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4021",
        expression: "国",
        reading: "くに",
        definition: "国家、出身地",
        meaning: {
          en: "country",
          zh: "國家、故鄉",
        },
        example: "お国はどちらですか。",
        exampleMeaning: {
          en: "Where are you from? (polite)",
          zh: "您的國家是哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4022",
        expression: "会社",
        reading: "かいしゃ",
        definition: "ビジネスを行う組織",
        meaning: {
          en: "company, firm",
          zh: "公司",
        },
        example: "あなたの会社はどこですか。",
        exampleMeaning: {
          en: "Where is your company?",
          zh: "你的公司在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4023",
        expression: "うち",
        reading: "うち",
        definition: "自分の家、家族のいる場所",
        meaning: {
          en: "house, home",
          zh: "家",
        },
        example: "わたしのうちは東京です。",
        exampleMeaning: {
          en: "My home is in Tokyo.",
          zh: "我的家在東京。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4024",
        expression: "電話",
        reading: "でんわ",
        definition: "通信手段、機器",
        meaning: {
          en: "telephone, telephone call",
          zh: "電話、電話號碼",
        },
        example: "電話はロビーにあります。",
        exampleMeaning: {
          en: "There is a telephone in the lobby.",
          zh: "大廳有電話。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4025",
        expression: "靴",
        reading: "くつ",
        definition: "履物",
        meaning: {
          en: "shoes",
          zh: "鞋子",
        },
        example: "この靴はいくらですか。",
        exampleMeaning: {
          en: "How much are these shoes?",
          zh: "這雙鞋子多少錢？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4026",
        expression: "ネクタイ",
        reading: "ネクタイ",
        definition: "装飾品",
        meaning: {
          en: "necktie",
          zh: "領帶",
        },
        example: "そのネクタイは二千八百円です。",
        exampleMeaning: {
          en: "That necktie is 2,800 yen.",
          zh: "那條領帶是2,800日圓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4027",
        expression: "ワイン",
        reading: "ワイン",
        definition: "酒の一種",
        meaning: {
          en: "wine",
          zh: "葡萄酒",
        },
        example: "これはどこのワインですか。",
        exampleMeaning: {
          en: "What country is this wine from?",
          zh: "這是哪個國家的葡萄酒？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4028",
        expression: "たばこ",
        reading: "たばこ",
        definition: "喫煙具",
        meaning: {
          en: "tobacco, cigarette",
          zh: "香菸",
        },
        example: "たばこの売り場はどこですか。",
        exampleMeaning: {
          en: "Where is the cigarette counter?",
          zh: "賣香菸的櫃台在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4029",
        expression: "売り場",
        reading: "うりば",
        definition: "商品を売っている場所",
        meaning: {
          en: "department, counter (in a department store)",
          zh: "賣場、櫃台",
        },
        example: "ワイン売り場は地下1階です。",
        exampleMeaning: {
          en: "The wine department is on the first basement floor.",
          zh: "葡萄酒賣場在地下1樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4030",
        expression: "地下",
        reading: "ちか",
        definition: "地面の下の階",
        meaning: {
          en: "basement",
          zh: "地下",
        },
        example: "チーズ売り場は地下1階です。",
        exampleMeaning: {
          en: "The cheese counter is on the first basement floor.",
          zh: "乳酪櫃台在地下1樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4031",
        expression: "～階",
        reading: "～かい",
        definition: "建物の階数を数える助数詞",
        meaning: {
          en: "~th floor",
          zh: "～樓",
        },
        example: "ここは3階です。",
        exampleMeaning: {
          en: "This is the third floor.",
          zh: "這裡是三樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4032",
        expression: "何階",
        reading: "なんがい",
        definition: "階数を尋ねる疑問詞",
        meaning: {
          en: "what floor",
          zh: "幾樓",
        },
        example: "会議室は何階ですか。",
        exampleMeaning: {
          en: "What floor is the conference room on?",
          zh: "會議室在幾樓？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4033",
        expression: "～円",
        reading: "～えん",
        definition: "日本の通貨単位",
        meaning: {
          en: "yen (Japanese currency)",
          zh: "日圓",
        },
        example: "これは九万円です。",
        exampleMeaning: {
          en: "This is 90,000 yen.",
          zh: "這是九萬日圓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4034",
        expression: "いくら",
        reading: "いくら",
        definition: "値段を尋ねる疑問詞",
        meaning: {
          en: "how much",
          zh: "多少錢",
        },
        example: "そのワインはいくらですか。",
        exampleMeaning: {
          en: "How much is that wine?",
          zh: "那個葡萄酒多少錢？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4035",
        expression: "百",
        reading: "ひゃく",
        definition: "数詞",
        meaning: {
          en: "hundred",
          zh: "百",
        },
        example: "百円です。",
        exampleMeaning: {
          en: "It is 100 yen.",
          zh: "是一百日圓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4036",
        expression: "千",
        reading: "せん",
        definition: "数詞",
        meaning: {
          en: "thousand",
          zh: "千",
        },
        example: "千三百円です。",
        exampleMeaning: {
          en: "It is 1,300 yen.",
          zh: "是一千三百日圓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4037",
        expression: "万",
        reading: "まん",
        definition: "数詞",
        meaning: {
          en: "ten thousand",
          zh: "萬",
        },
        example: "二万五千円です。",
        exampleMeaning: {
          en: "It is 25,000 yen.",
          zh: "是兩萬五千日圓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4038",
        expression: "すみません",
        reading: "すみません",
        definition: "呼びかけたり、謝罪したりする時の言葉",
        meaning: {
          en: "Excuse me (to get attention or apologize)",
          zh: "不好意思、對不起",
        },
        example: "すみません、ワイン売り場はどこですか。",
        exampleMeaning: {
          en: "Excuse me, where is the wine department?",
          zh: "不好意思，請問賣葡萄酒的櫃台在哪裡？",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4039",
        expression: "～でございます",
        reading: "～でございます",
        definition: "「～です」の非常に丁寧な表現",
        meaning: {
          en: "(polite form of 'desu')",
          zh: "是～ (です 的最敬語)",
        },
        example: "受付は1階でございます。",
        exampleMeaning: {
          en: "The reception desk is on the first floor (very polite).",
          zh: "服務台在一樓。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4040",
        expression: "～を見せてください",
        reading: "～をみせてください",
        definition: "相手に何かを見せるように頼む表現",
        meaning: {
          en: "Please show me ~",
          zh: "請讓我看一下～",
        },
        example: "すみません、そのネクタイを見せてください。",
        exampleMeaning: {
          en: "Excuse me, please show me that necktie.",
          zh: "不好意思，請讓我看一下那條領帶。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4041",
        expression: "じゃ",
        reading: "じゃ",
        definition: "会話の流れを変える時や結論を言う時に使う言葉",
        meaning: {
          en: "well, then, in that case",
          zh: "那麼、那樣的話",
        },
        example: "じゃ、その靴をください。",
        exampleMeaning: {
          en: "Well then, give me those shoes, please.",
          zh: "那麼，請給我那雙鞋子。",
        },
      },
      {
        uuid: "30a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4042",
        expression: "～をください",
        reading: "～をください",
        definition: "何かを求める時の丁寧な表現",
        meaning: {
          en: "Give me ~, please.",
          zh: "請給我～",
        },
        example: "それをください。",
        exampleMeaning: {
          en: "Give me that one, please.",
          zh: "請給我那個。",
        },
      },
    ],
  },
  {
    uuid: "i1j2k3l4-7n8o-9p0q-1r2s-3t4u5v6w04",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 4",
      zh: "大家的日本語 初級I 第四課",
      ja: "みんなの日本語 初級I 第四課",
    },
    description: {
      en: "Learn time expressions, daily verbs, days of the week, and using ～から (from) and ～まで (until).",
      zh: "學習時間表達、日常動詞、星期幾，以及使用 ～から (從) 和 ～まで (到/為止)。",
      ja: "時間の表現、日常の動詞、曜日、そして「～から」「～まで」の使い方を学びます。",
    },
    words: [
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4001",
        expression: "起きます",
        reading: "おきます",
        definition: "寝ている状態から起き上がる",
        meaning: {
          en: "get up, wake up",
          zh: "起床、醒來",
        },
        example: "毎朝7時に起きます。",
        exampleMeaning: {
          en: "I wake up at 7:00 every morning.",
          zh: "我每天早上七點起床。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4002",
        expression: "寝ます",
        reading: "ねます",
        definition: "床に入る",
        meaning: {
          en: "sleep, go to bed",
          zh: "睡覺、上床睡覺",
        },
        example: "毎晩11時に寝ます。",
        exampleMeaning: {
          en: "I go to bed at 11:00 every night.",
          zh: "我每天晚上十一點睡覺。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4003",
        expression: "働きます",
        reading: "はたらきます",
        definition: "仕事をする",
        meaning: {
          en: "work",
          zh: "工作",
        },
        example: "午前9時から午後5時まで働きます。",
        exampleMeaning: {
          en: "I work from 9 a.m. to 5 p.m.",
          zh: "我從早上九點工作到下午五點。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4004",
        expression: "休みます",
        reading: "やすみます",
        definition: "休憩したり、仕事を休んだりする",
        meaning: {
          en: "take a rest, take a holiday",
          zh: "休息、放假",
        },
        example: "今日は休みます。",
        exampleMeaning: {
          en: "I'm taking the day off today.",
          zh: "我今天休息/放假。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4005",
        expression: "勉強します",
        reading: "べんきょうします",
        definition: "知識や技能を学ぶ",
        meaning: {
          en: "study",
          zh: "學習、讀書",
        },
        example: "毎日日本語を勉強します。",
        exampleMeaning: {
          en: "I study Japanese every day.",
          zh: "我每天學習日語。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4006",
        expression: "終わります",
        reading: "おわります",
        definition: "終了する",
        meaning: {
          en: "finish",
          zh: "結束、完成",
        },
        example: "会議は5時に終わります。",
        exampleMeaning: {
          en: "The meeting finishes at 5 o'clock.",
          zh: "會議在五點結束。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4007",
        expression: "デパート",
        reading: "デパート",
        definition: "百貨店",
        meaning: {
          en: "department store",
          zh: "百貨公司",
        },
        example: "デパートは何時からですか。",
        exampleMeaning: {
          en: "What time does the department store open?",
          zh: "百貨公司幾點開始營業？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4008",
        expression: "銀行",
        reading: "ぎんこう",
        definition: "金融機関",
        meaning: {
          en: "bank",
          zh: "銀行",
        },
        example: "銀行は3時に終わります。",
        exampleMeaning: {
          en: "The bank closes at 3 o'clock.",
          zh: "銀行三點結束營業。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4009",
        expression: "郵便局",
        reading: "ゆうびんきょく",
        definition: "郵便に関する業務を行う施設",
        meaning: {
          en: "post office",
          zh: "郵局",
        },
        example: "郵便局は土曜日も開いていますか。",
        exampleMeaning: {
          en: "Is the post office also open on Saturday?",
          zh: "郵局週六也開門嗎？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4010",
        expression: "図書館",
        reading: "としょかん",
        definition: "本や資料を収集・提供する施設",
        meaning: {
          en: "library",
          zh: "圖書館",
        },
        example: "図書館で勉強します。",
        exampleMeaning: {
          en: "I study at the library.",
          zh: "我在圖書館學習。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4011",
        expression: "美術館",
        reading: "びじゅつかん",
        definition: "美術品を展示する施設",
        meaning: {
          en: "art museum",
          zh: "美術館",
        },
        example: "美術館の休みは何曜日ですか。",
        exampleMeaning: {
          en: "What day of the week is the art museum closed?",
          zh: "美術館是星期幾休息？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4012",
        expression: "今",
        reading: "いま",
        definition: "現在の時",
        meaning: {
          en: "now",
          zh: "現在",
        },
        example: "今何時ですか。",
        exampleMeaning: {
          en: "What time is it now?",
          zh: "現在幾點了？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4013",
        expression: "～時",
        reading: "～じ",
        definition: "時刻を表す",
        meaning: {
          en: "~ o'clock",
          zh: "～點",
        },
        example: "今、4時15分です。",
        exampleMeaning: {
          en: "It is 4:15 now.",
          zh: "現在是四點十五分。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4014",
        expression: "～分",
        reading: "～ふん / ～ぷん",
        definition: "時間を細かく分ける単位",
        meaning: {
          en: "~ minute",
          zh: "～分",
        },
        example: "9時45分です。",
        exampleMeaning: {
          en: "It is 9:45.",
          zh: "是九點四十五分。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4015",
        expression: "半",
        reading: "はん",
        definition: "30分",
        meaning: {
          en: "half (of an hour)",
          zh: "半 (三十分)",
        },
        example: "11時半に寝ます。",
        exampleMeaning: {
          en: "I go to bed at 11:30.",
          zh: "我十一點半睡覺。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4016",
        expression: "何時",
        reading: "なんじ",
        definition: "時刻を尋ねる疑問詞",
        meaning: {
          en: "what time",
          zh: "幾點",
        },
        example: "日本の銀行は何時からですか。",
        exampleMeaning: {
          en: "What time does the bank in Japan open?",
          zh: "日本的銀行幾點開始營業？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4017",
        expression: "何分",
        reading: "なんぷん",
        definition: "分を尋ねる疑問詞",
        meaning: {
          en: "what minute",
          zh: "幾分",
        },
        example: "今、何時何分ですか。",
        exampleMeaning: {
          en: "What time and minute is it now?",
          zh: "現在幾點幾分？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4018",
        expression: "午前",
        reading: "ごぜん",
        definition: "正午より前の時間",
        meaning: {
          en: "a.m., morning",
          zh: "上午、凌晨 (am)",
        },
        example: "会議は午前9時からです。",
        exampleMeaning: {
          en: "The meeting is from 9 a.m.",
          zh: "會議從上午九點開始。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4019",
        expression: "午後",
        reading: "ごご",
        definition: "正午より後の時間",
        meaning: {
          en: "p.m., afternoon",
          zh: "下午、晚上 (pm)",
        },
        example: "デパートは午後8時に終わります。",
        exampleMeaning: {
          en: "The department store closes at 8 p.m.",
          zh: "百貨公司在下午八點結束營業。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4020",
        expression: "朝",
        reading: "あさ",
        definition: "日の出から正午までの時間",
        meaning: {
          en: "morning",
          zh: "早上",
        },
        example: "毎朝6時に起きます。",
        exampleMeaning: {
          en: "I wake up at 6:00 every morning.",
          zh: "我每天早上六點起床。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4021",
        expression: "昼",
        reading: "ひる",
        definition: "正午を挟んだ時間",
        meaning: {
          en: "daytime, noon",
          zh: "白天、中午",
        },
        example: "昼ごはんを食べます。",
        exampleMeaning: {
          en: "I eat lunch. / I eat my noon meal.",
          zh: "我吃午餐。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4022",
        expression: "晩",
        reading: "ばん",
        definition: "日の入りから夜までの時間",
        meaning: {
          en: "night, evening (less common than 'yoru')",
          zh: "晚上、傍晚",
        },
        example: "毎晩11時に寝ます。",
        exampleMeaning: {
          en: "I go to bed at 11:00 every evening.",
          zh: "我每天晚上十一點睡覺。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4023",
        expression: "夜",
        reading: "よる",
        definition: "日の入りから日の出までの時間",
        meaning: {
          en: "night, evening (more common than 'ban')",
          zh: "夜晚",
        },
        example: "昨日の夜は寝ませんでした。",
        exampleMeaning: {
          en: "I didn't sleep last night.",
          zh: "我昨晚沒睡覺。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4024",
        expression: "おととい",
        reading: "おととい",
        definition: "昨日の前の日",
        meaning: {
          en: "the day before yesterday",
          zh: "前天",
        },
        example: "おとといは休みでした。",
        exampleMeaning: {
          en: "The day before yesterday was a holiday/day off.",
          zh: "前天是假日/休息日。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4025",
        expression: "きのう",
        reading: "きのう",
        definition: "今日の一日前",
        meaning: {
          en: "yesterday",
          zh: "昨天",
        },
        example: "きのうは何時に寝ましたか。",
        exampleMeaning: {
          en: "What time did you go to bed yesterday?",
          zh: "你昨天幾點睡覺？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4026",
        expression: "きょう",
        reading: "きょう",
        definition: "現在の日",
        meaning: {
          en: "today",
          zh: "今天",
        },
        example: "今日は金曜日です。",
        exampleMeaning: {
          en: "Today is Friday.",
          zh: "今天是星期五。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4027",
        expression: "あした",
        reading: "あした",
        definition: "今日の一日後",
        meaning: {
          en: "tomorrow",
          zh: "明天",
        },
        example: "あしたも休みですか。",
        exampleMeaning: {
          en: "Is tomorrow also a holiday/day off?",
          zh: "明天也是假日嗎？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4028",
        expression: "あさって",
        reading: "あさって",
        definition: "明日の次の日",
        meaning: {
          en: "the day after tomorrow",
          zh: "後天",
        },
        example: "あさっては日曜日です。",
        exampleMeaning: {
          en: "The day after tomorrow is Sunday.",
          zh: "後天是星期日。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4029",
        expression: "けさ",
        reading: "けさ",
        definition: "今日の朝",
        meaning: {
          en: "this morning",
          zh: "今天早上",
        },
        example: "けさは10時まで寝ました。",
        exampleMeaning: {
          en: "I slept until 10:00 this morning.",
          zh: "我今天早上睡到十點。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4030",
        expression: "今晩",
        reading: "こんばん",
        definition: "今日の晩",
        meaning: {
          en: "this evening, tonight",
          zh: "今天晚上",
        },
        example: "今晩はパーティーがあります。",
        exampleMeaning: {
          en: "There is a party tonight.",
          zh: "今晚有一個派對。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4031",
        expression: "休み",
        reading: "やすみ",
        definition: "休憩や休日",
        meaning: {
          en: "rest, a holiday, a day off (noun)",
          zh: "休息、假日、休假 (名詞)",
        },
        example: "あなたの休みは何曜日ですか。",
        exampleMeaning: {
          en: "What day of the week is your day off?",
          zh: "你的休息日是星期幾？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4032",
        expression: "昼休み",
        reading: "ひるやすみ",
        definition: "昼の休憩時間",
        meaning: {
          en: "lunchtime",
          zh: "午休時間",
        },
        example: "昼休みは12時からです。",
        exampleMeaning: {
          en: "Lunchtime starts from 12 o'clock.",
          zh: "午休時間從十二點開始。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4033",
        expression: "毎朝",
        reading: "まいあさ",
        definition: "毎日の朝",
        meaning: {
          en: "every morning",
          zh: "每天早上",
        },
        example: "毎朝何時に起きますか。",
        exampleMeaning: {
          en: "What time do you wake up every morning?",
          zh: "你每天早上幾點起床？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4034",
        expression: "毎晩",
        reading: "まいばん",
        definition: "毎日の晩",
        meaning: {
          en: "every evening, every night",
          zh: "每天晚上",
        },
        example: "わたしは毎晩11時に寝ます。",
        exampleMeaning: {
          en: "I go to bed at 11:00 every night.",
          zh: "我每天晚上十一點睡覺。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4035",
        expression: "毎日",
        reading: "まいにち",
        definition: "すべての日",
        meaning: {
          en: "every day",
          zh: "每天",
        },
        example: "毎日働きますか。",
        exampleMeaning: {
          en: "Do you work every day?",
          zh: "你每天都工作嗎？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4036",
        expression: "月曜日",
        reading: "げつようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Monday",
          zh: "星期一",
        },
        example: "休みは土曜日と日曜日です。",
        exampleMeaning: {
          en: "My days off are Saturday and Sunday.",
          zh: "我的休假日是星期六和星期日。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4037",
        expression: "火曜日",
        reading: "かようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Tuesday",
          zh: "星期二",
        },
        example: "火曜日に会議があります。",
        exampleMeaning: {
          en: "There is a meeting on Tuesday.",
          zh: "星期二有會議。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4038",
        expression: "水曜日",
        reading: "すいようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Wednesday",
          zh: "星期三",
        },
        example: "水曜日は忙しいです。",
        exampleMeaning: {
          en: "Wednesday is busy.",
          zh: "星期三很忙。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4039",
        expression: "木曜日",
        reading: "もくようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Thursday",
          zh: "星期四",
        },
        example: "木曜日に図書館に行きます。",
        exampleMeaning: {
          en: "I go to the library on Thursday.",
          zh: "我星期四去圖書館。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4040",
        expression: "金曜日",
        reading: "きんようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Friday",
          zh: "星期五",
        },
        example: "今日は金曜日じゃありませんか。",
        exampleMeaning: {
          en: "Isn't today Friday?",
          zh: "今天不是星期五嗎？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4041",
        expression: "土曜日",
        reading: "どようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Saturday",
          zh: "星期六",
        },
        example: "土曜日は休みです。",
        exampleMeaning: {
          en: "Saturday is a day off.",
          zh: "星期六是休息日。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4042",
        expression: "日曜日",
        reading: "にちようび",
        definition: "曜日の一つ",
        meaning: {
          en: "Sunday",
          zh: "星期日",
        },
        example: "日曜日も働きますか。",
        exampleMeaning: {
          en: "Do you also work on Sunday?",
          zh: "你星期日也工作嗎？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4043",
        expression: "何曜日",
        reading: "なんようび",
        definition: "曜日を尋ねる疑問詞",
        meaning: {
          en: "what day of the week",
          zh: "星期幾",
        },
        example: "今日は何曜日ですか。",
        exampleMeaning: {
          en: "What day of the week is today?",
          zh: "今天是星期幾？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4044",
        expression: "番号",
        reading: "ばんごう",
        definition: "順序や識別を示す数字",
        meaning: {
          en: "number",
          zh: "號碼",
        },
        example: "電話番号は何番ですか。",
        exampleMeaning: {
          en: "What is the telephone number?",
          zh: "電話號碼是幾號？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4045",
        expression: "何番",
        reading: "なんばん",
        definition: "番号を尋ねる疑問詞",
        meaning: {
          en: "what number",
          zh: "幾號",
        },
        example: "受付は何番ですか。",
        exampleMeaning: {
          en: "What number is the reception desk?",
          zh: "服務台是幾號？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4046",
        expression: "～から",
        reading: "～から",
        definition: "起点を表す助詞",
        meaning: {
          en: "from ~ (time/place)",
          zh: "從～ (時間/地點)",
        },
        example: "銀行は9時から3時までです。",
        exampleMeaning: {
          en: "The bank is open from 9:00 to 3:00.",
          zh: "銀行從九點到三點營業。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4047",
        expression: "～まで",
        reading: "～まで",
        definition: "終点を表す助詞",
        meaning: {
          en: "up to ~, until ~ (time/place)",
          zh: "到～、為止 (時間/地點)",
        },
        example: "毎日5時半まで働きます。",
        exampleMeaning: {
          en: "I work until 5:30 every day.",
          zh: "我每天工作到五點半。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4048",
        expression: "～と～",
        reading: "～と～",
        definition: "名詞を並列でつなぐ助詞",
        meaning: {
          en: "and (used to connect nouns)",
          zh: "和、跟 (連接名詞)",
        },
        example: "休みは土曜日と日曜日です。",
        exampleMeaning: {
          en: "The holidays are Saturday and Sunday.",
          zh: "假日是星期六和星期日。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4049",
        expression: "そちら",
        reading: "そちら",
        definition: "相手のいる場所、相手の会社など (より丁寧な表現)",
        meaning: {
          en: "your place (polite way to refer to the listener's location/company)",
          zh: "您那邊、貴公司",
        },
        example: "そちらは何時からですか。",
        exampleMeaning: {
          en: "What time is it at your location/company?",
          zh: "您那邊是幾點？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4050",
        expression: "大変ですね",
        reading: "たいへんですね",
        definition: "相手の苦労をねぎらう言葉",
        meaning: {
          en: "That's tough, isn't it? / That sounds difficult. (used when expressing sympathy)",
          zh: "真辛苦啊、不容易啊",
        },
        example: "毎日働きます。大変ですね。",
        exampleMeaning: {
          en: "I work every day. That's tough, isn't it?",
          zh: "我每天都工作。真辛苦啊。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4051",
        expression: "えーと",
        reading: "えーと",
        definition: "話す前や考える時のためらいの言葉",
        meaning: {
          en: "well, let me see, um...",
          zh: "嗯... 讓我想想",
        },
        example: "えーと、会議は10時からです。",
        exampleMeaning: {
          en: "Um, the meeting is from 10 o'clock.",
          zh: "嗯... 會議從十點開始。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4052",
        expression: "お願いします",
        reading: "おねがいします",
        definition: "何かを依頼する時の丁寧な言葉",
        meaning: {
          en: "Please. (lit. ask for a favor)",
          zh: "麻煩您了、拜託了",
        },
        example: "山田さんをお願いします。",
        exampleMeaning: {
          en: "May I speak to Mr./Ms. Yamada, please. (on the phone)",
          zh: "麻煩請找山田先生/小姐。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4053",
        expression: "かしこまりました",
        reading: "かしこまりました",
        definition: "相手の言葉を承諾する時の非常に丁寧な言葉",
        meaning: {
          en: "Certainly (sir, madam) (polite acknowledgement)",
          zh: "我明白了、遵命 (最禮貌的答覆)",
        },
        example: "かしこまりました。お伝えします。",
        exampleMeaning: {
          en: "Certainly, sir/madam. I will tell them.",
          zh: "我明白了。我會轉告的。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4054",
        expression: "お問い合わせの番号",
        reading: "おといあわせのばんごう",
        definition: "客が尋ねている番号",
        meaning: {
          en: "the number being inquired about",
          zh: "您所詢問的號碼",
        },
        example: "お問い合わせの番号は...",
        exampleMeaning: {
          en: "The number you are inquiring about is...",
          zh: "您所詢問的號碼是...",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4055",
        expression: "どうもありがとうございました",
        reading: "どうもありがとうございました",
        definition: "過去の行為に対する非常に丁寧な感謝の言葉",
        meaning: {
          en: "Thank you very much (for what you did)",
          zh: "非常感謝 (對過去行為的感謝)",
        },
        example: "電話、どうもありがとうございました。",
        exampleMeaning: {
          en: "Thank you very much for your call.",
          zh: "非常感謝您的來電。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4056",
        expression: "ニューヨーク",
        reading: "ニューヨーク",
        definition: "地名",
        meaning: {
          en: "New York",
          zh: "紐約",
        },
        example: "ニューヨークは今何時ですか。",
        exampleMeaning: {
          en: "What time is it in New York now?",
          zh: "紐約現在幾點？",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4057",
        expression: "ペキン",
        reading: "ペキン",
        definition: "地名",
        meaning: {
          en: "Beijing",
          zh: "北京",
        },
        example: "ペキンはそちらより1時間早いです。",
        exampleMeaning: {
          en: "Beijing is one hour earlier than your location.",
          zh: "北京比您那邊早一個小時。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4058",
        expression: "ロンドン",
        reading: "ロンドン",
        definition: "地名",
        meaning: {
          en: "London",
          zh: "倫敦",
        },
        example: "ロンドンは今、朝の8時です。",
        exampleMeaning: {
          en: "It is 8 o'clock in the morning in London now.",
          zh: "倫敦現在是早上八點。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4059",
        expression: "バンコク",
        reading: "バンコク",
        definition: "地名",
        meaning: {
          en: "Bangkok",
          zh: "曼谷",
        },
        example: "バンコクから来ました。",
        exampleMeaning: {
          en: "I came from Bangkok.",
          zh: "我來自曼谷。",
        },
      },
      {
        uuid: "40a1b2c3-4d5e-6f70-8a9b-0c1d2e3f4060",
        expression: "ロサンゼルス",
        reading: "ロサンゼルス",
        definition: "地名",
        meaning: {
          en: "Los Angeles",
          zh: "洛杉磯",
        },
        example: "ロサンゼルスで働きたいです。",
        exampleMeaning: {
          en: "I want to work in Los Angeles.",
          zh: "我想在洛杉磯工作。",
        },
      },
    ],
  },
  {
    uuid: "j1k2l3m4-8o9p-0q1r-2s3t-4u5v6w7x05",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 5",
      zh: "大家的日本語 初級I 第五課",
      ja: "みんなの日本語 初級I 第五課",
    },
    description: {
      en: "Learn verbs of motion (go, come, return), modes of transport (by, on foot), expressing dates, and asking 'when' (いつ).",
      zh: "學習移動動詞（去、來、回）、交通工具（用～去/來/回、走路）、表達日期和詢問「何時」。",
      ja: "移動動詞（行きます、来ます、帰ります）、交通手段、日付の表現、そして「いつ」の使い方を学びます。",
    },
    words: [
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5001",
        expression: "行ます",
        reading: "いきます",
        definition: "話し手から遠ざかる移動",
        meaning: {
          en: "go (away from the speaker)",
          zh: "去",
        },
        example: "明日、図書館へ行きます。",
        exampleMeaning: {
          en: "I will go to the library tomorrow.",
          zh: "我明天要去圖書館。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5002",
        expression: "来ます",
        reading: "きます",
        definition: "話し手のいる場所へ近づく移動",
        meaning: {
          en: "come (toward the speaker)",
          zh: "來",
        },
        example: "去年、日本へ来ました。",
        exampleMeaning: {
          en: "I came to Japan last year.",
          zh: "我去年來到日本。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5003",
        expression: "帰ります",
        reading: "かえります",
        definition: "自分の家や国など、元の場所へ戻る",
        meaning: {
          en: "go home, return",
          zh: "回家、回去、回國",
        },
        example: "来月、国へ帰ります。",
        exampleMeaning: {
          en: "I will return to my country next month.",
          zh: "我下個月要回國。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5004",
        expression: "学校",
        reading: "がっこう",
        definition: "教育施設",
        meaning: {
          en: "school",
          zh: "學校",
        },
        example: "バスで学校へ行きます。",
        exampleMeaning: {
          en: "I go to school by bus.",
          zh: "我搭巴士去學校。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5005",
        expression: "スーパー",
        reading: "スーパー",
        definition: "食料品などを売る店",
        meaning: {
          en: "supermarket",
          zh: "超級市場",
        },
        example: "昨日、スーパーへ行きました。",
        exampleMeaning: {
          en: "I went to the supermarket yesterday.",
          zh: "我昨天去了超級市場。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5006",
        expression: "駅",
        reading: "えき",
        definition: "鉄道の停車場",
        meaning: {
          en: "station (train/subway)",
          zh: "車站",
        },
        example: "駅まで歩いて行きます。",
        exampleMeaning: {
          en: "I will walk (on foot) to the station.",
          zh: "我走路去車站。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5007",
        expression: "飛行機",
        reading: "ひこうき",
        definition: "空を飛ぶ乗り物",
        meaning: {
          en: "airplane",
          zh: "飛機",
        },
        example: "飛行機で旅行に行きます。",
        exampleMeaning: {
          en: "I will go on a trip by airplane.",
          zh: "我會搭飛機去旅行。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5008",
        expression: "船",
        reading: "ふね",
        definition: "水上を航行する乗り物",
        meaning: {
          en: "ship, boat",
          zh: "船",
        },
        example: "船で来ました。",
        exampleMeaning: {
          en: "I came by ship.",
          zh: "我是搭船來的。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5009",
        expression: "電車",
        reading: "でんしゃ",
        definition: "電気で動く列車",
        meaning: {
          en: "electric train",
          zh: "電車",
        },
        example: "電車で会社へ行きます。",
        exampleMeaning: {
          en: "I go to the office by train.",
          zh: "我搭電車去公司。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5010",
        expression: "地下鉄",
        reading: "ちかてつ",
        definition: "地下を走る鉄道",
        meaning: {
          en: "subway, underground",
          zh: "地鐵",
        },
        example: "地下鉄で駅へ行きます。",
        exampleMeaning: {
          en: "I go to the station by subway.",
          zh: "我搭地鐵去車站。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5011",
        expression: "新幹線",
        reading: "しんかんせん",
        definition: "日本の高速鉄道",
        meaning: {
          en: "the Shinkansen, the bullet train",
          zh: "新幹線",
        },
        example: "新幹線で京都へ行きます。",
        exampleMeaning: {
          en: "I will go to Kyoto by Shinkansen.",
          zh: "我會搭新幹線去京都。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5012",
        expression: "バス",
        reading: "バス",
        definition: "乗合自動車",
        meaning: {
          en: "bus",
          zh: "巴士、公車",
        },
        example: "バスで学校へ行きます。",
        exampleMeaning: {
          en: "I go to school by bus.",
          zh: "我搭巴士去學校。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5013",
        expression: "タクシー",
        reading: "タクシー",
        definition: "乗客を目的地まで運ぶ自動車",
        meaning: {
          en: "taxi",
          zh: "計程車、的士",
        },
        example: "タクシーでうちへ帰ります。",
        exampleMeaning: {
          en: "I'll go home by taxi.",
          zh: "我要搭計程車回家。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5014",
        expression: "自転車",
        reading: "じてんしゃ",
        definition: "ペダルをこいで進む乗り物",
        meaning: {
          en: "bicycle",
          zh: "腳踏車、自行車",
        },
        example: "自転車でスーパーへ行きます。",
        exampleMeaning: {
          en: "I go to the supermarket by bicycle.",
          zh: "我騎腳踏車去超級市場。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5015",
        expression: "歩いて",
        reading: "あるいて",
        definition: "足を使って移動する (動詞「歩く」のて形)",
        meaning: {
          en: "on foot (te-form of the verb 'to walk')",
          zh: "走路、徒步",
        },
        example: "毎日、歩いて会社へ行きます。",
        exampleMeaning: {
          en: "I go to the office on foot every day.",
          zh: "我每天走路去公司。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5016",
        expression: "人",
        reading: "ひと",
        definition: "人間",
        meaning: {
          en: "person, people",
          zh: "人",
        },
        example: "だれと行きますか。",
        exampleMeaning: {
          en: "Who are you going with?",
          zh: "你要和誰一起去？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5017",
        expression: "友達",
        reading: "ともだち",
        definition: "親しい間柄の人",
        meaning: {
          en: "friend",
          zh: "朋友",
        },
        example: "友達とデパートへ行きました。",
        exampleMeaning: {
          en: "I went to the department store with my friend.",
          zh: "我和朋友一起去了百貨公司。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5018",
        expression: "彼",
        reading: "かれ",
        definition: "男性、恋人の男性",
        meaning: {
          en: "he, boyfriend, lover",
          zh: "他、男朋友",
        },
        example: "彼は今週、日本へ来ます。",
        exampleMeaning: {
          en: "He is coming to Japan this week.",
          zh: "他這週會來日本。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5019",
        expression: "彼女",
        reading: "かのじょ",
        definition: "女性、恋人の女性",
        meaning: {
          en: "she, girlfriend, lover",
          zh: "她、女朋友",
        },
        example: "彼女は家族と帰りました。",
        exampleMeaning: {
          en: "She went home with her family.",
          zh: "她和家人一起回去了。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5020",
        expression: "家族",
        reading: "かぞく",
        definition: "血縁や婚姻で結ばれた集団",
        meaning: {
          en: "family",
          zh: "家人、家庭",
        },
        example: "家族と美術館へ行きます。",
        exampleMeaning: {
          en: "I will go to the art museum with my family.",
          zh: "我要和家人一起去美術館。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5021",
        expression: "一人で",
        reading: "ひとりで",
        definition: "他の人と一緒ではない",
        meaning: {
          en: "alone, by oneself",
          zh: "一個人、獨自",
        },
        example: "一人で学校へ行きます。",
        exampleMeaning: {
          en: "I go to school alone.",
          zh: "我一個人去學校。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5022",
        expression: "先週",
        reading: "せんしゅう",
        definition: "今週の前の週",
        meaning: {
          en: "last week",
          zh: "上週",
        },
        example: "先週、どこへも行きませんでした。",
        exampleMeaning: {
          en: "I didn't go anywhere last week.",
          zh: "我上週哪裡都沒去。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5023",
        expression: "今週",
        reading: "こんしゅう",
        definition: "現在の週",
        meaning: {
          en: "this week",
          zh: "這週",
        },
        example: "今週は忙しいです。",
        exampleMeaning: {
          en: "I am busy this week.",
          zh: "我這週很忙。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5024",
        expression: "来週",
        reading: "らいしゅう",
        definition: "今週の後の週",
        meaning: {
          en: "next week",
          zh: "下週",
        },
        example: "来週、北海道へ行きます。",
        exampleMeaning: {
          en: "I will go to Hokkaido next week.",
          zh: "我下週要去北海道。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5025",
        expression: "先月",
        reading: "せんげつ",
        definition: "今月の前の月",
        meaning: {
          en: "last month",
          zh: "上個月",
        },
        example: "先月、日本へ来ました。",
        exampleMeaning: {
          en: "I came to Japan last month.",
          zh: "我上個月來到日本。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5026",
        expression: "今月",
        reading: "こんげつ",
        definition: "現在の月",
        meaning: {
          en: "this month",
          zh: "這個月",
        },
        example: "今月は休みが多いです。",
        exampleMeaning: {
          en: "There are many holidays this month.",
          zh: "這個月有很多假期。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5027",
        expression: "来月",
        reading: "らいげつ",
        definition: "今月の後の月",
        meaning: {
          en: "next month",
          zh: "下個月",
        },
        example: "来月、国へ帰ります。",
        exampleMeaning: {
          en: "I will return to my country next month.",
          zh: "我下個月要回國。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5028",
        expression: "去年",
        reading: "きょねん",
        definition: "今年の前の年",
        meaning: {
          en: "last year",
          zh: "去年",
        },
        example: "去年、家族と旅行しました。",
        exampleMeaning: {
          en: "I traveled with my family last year.",
          zh: "我去年和家人一起旅行了。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5029",
        expression: "ことし",
        reading: "ことし",
        definition: "現在の年",
        meaning: {
          en: "this year",
          zh: "今年",
        },
        example: "今年は日本で勉強します。",
        exampleMeaning: {
          en: "I will study in Japan this year.",
          zh: "我今年在日本學習。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5030",
        expression: "来年",
        reading: "らいねん",
        definition: "今年の後の年",
        meaning: {
          en: "next year",
          zh: "明年",
        },
        example: "来年、また来ます。",
        exampleMeaning: {
          en: "I will come again next year.",
          zh: "我明年會再來。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5031",
        expression: "～月",
        reading: "～がつ",
        definition: "月を数える助数詞",
        meaning: {
          en: "~th month of the year",
          zh: "～月",
        },
        example: "わたしの誕生日は5月です。",
        exampleMeaning: {
          en: "My birthday is in May (the 5th month).",
          zh: "我的生日是五月。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5032",
        expression: "何月",
        reading: "なんがつ",
        definition: "月を尋ねる疑問詞",
        meaning: {
          en: "what month",
          zh: "幾月",
        },
        example: "誕生日は何月ですか。",
        exampleMeaning: {
          en: "What month is your birthday?",
          zh: "你的生日是幾月？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5033",
        expression: "一日",
        reading: "ついたち",
        definition: "月の初めの日",
        meaning: {
          en: "first day of the month",
          zh: "一日 (一號)",
        },
        example: "会議は5月1日です。",
        exampleMeaning: {
          en: "The meeting is on May 1st.",
          zh: "會議在五月一日。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5034",
        expression: "二日",
        reading: "ふつか",
        definition: "2日、2日間",
        meaning: {
          en: "second day of the month, two days",
          zh: "二日 (二號)、兩天",
        },
        example: "2日休みます。",
        exampleMeaning: {
          en: "I will take two days off.",
          zh: "我會休假兩天。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5035",
        expression: "三日",
        reading: "みっか",
        definition: "3日、3日間",
        meaning: {
          en: "third day of the month, three days",
          zh: "三日 (三號)、三天",
        },
        example: "東京に三日いました。",
        exampleMeaning: {
          en: "I was in Tokyo for three days.",
          zh: "我在東京待了三天。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5036",
        expression: "四日",
        reading: "よっか",
        definition: "4日、4日間",
        meaning: {
          en: "fourth day of the month, four days",
          zh: "四日 (四號)、四天",
        },
        example: "テストは四日です。",
        exampleMeaning: {
          en: "The test is on the fourth.",
          zh: "考試在四號。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5037",
        expression: "五日",
        reading: "いつか",
        definition: "5日、5日間",
        meaning: {
          en: "fifth day of the month, five days",
          zh: "五日 (五號)、五天",
        },
        example: "来月の五日に旅行します。",
        exampleMeaning: {
          en: "I will travel on the fifth of next month.",
          zh: "我下個月的五號去旅行。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5038",
        expression: "六日",
        reading: "むいか",
        definition: "6日、6日間",
        meaning: {
          en: "sixth day of the month, six days",
          zh: "六日 (六號)、六天",
        },
        example: "むいか働きました。",
        exampleMeaning: {
          en: "I worked for six days.",
          zh: "我工作了六天。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5039",
        expression: "七日",
        reading: "なのか",
        definition: "7日、7日間",
        meaning: {
          en: "seventh day of the month, seven days",
          zh: "七日 (七號)、七天",
        },
        example: "七日に帰ります。",
        exampleMeaning: {
          en: "I will return on the seventh.",
          zh: "我會在七號回去。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5040",
        expression: "八日",
        reading: "ようか",
        definition: "8日、8日間",
        meaning: {
          en: "eighth day of the month, eight days",
          zh: "八日 (八號)、八天",
        },
        example: "八日に試験があります。",
        exampleMeaning: {
          en: "There is a test on the eighth.",
          zh: "八號有考試。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5041",
        expression: "九日",
        reading: "ここのか",
        definition: "9日、9日間",
        meaning: {
          en: "ninth day of the month, nine days",
          zh: "九日 (九號)、九天",
        },
        example: "ここのか旅行に行きました。",
        exampleMeaning: {
          en: "I went on a trip for nine days.",
          zh: "我去旅行了九天。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5042",
        expression: "十日",
        reading: "とおか",
        definition: "10日、10日間",
        meaning: {
          en: "tenth day of the month, ten days",
          zh: "十日 (十號)、十天",
        },
        example: "十日に会議があります。",
        exampleMeaning: {
          en: "There is a meeting on the tenth.",
          zh: "十號有會議。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5043",
        expression: "十四日",
        reading: "じゅうよっか",
        definition: "14日、14日間",
        meaning: {
          en: "fourteenth day of the month, fourteen days",
          zh: "十四日 (十四號)、十四天",
        },
        example: "出張は十四日間です。",
        exampleMeaning: {
          en: "The business trip is for fourteen days.",
          zh: "出差為期十四天。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5044",
        expression: "二十日",
        reading: "はつか",
        definition: "20日、20日間",
        meaning: {
          en: "twentieth day of the month, twenty days",
          zh: "二十日 (二十號)、二十天",
        },
        example: "友達が二十日に来ます。",
        exampleMeaning: {
          en: "My friend is coming on the twentieth.",
          zh: "我的朋友二十號會來。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5045",
        expression: "二十四日",
        reading: "にじゅうよっか",
        definition: "24日、24日間",
        meaning: {
          en: "twenty-fourth day of the month, twenty-four days",
          zh: "二十四日 (二十四號)、二十四天",
        },
        example: "誕生日は二十四日です。",
        exampleMeaning: {
          en: "My birthday is on the twenty-fourth.",
          zh: "我的生日在二十四號。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5046",
        expression: "～日",
        reading: "～にち",
        definition:
          "日付や日数を表す助数詞 (「ついたち」から「とおか」などの特殊な読み方以外)",
        meaning: {
          en: "~th day of the month, ~ days (used for most dates/days except 1st-10th, 14th, 20th, 24th)",
          zh: "～日 (日期)、～天 (日數)",
        },
        example: "今日は15日です。",
        exampleMeaning: {
          en: "Today is the 15th.",
          zh: "今天是十五號。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5047",
        expression: "何日",
        reading: "なんにち",
        definition: "日付や日数を尋ねる疑問詞",
        meaning: {
          en: "which day of the month, how many days",
          zh: "幾號 (日期)、幾天 (日數)",
        },
        example: "今日は何日ですか。",
        exampleMeaning: {
          en: "What day of the month is today?",
          zh: "今天是幾號？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5048",
        expression: "いつ",
        reading: "いつ",
        definition: "時間を尋ねる疑問詞",
        meaning: {
          en: "when",
          zh: "何時、什麼時候",
        },
        example: "いつ日本へ行きましたか。",
        exampleMeaning: {
          en: "When did you go to Japan?",
          zh: "你是什麼時候去日本的？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5049",
        expression: "誕生日",
        reading: "たんじょうび",
        definition: "生まれた日",
        meaning: {
          en: "birthday",
          zh: "生日",
        },
        example: "誕生日はいつですか。",
        exampleMeaning: {
          en: "When is your birthday?",
          zh: "你的生日是什麼時候？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5050",
        expression: "普通",
        reading: "ふつう",
        definition: "停車駅が多い列車種別",
        meaning: {
          en: "local (train)",
          zh: "普通 (慢車)",
        },
        example: "次の普通電車は1番線です。",
        exampleMeaning: {
          en: "The next local train is on platform 1.",
          zh: "下一班普通電車在一號月台。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5051",
        expression: "急行",
        reading: "きゅうこう",
        definition: "停車駅が少ない列車種別",
        meaning: {
          en: "rapid, express (train, slightly faster than local)",
          zh: "急行 (快車)",
        },
        example: "急行列車で駅へ行きます。",
        exampleMeaning: {
          en: "I go to the station by rapid train.",
          zh: "我搭急行列車去車站。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5052",
        expression: "特急",
        reading: "とっきゅう",
        definition: "停車駅が最も少ない列車種別",
        meaning: {
          en: "limited express (train, fastest of the three)",
          zh: "特急 (特快車)",
        },
        example: "特急はもう来ましたか。",
        exampleMeaning: {
          en: "Has the limited express train already arrived?",
          zh: "特快車已經來了嗎？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5053",
        expression: "次の",
        reading: "つぎの",
        definition: "順序が一つ後の",
        meaning: {
          en: "next",
          zh: "下一個、下次的",
        },
        example: "次の電車は何時ですか。",
        exampleMeaning: {
          en: "What time is the next train?",
          zh: "下一班電車是幾點？",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5054",
        expression: "どういたしまして",
        reading: "どういたしまして",
        definition: "感謝の言葉に対する返答",
        meaning: {
          en: "You're welcome, Don't mention it",
          zh: "不客氣",
        },
        example: "A: どうもありがとうございました。 B: どういたしまして。",
        exampleMeaning: {
          en: "A: Thank you very much. B: You're welcome.",
          zh: "A: 非常感謝。 B: 不客氣。",
        },
      },
      {
        uuid: "50a1b2c3-4d5e-6f70-8a9b-0c1d2e3f5055",
        expression: "～番線",
        reading: "～ばんせん",
        definition: "駅のプラットホームの番号",
        meaning: {
          en: "platform ~, ~th platform",
          zh: "～號月台",
        },
        example: "東京行きは3番線です。",
        exampleMeaning: {
          en: "The train bound for Tokyo is on platform 3.",
          zh: "開往東京的列車在三號月台。",
        },
      },
    ],
  },
  {
    uuid: "k1l2m3n4-9p0q-1r2s-3t4u-5v6w7x8y06",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 6",
      zh: "大家的日本語 初級I 第六課",
      ja: "みんなの日本語 初級I 第六課",
    },
    description: {
      en: "Focus on transitive verbs and the direct object particle を (o), common food and drink, and frequency adverbs.",
      zh: "專注於他動詞和直接受詞助詞 を (o)，常見的食物和飲料，以及頻率副詞。",
      ja: "他動詞と直接目的語を示す助詞「を」に焦点を当て、一般的な食べ物や飲み物、頻度を表す副詞を学びます。",
    },
    words: [
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6001",
        expression: "食べます",
        reading: "たべます",
        definition: "食物を口に入れる",
        meaning: {
          en: "eat",
          zh: "吃",
        },
        example: "朝ごはんを食べます。",
        exampleMeaning: {
          en: "I eat breakfast.",
          zh: "我吃早餐。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6002",
        expression: "飲みます",
        reading: "のみます",
        definition: "液体を飲む",
        meaning: {
          en: "drink",
          zh: "喝",
        },
        example: "水を飲みます。",
        exampleMeaning: {
          en: "I drink water.",
          zh: "我喝水。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6003",
        expression: "吸います",
        reading: "すいます",
        definition: "煙などを肺に入れる",
        meaning: {
          en: "smoke (e.g., a cigarette)",
          zh: "吸 (煙)",
        },
        example: "時々たばこを吸います。",
        exampleMeaning: {
          en: "I sometimes smoke cigarettes.",
          zh: "我偶爾抽菸。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6004",
        expression: "たばこを吸います",
        reading: "たばこをすいます",
        definition: "喫煙する",
        meaning: {
          en: "smoke a cigarette",
          zh: "抽菸",
        },
        example: "ここでたばこを吸いますか。",
        exampleMeaning: {
          en: "Do you smoke cigarettes here?",
          zh: "你在這裡抽菸嗎？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6005",
        expression: "見ます",
        reading: "みます",
        definition: "視覚で捉える",
        meaning: {
          en: "see, look at, watch",
          zh: "看、觀看",
        },
        example: "毎日、映画を見ます。",
        exampleMeaning: {
          en: "I watch a movie every day.",
          zh: "我每天看電影。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6006",
        expression: "聞きます",
        reading: "ききます",
        definition: "聴覚で捉える、耳を傾ける",
        meaning: {
          en: "hear, listen",
          zh: "聽、聞 (聲音)",
        },
        example: "いつも音楽を聞きます。",
        exampleMeaning: {
          en: "I always listen to music.",
          zh: "我總是在聽音樂。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6007",
        expression: "読みます",
        reading: "よみます",
        definition: "書かれた文字を理解する",
        meaning: {
          en: "read",
          zh: "讀、閱讀",
        },
        example: "手紙を読みます。",
        exampleMeaning: {
          en: "I read a letter.",
          zh: "我讀一封信。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6008",
        expression: "書きます",
        reading: "かきます",
        definition: "文字や絵を紙などに記す",
        meaning: {
          en: "write, draw, paint",
          zh: "寫、畫",
        },
        example: "レポートを書きます。",
        exampleMeaning: {
          en: "I write a report.",
          zh: "我寫一份報告。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6009",
        expression: "買います",
        reading: "かいます",
        definition: "お金を払って物を手に入れる",
        meaning: {
          en: "buy",
          zh: "買",
        },
        example: "店でパンを買います。",
        exampleMeaning: {
          en: "I buy bread at the store.",
          zh: "我在店裡買麵包。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6010",
        expression: "撮ります",
        reading: "とります",
        definition: "カメラなどで画像を記録する",
        meaning: {
          en: "take (a photograph)",
          zh: "拍 (照片)",
        },
        example: "写真を撮ります。",
        exampleMeaning: {
          en: "I take a picture.",
          zh: "我拍一張照片。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6011",
        expression: "写真を撮ります",
        reading: "しゃしんをとります",
        definition: "カメラなどで画像を記録する",
        meaning: {
          en: "take a picture, take a photograph",
          zh: "拍照",
        },
        example: "いっしょに写真を撮りましょう。",
        exampleMeaning: {
          en: "Let's take a picture together.",
          zh: "我們一起拍照吧。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6012",
        expression: "します",
        reading: "します",
        definition: "行動を行う",
        meaning: {
          en: "do, play (a sport/game)",
          zh: "做、進行 (活動)",
        },
        example: "テニスをします。",
        exampleMeaning: {
          en: "I play tennis.",
          zh: "我打網球。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6013",
        expression: "会います",
        reading: "あいます",
        definition: "人に会う",
        meaning: {
          en: "meet (someone)",
          zh: "見面、會面",
        },
        example: "友達に会います。",
        exampleMeaning: {
          en: "I will meet a friend.",
          zh: "我要和朋友見面。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6014",
        expression: "友達に会います",
        reading: "ともだちにあいます",
        definition:
          "友人と会う (場所ではなく相手に焦点を当てるので助詞は「に」)",
        meaning: {
          en: "meet a friend (Note: uses the particle に for the person being met)",
          zh: "和朋友見面",
        },
        example: "ときどき、友達に会います。",
        exampleMeaning: {
          en: "I sometimes meet my friends.",
          zh: "我偶爾和朋友見面。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6015",
        expression: "ごはん",
        reading: "ごはん",
        definition: "食事、または炊いた米",
        meaning: {
          en: "a meal, cooked rice",
          zh: "飯、米飯、餐點",
        },
        example: "晩ごはんは魚です。",
        exampleMeaning: {
          en: "Dinner (supper) is fish.",
          zh: "晚餐是魚。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6016",
        expression: "朝ごはん",
        reading: "あさごはん",
        definition: "朝の食事",
        meaning: {
          en: "breakfast",
          zh: "早餐",
        },
        example: "朝ごはんを食べましたか。",
        exampleMeaning: {
          en: "Did you eat breakfast?",
          zh: "你吃早餐了嗎？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6017",
        expression: "昼ごはん",
        reading: "ひるごはん",
        definition: "昼の食事",
        meaning: {
          en: "lunch",
          zh: "午餐",
        },
        example: "昼ごはんを食べます。",
        exampleMeaning: {
          en: "I eat lunch.",
          zh: "我吃午餐。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6018",
        expression: "晩ごはん",
        reading: "ばんごはん",
        definition: "夜の食事",
        meaning: {
          en: "supper, dinner",
          zh: "晚餐",
        },
        example: "晩ごはんをいっしょに食べませんか。",
        exampleMeaning: {
          en: "Won't you eat dinner together with me?",
          zh: "要不要和我一起吃晚餐？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6019",
        expression: "パン",
        reading: "パン",
        definition: "小麦粉を焼いた食品",
        meaning: {
          en: "bread",
          zh: "麵包",
        },
        example: "いつも朝ごはんにパンを食べます。",
        exampleMeaning: {
          en: "I always eat bread for breakfast.",
          zh: "我早餐總是吃麵包。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6020",
        expression: "卵",
        reading: "たまご",
        definition: "鳥などの卵",
        meaning: {
          en: "egg",
          zh: "蛋",
        },
        example: "卵と肉を食べます。",
        exampleMeaning: {
          en: "I eat eggs and meat.",
          zh: "我吃蛋和肉。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6021",
        expression: "肉",
        reading: "にく",
        definition: "動物の肉",
        meaning: {
          en: "meat",
          zh: "肉",
        },
        example: "私は肉が好きです。",
        exampleMeaning: {
          en: "I like meat.",
          zh: "我喜歡肉。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6022",
        expression: "魚",
        reading: "さかな",
        definition: "水中に住む動物",
        meaning: {
          en: "fish",
          zh: "魚",
        },
        example: "このレストランは魚がおいしいです。",
        exampleMeaning: {
          en: "The fish at this restaurant is delicious.",
          zh: "這間餐廳的魚很好吃。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6023",
        expression: "野菜",
        reading: "やさい",
        definition: "主に葉や茎などを食べる植物",
        meaning: {
          en: "vegetable",
          zh: "蔬菜",
        },
        example: "野菜と果物を買います。",
        exampleMeaning: {
          en: "I buy vegetables and fruit.",
          zh: "我買蔬菜和水果。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6024",
        expression: "果物",
        reading: "くだもの",
        definition: "木の果実",
        meaning: {
          en: "fruit",
          zh: "水果",
        },
        example: "毎日果物を食べます。",
        exampleMeaning: {
          en: "I eat fruit every day.",
          zh: "我每天吃水果。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6025",
        expression: "水",
        reading: "みず",
        definition: "液体",
        meaning: {
          en: "water",
          zh: "水",
        },
        example: "冷たい水を飲みます。",
        exampleMeaning: {
          en: "I drink cold water.",
          zh: "我喝冷水。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6026",
        expression: "お茶",
        reading: "おちゃ",
        definition: "茶の葉を煎じた飲み物",
        meaning: {
          en: "tea, green tea",
          zh: "茶、綠茶",
        },
        example: "お茶を飲みますか。",
        exampleMeaning: {
          en: "Will you drink tea?",
          zh: "你要喝茶嗎？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6027",
        expression: "紅茶",
        reading: "こうちゃ",
        definition: "発酵させた茶葉の飲み物",
        meaning: {
          en: "black tea",
          zh: "紅茶",
        },
        example: "友達はよく紅茶を飲みます。",
        exampleMeaning: {
          en: "My friend often drinks black tea.",
          zh: "我的朋友經常喝紅茶。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6028",
        expression: "牛乳",
        reading: "ぎゅうにゅう",
        definition: "牛の乳",
        meaning: {
          en: "milk",
          zh: "牛奶",
        },
        example: "朝、牛乳を飲みます。",
        exampleMeaning: {
          en: "I drink milk in the morning.",
          zh: "我早上喝牛奶。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6029",
        expression: "ミリク",
        reading: "ミリク",
        definition: "牛乳、または乳飲料 (カタカナ表記)",
        meaning: {
          en: "milk (katakana version, also used for non-dairy milk)",
          zh: "牛奶、乳製品",
        },
        example: "コーヒーにミルクを入れます。",
        exampleMeaning: {
          en: "I put milk in my coffee.",
          zh: "我在咖啡裡加牛奶。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6030",
        expression: "ジュース",
        reading: "ジュース",
        definition: "果物や野菜の液汁",
        meaning: {
          en: "juice",
          zh: "果汁、飲料",
        },
        example: "ジュースをちょっと飲みます。",
        exampleMeaning: {
          en: "I'll drink a little bit of juice.",
          zh: "我喝一點果汁。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6031",
        expression: "ビール",
        reading: "ビール",
        definition: "酒類の一つ",
        meaning: {
          en: "beer",
          zh: "啤酒",
        },
        example: "晩ごはんの後にビールを飲みます。",
        exampleMeaning: {
          en: "I drink beer after dinner.",
          zh: "我晚餐後喝啤酒。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6032",
        expression: "酒",
        reading: "さけ",
        definition: "アルコール飲料、特に日本酒",
        meaning: {
          en: "alcohol, Japanese rice wine (sake)",
          zh: "酒、清酒",
        },
        example: "お酒を飲みません。",
        exampleMeaning: {
          en: "I don't drink alcohol.",
          zh: "我不喝酒。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6033",
        expression: "ビデオ",
        reading: "ビデオ",
        definition: "映像を記録・再生するもの",
        meaning: {
          en: "video [tape/deck], video",
          zh: "錄影帶、影片",
        },
        example: "ビデオを見ます。",
        exampleMeaning: {
          en: "I watch a video.",
          zh: "我看影片。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6034",
        expression: "映画",
        reading: "えいが",
        definition: "劇場などで上映される映像作品",
        meaning: {
          en: "movie",
          zh: "電影",
        },
        example: "時々映画を見ます。",
        exampleMeaning: {
          en: "I sometimes watch movies.",
          zh: "我偶爾看電影。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6035",
        expression: "手紙",
        reading: "てがみ",
        definition: "文字を書いて相手に送るもの",
        meaning: {
          en: "letter",
          zh: "信、信件",
        },
        example: "友達に手紙を書きます。",
        exampleMeaning: {
          en: "I write a letter to my friend.",
          zh: "我寫信給朋友。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6036",
        expression: "レポート",
        reading: "レポート",
        definition: "研究や調査の結果をまとめた文書",
        meaning: {
          en: "report",
          zh: "報告、報告書",
        },
        example: "今晩、レポートをします。",
        exampleMeaning: {
          en: "I will do the report tonight.",
          zh: "我今晚會做報告。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6037",
        expression: "写真",
        reading: "しゃしん",
        definition: "カメラなどで撮影した画像",
        meaning: {
          en: "photograph, picture",
          zh: "照片",
        },
        example: "いつも写真を撮ります。",
        exampleMeaning: {
          en: "I always take pictures.",
          zh: "我總是拍照。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6038",
        expression: "店",
        reading: "みせ",
        definition: "商品を売る場所",
        meaning: {
          en: "store, shop",
          zh: "商店、店",
        },
        example: "店で買い物をします。",
        exampleMeaning: {
          en: "I shop at the store.",
          zh: "我在店裡購物。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6039",
        expression: "レストラン",
        reading: "レストラン",
        definition: "食事を提供する場所",
        meaning: {
          en: "restaurant",
          zh: "餐廳",
        },
        example: "レストランで昼ごはんを食べます。",
        exampleMeaning: {
          en: "I eat lunch at a restaurant.",
          zh: "我在餐廳吃午餐。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6040",
        expression: "庭",
        reading: "にわ",
        definition: "家の周りの敷地",
        meaning: {
          en: "garden, yard",
          zh: "庭院",
        },
        example: "庭で休みます。",
        exampleMeaning: {
          en: "I rest in the garden.",
          zh: "我在庭院裡休息。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6041",
        expression: "宿題",
        reading: "しゅくだい",
        definition: "学校などから課せられる課題",
        meaning: {
          en: "homework",
          zh: "作業、功課",
        },
        example: "宿題があります。",
        exampleMeaning: {
          en: "I have homework.",
          zh: "我有功課。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6042",
        expression: "宿題をします",
        reading: "しゅくだいをします",
        definition: "宿題を行う",
        meaning: {
          en: "do homework",
          zh: "做功課",
        },
        example: "毎日宿題をします。",
        exampleMeaning: {
          en: "I do homework every day.",
          zh: "我每天做功課。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6043",
        expression: "テニス",
        reading: "テニス",
        definition: "スポーツの一つ",
        meaning: {
          en: "tennis",
          zh: "網球",
        },
        example: "友達とテニスをします。",
        exampleMeaning: {
          en: "I play tennis with my friend.",
          zh: "我和朋友打網球。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6044",
        expression: "サッカー",
        reading: "サッカー",
        definition: "スポーツの一つ (フットボール)",
        meaning: {
          en: "soccer, football",
          zh: "足球",
        },
        example: "時々サッカーを見ます。",
        exampleMeaning: {
          en: "I sometimes watch soccer.",
          zh: "我偶爾看足球。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6045",
        expression: "サッカーをします",
        reading: "サッカーをします",
        definition: "サッカーというスポーツを行う",
        meaning: {
          en: "play soccer/football",
          zh: "踢足球",
        },
        example: "毎週土曜日にサッカーをします。",
        exampleMeaning: {
          en: "I play soccer every Saturday.",
          zh: "我每個星期六踢足球。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6046",
        expression: "花見",
        reading: "はなみ",
        definition: "桜などの花を見て楽しむこと",
        meaning: {
          en: "cherry-blossom viewing (noun)",
          zh: "賞櫻 (名詞)",
        },
        example: "来月、花見に行きます。",
        exampleMeaning: {
          en: "I will go cherry-blossom viewing next month.",
          zh: "我下個月要去賞櫻。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6047",
        expression: "花見をします",
        reading: "はなみをします",
        definition: "桜などの花を見て楽しむ活動を行う",
        meaning: {
          en: "go cherry-blossom viewing",
          zh: "進行賞櫻活動",
        },
        example: "みんなで花見をします。",
        exampleMeaning: {
          en: "Everyone will go cherry-blossom viewing together.",
          zh: "大家會一起去賞櫻。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6048",
        expression: "何",
        reading: "なに / なん",
        definition: "物事の内容を尋ねる疑問詞",
        meaning: {
          en: "what",
          zh: "什麼",
        },
        example: "何を飲みますか。",
        exampleMeaning: {
          en: "What will you drink?",
          zh: "你要喝什麼？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6049",
        expression: "いっしょに",
        reading: "いっしょに",
        definition: "共に、一緒に",
        meaning: {
          en: "together",
          zh: "一起",
        },
        example: "いっしょに映画を見ませんか。",
        exampleMeaning: {
          en: "Won't you watch a movie together with me?",
          zh: "要不要和我一起看電影？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6050",
        expression: "ちょっと",
        reading: "ちょっと",
        definition: "少し、短い時間",
        meaning: {
          en: "a little while, a little bit (also used to politely refuse an invitation)",
          zh: "一點、稍微、一下下",
        },
        example: "ちょっと休みます。",
        exampleMeaning: {
          en: "I'll rest for a little while.",
          zh: "我休息一下。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6051",
        expression: "いつも",
        reading: "いつも",
        definition: "常に、普段は",
        meaning: {
          en: "always, usually",
          zh: "總是、經常",
        },
        example: "いつも牛乳を飲みますか。",
        exampleMeaning: {
          en: "Do you always drink milk?",
          zh: "你總是喝牛奶嗎？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6052",
        expression: "時々",
        reading: "ときどき",
        definition: "時折、時々",
        meaning: {
          en: "sometimes",
          zh: "有時候、偶爾",
        },
        example: "時々テニスをします。",
        exampleMeaning: {
          en: "I sometimes play tennis.",
          zh: "我偶爾打網球。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6053",
        expression: "それから",
        reading: "それから",
        definition: "その後に、そして",
        meaning: {
          en: "after that, and then",
          zh: "然後、之後",
        },
        example: "パンを食べます。それから、お茶を飲みます。",
        exampleMeaning: {
          en: "I eat bread. And then, I drink tea.",
          zh: "我吃麵包。然後，我喝茶。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6054",
        expression: "ええ",
        reading: "ええ",
        definition: "はい (よりカジュアルな返事)",
        meaning: {
          en: "yes (casual/soft confirmation)",
          zh: "是的 (比較隨意的肯定)",
        },
        example: "A: お酒を飲みますか。 B: ええ、飲みます。",
        exampleMeaning: {
          en: "A: Do you drink alcohol? B: Yes, I do.",
          zh: "A: 你喝酒嗎？ B: 嗯，我喝。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6055",
        expression: "いいですね",
        reading: "いいですね",
        definition: "相手の提案などに同意・賛同する",
        meaning: {
          en: "That's good. / That sounds nice. (agreeing with a suggestion)",
          zh: "那很好、聽起來不錯",
        },
        example: "いっしょに映画を見ませんか。いいですね。",
        exampleMeaning: {
          en: "Won't you watch a movie together? That's good!",
          zh: "要不要一起看電影？ 聽起來不錯！",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6056",
        expression: "わかりました",
        reading: "わかりました",
        definition: "理解したことを伝える",
        meaning: {
          en: "I see. / I understood.",
          zh: "我明白了",
        },
        example: "A: 宿題をしますよ。 B: わかりました。",
        exampleMeaning: {
          en: "A: You should do your homework. B: I see / I understood.",
          zh: "A: 你該做功課了。 B: 我明白了。",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6057",
        expression: "何ですか",
        reading: "なんですか",
        definition: "相手が自分に話しかけてきた時に聞き返す (丁寧な表現)",
        meaning: {
          en: "Yes? / What is it? (used when answering or asking what the matter is, polite)",
          zh: "有什麼事嗎？",
        },
        example: "A: すみません。 B: 何ですか。",
        exampleMeaning: {
          en: "A: Excuse me. B: Yes? / What is it?",
          zh: "A: 不好意思。 B: 有什麼事嗎？",
        },
      },
      {
        uuid: "60a1b2c3-4d5e-6f70-8a9b-0c1d2e3f6058",
        expression: "じゃ、またあした",
        reading: "じゃ、またあした",
        definition: "別れの挨拶 (非公式)",
        meaning: {
          en: "See you [tomorrow] (casual goodbye)",
          zh: "那麼，明天見",
        },
        example: "じゃ、またあした。さようなら。",
        exampleMeaning: {
          en: "See you tomorrow. Goodbye.",
          zh: "那麼，明天見。再見。",
        },
      },
    ],
  },
  {
    uuid: "l1m2n3o4-0q1r-2s3t-4u5v-6w7x8y9z07",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 7",
      zh: "大家的日本語 初級I 第七課",
      ja: "みんなの日本語 初級I 第七課",
    },
    description: {
      en: "Learn verbs for giving and receiving, how to indicate tools/means with particle で, and useful phrases for visitors and hospitality.",
      zh: "學習給予和接收的動詞、使用助詞 で 表示工具/手段，以及拜訪和招待時的實用短語。",
      ja: "授受動詞（あげます、もらいますなど）、手段・道具を示す助詞「で」、訪問や応対で使う挨拶を学びます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7001",
        expression: "切ります",
        reading: "きります",
        definition: "刃物などで物を分けたり形を整えたりする",
        meaning: {
          en: "cut, slice",
          zh: "切、剪",
        },
        example: "はさみで紙を切ります。",
        exampleMeaning: {
          en: "I cut paper with scissors.",
          zh: "我用剪刀剪紙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7002",
        expression: "送ります",
        reading: "おくります",
        definition: "郵便や荷物を目的地に届ける",
        meaning: {
          en: "send",
          zh: "寄送、發送",
        },
        example: "ファクスでレポートを送ります。",
        exampleMeaning: {
          en: "I will send the report by fax.",
          zh: "我會用傳真發送報告。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7003",
        expression: "あげます",
        reading: "あげます",
        definition: "目下の人や対等の人に物を与える",
        meaning: {
          en: "give (from one's side to another's side)",
          zh: "給予",
        },
        example: "友達にプレゼントをあげます。",
        exampleMeaning: {
          en: "I give a present to my friend.",
          zh: "我送禮物給朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7004",
        expression: "もらいます",
        reading: "もらいます",
        definition: "他人から物を受け取る",
        meaning: {
          en: "receive (from another's side to one's side)",
          zh: "收到、獲得",
        },
        example: "お母さんに花をもらいました。",
        exampleMeaning: {
          en: "I received flowers from my mother.",
          zh: "我從媽媽那裡收到了花。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7005",
        expression: "貸します",
        reading: "かします",
        definition: "自分の物を一時的に他人に使わせる",
        meaning: {
          en: "lend",
          zh: "借出",
        },
        example: "友達にお金を貸します。",
        exampleMeaning: {
          en: "I lend money to my friend.",
          zh: "我借錢給朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7006",
        expression: "借ります",
        reading: "かります",
        definition: "他人の物を一時的に使わせてもらう",
        meaning: {
          en: "borrow",
          zh: "借入",
        },
        example: "パソコンを借ります。",
        exampleMeaning: {
          en: "I borrow a personal computer.",
          zh: "我借用一台個人電腦。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7007",
        expression: "教えます",
        reading: "おしえます",
        definition: "知識や技能を他人に伝える",
        meaning: {
          en: "teach",
          zh: "教導",
        },
        example: "わたしは日本語を教えます。",
        exampleMeaning: {
          en: "I teach Japanese.",
          zh: "我教日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7008",
        expression: "習います",
        reading: "ならいます",
        definition: "他人の知識や技能を身につける",
        meaning: {
          en: "learn (from someone)",
          zh: "學習 (從別人那裡)",
        },
        example: "先生にスペイン語を習います。",
        exampleMeaning: {
          en: "I learn Spanish from the teacher.",
          zh: "我跟老師學習西班牙語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7009",
        expression: "でんわをかけます",
        reading: "でんわをかけます",
        definition: "電話で相手を呼び出す",
        meaning: {
          en: "make a telephone call",
          zh: "打電話",
        },
        example: "友達に電話をかけます。",
        exampleMeaning: {
          en: "I make a phone call to my friend.",
          zh: "我打電話給朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7010",
        expression: "手",
        reading: "て",
        definition: "腕の先にある部分",
        meaning: {
          en: "hand, arm",
          zh: "手、手臂",
        },
        example: "手で食べますか。",
        exampleMeaning: {
          en: "Do you eat with your hands?",
          zh: "你用手吃飯嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7011",
        expression: "はし",
        reading: "はし",
        definition: "日本の食事に使う道具",
        meaning: {
          en: "chopsticks",
          zh: "筷子",
        },
        example: "はしでごはんを食べます。",
        exampleMeaning: {
          en: "I eat rice with chopsticks.",
          zh: "我用筷子吃飯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7012",
        expression: "スプーン",
        reading: "スプーン",
        definition: "食事に使う道具 (西洋の)",
        meaning: {
          en: "spoon",
          zh: "湯匙、勺子",
        },
        example: "スプーンでスープを飲みます。",
        exampleMeaning: {
          en: "I drink soup with a spoon.",
          zh: "我用湯匙喝湯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7013",
        expression: "ナイフ",
        reading: "ナイフ",
        definition: "食事に使う刃物",
        meaning: {
          en: "knife",
          zh: "刀子",
        },
        example: "ナイフで肉を切ります。",
        exampleMeaning: {
          en: "I cut meat with a knife.",
          zh: "我用刀子切肉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7014",
        expression: "フォーク",
        reading: "フォーク",
        definition: "食事に使う道具 (西洋の)",
        meaning: {
          en: "fork",
          zh: "叉子",
        },
        example: "フォークで食べます。",
        exampleMeaning: {
          en: "I eat with a fork.",
          zh: "我用叉子吃飯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7015",
        expression: "はさみ",
        reading: "はさみ",
        definition: "紙などを切る道具",
        meaning: {
          en: "scissors",
          zh: "剪刀",
        },
        example: "はさみを借りますか。",
        exampleMeaning: {
          en: "Will you borrow scissors?",
          zh: "你要借剪刀嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7016",
        expression: "ファクス",
        reading: "ファクス",
        definition: "ファクシミリの略",
        meaning: {
          en: "fax",
          zh: "傳真",
        },
        example: "ファクスで送ります。",
        exampleMeaning: {
          en: "I will send it by fax.",
          zh: "我會用傳真寄送。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7017",
        expression: "ワープロ",
        reading: "ワープロ",
        definition: "ワードプロセッサーの略",
        meaning: {
          en: "word processor",
          zh: "文書處理機",
        },
        example: "ワープロで手紙を書きます。",
        exampleMeaning: {
          en: "I write a letter with a word processor.",
          zh: "我用文書處理機寫信。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7018",
        expression: "パソコン",
        reading: "パソコン",
        definition: "パーソナルコンピューターの略",
        meaning: {
          en: "personal computer",
          zh: "個人電腦",
        },
        example: "パソコンで日本語を習います。",
        exampleMeaning: {
          en: "I learn Japanese using a personal computer.",
          zh: "我用個人電腦學習日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7019",
        expression: "パンチ",
        reading: "パンチ",
        definition: "穴を開ける文具",
        meaning: {
          en: "punch (hole puncher)",
          zh: "打孔機",
        },
        example: "パンチを貸してください。",
        exampleMeaning: {
          en: "Please lend me a punch.",
          zh: "請借我打孔機。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7020",
        expression: "ホッチキス",
        reading: "ホッチキス",
        definition: "紙を留める文具",
        meaning: {
          en: "stapler",
          zh: "釘書機",
        },
        example: "ホッチキスで紙を留めます。",
        exampleMeaning: {
          en: "I staple the papers with a stapler.",
          zh: "我用釘書機釘紙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7021",
        expression: "セロテープ",
        reading: "セロテープ",
        definition: "透明な粘着テープ",
        meaning: {
          en: "Scotch tape, clear adhesive tape",
          zh: "透明膠帶",
        },
        example: "セロテープで貼ります。",
        exampleMeaning: {
          en: "I stick it with tape.",
          zh: "我用膠帶黏貼。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7022",
        expression: "消しゴマ",
        reading: "けしゴマ",
        definition: "鉛筆の文字を消す文具",
        meaning: {
          en: "eraser",
          zh: "橡皮擦",
        },
        example: "消しゴムで字を消します。",
        exampleMeaning: {
          en: "I erase the letters with an eraser.",
          zh: "我用橡皮擦擦掉字。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7023",
        expression: "紙",
        reading: "かみ",
        definition: "文字を書いたりする材料",
        meaning: {
          en: "paper",
          zh: "紙",
        },
        example: "紙をもらいます。",
        exampleMeaning: {
          en: "I receive paper.",
          zh: "我收到紙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7024",
        expression: "花",
        reading: "はな",
        definition: "植物が咲かせたもの",
        meaning: {
          en: "flower, blossom",
          zh: "花",
        },
        example: "母に花をあげます。",
        exampleMeaning: {
          en: "I give flowers to my mother.",
          zh: "我送花給媽媽。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7025",
        expression: "シャツ",
        reading: "シャツ",
        definition: "洋服の一つ",
        meaning: {
          en: "shirt",
          zh: "襯衫",
        },
        example: "すてきなシャツですね。",
        exampleMeaning: {
          en: "That's a nice shirt!",
          zh: "這件襯衫真好看！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7026",
        expression: "プレゼント",
        reading: "プレゼント",
        definition: "贈り物",
        meaning: {
          en: "present, gift",
          zh: "禮物",
        },
        example: "クリスマスにプレゼントをもらいました。",
        exampleMeaning: {
          en: "I received a present for Christmas.",
          zh: "我聖誕節收到了禮物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7027",
        expression: "荷物",
        reading: "にもつ",
        definition: "運ぶべき物",
        meaning: {
          en: "baggage, parcel",
          zh: "行李、包裹",
        },
        example: "荷物を送ります。",
        exampleMeaning: {
          en: "I send a parcel.",
          zh: "我寄送一個包裹。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7028",
        expression: "お金",
        reading: "おかね",
        definition: "貨幣、財産",
        meaning: {
          en: "money",
          zh: "金錢",
        },
        example: "お金を借ります。",
        exampleMeaning: {
          en: "I borrow money.",
          zh: "我借錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7029",
        expression: "切符",
        reading: "きっぷ",
        definition: "乗り物に乗るための券",
        meaning: {
          en: "ticket",
          zh: "票、車票",
        },
        example: "切符を買います。",
        exampleMeaning: {
          en: "I buy a ticket.",
          zh: "我買票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7030",
        expression: "クリスマス",
        reading: "クリスマス",
        definition: "キリスト教の祝日",
        meaning: {
          en: "Christmas",
          zh: "聖誕節",
        },
        example: "クリスマスにパーティーをします。",
        exampleMeaning: {
          en: "We have a party on Christmas.",
          zh: "我們在聖誕節舉辦派對。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7031",
        expression: "父",
        reading: "ちち",
        definition: "自分の父親 (身内に使う)",
        meaning: {
          en: "(my) father (used when referring to one's own father to an outsider)",
          zh: "(我的) 父親",
        },
        example: "父はもう寝ました。",
        exampleMeaning: {
          en: "My father has already gone to sleep.",
          zh: "我的父親已經睡了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7032",
        expression: "母",
        reading: "はは",
        definition: "自分の母親 (身内に使う)",
        meaning: {
          en: "(my) mother (used when referring to one's own mother to an outsider)",
          zh: "(我的) 母親",
        },
        example: "母から電話がありました。",
        exampleMeaning: {
          en: "I received a call from my mother.",
          zh: "我收到了我母親的電話。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7033",
        expression: "お父さん",
        reading: "おとうさん",
        definition: "他人の父親、または自分の父親 (丁寧語)",
        meaning: {
          en: "(someone else's) father, or one's own father (polite)",
          zh: "(別人的) 父親、爸爸",
        },
        example: "田中さんのお父さんは先生です。",
        exampleMeaning: {
          en: "Mr. Tanaka's father is a teacher.",
          zh: "田中先生的父親是老師。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7034",
        expression: "お母さん",
        reading: "おかあさん",
        definition: "他人の母親、または自分の母親 (丁寧語)",
        meaning: {
          en: "(someone else's) mother, or one's own mother (polite)",
          zh: "(別人的) 母親、媽媽",
        },
        example: "お母さんに電話をかけます。",
        exampleMeaning: {
          en: "I will call my mother.",
          zh: "我會打電話給媽媽。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7035",
        expression: "もう",
        reading: "もう",
        definition: "動作が完了したこと、すでに",
        meaning: {
          en: "already",
          zh: "已經",
        },
        example: "もうごはんを食べましたか。",
        exampleMeaning: {
          en: "Did you eat already?",
          zh: "你已經吃飯了嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7036",
        expression: "まだ",
        reading: "まだ",
        definition: "動作が完了していないこと",
        meaning: {
          en: "not yet (used with negative verb forms)",
          zh: "還沒",
        },
        example: "いいえ、まだです。",
        exampleMeaning: {
          en: "No, not yet.",
          zh: "不，還沒有。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7037",
        expression: "これから",
        reading: "これから",
        definition: "今から、今後",
        meaning: {
          en: "from now on, soon",
          zh: "從現在開始、接下來",
        },
        example: "これから勉強します。",
        exampleMeaning: {
          en: "I will study from now on.",
          zh: "我接下來要學習。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7038",
        expression: "～すてきですね",
        reading: "～すてきですね",
        definition: "相手の持ち物などを褒める表現",
        meaning: {
          en: "What a nice ~!",
          zh: "多麼棒的～啊！",
        },
        example: "すてきなシャツですね。",
        exampleMeaning: {
          en: "What a nice shirt!",
          zh: "這件襯衫真好看！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7039",
        expression: "ごめんください",
        reading: "ごめんください",
        definition: "他人の家を訪問した時に使う挨拶",
        meaning: {
          en: "Excuse me, Anybody home?, May I come in? (used by a visitor)",
          zh: "不好意思，有人在家嗎？、打擾了",
        },
        example: "ごめんください。",
        exampleMeaning: {
          en: "Excuse me, is anyone home?",
          zh: "不好意思，有人在家嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7040",
        expression: "いらっしゃい",
        reading: "いらっしゃい",
        definition: "来訪者を歓迎する挨拶",
        meaning: {
          en: "Welcome (lit. How nice of you to come)",
          zh: "歡迎光臨",
        },
        example: "いらっしゃい。どうぞ。",
        exampleMeaning: {
          en: "Welcome. Please come in.",
          zh: "歡迎。請進。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7041",
        expression: "どうぞお上がりください",
        reading: "どうぞおあがりください",
        definition: "客に部屋に入るように促す表現",
        meaning: {
          en: "Do come in (Please step up)",
          zh: "請進",
        },
        example: "いらっしゃい。どうぞお上がりください。",
        exampleMeaning: {
          en: "Welcome. Please do come in.",
          zh: "歡迎。請進。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7042",
        expression: "失礼します",
        reading: "しつれいします",
        definition: "他人の家に上がる時などに使う、訪問時の丁寧な挨拶",
        meaning: {
          en: "Thank you, May I? (lit. I'm afraid I'll be disturbing you) (used upon entering or leaving a home)",
          zh: "打擾了 (進入或離開時使用)",
        },
        example: "失礼します。",
        exampleMeaning: {
          en: "Excuse me (as you enter the house).",
          zh: "打擾了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7043",
        expression: "～はいかがですか",
        reading: "～はいかがですか",
        definition: "飲食物などを丁寧に勧める表現",
        meaning: {
          en: "Won't you have ~?, Would you like to have ~? (offering something)",
          zh: "您要不要～？、您想來點～嗎？",
        },
        example: "お茶はいかがですか。",
        exampleMeaning: {
          en: "Would you like some tea?",
          zh: "您想來點茶嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7044",
        expression: "いただきます",
        reading: "いただきます",
        definition: "食事を始める前の挨拶",
        meaning: {
          en: "Thank you, I accept (said before starting to eat or drink)",
          zh: "我開動了、我領受了",
        },
        example: "どうぞ。いただきます。",
        exampleMeaning: {
          en: "Please start. Thank you, I accept (before eating).",
          zh: "請用。我開動了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7045",
        expression: "旅行",
        reading: "りょこう",
        definition: "旅をすること",
        meaning: {
          en: "trip, tour",
          zh: "旅行",
        },
        example: "ヨーロッパへ旅行に行きます。",
        exampleMeaning: {
          en: "I go on a trip to Europe.",
          zh: "我去歐洲旅行。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7046",
        expression: "旅行をします",
        reading: "りょこうをします",
        definition: "旅をする活動",
        meaning: {
          en: "make a trip, travel",
          zh: "進行旅行",
        },
        example: "スペインへ旅行をします。",
        exampleMeaning: {
          en: "I will take a trip to Spain.",
          zh: "我會去西班牙旅行。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7047",
        expression: "お土産",
        reading: "おみやげ",
        definition: "旅先で買って帰る贈り物",
        meaning: {
          en: "souvenir, present (from a trip)",
          zh: "伴手禮、紀念品",
        },
        example: "お土産をあげます。",
        exampleMeaning: {
          en: "I give a souvenir.",
          zh: "我送伴手禮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7048",
        expression: "ヨーロッパ",
        reading: "ヨーロッパ",
        definition: "大陸名",
        meaning: {
          en: "Europe",
          zh: "歐洲",
        },
        example: "ヨーロッパで何を習いましたか。",
        exampleMeaning: {
          en: "What did you learn in Europe?",
          zh: "你在歐洲學到了什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f7049",
        expression: "スペイン",
        reading: "スペイン",
        definition: "国名",
        meaning: {
          en: "Spain",
          zh: "西班牙",
        },
        example: "スペイン語を習います。",
        exampleMeaning: {
          en: "I learn Spanish.",
          zh: "我學習西班牙語。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c88",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 8",
      zh: "大家的日本語 初級I 第八課",
      ja: "みんなの日本語 初級I 第八課",
    },
    description: {
      en: "Learn basic Na-adjectives and I-adjectives, how to use them as predicates, and common phrases for daily conversation, including describing things, places, and people.",
      zh: "學習基本的ナ形容詞和イ形容詞，如何用它們作謂語，以及用於描述事物、地點和人物的日常會話短語。",
      ja: "基本的な形容詞（い形容詞、な形容詞）とその述語の使い方、物・場所・人などを表現する日常会話表現を学びます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8001",
        expression: "ハンサム",
        reading: "ハンサム",
        definition: "顔立ちや容姿が整っていて魅力的なさま（主に男性に使う）",
        meaning: {
          en: "handsome (Na-adjective)",
          zh: "英俊的 (な形容詞)",
        },
        example: "彼(かれ)はハンサムな人(ひと)です。",
        exampleMeaning: {
          en: "He is a handsome person.",
          zh: "他是個英俊的人。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8002",
        expression: "きれい",
        reading: "きれい",
        definition: "美しい、または清潔なさま",
        meaning: {
          en: "beautiful, clean (Na-adjective)",
          zh: "美麗的、乾淨的 (な形容詞)",
        },
        example: "あそこはきれいじゃありません。",
        exampleMeaning: {
          en: "It is not clean over there.",
          zh: "那裡不乾淨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8003",
        expression: "静か",
        reading: "しずか",
        definition: "音などがなく落ち着いているさま",
        meaning: {
          en: "quiet (Na-adjective)",
          zh: "安靜的 (な形容詞)",
        },
        example: "奈良(なら)は静(しず)かですか。",
        exampleMeaning: {
          en: "Is Nara quiet?",
          zh: "奈良安靜嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8004",
        expression: "にぎやか",
        reading: "にぎやか",
        definition: "人や物が多く活気があるさま",
        meaning: {
          en: "lively, bustling (Na-adjective)",
          zh: "熱鬧的 (な形容詞)",
        },
        example: "京都(きょうと)はとてもにぎやかです。",
        exampleMeaning: {
          en: "Kyoto is very lively.",
          zh: "京都很熱鬧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8005",
        expression: "有名",
        reading: "ゆうめい",
        definition: "世間に広く知られているさま",
        meaning: {
          en: "famous (Na-adjective)",
          zh: "有名的 (な形容詞)",
        },
        example: "富士大学(ふじだいがく)は有名(ゆうめい)じゃありません。",
        exampleMeaning: {
          en: "Fuji University is not famous.",
          zh: "富士大學不有名。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8006",
        expression: "親切",
        reading: "しんせつ",
        definition: "他人のために心を配るさま",
        meaning: {
          en: "kind, helpful (Na-adjective)",
          zh: "親切的 (な形容詞)",
        },
        example: "ワットさん(Watt-san)は親切(しんせつ)です。",
        exampleMeaning: {
          en: "Mr. Watt is kind.",
          zh: "瓦特先生很親切。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8007",
        expression: "元気",
        reading: "げんき",
        definition: "病気でなく、活発なさま",
        meaning: {
          en: "healthy, sound, cheerful (Na-adjective)",
          zh: "健康的、有精神的 (な形容詞)",
        },
        example: "山田(やまだ)さんは元気(げんき)です。",
        exampleMeaning: {
          en: "Mr. Yamada is healthy/cheerful.",
          zh: "山田先生很健康/有精神。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8008",
        expression: "暇",
        reading: "ひま",
        definition: "することがなく時間があるさま",
        meaning: {
          en: "free (time) (Na-adjective)",
          zh: "空閒的 (な形容詞)",
        },
        example: "今日(きょう)は暇(ひま)ですか。",
        exampleMeaning: {
          en: "Are you free today?",
          zh: "你今天有空嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8009",
        expression: "便利",
        reading: "べんり",
        definition: "都合がよく、使いやすいさま",
        meaning: {
          en: "convenient (Na-adjective)",
          zh: "方便的 (な形容詞)",
        },
        example: "大学(だいがく)の寮(りょう)は便利(べんり)です。",
        exampleMeaning: {
          en: "The university dormitory is convenient.",
          zh: "大學宿舍很方便。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8010",
        expression: "すてき",
        reading: "すてき",
        definition: "非常に優れている、素晴らしいさま",
        meaning: {
          en: "fine, nice, wonderful (Na-adjective)",
          zh: "美好的、很棒的 (な形容詞)",
        },
        example: "すてきな車(くるま)ですね。",
        exampleMeaning: {
          en: "It's a wonderful car, isn't it?",
          zh: "真是一輛很棒的車啊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8011",
        expression: "大きい",
        reading: "おおきい",
        definition: "規模や量が多いさま",
        meaning: {
          en: "big, large (I-adjective)",
          zh: "大的 (い形容詞)",
        },
        example: "ミラーさんの部屋(へや)は大きくないです。",
        exampleMeaning: {
          en: "Mr. Miller's room is not big.",
          zh: "米勒先生的房間不大。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8012",
        expression: "小さい",
        reading: "ちいさい",
        definition: "規模や量が少ないさま",
        meaning: {
          en: "small, little (I-adjective)",
          zh: "小的 (い形容詞)",
        },
        example: "これは小(ちい)さいです。",
        exampleMeaning: {
          en: "This is small.",
          zh: "這個很小。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8013",
        expression: "新しい",
        reading: "あたらしい",
        definition: "作られてから時間が経っていないさま",
        meaning: {
          en: "new (I-adjective)",
          zh: "新的 (い形容詞)",
        },
        example: "新(あたら)しい車(くるま)を買(か)いました。",
        exampleMeaning: {
          en: "I bought a new car.",
          zh: "我買了一輛新車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8014",
        expression: "古い",
        reading: "ふるい",
        definition: "作られてから時間が経っているさま（人には使わない）",
        meaning: {
          en: "old (not of age) (I-adjective)",
          zh: "舊的 (不指年齡) (い形容詞)",
        },
        example: "これは古(ふる)い町(まち)です。",
        exampleMeaning: {
          en: "This is an old town.",
          zh: "這是個古老的城鎮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8015",
        expression: "いい",
        reading: "いい",
        definition: "良(よ)い",
        meaning: {
          en: "good (I-adjective, negative form is よくない)",
          zh: "好的 (い形容詞, 否定形是 よくない)",
        },
        example: "この辞書(じしょ)はあまりよくないです。",
        exampleMeaning: {
          en: "This dictionary is not very good.",
          zh: "這本字典不太好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8016",
        expression: "悪い",
        reading: "わるい",
        definition: "質が良くないさま",
        meaning: {
          en: "bad (I-adjective)",
          zh: "壞的 (い形容詞)",
        },
        example: "悪(わる)い本(ほん)ではありません。",
        exampleMeaning: {
          en: "It is not a bad book.",
          zh: "這不是一本壞書。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8017",
        expression: "暑い",
        reading: "あつい",
        definition: "気温が高いさま",
        meaning: {
          en: "hot (referring to weather/temperature) (I-adjective)",
          zh: "熱的 (指天氣/氣溫) (い形容詞)",
        },
        example: "今日(きょう)は暑(あつ)いです。",
        exampleMeaning: {
          en: "It is hot today.",
          zh: "今天很熱。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8018",
        expression: "熱い",
        reading: "あつい",
        definition: "触れると熱いと感じるさま",
        meaning: {
          en: "hot (referring to things/touch) (I-adjective)",
          zh: "熱的 (指東西/觸感) (い形容詞)",
        },
        example: "このコーヒーは熱(あつ)くないです。",
        exampleMeaning: {
          en: "This coffee is not hot.",
          zh: "這杯咖啡不熱。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8019",
        expression: "寒い",
        reading: "さむい",
        definition: "気温が低いさま",
        meaning: {
          en: "cold (referring to weather/temperature) (I-adjective)",
          zh: "冷的 (指天氣/氣溫) (い形容詞)",
        },
        example: "北京(ペキン)は寒(さむ)いですか。",
        exampleMeaning: {
          en: "Is it cold in Beijing?",
          zh: "北京冷嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8020",
        expression: "冷たい",
        reading: "つめたい",
        definition: "触れると冷たいと感じるさま",
        meaning: {
          en: "cold (referring to touch, as a drink) (I-adjective)",
          zh: "涼的、冰的 (指觸感/飲料) (い形容詞)",
        },
        example: "冷(つめ)たい飲(の)み物(もの)をください。",
        exampleMeaning: {
          en: "Please give me a cold drink.",
          zh: "請給我一杯冷飲。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8021",
        expression: "難しい",
        reading: "むずかしい",
        definition: "理解や実行が容易でないさま",
        meaning: {
          en: "difficult (I-adjective)",
          zh: "困難的 (い形容詞)",
        },
        example: "日本語(にほんご)は難(むずか)しくないです。",
        exampleMeaning: {
          en: "Japanese is not difficult.",
          zh: "日語不難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8022",
        expression: "易しい",
        reading: "やさしい",
        definition: "理解や実行が容易なさま",
        meaning: {
          en: "easy (I-adjective)",
          zh: "容易的 (い形容詞)",
        },
        example: "易(やさ)しい問題(もんだい)です。",
        exampleMeaning: {
          en: "It is an easy problem.",
          zh: "這是個簡單的問題。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8023",
        expression: "高い",
        reading: "たかい",
        definition: "値段や位置などが上にあるさま",
        meaning: {
          en: "expensive, tall, high (I-adjective)",
          zh: "貴的、高的 (い形容詞)",
        },
        example: "富士山(ふじさん)は高(たか)い山(やま)です。",
        exampleMeaning: {
          en: "Mt. Fuji is a high mountain.",
          zh: "富士山是座高山。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8024",
        expression: "安い",
        reading: "やすい",
        definition: "値段が低いさま",
        meaning: {
          en: "inexpensive, cheap (I-adjective)",
          zh: "便宜的 (い形容詞)",
        },
        example: "この辞書(じしょ)は安(やす)いです。",
        exampleMeaning: {
          en: "This dictionary is cheap.",
          zh: "這本字典很便宜。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8025",
        expression: "低い",
        reading: "ひくい",
        definition: "位置などが下にあるさま",
        meaning: {
          en: "low (I-adjective)",
          zh: "低的 (い形容詞)",
        },
        example: "低(ひく)い建物(たてもの)です。",
        exampleMeaning: {
          en: "It is a low building.",
          zh: "這是棟低矮的建築物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8026",
        expression: "おもしろい",
        reading: "おもしろい",
        definition: "興味深い、楽しいさま",
        meaning: {
          en: "interesting, funny (I-adjective)",
          zh: "有趣的 (い形容詞)",
        },
        example: "日本語(にほんご)はとてもおもしろいです。",
        exampleMeaning: {
          en: "Japanese is very interesting.",
          zh: "日語非常有趣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8027",
        expression: "おいしい",
        reading: "おいしい",
        definition: "味が良いさま",
        meaning: {
          en: "delicious, tasty (I-adjective)",
          zh: "美味的 (い形容詞)",
        },
        example:
          "日本(にほん)の食(た)べ物(もの)はおいしいですが、高(たか)いです。",
        exampleMeaning: {
          en: "Japanese food is delicious, but it's expensive.",
          zh: "日本食物很美味，但是很貴。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8028",
        expression: "忙しい",
        reading: "いそがしい",
        definition: "仕事が多く、暇がないさま",
        meaning: {
          en: "busy (I-adjective)",
          zh: "忙碌的 (い形容詞)",
        },
        example: "今週(こんしゅう)はとても忙(いそが)しいです。",
        exampleMeaning: {
          en: "I'm very busy this week.",
          zh: "我這週非常忙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8029",
        expression: "楽しい",
        reading: "たのしい",
        definition: "喜びや面白さを感じるさま",
        meaning: {
          en: "enjoyable, fun (I-adjective)",
          zh: "快樂的、有趣的 (い形容詞)",
        },
        example: "日本(にほん)の生活(せいかつ)は楽(たの)しいです。",
        exampleMeaning: {
          en: "Life in Japan is fun.",
          zh: "日本的生活很快樂。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8030",
        expression: "白い",
        reading: "しろい",
        definition: "白の色",
        meaning: {
          en: "white (I-adjective)",
          zh: "白色的 (い形容詞)",
        },
        example: "白(しろ)いシャツを買(か)いました。",
        exampleMeaning: {
          en: "I bought a white shirt.",
          zh: "我買了一件白色襯衫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8031",
        expression: "黒い",
        reading: "くろい",
        definition: "黒の色",
        meaning: {
          en: "black (I-adjective)",
          zh: "黑色的 (い形容詞)",
        },
        example: "黒(くろ)い車(くるま)が欲(ほ)しいです。",
        exampleMeaning: {
          en: "I want a black car.",
          zh: "我想要一輛黑色的車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8032",
        expression: "赤い",
        reading: "あかい",
        definition: "赤の色",
        meaning: {
          en: "red (I-adjective)",
          zh: "紅色的 (い形容詞)",
        },
        example: "赤(あか)いリンゴはおいしいです。",
        exampleMeaning: {
          en: "Red apples are delicious.",
          zh: "紅蘋果很好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8033",
        expression: "青い",
        reading: "あおい",
        definition: "青の色",
        meaning: {
          en: "blue (I-adjective)",
          zh: "藍色的 (い形容詞)",
        },
        example: "青(あお)い空(そら)はきれいです。",
        exampleMeaning: {
          en: "The blue sky is beautiful.",
          zh: "藍色的天空很美麗。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8034",
        expression: "桜",
        reading: "さくら",
        definition: "春に咲く花",
        meaning: {
          en: "cherry (blossom)",
          zh: "櫻花",
        },
        example: "桜(さくら)はきれいな花(はな)です。",
        exampleMeaning: {
          en: "Cherry blossoms are beautiful flowers.",
          zh: "櫻花是很美麗的花。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8035",
        expression: "山",
        reading: "やま",
        definition: "地面が盛り上がった地形",
        meaning: {
          en: "mountain",
          zh: "山",
        },
        example: "富士山(ふじさん)は高(たか)いです。",
        exampleMeaning: {
          en: "Mt. Fuji is high.",
          zh: "富士山很高。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8036",
        expression: "町",
        reading: "まち",
        definition: "都市、都市の一部",
        meaning: {
          en: "town, city",
          zh: "城鎮、城市",
        },
        example: "奈良(なら)はどんな町(まち)ですか。",
        exampleMeaning: {
          en: "What kind of town is Nara?",
          zh: "奈良是個什麼樣的城鎮？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8037",
        expression: "食べ物",
        reading: "たべもの",
        definition: "食物",
        meaning: {
          en: "food",
          zh: "食物",
        },
        example: "日本(にほん)の食(た)べ物(もの)はおいしいです。",
        exampleMeaning: {
          en: "Japanese food is delicious.",
          zh: "日本食物很美味。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8038",
        expression: "車",
        reading: "くるま",
        definition: "自動車",
        meaning: {
          en: "car, vehicle",
          zh: "汽車、車輛",
        },
        example: "新(あたら)しい車(くるま)は便利(べんり)です。",
        exampleMeaning: {
          en: "The new car is convenient.",
          zh: "這輛新車很方便。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8039",
        expression: "所",
        reading: "ところ",
        definition: "場所",
        meaning: {
          en: "place",
          zh: "地方、場所",
        },
        example: "きれいな所(ところ)ですね。",
        exampleMeaning: {
          en: "It's a beautiful place, isn't it?",
          zh: "真是個美麗的地方啊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8040",
        expression: "寮",
        reading: "りょう",
        definition: "学生や社員が共同で生活する施設",
        meaning: {
          en: "dormitory",
          zh: "宿舍",
        },
        example: "この寮(りょう)は古(ふる)いですか。",
        exampleMeaning: {
          en: "Is this dormitory old?",
          zh: "這間宿舍舊嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8041",
        expression: "勉強",
        reading: "べんきょう",
        definition: "学問を修めること",
        meaning: {
          en: "study",
          zh: "學習",
        },
        example: "私(わたし)の勉強(べんきょう)は難(むずか)しいです。",
        exampleMeaning: {
          en: "My studies are difficult.",
          zh: "我的學業很困難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8042",
        expression: "生活",
        reading: "せいかつ",
        definition: "日々暮らしていくこと",
        meaning: {
          en: "life, living",
          zh: "生活",
        },
        example: "日本(にほん)の生活(せいかつ)はどうですか。",
        exampleMeaning: {
          en: "How is life in Japan?",
          zh: "日本的生活怎麼樣？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8043",
        expression: "仕事",
        reading: "しごと",
        definition: "生計を立てるための活動",
        meaning: {
          en: "work, business",
          zh: "工作",
        },
        example: "仕事(しごと)が忙(いそが)しいです。",
        exampleMeaning: {
          en: "My work is busy.",
          zh: "我的工作很忙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8044",
        expression: "仕事をします",
        reading: "しごとをします",
        definition: "職業上の活動をする",
        meaning: {
          en: "do one's job, work",
          zh: "工作",
        },
        example: "私(わたし)は毎日(まいにち)仕事(しごと)をします。",
        exampleMeaning: {
          en: "I work every day.",
          zh: "我每天都工作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8045",
        expression: "どう",
        reading: "どう",
        definition: "状態や様子を尋ねる疑問詞",
        meaning: {
          en: "how (used to ask for an impression or opinion)",
          zh: "怎麼樣",
        },
        example: "この町(まち)はどうですか。",
        exampleMeaning: {
          en: "How is this town?",
          zh: "這個城鎮怎麼樣？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8046",
        expression: "どんな～",
        reading: "どんな～",
        definition: "種類や性質を尋ねる疑問詞",
        meaning: {
          en: "what kind of ~",
          zh: "什麼樣的～",
        },
        example: "東京(とうきょう)はどんな所(ところ)ですか。",
        exampleMeaning: {
          en: "What kind of place is Tokyo?",
          zh: "東京是個什麼樣的地方？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8047",
        expression: "どれ",
        reading: "どれ",
        definition: "三つ以上のうちから一つを指す疑問詞",
        meaning: {
          en: "which one (of three or more)",
          zh: "哪一個 (三個或以上)",
        },
        example: "あなたの車(くるま)はどれですか。",
        exampleMeaning: {
          en: "Which one is your car?",
          zh: "你的車是哪一輛？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8048",
        expression: "とても",
        reading: "とても",
        definition: "程度が非常に高いさま",
        meaning: {
          en: "very (used in affirmative sentences)",
          zh: "非常、很 (用於肯定句)",
        },
        example: "あのレストランはとてもおいしいです。",
        exampleMeaning: {
          en: "That restaurant is very delicious.",
          zh: "那家餐廳非常好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8049",
        expression: "あまり",
        reading: "あまり",
        definition: "程度がさほど高くないさま",
        meaning: {
          en: "not so (used with negatives)",
          zh: "不太、不怎麼 (用於否定句)",
        },
        example: "上海(シャンハイ)はあまり寒(さむ)くないです。",
        exampleMeaning: {
          en: "Shanghai is not so cold.",
          zh: "上海不太冷。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8050",
        expression: "そして",
        reading: "そして",
        definition: "文と文を繋げ、前の内容に後の内容を付け加える",
        meaning: {
          en: "and (used to connect sentences)",
          zh: "然後、而且 (用於連接句子)",
        },
        example:
          "寮(りょう)の部屋(へや)は大(おお)きいです。そして、きれいです。",
        exampleMeaning: {
          en: "The dorm room is big, and it is clean.",
          zh: "宿舍房間很大，而且很乾淨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8051",
        expression: "～が、～",
        reading: "～が、～",
        definition: "前の文と後の文を対比や逆接の関係でつなぐ",
        meaning: {
          en: "~, but ~",
          zh: "～，但是～",
        },
        example:
          "日本(にほん)の食(た)べ物(もの)はおいしいですが、高(たか)いです。",
        exampleMeaning: {
          en: "Japanese food is delicious, but it's expensive.",
          zh: "日本食物很美味，但是很貴。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8052",
        expression: "お元気ですか",
        reading: "おげんきですか",
        definition: "相手の健康状態を尋ねる挨拶",
        meaning: {
          en: "How are you?",
          zh: "您好嗎？",
        },
        example: "お元気(げんき)ですか。はい、元気(げんき)です。",
        exampleMeaning: {
          en: "How are you? Yes, I'm well.",
          zh: "您好嗎？是的，我很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8053",
        expression: "そうですね",
        reading: "そうですね",
        definition: "考えながら、言葉を選んでいる時の表現",
        meaning: {
          en: "Well, let me see (pausing)",
          zh: "嗯，讓我想想 (停頓)",
        },
        example:
          "Q: どんな所(ところ)ですか。A: そうですね、きれいな所(ところ)です。",
        exampleMeaning: {
          en: "Q: What kind of place is it? A: Well, let me see, it's a beautiful place.",
          zh: "問：這是個什麼樣的地方？答：嗯，讓我想想，這是個美麗的地方。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8054",
        expression: "日本(にほん)の生活(せいかつ)に慣(な)れましたか",
        reading: "にほんのせいかつになれましたか",
        definition: "相手が日本の生活に適応したか尋ねる表現",
        meaning: {
          en: "Have you got used to the life in Japan?",
          zh: "您習慣日本的生活了嗎？",
        },
        example:
          "日本(にほん)の生活(せいかつ)に慣(な)れましたか。はい、慣(な)れました。",
        exampleMeaning: {
          en: "Have you got used to life in Japan? Yes, I have got used to it.",
          zh: "您習慣日本的生活了嗎？是的，我習慣了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8055",
        expression: "～も一杯(いっぱい)いかがですか",
        reading: "～もいっぱいいかがですか",
        definition: "飲食物を更にもう一つ勧める丁寧な表現",
        meaning: {
          en: "Won't you have another cup of ~? (Lit: ~ won't you have one more cup/glass?)",
          zh: "您想再喝/來一杯～嗎？",
        },
        example: "コーヒーも一杯(いっぱい)いかがですか。",
        exampleMeaning: {
          en: "Won't you have another cup of coffee?",
          zh: "您要不要再喝一杯咖啡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8056",
        expression: "いいえ、結構(けっこう)です",
        reading: "いいえ、けっこうです",
        definition: "勧誘を丁寧に断る表現",
        meaning: {
          en: "No, thank you (a polite refusal)",
          zh: "不用了，謝謝 (婉拒)",
        },
        example: "いいえ、結構(けっこう)です。",
        exampleMeaning: {
          en: "No, thank you.",
          zh: "不用了，謝謝。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8057",
        expression: "もう～ですね",
        reading: "もう～ですね",
        definition: "時間が予定の段階に達したことを伝える表現",
        meaning: {
          en: "It's already ~ (isn't it) (indicating lateness or a time limit)",
          zh: "已經～了 (表示時間已到)",
        },
        example: "もう8時(はちじ)ですね。",
        exampleMeaning: {
          en: "It's already 8 o'clock, isn't it.",
          zh: "已經8點了啊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8058",
        expression: "そろそろ失礼(しつれい)します",
        reading: "そろそろしつれいします",
        definition: "そろそろ帰宅することを丁寧に告げる表現",
        meaning: {
          en: "It's almost time to leave now (Lit: I will be rude soon)",
          zh: "我差不多該告辭了",
        },
        example: "そろそろ失礼(しつれい)します。",
        exampleMeaning: {
          en: "It's almost time to leave now.",
          zh: "我差不多該告辭了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f8059",
        expression: "またいらっしゃってください",
        reading: "またいらっしゃってください",
        definition: "来訪者に再訪を促す丁寧な表現",
        meaning: {
          en: "Please come again",
          zh: "請再來",
        },
        example: "またいらっしゃってください。",
        exampleMeaning: {
          en: "Please come again.",
          zh: "請再來。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c89",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 9",
      zh: "大家的日本語 初級I 第九課",
      ja: "みんなの日本語 初級I 第九課",
    },
    description: {
      en: "Lesson 9 introduces verbs like あります and わかります, expressions of skill and preference using が (好き, 嫌い, 上手, 下手), adverbs of degree (よく, たくさん), and conversational phrases for invitations.",
      zh: "第九課介紹了動詞 あります 和 わかります，使用 が 表示能力和偏好的表達 (好き, 嫌い, 上手, 下手)，程度副詞 (よく, たくさん)，以及邀請的會話短語。",
      ja: "動詞「あります」「わかります」、助詞「が」を使った好き嫌いや能力（好き、嫌い、上手、下手）の表現、程度の副詞（よく、たくさん）、招待に関する会話表現を学びます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9001",
        expression: "分かります",
        reading: "わかります",
        definition: "理解する、意味がわかる",
        meaning: {
          en: "understand (Verb 1)",
          zh: "懂得、明白",
        },
        example: "日本(にほん)語(ご)がよく分(わ)かります。",
        exampleMeaning: {
          en: "I understand Japanese well.",
          zh: "我很懂日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9002",
        expression: "あります",
        reading: "あります",
        definition: "存在する（無生物）",
        meaning: {
          en: "have, there is/are (referring to inanimate things) (Verb 1)",
          zh: "有 (指無生命的物體)",
        },
        example: "私(わたし)はチケットがあります。",
        exampleMeaning: {
          en: "I have a ticket.",
          zh: "我有票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9003",
        expression: "好き",
        reading: "すき",
        definition: "好ましい、気に入っている",
        meaning: {
          en: "like, favorite (Na-adjective)",
          zh: "喜歡的 (な形容詞)",
        },
        example: "私(わたし)はダンスが好(す)きです。",
        exampleMeaning: {
          en: "I like dancing.",
          zh: "我喜歡跳舞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9004",
        expression: "嫌い",
        reading: "きらい",
        definition: "好ましくない、嫌だ",
        meaning: {
          en: "dislike, hate (Na-adjective)",
          zh: "討厭的 (な形容詞)",
        },
        example: "私(わたし)は納豆(なっとう)が嫌(きら)いです。",
        exampleMeaning: {
          en: "I dislike natto (fermented soybeans).",
          zh: "我討厭納豆。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9005",
        expression: "上手",
        reading: "じょうず",
        definition: "技量が優れている",
        meaning: {
          en: "good at, skillful (Na-adjective; often used for others' ability)",
          zh: "擅長的 (な形容詞；常用於他人)",
        },
        example: "田中(たなか)さんは料理(りょうり)が上手(じょうず)です。",
        exampleMeaning: {
          en: "Ms. Tanaka is good at cooking.",
          zh: "田中小姐擅長烹飪。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9006",
        expression: "下手",
        reading: "へた",
        definition: "技量が劣っている",
        meaning: {
          en: "poor at, unskillful (Na-adjective; often used for oneself)",
          zh: "不擅長的 (な形容詞；常用於自己)",
        },
        example: "私(わたし)は歌(うた)が下手(へた)です。",
        exampleMeaning: {
          en: "I am poor at singing.",
          zh: "我不擅長唱歌。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9007",
        expression: "料理",
        reading: "りょうり",
        definition: "調理された食べ物、または調理の行為",
        meaning: {
          en: "dish (cooked food), cooking",
          zh: "菜餚、烹飪",
        },
        example: "日本(にほん)料理(りょうり)が好(す)きです。",
        exampleMeaning: {
          en: "I like Japanese food.",
          zh: "我喜歡日本料理。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9008",
        expression: "飲(の)み物(もの)",
        reading: "のみもの",
        definition: "飲用の液体",
        meaning: {
          en: "drinks, beverage",
          zh: "飲料",
        },
        example: "どんな飲(の)み物(もの)が好(す)きですか。",
        exampleMeaning: {
          en: "What kind of drinks do you like?",
          zh: "你喜歡什麼樣的飲料？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9009",
        expression: "スポーツ",
        reading: "スポーツ",
        definition: "運動競技",
        meaning: {
          en: "sport",
          zh: "運動",
        },
        example: "スポーツをします。",
        exampleMeaning: {
          en: "I play sports.",
          zh: "我做運動。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9010",
        expression: "スポーツをします",
        reading: "スポーツをします",
        definition: "運動競技を行う",
        meaning: {
          en: "play sports",
          zh: "做運動",
        },
        example: "週末(しゅうまつ)スポーツをしますか。",
        exampleMeaning: {
          en: "Do you play sports on the weekend?",
          zh: "你週末會做運動嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9011",
        expression: "野球",
        reading: "やきゅう",
        definition: "ボールとバットを使うスポーツ",
        meaning: {
          en: "baseball",
          zh: "棒球",
        },
        example: "野球(やきゅう)が好(す)きですか。",
        exampleMeaning: {
          en: "Do you like baseball?",
          zh: "你喜歡棒球嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9012",
        expression: "野球をします",
        reading: "やきゅうをします",
        definition: "野球をする",
        meaning: {
          en: "play baseball",
          zh: "打棒球",
        },
        example: "毎日(まいにち)野球(やきゅう)をします。",
        exampleMeaning: {
          en: "I play baseball every day.",
          zh: "我每天都打棒球。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9013",
        expression: "ダンス",
        reading: "ダンス",
        definition: "音楽に合わせて体を動かすこと",
        meaning: {
          en: "dance",
          zh: "舞蹈",
        },
        example: "ダンスはちょっと。",
        exampleMeaning: {
          en: "Dancing is a bit difficult (for me).",
          zh: "跳舞對我來說有點困難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9014",
        expression: "ダンスをします",
        reading: "ダンスをします",
        definition: "ダンスを踊る",
        meaning: {
          en: "dance (Verb)",
          zh: "跳舞",
        },
        example: "私(わたし)はダンスをしません。",
        exampleMeaning: {
          en: "I don't dance.",
          zh: "我不跳舞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9015",
        expression: "音楽",
        reading: "おんがく",
        definition: "音を使った芸術",
        meaning: {
          en: "music",
          zh: "音樂",
        },
        example: "どんな音楽(おんがく)が好(す)きですか。",
        exampleMeaning: {
          en: "What kind of music do you like?",
          zh: "你喜歡什麼樣的音樂？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9016",
        expression: "歌",
        reading: "うた",
        definition: "声を出してメロディを奏でること",
        meaning: {
          en: "song, singing",
          zh: "歌、唱歌",
        },
        example: "歌(うた)を歌(うた)います。",
        exampleMeaning: {
          en: "I sing a song.",
          zh: "我唱歌。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9017",
        expression: "クラシック",
        reading: "クラシック",
        definition: "西洋の伝統的な音楽",
        meaning: {
          en: "classical music",
          zh: "古典音樂",
        },
        example: "私(わたし)の妻(つま)はクラシックが好(す)きです。",
        exampleMeaning: {
          en: "My wife likes classical music.",
          zh: "我妻子喜歡古典音樂。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9018",
        expression: "ジャズ",
        reading: "ジャズ",
        definition: "即興演奏を特徴とする音楽",
        meaning: {
          en: "jazz",
          zh: "爵士樂",
        },
        example: "私(わたし)はジャズが分(わ)かりません。",
        exampleMeaning: {
          en: "I don't understand jazz (music).",
          zh: "我不懂爵士樂。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9019",
        expression: "コンサート",
        reading: "コンサート",
        definition: "演奏会、音楽会",
        meaning: {
          en: "concert",
          zh: "音樂會",
        },
        example: "コンサートに行(い)きます。",
        exampleMeaning: {
          en: "I will go to a concert.",
          zh: "我會去音樂會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9020",
        expression: "カラオケ",
        reading: "カラオケ",
        definition: "伴奏に合わせて歌を歌う娯楽",
        meaning: {
          en: "karaoke",
          zh: "卡拉OK",
        },
        example: "カラオケをしませんか。",
        exampleMeaning: {
          en: "Won't you do karaoke?",
          zh: "要不要一起去唱卡拉OK？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9021",
        expression: "歌舞伎",
        reading: "かぶき",
        definition: "日本の伝統的な演劇",
        meaning: {
          en: "Kabuki (traditional Japanese musical drama)",
          zh: "歌舞伎 (日本傳統戲劇)",
        },
        example: "歌舞伎(かぶき)は好(す)きですか。",
        exampleMeaning: {
          en: "Do you like Kabuki?",
          zh: "你喜歡歌舞伎嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9022",
        expression: "絵",
        reading: "え",
        definition: "図画",
        meaning: {
          en: "picture, drawing, painting",
          zh: "畫、圖畫",
        },
        example: "きれいな絵(え)があります。",
        exampleMeaning: {
          en: "There is a beautiful picture.",
          zh: "有幅漂亮的畫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9023",
        expression: "字",
        reading: "じ",
        definition: "文字",
        meaning: {
          en: "letter, character",
          zh: "文字",
        },
        example: "先生(せんせい)は字(じ)が上手(じょうず)です。",
        exampleMeaning: {
          en: "The teacher has good handwriting.",
          zh: "老師的字寫得很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9024",
        expression: "漢字",
        reading: "かんじ",
        definition: "中国から伝わった文字",
        meaning: {
          en: "Chinese characters",
          zh: "漢字",
        },
        example: "漢字(かんじ)は難(むずか)しいです。",
        exampleMeaning: {
          en: "Kanji is difficult.",
          zh: "漢字很難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9025",
        expression: "ひらがな",
        reading: "ひらがな",
        definition: "日本語の表音文字の一つ",
        meaning: {
          en: "Hiragana script",
          zh: "平假名",
        },
        example: "ひらがなは分(わ)かりますか。",
        exampleMeaning: {
          en: "Do you understand Hiragana?",
          zh: "你懂平假名嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9026",
        expression: "かたかな",
        reading: "かたかな",
        definition: "日本語の表音文字の一つ",
        meaning: {
          en: "Katakana script",
          zh: "片假名",
        },
        example: "かたかなは簡単(かんたん)です。",
        exampleMeaning: {
          en: "Katakana is easy.",
          zh: "片假名很簡單。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9027",
        expression: "ローマ字",
        reading: "ローマじ",
        definition: "ローマアルファベット",
        meaning: {
          en: "the Roman alphabet (Romaji)",
          zh: "羅馬字母 (羅馬字)",
        },
        example: "ローマ字(じ)で書(か)きます。",
        exampleMeaning: {
          en: "I write in Romaji.",
          zh: "我用羅馬字寫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9028",
        expression: "細(こま)かいお金(かね)",
        reading: "こまかいおかね",
        definition: "小銭",
        meaning: {
          en: "small change",
          zh: "零錢",
        },
        example: "細(こま)かいお金(かね)がありますか。",
        exampleMeaning: {
          en: "Do you have small change?",
          zh: "你有零錢嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9029",
        expression: "チケット",
        reading: "チケット",
        definition: "切符、券",
        meaning: {
          en: "ticket",
          zh: "票",
        },
        example: "コンサートのチケットがあります。",
        exampleMeaning: {
          en: "I have a concert ticket.",
          zh: "我有音樂會的票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9030",
        expression: "時間",
        reading: "じかん",
        definition: "時の流れ、予定された時刻",
        meaning: {
          en: "time",
          zh: "時間",
        },
        example: "今日(きょう)は時間(じかん)がありません。",
        exampleMeaning: {
          en: "I don't have time today.",
          zh: "我今天沒有時間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9031",
        expression: "用事",
        reading: "ようじ",
        definition: "しなければならないこと、用件",
        meaning: {
          en: "something to do, errand",
          zh: "事情、要辦的事",
        },
        example: "明日(あした)は用事(ようじ)があります。",
        exampleMeaning: {
          en: "I have an errand/something to do tomorrow.",
          zh: "我明天有事。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9032",
        expression: "約束",
        reading: "やくそく",
        definition: "人との取り決め、アポイントメント",
        meaning: {
          en: "appointment, promise",
          zh: "約定、承諾",
        },
        example: "来週(らいしゅう)約束(やくそく)があります。",
        exampleMeaning: {
          en: "I have an appointment next week.",
          zh: "我下週有約。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9033",
        expression: "ご主人",
        reading: "ごしゅじん",
        definition: "他人の夫（丁寧な言い方）",
        meaning: {
          en: "(someone else's) husband",
          zh: "(別人的) 丈夫 (敬稱)",
        },
        example: "あなたのご主人(しゅじん)は会社(かいしゃ)員(いん)ですか。",
        exampleMeaning: {
          en: "Is your husband an office worker?",
          zh: "您的丈夫是公司職員嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9034",
        expression: "夫",
        reading: "おっと",
        definition: "自分(じぶん)の夫（謙譲語）",
        meaning: {
          en: "(my) husband (humble)",
          zh: "(我的) 丈夫 (謙稱)",
        },
        example: "私(わたし)の夫(おっと)は先生(せんせい)です。",
        exampleMeaning: {
          en: "My husband is a teacher.",
          zh: "我的丈夫是老師。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9035",
        expression: "主人",
        reading: "しゅじん",
        definition: "自分(じぶん)の夫",
        meaning: {
          en: "(my) husband",
          zh: "(我的) 丈夫",
        },
        example: "主人(しゅじん)は今(いま)仕事(しごと)をしています。",
        exampleMeaning: {
          en: "My husband is working now.",
          zh: "我的丈夫現在正在工作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9036",
        expression: "奥さん",
        reading: "おくさん",
        definition: "他人の妻（丁寧な言い方）",
        meaning: {
          en: "(someone else's) wife",
          zh: "(別人的) 妻子 (敬稱)",
        },
        example: "ミラーさん(Miller-san)の奥(おく)さんは忙(いそが)しいですか。",
        exampleMeaning: {
          en: "Is Mr. Miller's wife busy?",
          zh: "米勒先生的妻子忙嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9037",
        expression: "妻",
        reading: "つま",
        definition: "自分(じぶん)の妻（謙譲語）",
        meaning: {
          en: "(my) wife (humble)",
          zh: "(我的) 妻子 (謙稱)",
        },
        example: "私(わたし)の妻(つま)は英語(えいご)が分(わ)かります。",
        exampleMeaning: {
          en: "My wife understands English.",
          zh: "我的妻子懂英文。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9038",
        expression: "家内",
        reading: "かない",
        definition: "自分(じぶん)の妻",
        meaning: {
          en: "(my) wife",
          zh: "(我的) 妻子",
        },
        example: "家内(かない)は踊(おど)りが上手(じょうず)です。",
        exampleMeaning: {
          en: "My wife is good at dancing.",
          zh: "我的妻子擅長跳舞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9039",
        expression: "子(こ)ども",
        reading: "こども",
        definition: "子供",
        meaning: {
          en: "child",
          zh: "孩子",
        },
        example: "私(わたし)の子(こ)どもは3人(にん)います。",
        exampleMeaning: {
          en: "I have 3 children.",
          zh: "我有三個孩子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9040",
        expression: "よく",
        reading: "よく",
        definition: "程度がかなり高い、頻度が多い",
        meaning: {
          en: "well, much, often (used with verbs/adjectives of degree)",
          zh: "很、經常、仔細地",
        },
        example: "私(わたし)は日本語(にほんご)がよく分(わ)かります。",
        exampleMeaning: {
          en: "I understand Japanese well/much.",
          zh: "我很懂日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9041",
        expression: "だいたい",
        reading: "だいたい",
        definition: "ほぼ、おおよそ",
        meaning: {
          en: "mostly, roughly",
          zh: "大致、大約",
        },
        example: "だいたい分(わ)かります。",
        exampleMeaning: {
          en: "I mostly understand.",
          zh: "我大致明白了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9042",
        expression: "たくさん",
        reading: "たくさん",
        definition: "量が多いさま",
        meaning: {
          en: "many, much",
          zh: "很多、大量",
        },
        example: "細(こま)かいお金(かね)がたくさんあります。",
        exampleMeaning: {
          en: "I have a lot of small change.",
          zh: "我有很多零錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9043",
        expression: "少(すこ)し",
        reading: "すこし",
        definition: "量が少ないさま",
        meaning: {
          en: "a little, a few",
          zh: "一點、少量",
        },
        example: "少(すこ)しだけ分(わ)かります。",
        exampleMeaning: {
          en: "I understand only a little.",
          zh: "我只懂一點點。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9044",
        expression: "全然",
        reading: "ぜんぜん",
        definition: "まったく（後に否定の表現を伴う）",
        meaning: {
          en: "not at all (used with negatives)",
          zh: "完全不 (用於否定句)",
        },
        example: "全然(ぜんぜん)分(わ)かりません。",
        exampleMeaning: {
          en: "I don't understand at all.",
          zh: "我完全不明白。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9045",
        expression: "早(はや)く",
        reading: "はやく",
        definition: "予定より前に、または速く",
        meaning: {
          en: "early, quickly, fast (adverb)",
          zh: "早地、快地",
        },
        example: "早(はや)く来(き)てください。",
        exampleMeaning: {
          en: "Please come quickly/early.",
          zh: "請快點/早點來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9046",
        expression: "速(はや)く",
        reading: "はやく",
        definition: "動作の速度が速い",
        meaning: {
          en: "quickly, fast (adverb, same reading as 早く but often implies speed)",
          zh: "快地 (指速度)",
        },
        example: "もっと速(はや)く走(はし)ります。",
        exampleMeaning: {
          en: "I run faster.",
          zh: "我跑得更快。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9047",
        expression: "～から",
        reading: "～から",
        definition: "理由や原因を示す",
        meaning: {
          en: "because ~ (used at the end of a clause to state the reason)",
          zh: "因為～",
        },
        example: "時間(じかん)がありませんから、行(い)きません。",
        exampleMeaning: {
          en: "Because I don't have time, I won't go.",
          zh: "因為我沒有時間，所以不去。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9048",
        expression: "どうして",
        reading: "どうして",
        definition: "理由を尋ねる疑問詞",
        meaning: {
          en: "why",
          zh: "為什麼",
        },
        example: "どうして行(い)きませんか。",
        exampleMeaning: {
          en: "Why won't you go?",
          zh: "你為什麼不去？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9049",
        expression: "残念(ざんねん)です",
        reading: "ざんねんです",
        definition: "残念に思う気持ちを表す",
        meaning: {
          en: "I'm sorry (to hear that) / That's a pity (Na-adjective)",
          zh: "很遺憾、真可惜",
        },
        example: "コンサートに行(い)けなくて残念(ざんねん)です。",
        exampleMeaning: {
          en: "It's a pity I can't go to the concert.",
          zh: "很遺憾我不能去音樂會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9050",
        expression: "すみません",
        reading: "すみません",
        definition: "謝罪、感謝、呼びかけ",
        meaning: {
          en: "I am sorry, excuse me, thank you",
          zh: "對不起、不好意思、謝謝",
        },
        example: "すみません、道(みち)を教(おし)えてください。",
        exampleMeaning: {
          en: "Excuse me, please tell me the way.",
          zh: "不好意思，請告訴我路。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9051",
        expression: "もしもし",
        reading: "もしもし",
        definition: "電話での挨拶",
        meaning: {
          en: "hello (used on phone)",
          zh: "喂 (用於電話)",
        },
        example: "もしもし、ミラーさん(Miller-san)ですか。",
        exampleMeaning: {
          en: "Hello, is this Mr. Miller?",
          zh: "喂，是米勒先生嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9052",
        expression: "ああ",
        reading: "ああ",
        definition: "驚きや理解を示す間投詞",
        meaning: {
          en: "oh (interjection)",
          zh: "啊 (表示驚訝或理解)",
        },
        example: "ああ、そう(sō)ですか。",
        exampleMeaning: {
          en: "Oh, is that so?",
          zh: "哦，是這樣啊？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9053",
        expression: "一(いっ)緒(しょ)にいかがですか",
        reading: "いっしょうにいかがですか",
        definition: "相手を誘う丁寧な表現",
        meaning: {
          en: "Won't you join me (us)? (polite invitation)",
          zh: "要不要一起呢？",
        },
        example: "カラオケ、一(いっ)緒(しょ)にいかがですか。",
        exampleMeaning: {
          en: "Won't you join us for karaoke?",
          zh: "要不要一起去唱卡拉OK？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9054",
        expression: "～はちょっと",
        reading: "～はちょっと",
        definition: "誘いを婉曲に断る表現",
        meaning: {
          en: "~ is a bit difficult (a euphemism used when declining an invitation)",
          zh: "～有點困難 (婉拒邀請)",
        },
        example: "日曜(にちよう)日(び)はちょっと…。",
        exampleMeaning: {
          en: "Sunday is a bit difficult (I can't make it).",
          zh: "週日有點困難… (我不能去)。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9055",
        expression: "だめですか",
        reading: "だめですか",
        definition: "誘いを断られた時に、確認や念押しで尋ねる表現",
        meaning: {
          en: "So you cannot (come)?",
          zh: "這樣的話，您不能來嗎？",
        },
        example: "だめですか。残念(ざんねん)です。",
        exampleMeaning: {
          en: "So you can't come? That's a pity.",
          zh: "您不能來嗎？真遺憾。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f9056",
        expression: "また今度(こんど)お願(ねが)いします",
        reading: "またこんどおねがいします",
        definition: "次の機会を期待して、誘いを丁寧に断る表現",
        meaning: {
          en: "Please ask me again some other time (used when refusing an invitation indirectly, considering someone's feelings)",
          zh: "下次再拜託您了 (間接婉拒)",
        },
        example: "また今度(こんど)お願(ねが)いします。",
        exampleMeaning: {
          en: "Please ask me again some other time.",
          zh: "下次再邀請我吧。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c10",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 10",
      zh: "大家的日本語 初級I 第十課",
      ja: "みんなの日本語 初級I 第十課",
    },
    description: {
      en: "Lesson 10 introduces the existence verbs います (for animate things) and あります (for inanimate things), as well as location and positional words (e.g., 上, 下, 右, 左, 間) to describe where things are.",
      zh: "第十課介紹了表示存在的動詞 います (用於有生命物體) 和 あります (用於無生命物體)，以及用於描述物體位置的方向和位置詞 (例如：上、下、右、左、間)。",
      ja: "第十課では、存在を表す動詞「います」（人や動物）と「あります」（物）を学び、位置や方向を表す言葉（上、下、右、左、間など）を使って物の場所を説明します。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1001",
        expression: "います",
        reading: "います",
        definition: "存在する（人、動物など、生きているもの）",
        meaning: {
          en: "exist, be (referring to animate things)",
          zh: "有、在 (用於人、動物等有生命的東西)",
        },
        example: "教室(きょうしつ)に先生(せんせい)がいます。",
        exampleMeaning: {
          en: "There is a teacher in the classroom.",
          zh: "教室裡有老師。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1002",
        expression: "あります",
        reading: "あります",
        definition: "存在する（物など、生きていないもの）",
        meaning: {
          en: "exist, be (referring to inanimate things)",
          zh: "有、在 (用於物體等無生命的東西)",
        },
        example: "机(つくえ)の上(うえ)に本(ほん)があります。",
        exampleMeaning: {
          en: "There is a book on the desk.",
          zh: "桌子上有書。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1003",
        expression: "いろいろ",
        reading: "いろいろ",
        definition: "様々",
        meaning: {
          en: "various",
          zh: "各種各樣的",
        },
        example: "いろいろな食(た)べ物(もの)があります。",
        exampleMeaning: {
          en: "There are various kinds of food.",
          zh: "有各種各樣的食物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1004",
        expression: "男の人",
        reading: "おとこのひと",
        definition: "男性",
        meaning: {
          en: "man",
          zh: "男人",
        },
        example: "あの男(おとこ)の人(ひと)はだれですか。",
        exampleMeaning: {
          en: "Who is that man?",
          zh: "那個男人是誰？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1005",
        expression: "女の人",
        reading: "おんなのひと",
        definition: "女性",
        meaning: {
          en: "woman",
          zh: "女人",
        },
        example: "きれいな女(おんな)の人(ひと)です。",
        exampleMeaning: {
          en: "She is a beautiful woman.",
          zh: "她是個漂亮的女人。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1006",
        expression: "男の子",
        reading: "おとこのこ",
        definition: "男児",
        meaning: {
          en: "boy",
          zh: "男孩",
        },
        example: "公園(こうえん)で男(おとこ)の子(こ)が遊(あそ)んでいます。",
        exampleMeaning: {
          en: "A boy is playing in the park.",
          zh: "一個男孩在公園裡玩耍。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1007",
        expression: "女の子",
        reading: "おんなのこ",
        definition: "女児",
        meaning: {
          en: "girl",
          zh: "女孩",
        },
        example: "あそこにかわいい女(おんな)の子(こ)がいます。",
        exampleMeaning: {
          en: "There is a cute girl over there.",
          zh: "那邊有個可愛的女孩。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1008",
        expression: "犬",
        reading: "いぬ",
        definition: "ドッグ",
        meaning: {
          en: "dog",
          zh: "狗",
        },
        example: "うちには犬(いぬ)がいます。",
        exampleMeaning: {
          en: "We have a dog at home.",
          zh: "我家有狗。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1009",
        expression: "猫",
        reading: "ねこ",
        definition: "キャット",
        meaning: {
          en: "cat",
          zh: "貓",
        },
        example: "猫(ねこ)はどこにいますか。",
        exampleMeaning: {
          en: "Where is the cat?",
          zh: "貓在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1010",
        expression: "木",
        reading: "き",
        definition: "樹木",
        meaning: {
          en: "tree",
          zh: "樹",
        },
        example: "庭(にわ)に大(おお)きい木(き)があります。",
        exampleMeaning: {
          en: "There is a big tree in the garden.",
          zh: "花園裡有一棵大樹。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1011",
        expression: "物",
        reading: "もの",
        definition: "品物",
        meaning: {
          en: "thing",
          zh: "東西、物品",
        },
        example: "これは何(なん)の物(もの)ですか。",
        exampleMeaning: {
          en: "What kind of thing is this?",
          zh: "這是什麼東西？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1012",
        expression: "フィルム",
        reading: "フィルム",
        definition: "写真や映画のフィルム",
        meaning: {
          en: "film",
          zh: "膠捲、底片",
        },
        example: "カメラのフィルムはどこですか。",
        exampleMeaning: {
          en: "Where is the camera film?",
          zh: "相機膠捲在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1013",
        expression: "電池",
        reading: "でんち",
        definition: "バッテリー",
        meaning: {
          en: "battery",
          zh: "電池",
        },
        example: "そのリモコンに電池(でんち)が入(はい)っていますか。",
        exampleMeaning: {
          en: "Does that remote control have batteries in it?",
          zh: "那個遙控器裡有電池嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1014",
        expression: "箱",
        reading: "はこ",
        definition: "ボックス",
        meaning: {
          en: "box",
          zh: "箱子",
        },
        example: "箱(はこ)の中(なか)に何(なに)がありますか。",
        exampleMeaning: {
          en: "What is inside the box?",
          zh: "箱子裡有什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1015",
        expression: "スイッチ",
        reading: "スイッチ",
        definition: "電気の入/切の装置",
        meaning: {
          en: "switch",
          zh: "開關",
        },
        example: "スイッチを入(い)れてください。",
        exampleMeaning: {
          en: "Please turn on the switch.",
          zh: "請打開開關。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1016",
        expression: "冷蔵庫",
        reading: "れいぞうこ",
        definition: "食物を冷やすための箱",
        meaning: {
          en: "refrigerator",
          zh: "冰箱",
        },
        example: "冷蔵庫(れいぞうこ)に牛乳(ぎゅうにゅう)があります。",
        exampleMeaning: {
          en: "There is milk in the refrigerator.",
          zh: "冰箱裡有牛奶。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1017",
        expression: "テーブル",
        reading: "テーブル",
        definition: "机",
        meaning: {
          en: "table",
          zh: "桌子",
        },
        example: "テーブルの下(した)に荷物(にもつ)があります。",
        exampleMeaning: {
          en: "There is luggage under the table.",
          zh: "桌子下面有行李。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1018",
        expression: "ベッド",
        reading: "ベッド",
        definition: "寝るための家具",
        meaning: {
          en: "bed",
          zh: "床",
        },
        example: "ベッドは部屋(へや)のどこですか。",
        exampleMeaning: {
          en: "Where is the bed in the room?",
          zh: "床在房間的哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1019",
        expression: "棚",
        reading: "たな",
        definition: "物を置くための板",
        meaning: {
          en: "shelf",
          zh: "架子、擱板",
        },
        example: "本(ほん)は棚(たな)の上(うえ)にあります。",
        exampleMeaning: {
          en: "The book is on the shelf.",
          zh: "書在架子上。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1020",
        expression: "ドア",
        reading: "ドア",
        definition: "扉",
        meaning: {
          en: "door",
          zh: "門",
        },
        example: "ドアのうしろにだれかいますか。",
        exampleMeaning: {
          en: "Is someone behind the door?",
          zh: "門後面有人嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1021",
        expression: "窓",
        reading: "まど",
        definition: "窓ガラス",
        meaning: {
          en: "window",
          zh: "窗戶",
        },
        example: "窓(まど)の外(そと)に公園(こうえん)があります。",
        exampleMeaning: {
          en: "There is a park outside the window.",
          zh: "窗外有個公園。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1022",
        expression: "ポスト",
        reading: "ポスト",
        definition: "郵便受け",
        meaning: {
          en: "mailbox, postbox",
          zh: "郵筒、信箱",
        },
        example: "ポストがどこにありますか。",
        exampleMeaning: {
          en: "Where is the postbox?",
          zh: "郵筒在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1023",
        expression: "ビル",
        reading: "ビル",
        definition: "建物",
        meaning: {
          en: "building",
          zh: "大樓、建築物",
        },
        example: "大(おお)きなビルが建(た)っています。",
        exampleMeaning: {
          en: "A big building is standing.",
          zh: "一棟大樓矗立著。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1024",
        expression: "公園",
        reading: "こうえん",
        definition: "パブリックガーデン",
        meaning: {
          en: "park",
          zh: "公園",
        },
        example: "家(いえ)の近(ちか)くに公園(こうえん)があります。",
        exampleMeaning: {
          en: "There is a park near my house.",
          zh: "我家附近有一個公園。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1025",
        expression: "喫茶店",
        reading: "きっさてん",
        definition: "コーヒーショップ",
        meaning: {
          en: "coffee shop, café",
          zh: "咖啡館、茶館",
        },
        example: "喫茶店(きっさてん)で休(やす)みましょう。",
        exampleMeaning: {
          en: "Let's take a break at the coffee shop.",
          zh: "我們去咖啡館休息一下吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1026",
        expression: "本屋",
        reading: "ほんや",
        definition: "書店",
        meaning: {
          en: "bookstore",
          zh: "書店",
        },
        example: "駅(えき)の前(まえ)に本屋(ほんや)があります。",
        exampleMeaning: {
          en: "There is a bookstore in front of the station.",
          zh: "車站前面有一家書店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1027",
        expression: "～屋",
        reading: "～や",
        definition: "～を売る店",
        meaning: {
          en: "~ store",
          zh: "~ 店",
        },
        example: "花(はな)屋(や)に行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go to the flower shop.",
          zh: "我想去花店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1028",
        expression: "乗り場",
        reading: "のりば",
        definition: "（タクシー、バスなどの）乗車場所",
        meaning: {
          en: "a fixed place to catch taxis, trains, etc. (platform, stand)",
          zh: "乘車處、站台",
        },
        example: "タクシー乗(の)り場(ば)はあそこです。",
        exampleMeaning: {
          en: "The taxi stand is over there.",
          zh: "出租車乘車處在那邊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1029",
        expression: "県",
        reading: "けん",
        definition: "日本の行政区画",
        meaning: {
          en: "prefecture",
          zh: "縣 (日本的行政區劃)",
        },
        example: "私(わたし)は大阪(おおさか)府(ふ)に住(す)んでいます。",
        exampleMeaning: {
          en: "I live in Osaka Prefecture.",
          zh: "我住在大阪府。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1030",
        expression: "上",
        reading: "うえ",
        definition: "トップ、アッパー",
        meaning: {
          en: "on, above, over",
          zh: "上、上面",
        },
        example: "テレビの上(うえ)に時計(とけい)があります。",
        exampleMeaning: {
          en: "There is a clock on the TV.",
          zh: "電視機上有個時鐘。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1031",
        expression: "下",
        reading: "した",
        definition: "ボトム、ローワー",
        meaning: {
          en: "under, below, beneath",
          zh: "下、下面",
        },
        example: "いすの下(した)に荷物(にもつ)があります。",
        exampleMeaning: {
          en: "There is luggage under the chair.",
          zh: "椅子下面有行李。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1032",
        expression: "前",
        reading: "まえ",
        definition: "フロント、ビフォー",
        meaning: {
          en: "front, before",
          zh: "前面、以前",
        },
        example: "駅(えき)の前(まえ)で待(ま)っています。",
        exampleMeaning: {
          en: "I am waiting in front of the station.",
          zh: "我在車站前面等著。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1033",
        expression: "うしろ",
        reading: "うしろ",
        definition: "バック、ビハインド",
        meaning: {
          en: "back, behind",
          zh: "後、後面",
        },
        example: "彼(かれ)は私(わたし)のうしろにいます。",
        exampleMeaning: {
          en: "He is behind me.",
          zh: "他在我後面。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1034",
        expression: "右",
        reading: "みぎ",
        definition: "ライト (側)",
        meaning: {
          en: "right (side)",
          zh: "右、右邊",
        },
        example: "右(みぎ)に曲(ま)がってください。",
        exampleMeaning: {
          en: "Please turn right.",
          zh: "請向右轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1035",
        expression: "左",
        reading: "ひだり",
        definition: "レフト (側)",
        meaning: {
          en: "left (side)",
          zh: "左、左邊",
        },
        example: "左(ひだり)に本屋(ほんや)があります。",
        exampleMeaning: {
          en: "There is a bookstore on the left.",
          zh: "左邊有一家書店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1036",
        expression: "中",
        reading: "なか",
        definition: "インサイド",
        meaning: {
          en: "in, inside",
          zh: "中、裡面",
        },
        example: "箱(はこ)の中(なか)を見(み)てください。",
        exampleMeaning: {
          en: "Please look inside the box.",
          zh: "請看箱子裡面。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1037",
        expression: "外",
        reading: "そと",
        definition: "アウトサイド",
        meaning: {
          en: "outside",
          zh: "外、外面",
        },
        example: "外(そと)は寒(さむ)いです。",
        exampleMeaning: {
          en: "It is cold outside.",
          zh: "外面很冷。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1038",
        expression: "隣",
        reading: "となり",
        definition: "ネクスト、隣接",
        meaning: {
          en: "next, next door",
          zh: "隔壁、鄰近",
        },
        example: "隣(となり)の部屋(へや)に田中(たなか)さんがいます。",
        exampleMeaning: {
          en: "Mr. Tanaka is in the next room.",
          zh: "田中先生在隔壁房間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1039",
        expression: "近く",
        reading: "ちかく",
        definition: "ニア、付近",
        meaning: {
          en: "near, vicinity",
          zh: "附近、近處",
        },
        example: "駅(えき)の近(ちか)くにコンビニがあります。",
        exampleMeaning: {
          en: "There is a convenience store near the station.",
          zh: "車站附近有一家便利商店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1040",
        expression: "間",
        reading: "あいだ",
        definition: "ビトウィーン、アモング",
        meaning: {
          en: "between, among",
          zh: "之間、中間",
        },
        example:
          "本屋(ほんや)と喫茶店(きっさてん)の間(あいだ)に銀行(ぎんこう)があります。",
        exampleMeaning: {
          en: "There is a bank between the bookstore and the coffee shop.",
          zh: "書店和咖啡館之間有一家銀行。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1041",
        expression: "～や～ など",
        reading: "～や～ など",
        definition: "～や～といった例",
        meaning: {
          en: "~, ~, and so on (listing examples)",
          zh: "～、～等等 (列舉)",
        },
        example: "果物(くだもの)やパンなどがあります。",
        exampleMeaning: {
          en: "There are fruits, bread, and so on.",
          zh: "有水果、麵包等等。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1042",
        expression: "いちばん～",
        reading: "いちばん～",
        definition: "一番、最も",
        meaning: {
          en: "the most ~",
          zh: "最 ~",
        },
        example: "いちばん高(たか)いビルはどれですか。",
        exampleMeaning: {
          en: "Which is the tallest building?",
          zh: "哪棟建築是最高的？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1043",
        expression: "いちばんうえ",
        reading: "いちばんうえ",
        definition: "一番上の部分",
        meaning: {
          en: "the top",
          zh: "最上面",
        },
        example: "いちばん上(うえ)の棚(たな)にあります。",
        exampleMeaning: {
          en: "It is on the top shelf.",
          zh: "它在最上面的架子上。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1044",
        expression: "～段目",
        reading: "～だんめ",
        definition: "棚や引き出しの順番",
        meaning: {
          en: "the ~th shelf/tier",
          zh: "第 ~ 層 (架子或抽屜)",
        },
        example: "二(に)段(だん)目(め)に本(ほん)を置(お)いてください。",
        exampleMeaning: {
          en: "Please put the book on the second shelf.",
          zh: "請把書放在第二層架子上。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1045",
        expression: "だん",
        reading: "だん",
        definition: "棚や段を数える助数詞",
        meaning: {
          en: "counter for shelves/tiers",
          zh: "層 (架子、抽屜的量詞)",
        },
        example: "三(さん)段(だん)の棚(たな)があります。",
        exampleMeaning: {
          en: "There is a three-tier shelf.",
          zh: "有一個三層的架子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1046",
        expression: "どうもすみません",
        reading: "どうもすみません",
        definition: "深く感謝する、または深く謝罪する表現",
        meaning: {
          en: "Thank you (for a favor/trouble), or I'm sorry",
          zh: "非常感謝 (帶來麻煩)、實在抱歉",
        },
        example: "荷物(にもつ)を持(も)ってくれて、どうもすみません。",
        exampleMeaning: {
          en: "Thank you very much for carrying the luggage.",
          zh: "非常感謝你幫我拿行李。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1047",
        expression: "チリソース",
        reading: "チリソース",
        definition: "辛いソース",
        meaning: {
          en: "chilli sauce",
          zh: "辣椒醬",
        },
        example: "チリソースはどこにありますか。",
        exampleMeaning: {
          en: "Where is the chilli sauce?",
          zh: "辣椒醬在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1048",
        expression: "奥",
        reading: "おく",
        definition: "一番奥の部分",
        meaning: {
          en: "the back, the inner part",
          zh: "裡面、內部",
        },
        example: "店(みせ)の奥(おく)にトイレがあります。",
        exampleMeaning: {
          en: "The toilet is in the back of the store.",
          zh: "洗手間在店鋪的裡面。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1049",
        expression: "スパイスコーナー",
        reading: "スパイスコーナー",
        definition: "香辛料が置いてある場所",
        meaning: {
          en: "spice corner",
          zh: "香料區",
        },
        example: "スパイスコーナーはレジの近(ちか)くです。",
        exampleMeaning: {
          en: "The spice corner is near the register.",
          zh: "香料區在收銀台附近。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c11",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 11",
      zh: "大家的日本語 初級I 第十一課",
      ja: "みんなの日本語 初級I 第十一課",
    },
    description: {
      en: "Lesson 11 introduces numerical expressions for counting objects using the native Japanese numbers (ひとつ to とお), counting people (ひとり, ふたり, ～にん), and various specific counters (～台, ～枚, ～回). It also covers stating duration using います and かかります.",
      zh: "第十一課介紹了日語的數數表達方式，包括使用固有數詞 (ひとつ 到 とお) 來數物體、數人 (ひとり, ふたり, ～にん)，以及各種專用量詞 (～台, ～枚, ～回)。本課也涵蓋了使用 います 和 かかります 來表達持續的時間長度。",
      ja: "第十一課では、固有数詞（ひとつ～とお）での物の数え方、人の数え方（ひとり、ふたり、～にん）、その他いくつかの助数詞（～台、～枚、～回）を学びます。また、期間や所要時間を表す「います」や「かかります」の用法も学習します。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1101",
        expression: "子供がいます",
        reading: "こどもがいます",
        definition: "自分の子供を持つ",
        meaning: {
          en: "have a child",
          zh: "有孩子",
        },
        example: "私(わたし)には子供(こども)が二人(ふたり)います。",
        exampleMeaning: {
          en: "I have two children.",
          zh: "我有兩個孩子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1102",
        expression: "日本にいます",
        reading: "にほんにいます",
        definition: "日本に滞在する",
        meaning: {
          en: "stay, be in Japan (referring to duration)",
          zh: "在/逗留在日本",
        },
        example: "どのくらい日本(にほん)にいますか。",
        exampleMeaning: {
          en: "How long will you stay in Japan?",
          zh: "你要在日本待多久？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1103",
        expression: "かかります",
        reading: "かかります",
        definition: "（時間やお金が）必要である",
        meaning: {
          en: "take (referring to time or money)",
          zh: "花費 (時間或金錢)",
        },
        example: "家(いえ)から会社(かいしゃ)まで３０分(ぷん)かかります。",
        exampleMeaning: {
          en: "It takes 30 minutes from home to the office.",
          zh: "從家到公司需要30分鐘。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1104",
        expression: "会社を休みます",
        reading: "かいしゃをやすみます",
        definition: "仕事を休む",
        meaning: {
          en: "take a day off work",
          zh: "請假、休假",
        },
        example: "来週(らいしゅう)、会社(かいしゃ)を休(やす)みます。",
        exampleMeaning: {
          en: "I will take a day off work next week.",
          zh: "我下週要請假一天。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1105",
        expression: "一つ",
        reading: "ひとつ",
        definition: "１個",
        meaning: {
          en: "one (general counter for things)",
          zh: "一個",
        },
        example: "りんごをひとつのください。",
        exampleMeaning: {
          en: "Please give me one apple.",
          zh: "請給我一個蘋果。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1106",
        expression: "二つ",
        reading: "ふたつ",
        definition: "２個",
        meaning: {
          en: "two (general counter for things)",
          zh: "兩個",
        },
        example: "みかんを二(ふた)つ買(か)いました。",
        exampleMeaning: {
          en: "I bought two mandarin oranges.",
          zh: "我買了兩個橘子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1107",
        expression: "三つ",
        reading: "みっつ",
        definition: "３個",
        meaning: {
          en: "three (general counter for things)",
          zh: "三個",
        },
        example: "サンドイッチを三(み)っつ食(た)べました。",
        exampleMeaning: {
          en: "I ate three sandwiches.",
          zh: "我吃了三個三明治。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1108",
        expression: "四つ",
        reading: "よっつ",
        definition: "４個",
        meaning: {
          en: "four (general counter for things)",
          zh: "四個",
        },
        example: "ドーナツを四(よ)っつお願(ねが)いします。",
        exampleMeaning: {
          en: "I'd like four doughnuts, please.",
          zh: "請給我四個甜甜圈。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1109",
        expression: "五つ",
        reading: "いつつ",
        definition: "５個",
        meaning: {
          en: "five (general counter for things)",
          zh: "五個",
        },
        example: "五(いつ)つで千(せん)円(えん)です。",
        exampleMeaning: {
          en: "Five pieces are 1,000 yen.",
          zh: "五個1,000日元。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1110",
        expression: "六つ",
        reading: "むっつ",
        definition: "６個",
        meaning: {
          en: "six (general counter for things)",
          zh: "六個",
        },
        example: "卵(たまご)を六(む)っつ買(か)います。",
        exampleMeaning: {
          en: "I will buy six eggs.",
          zh: "我要買六個雞蛋。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1111",
        expression: "七つ",
        reading: "ななつ",
        definition: "７個",
        meaning: {
          en: "seven (general counter for things)",
          zh: "七個",
        },
        example: "七(なな)つ全部(ぜんぶ)ください。",
        exampleMeaning: {
          en: "Please give me all seven.",
          zh: "請把七個都給我。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1112",
        expression: "八つ",
        reading: "やっつ",
        definition: "８個",
        meaning: {
          en: "eight (general counter for things)",
          zh: "八個",
        },
        example: "ケーキは八(や)っつ残(のこ)っています。",
        exampleMeaning: {
          en: "There are eight cakes left.",
          zh: "還剩下八塊蛋糕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1113",
        expression: "九つ",
        reading: "ここのつ",
        definition: "９個",
        meaning: {
          en: "nine (general counter for things)",
          zh: "九個",
        },
        example: "九(ここ)のつありますか。",
        exampleMeaning: {
          en: "Do you have nine?",
          zh: "有九個嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1114",
        expression: "十",
        reading: "とお",
        definition: "１０個",
        meaning: {
          en: "ten (general counter for things)",
          zh: "十個",
        },
        example: "リンゴを十(とお)ください。",
        exampleMeaning: {
          en: "Please give me ten apples.",
          zh: "請給我十個蘋果。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1115",
        expression: "いくつ",
        reading: "いくつ",
        definition: "数量を尋ねる疑問詞",
        meaning: {
          en: "how many (for general items)",
          zh: "幾個、多少",
        },
        example: "みかんをいくつ買(か)いますか。",
        exampleMeaning: {
          en: "How many mandarin oranges will you buy?",
          zh: "你要買幾個橘子？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1116",
        expression: "一人",
        reading: "ひとり",
        definition: "１名の人間",
        meaning: {
          en: "one person",
          zh: "一個人",
        },
        example: "私(わたし)は一人(ひとり)で暮(く)らしています。",
        exampleMeaning: {
          en: "I live alone.",
          zh: "我一個人住。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1117",
        expression: "二人",
        reading: "ふたり",
        definition: "２名の人間",
        meaning: {
          en: "two people",
          zh: "兩個人",
        },
        example: "二人(ふたり)で食事(しょくじ)をします。",
        exampleMeaning: {
          en: "We will eat together (two people).",
          zh: "我們兩個人一起吃飯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1118",
        expression: "～人",
        reading: "～にん",
        definition: "人数を数える助数詞（３名以上）",
        meaning: {
          en: "~ people (counter for 3 or more people)",
          zh: "~ 人",
        },
        example: "クラスに学生(がくせい)が十(じゅう)五(ご)人(にん)います。",
        exampleMeaning: {
          en: "There are fifteen students in the class.",
          zh: "班上有十五個學生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1119",
        expression: "～台",
        reading: "～だい",
        definition: "機械、車などを数える助数詞",
        meaning: {
          en: "counter for machines, cars, bicycles, etc.",
          zh: "～台 (機器、車輛等量詞)",
        },
        example: "カメラを一(いち)台(だい)買(か)いました。",
        exampleMeaning: {
          en: "I bought one camera.",
          zh: "我買了一台相機。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1120",
        expression: "～枚",
        reading: "～まい",
        definition: "紙、切手、皿など薄いものを数える助数詞",
        meaning: {
          en: "counter for paper, stamps, tickets, shirts, etc. (flat, thin objects)",
          zh: "～張/件 (紙、郵票、衣服等薄片狀物體的量詞)",
        },
        example: "切手(きって)を三(さん)枚(まい)ください。",
        exampleMeaning: {
          en: "Please give me three stamps.",
          zh: "請給我三張郵票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1121",
        expression: "～回",
        reading: "～かい",
        definition: "頻度を数える助数詞",
        meaning: {
          en: "~ times (counter for frequency)",
          zh: "～次",
        },
        example: "一(いち)週間(しゅうかん)に何(なん)回(かい)テニスをしますか。",
        exampleMeaning: {
          en: "How many times a week do you play tennis?",
          zh: "你一週打幾次網球？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1122",
        expression: "りんご",
        reading: "りんご",
        definition: "果物の一種",
        meaning: {
          en: "apple",
          zh: "蘋果",
        },
        example: "甘(あま)いりんごがおいしいです。",
        exampleMeaning: {
          en: "Sweet apples are delicious.",
          zh: "甜蘋果很好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1123",
        expression: "みかん",
        reading: "みかん",
        definition: "柑橘類の一種",
        meaning: {
          en: "mandarin orange (tangerine)",
          zh: "橘子、柑橘",
        },
        example: "みかんは冬(ふゆ)の果物(くだもの)です。",
        exampleMeaning: {
          en: "Mandarin oranges are a winter fruit.",
          zh: "橘子是冬天的水果。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1124",
        expression: "サンドイッチ",
        reading: "サンドイッチ",
        definition: "パンで具材を挟んだ料理",
        meaning: {
          en: "sandwich",
          zh: "三明治",
        },
        example: "朝(あさ)ごはんをサンドイッチにします。",
        exampleMeaning: {
          en: "I will have a sandwich for breakfast.",
          zh: "我早餐吃三明治。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1125",
        expression: "カレー",
        reading: "カレー",
        definition: "カレー料理、カレーのルー",
        meaning: {
          en: "curry",
          zh: "咖哩",
        },
        example: "今日(きょう)の晩(ばん)ごはんはカレーです。",
        exampleMeaning: {
          en: "Today's dinner is curry.",
          zh: "今天的晚餐是咖哩。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1126",
        expression: "カレーライス",
        reading: "カレーライス",
        definition: "ご飯にカレーをかけた料理",
        meaning: {
          en: "curry and rice",
          zh: "咖哩飯",
        },
        example: "辛(から)くないカレーライスが好(す)きです。",
        exampleMeaning: {
          en: "I like not-spicy curry and rice.",
          zh: "我喜歡不辣的咖哩飯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1127",
        expression: "アイスクリーム",
        reading: "アイスクリーム",
        definition: "冷たいデザート",
        meaning: {
          en: "ice cream",
          zh: "冰淇淋",
        },
        example: "バニラのアイスクリームが一番(いちばん)好(す)きです。",
        exampleMeaning: {
          en: "Vanilla ice cream is my favorite.",
          zh: "我最喜歡香草冰淇淋。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1128",
        expression: "切手",
        reading: "きって",
        definition: "郵便料金を支払うための券",
        meaning: {
          en: "postage stamp",
          zh: "郵票",
        },
        example: "８４円(えん)の切手(きって)を５枚(まい)ください。",
        exampleMeaning: {
          en: "Please give me five 84-yen stamps.",
          zh: "請給我五張84日元的郵票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1129",
        expression: "はがき",
        reading: "はがき",
        definition: "郵便葉書",
        meaning: {
          en: "post card",
          zh: "明信片",
        },
        example: "このはがきをください。",
        exampleMeaning: {
          en: "Please give me this post card.",
          zh: "請給我這張明信片。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1130",
        expression: "封筒",
        reading: "ふうとう",
        definition: "手紙などを入れる袋",
        meaning: {
          en: "envelope",
          zh: "信封",
        },
        example: "封筒(ふうとう)に入(い)れて送(おく)ります。",
        exampleMeaning: {
          en: "I will put it in an envelope and send it.",
          zh: "我會把它放進信封寄出。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1131",
        expression: "速達",
        reading: "そくたつ",
        definition: "急ぎの郵便",
        meaning: {
          en: "special delivery (express mail)",
          zh: "快遞、特快郵件",
        },
        example: "これを速達(そくたつ)で出(だ)したいです。",
        exampleMeaning: {
          en: "I want to send this by special delivery.",
          zh: "我想用快遞寄這個。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1132",
        expression: "書留",
        reading: "かきとめ",
        definition: "記録付きの郵便",
        meaning: {
          en: "registered mail",
          zh: "掛號信",
        },
        example: "書留(かきとめ)で送(おく)った方(ほう)がいいです。",
        exampleMeaning: {
          en: "It's better to send it by registered mail.",
          zh: "最好用掛號信寄出。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1133",
        expression: "航空便",
        reading: "こうくうびん",
        definition: "飛行機で送る郵便",
        meaning: {
          en: "airmail",
          zh: "航空郵件",
        },
        example: "航空便(こうくうびん)でアメリカへ送(おく)ります。",
        exampleMeaning: {
          en: "I will send it to America by airmail.",
          zh: "我會用航空郵件寄到美國。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1134",
        expression: "エヤメール",
        reading: "エヤメール",
        definition: "航空便（外来語）",
        meaning: {
          en: "airmail (loanword)",
          zh: "航空郵件 (外來語)",
        },
        example: "エヤメールの封筒(ふうとう)がありますか。",
        exampleMeaning: {
          en: "Do you have airmail envelopes?",
          zh: "你們有航空信封嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1135",
        expression: "船便",
        reading: "ふなびん",
        definition: "船で送る郵便",
        meaning: {
          en: "sea mail (surface mail)",
          zh: "海運、水路郵件",
        },
        example: "船便(ふなびん)は時間(じかん)がかかります。",
        exampleMeaning: {
          en: "Sea mail takes a long time.",
          zh: "海運需要很多時間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1136",
        expression: "両親",
        reading: "りょうしん",
        definition: "父と母",
        meaning: {
          en: "parents",
          zh: "父母、雙親",
        },
        example: "私(わたし)の両親(りょうしん)は元気(げんき)です。",
        exampleMeaning: {
          en: "My parents are well.",
          zh: "我的父母身體很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1137",
        expression: "兄弟",
        reading: "きょうだい",
        definition: "兄と弟、または姉と妹を含めた兄弟姉妹",
        meaning: {
          en: "brothers and sisters (siblings)",
          zh: "兄弟姐妹",
        },
        example: "ご兄弟(きょうだい)は何(なん)人(にん)いますか。",
        exampleMeaning: {
          en: "How many siblings do you have?",
          zh: "您有幾個兄弟姐妹？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1138",
        expression: "兄",
        reading: "あに",
        definition:
          "自分(じぶん)の年上(としうえ)の男(おとこ)の兄弟(きょうだい)",
        meaning: {
          en: "(my) elder brother",
          zh: "（我的）哥哥",
        },
        example: "私(わたし)の兄(あに)は医者(いしゃ)です。",
        exampleMeaning: {
          en: "My elder brother is a doctor.",
          zh: "我哥哥是醫生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1139",
        expression: "お兄さん",
        reading: "おにいさん",
        definition:
          "相手(あいて)や他(ほか)の人(ひと)の年上(としうえ)の男(おとこ)の兄弟(きょうだい)",
        meaning: {
          en: "(someone else's) elder brother",
          zh: "（別人的）哥哥",
        },
        example: "あなたのお兄(にい)さんは何(なん)歳(さい)ですか。",
        exampleMeaning: {
          en: "How old is your elder brother?",
          zh: "你的哥哥幾歲了？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1140",
        expression: "姉",
        reading: "あね",
        definition:
          "自分(じぶん)の年上(としうえ)の女(おんな)の兄弟(きょうだい)",
        meaning: {
          en: "(my) elder sister",
          zh: "（我的）姐姐",
        },
        example: "私(わたし)の姉(あね)は会社(かいしゃ)員(いん)です。",
        exampleMeaning: {
          en: "My elder sister is an office worker.",
          zh: "我姐姐是公司職員。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1141",
        expression: "お姉さん",
        reading: "おねえさん",
        definition:
          "相手(あいて)や他(ほか)の人(ひと)の年上(としうえ)の女(おんな)の兄弟(きょうだい)",
        meaning: {
          en: "(someone else's) elder sister",
          zh: "（別人的）姐姐",
        },
        example: "あのお姉(ねえ)さんは誰(だれ)ですか。",
        exampleMeaning: {
          en: "Who is that elder sister?",
          zh: "那位姐姐是誰？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1142",
        expression: "弟",
        reading: "おとうと",
        definition:
          "自分(じぶん)の年下(としした)の男(おとこ)の兄弟(きょうだい)",
        meaning: {
          en: "(my) younger brother",
          zh: "（我的）弟弟",
        },
        example: "私(わたし)には弟(おとうと)がいません。",
        exampleMeaning: {
          en: "I don't have a younger brother.",
          zh: "我沒有弟弟。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1143",
        expression: "弟さん",
        reading: "おとうとさん",
        definition:
          "相手(あいて)や他(ほか)の人(ひと)の年下(としした)の男(おとこ)の兄弟(きょうだい)",
        meaning: {
          en: "(someone else's) younger brother",
          zh: "（別人的）弟弟",
        },
        example: "弟(おとうと)さんは今(いま)どこにいますか。",
        exampleMeaning: {
          en: "Where is your younger brother now?",
          zh: "您的弟弟現在在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1144",
        expression: "妹",
        reading: "いもうと",
        definition:
          "自分(じぶん)の年下(としした)の女(おんな)の兄弟(きょうだい)",
        meaning: {
          en: "(my) younger sister",
          zh: "（我的）妹妹",
        },
        example: "私(わたし)の妹(いもうと)は高校生(こうこうせい)です。",
        exampleMeaning: {
          en: "My younger sister is a high school student.",
          zh: "我妹妹是高中生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1145",
        expression: "妹さん",
        reading: "いもうとさん",
        definition:
          "相手(あいて)や他(ほか)の人(ひと)の年下(としした)の女(おんな)の兄弟(きょうだい)",
        meaning: {
          en: "(someone else's) younger sister",
          zh: "（別人的）妹妹",
        },
        example: "妹(いもうと)さんはお元気(げんき)ですか。",
        exampleMeaning: {
          en: "How is your younger sister?",
          zh: "您的妹妹身體好嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1146",
        expression: "外国",
        reading: "がいこく",
        definition: "自国以外の国",
        meaning: {
          en: "foreign country",
          zh: "外國",
        },
        example: "外国(がいこく)へ行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go to a foreign country.",
          zh: "我想去外國。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1147",
        expression: "～時間",
        reading: "～じかん",
        definition: "時間の長さを数える助数詞",
        meaning: {
          en: "~ hours",
          zh: "～小時",
        },
        example: "毎日(まいにち)２時間(じかん)勉強(べんきょう)します。",
        exampleMeaning: {
          en: "I study for 2 hours every day.",
          zh: "我每天學習2小時。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1148",
        expression: "～週間",
        reading: "～しゅうかん",
        definition: "週の長さを数える助数詞",
        meaning: {
          en: "~ weeks",
          zh: "～週、～星期",
        },
        example: "一(いっ)週間(しゅうかん)日本(にほん)にいます。",
        exampleMeaning: {
          en: "I will be in Japan for one week.",
          zh: "我會在日本待一週。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1149",
        expression: "～か月",
        reading: "～かげつ",
        definition: "月の長さを数える助数詞",
        meaning: {
          en: "~ months",
          zh: "～個月",
        },
        example: "３か月(かげつ)前(まえ)に始(はじ)めました。",
        exampleMeaning: {
          en: "I started 3 months ago.",
          zh: "我是3個月前開始的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1150",
        expression: "～年",
        reading: "～ねん",
        definition: "年の長さを数える助数詞",
        meaning: {
          en: "~ years",
          zh: "～年",
        },
        example: "日本(にほん)に５年(ねん)住(す)んでいます。",
        exampleMeaning: {
          en: "I have been living in Japan for 5 years.",
          zh: "我住在日本五年了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1151",
        expression: "～ぐらい",
        reading: "～ぐらい",
        definition: "おおよそ、約",
        meaning: {
          en: "about ~, approximately ~",
          zh: "大約～、左右～",
        },
        example: "１時間(じかん)ぐらいかかります。",
        exampleMeaning: {
          en: "It takes about one hour.",
          zh: "大約需要一小時。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1152",
        expression: "どのくらい",
        reading: "どのくらい",
        definition: "期間や程度の長さを尋ねる疑問詞",
        meaning: {
          en: "how long, how much",
          zh: "多長時間、多少",
        },
        example: "日本(にほん)語(ご)をどのくらい勉強(べんきょう)しましたか。",
        exampleMeaning: {
          en: "How long have you studied Japanese?",
          zh: "你學習日語多長時間了？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1153",
        expression: "全部で",
        reading: "ぜんぶで",
        definition: "合計で",
        meaning: {
          en: "in total, altogether",
          zh: "總共、全部",
        },
        example: "全部(ぜんぶ)でいくらですか。",
        exampleMeaning: {
          en: "How much is it in total?",
          zh: "總共是多少錢？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1154",
        expression: "みんな",
        reading: "みんな",
        definition: "すべて、全員",
        meaning: {
          en: "all, everyone, everything",
          zh: "大家、全部",
        },
        example: "みんなで食(た)べましょう。",
        exampleMeaning: {
          en: "Let's eat all together.",
          zh: "大家一起吃吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1155",
        expression: "～だけ",
        reading: "～だけ",
        definition: "限定を示す",
        meaning: {
          en: "only ~",
          zh: "只有～、僅僅～",
        },
        example: "私(わたし)だけ行(い)きます。",
        exampleMeaning: {
          en: "Only I will go.",
          zh: "只有我去。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1156",
        expression: "いらしゃいませ",
        reading: "いらしゃいませ",
        definition: "客(きゃく)を迎(むか)える挨拶(あいさつ)",
        meaning: {
          en: "Welcome, May I help you? (a greeting to a customer or a guest entering a shop, etc.)",
          zh: "歡迎光臨、您好（對顧客的招呼語）",
        },
        example: "店員(てんいん)：いらしゃいませ。",
        exampleMeaning: {
          en: "Clerk: Welcome.",
          zh: "店員：歡迎光臨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1157",
        expression: "いい天気ですね",
        reading: "いいてんきですね",
        definition: "天気の良さを確認する挨拶",
        meaning: {
          en: "Nice weather, isn't it?",
          zh: "天氣真好啊！",
        },
        example: "A: いい天気(てんき)ですね。B: ええ、そうですね。",
        exampleMeaning: {
          en: "A: Nice weather, isn't it? B: Yes, it is.",
          zh: "A: 天氣真好啊！B: 是啊，確實。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1158",
        expression: "お出かけですか",
        reading: "おでかけですか",
        definition: "外出するか尋ねる表現",
        meaning: {
          en: "Are you going out?",
          zh: "您要出門嗎？",
        },
        example: "A: お出(で)かけですか。B: ええ、ちょっと。",
        exampleMeaning: {
          en: "A: Are you going out? B: Yes, just for a bit.",
          zh: "A: 您要出門嗎？B: 是的，一下子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1159",
        expression: "ちょっと～まで",
        reading: "ちょっと～まで",
        definition: "「ちょっと～へ行きます」を省略した表現",
        meaning: {
          en: "I'm just going to ~ (shortened, casual phrase)",
          zh: "我只是去～一下",
        },
        example: "ちょっと郵便局(ゆうびんきょく)まで。",
        exampleMeaning: {
          en: "I'm just going to the post office.",
          zh: "我只是去郵局一下。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1160",
        expression: "行っていらっしゃい",
        reading: "いっていらっしゃい",
        definition: "外出する人を見送る際の挨拶",
        meaning: {
          en: "So long. (lit. Go and come back. Said to someone leaving)",
          zh: "慢走、去吧（對出門者說）",
        },
        example: "A: 行(い)ってまいります。B: 行(い)ってらっしゃい。",
        exampleMeaning: {
          en: "A: I'm leaving. B: So long.",
          zh: "A: 我出門了。B: 慢走。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1161",
        expression: "行ってまいります",
        reading: "いってまいります",
        definition: "外出する人が家の人に言う挨拶（謙譲語）",
        meaning: {
          en: "So long. (lit. I'm going and coming back. Said by the person leaving)",
          zh: "我出門了（出門者說，比「いってきます」更禮貌）",
        },
        example:
          "父(ちち)：行(い)ってまいります。子(こ)：行(い)ってらっしゃい。",
        exampleMeaning: {
          en: "Father: I'm leaving. Child: So long.",
          zh: "父親：我出門了。孩子：慢走。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1162",
        expression: "それから",
        reading: "それから",
        definition: "その上、さらに",
        meaning: {
          en: "and, furthermore, after that",
          zh: "然後、還有、此外",
        },
        example: "りんごを三(み)っつ。それから、みかんを二(ふた)つ。",
        exampleMeaning: {
          en: "Three apples. And then, two mandarin oranges.",
          zh: "三個蘋果。還有，兩個橘子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1163",
        expression: "オーストラリア",
        reading: "オーストラリア",
        definition: "国名",
        meaning: {
          en: "Australia",
          zh: "澳洲、澳大利亞",
        },
        example: "私(わたし)はオーストラリアに行(い)ったことがあります。",
        exampleMeaning: {
          en: "I have been to Australia.",
          zh: "我去過澳洲。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c12",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 12",
      zh: "大家的日本語 初級I 第十二課",
      ja: "みんなの日本語 初級I 第十二課",
    },
    description: {
      en: "Lesson 12 introduces **い-adjectives** and **な-adjectives** and their usage. It covers comparative sentences using **より** (A is more ~ than B), superlatives using **いちばん** (the most ~), and expressing choices and preferences with **どちら/どちらも** and **～がいい**.",
      zh: "第十二課介紹了 **い形容詞** 和 **な形容詞** 及其用法。它涵蓋了使用 **より** 的比較句（A 比 B 更～），使用 **いちばん** 的最高級（最～），以及使用 **どちら/どちらも** 和 **～がいい** 來表達選擇和偏好。",
      ja: "第十二課では、**い形容詞**と**な形容詞**の使い方を学びます。**より**を使った比較表現（AはBより〜）、**いちばん**を使った最上級表現、**どちら/どちらも**と**～がいい**を使った選択と好みを表現する方法を学習します。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1201",
        expression: "簡単",
        reading: "かんたん",
        definition: "（な）易しい、シンプル",
        meaning: {
          en: "easy, simple (な-adjective)",
          zh: "簡單、容易",
        },
        example: "この問題(もんだい)は簡単(かんたん)です。",
        exampleMeaning: {
          en: "This problem is simple.",
          zh: "這個問題很簡單。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1202",
        expression: "近い",
        reading: "ちかい",
        definition: "（い）距離が短い",
        meaning: {
          en: "near, close (い-adjective)",
          zh: "近的",
        },
        example: "家(いえ)から駅(えき)まで近(ちか)いです。",
        exampleMeaning: {
          en: "The station is near my house.",
          zh: "我家離車站很近。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1203",
        expression: "遠い",
        reading: "とおい",
        definition: "（い）距離が長い",
        meaning: {
          en: "far, distant (い-adjective)",
          zh: "遠的",
        },
        example: "空港(くうこう)はここから遠(とお)いですか。",
        exampleMeaning: {
          en: "Is the airport far from here?",
          zh: "機場離這裡遠嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1204",
        expression: "速い",
        reading: "はやい",
        definition: "（い）スピードが速い",
        meaning: {
          en: "fast (speed) (い-adjective)",
          zh: "快的",
        },
        example: "新幹線(しんかんせん)は速(はや)いです。",
        exampleMeaning: {
          en: "The Shinkansen (bullet train) is fast.",
          zh: "新幹線很快。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1205",
        expression: "早い",
        reading: "はやい",
        definition: "（い）時間が早い、早朝",
        meaning: {
          en: "early (time) (い-adjective)",
          zh: "早的",
        },
        example: "朝(あさ)早(はや)く起(お)きました。",
        exampleMeaning: {
          en: "I woke up early in the morning.",
          zh: "我早上很早就起來了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1206",
        expression: "遅い",
        reading: "おそい",
        definition: "（い）スピードが遅い、時間が遅い",
        meaning: {
          en: "slow, late (い-adjective)",
          zh: "慢的、遲的",
        },
        example: "バスは遅(おそ)いです。",
        exampleMeaning: {
          en: "The bus is slow/late.",
          zh: "公車很慢/遲到了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1207",
        expression: "多い",
        reading: "おおい",
        definition: "（い）数がたくさんある",
        meaning: {
          en: "many, much (い-adjective)",
          zh: "多、很多",
        },
        example: "この店(みせ)には客(きゃく)が多(おお)いです。",
        exampleMeaning: {
          en: "This shop has many customers.",
          zh: "這家店的顧客很多。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1208",
        expression: "人が多い",
        reading: "ひとがおおい",
        definition: "人がたくさんいる",
        meaning: {
          en: "many people",
          zh: "人多",
        },
        example: "祭(まつ)りの日(ひ)は人(ひと)が多(おお)いです。",
        exampleMeaning: {
          en: "There are many people on the day of the festival.",
          zh: "節日那天人很多。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1209",
        expression: "少ない",
        reading: "すくない",
        definition: "（い）数が少ししかない",
        meaning: {
          en: "few, a little (い-adjective)",
          zh: "少、很少",
        },
        example: "宿題(しゅくだい)が少(すく)ないです。",
        exampleMeaning: {
          en: "There is little homework.",
          zh: "作業很少。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1210",
        expression: "人が少ない",
        reading: "ひとがすくない",
        definition: "人が少ししかいない",
        meaning: {
          en: "few people",
          zh: "人少",
        },
        example: "平(へい)日(じつ)は人(ひと)が少(すく)ないです。",
        exampleMeaning: {
          en: "There are few people on weekdays.",
          zh: "平日人很少。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1211",
        expression: "暖かい",
        reading: "あたたかい",
        definition: "（い）気候が心地よく熱すぎない",
        meaning: {
          en: "warm (weather) (い-adjective)",
          zh: "溫暖的（天氣）",
        },
        example: "春(はる)は暖(あたた)かいです。",
        exampleMeaning: {
          en: "Spring is warm.",
          zh: "春天是溫暖的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1212",
        expression: "温かい",
        reading: "あたたかい",
        definition: "（い）物が心地よく熱すぎない",
        meaning: {
          en: "warm (object) (い-adjective)",
          zh: "溫暖的（物體）",
        },
        example: "温(あたた)かいコーヒーを飲(の)みます。",
        exampleMeaning: {
          en: "I drink warm coffee.",
          zh: "我喝熱咖啡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1213",
        expression: "涼しい",
        reading: "すずしい",
        definition: "（い）心地よく冷たい",
        meaning: {
          en: "cool (weather) (い-adjective)",
          zh: "涼爽的",
        },
        example: "秋(あき)は涼(すず)しいです。",
        exampleMeaning: {
          en: "Autumn is cool.",
          zh: "秋天很涼爽。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1214",
        expression: "甘い",
        reading: "あまい",
        definition: "（い）砂糖のような味",
        meaning: {
          en: "sweet (い-adjective)",
          zh: "甜的",
        },
        example: "このケーキはとても甘(あま)いです。",
        exampleMeaning: {
          en: "This cake is very sweet.",
          zh: "這個蛋糕很甜。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1215",
        expression: "辛い",
        reading: "からい",
        definition: "（い）唐辛子のような味",
        meaning: {
          en: "hot (taste), spicy (い-adjective)",
          zh: "辣的",
        },
        example: "辛(から)い食(た)べ物(もの)が好(す)きです。",
        exampleMeaning: {
          en: "I like spicy food.",
          zh: "我喜歡辣的食物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1216",
        expression: "重い",
        reading: "おもい",
        definition: "（い）重さが大きい",
        meaning: {
          en: "heavy (い-adjective)",
          zh: "重的",
        },
        example: "この荷物(にもつ)は重(おも)いです。",
        exampleMeaning: {
          en: "This luggage is heavy.",
          zh: "這件行李很重。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1217",
        expression: "軽い",
        reading: "かるい",
        definition: "（い）重さが小さい",
        meaning: {
          en: "light (of weight) (い-adjective)",
          zh: "輕的",
        },
        example: "軽(かる)いかばんを買(か)いました。",
        exampleMeaning: {
          en: "I bought a light bag.",
          zh: "我買了一個輕巧的包。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1218",
        expression: "コーヒーがいい",
        reading: "コーヒーがいい",
        definition: "コーヒーを希望する",
        meaning: {
          en: "prefer coffee (expressing preference or choice)",
          zh: "想要咖啡、選擇咖啡",
        },
        example:
          "飲(の)み物(もの)はコーヒーがいいですか、紅茶(こうちゃ)がいいですか。",
        exampleMeaning: {
          en: "For a drink, do you prefer coffee or tea?",
          zh: "飲料方面，您想要咖啡還是紅茶？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1219",
        expression: "季節",
        reading: "きせつ",
        definition: "春、夏、秋、冬",
        meaning: {
          en: "season",
          zh: "季節",
        },
        example: "日本(にほん)には四(よん)つの季節(きせつ)があります。",
        exampleMeaning: {
          en: "Japan has four seasons.",
          zh: "日本有四個季節。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1220",
        expression: "春",
        reading: "はる",
        definition: "四季の一つ",
        meaning: {
          en: "spring",
          zh: "春天",
        },
        example: "春(はる)は花(はな)がきれいです。",
        exampleMeaning: {
          en: "Flowers are beautiful in spring.",
          zh: "春天花很漂亮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1221",
        expression: "夏",
        reading: "なつ",
        definition: "四季の一つ",
        meaning: {
          en: "summer",
          zh: "夏天",
        },
        example: "夏(なつ)は海(うみ)に行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go to the beach in summer.",
          zh: "夏天我想去海邊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1222",
        expression: "秋",
        reading: "あき",
        definition: "四季の一つ",
        meaning: {
          en: "autumn, fall",
          zh: "秋天",
        },
        example: "秋(あき)は紅葉(もみじ)を見(み)に行(い)きます。",
        exampleMeaning: {
          en: "I go to see the autumn leaves in autumn.",
          zh: "秋天我去看楓葉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1223",
        expression: "冬",
        reading: "ふゆ",
        definition: "四季の一つ",
        meaning: {
          en: "winter",
          zh: "冬天",
        },
        example: "冬(ふゆ)はとても寒(さむ)いです。",
        exampleMeaning: {
          en: "Winter is very cold.",
          zh: "冬天非常冷。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1224",
        expression: "天気",
        reading: "てんき",
        definition: "気象の状態",
        meaning: {
          en: "weather",
          zh: "天氣",
        },
        example: "今日(きょう)の天気(てんき)は良(よ)いですね。",
        exampleMeaning: {
          en: "The weather today is nice, isn't it?",
          zh: "今天天氣很好呢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1225",
        expression: "雨",
        reading: "あめ",
        definition: "降雨",
        meaning: {
          en: "rain, rainy",
          zh: "雨",
        },
        example: "今(いま)は雨(あめ)が降(ふ)っています。",
        exampleMeaning: {
          en: "It is raining now.",
          zh: "現在正在下雨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1226",
        expression: "雪",
        reading: "ゆき",
        definition: "降雪",
        meaning: {
          en: "snow, snowy",
          zh: "雪",
        },
        example: "今年(ことし)は雪(ゆき)が多(おお)いです。",
        exampleMeaning: {
          en: "There is a lot of snow this year.",
          zh: "今年的雪很多。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1227",
        expression: "曇り",
        reading: "くもり",
        definition: "雲が多い天気",
        meaning: {
          en: "cloudy",
          zh: "陰天",
        },
        example: "明後日(あさって)は曇(くも)りの予報(よほう)です。",
        exampleMeaning: {
          en: "The day after tomorrow is forecast to be cloudy.",
          zh: "後天預計是陰天。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1228",
        expression: "ホテル",
        reading: "ホテル",
        definition: "宿泊施設",
        meaning: {
          en: "hotel",
          zh: "飯店、酒店",
        },
        example: "駅(えき)の前(まえ)に新(あたら)しいホテルがあります。",
        exampleMeaning: {
          en: "There is a new hotel in front of the station.",
          zh: "車佔前面有一家新飯店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1229",
        expression: "空港",
        reading: "くうこう",
        definition: "飛行場",
        meaning: {
          en: "airport",
          zh: "機場",
        },
        example: "空港(くうこう)までバスで１時間(じかん)かかります。",
        exampleMeaning: {
          en: "It takes one hour by bus to the airport.",
          zh: "到機場坐公車需要一小時。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1230",
        expression: "海",
        reading: "うみ",
        definition: "オーシャン、シー",
        meaning: {
          en: "sea, ocean",
          zh: "海、海洋",
        },
        example: "沖縄(おきなわ)の海(うみ)はきれいです。",
        exampleMeaning: {
          en: "The sea in Okinawa is beautiful.",
          zh: "沖繩的海很美。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1231",
        expression: "世界",
        reading: "せかい",
        definition: "地球全体",
        meaning: {
          en: "world",
          zh: "世界",
        },
        example:
          "世界(せかい)で一番(いちばん)大(おお)きい国(くに)はどこですか。",
        exampleMeaning: {
          en: "What is the biggest country in the world?",
          zh: "世界上最大的國家是哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1232",
        expression: "パーティー",
        reading: "パーティー",
        definition: "集まって楽しむイベント",
        meaning: {
          en: "party",
          zh: "派對、聚會",
        },
        example: "金曜日(きんようび)にパーティーがあります。",
        exampleMeaning: {
          en: "There is a party on Friday.",
          zh: "星期五有個派對。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1233",
        expression: "祭り",
        reading: "まつり",
        definition: "お祭り、フェスティバル",
        meaning: {
          en: "festival",
          zh: "祭典、節日",
        },
        example: "祇園祭(ぎおんまつり)は有名(ゆうめい)です。",
        exampleMeaning: {
          en: "The Gion Festival is famous.",
          zh: "祇園祭很著名。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1234",
        expression: "試験",
        reading: "しけん",
        definition: "テスト",
        meaning: {
          en: "examination, test",
          zh: "考試、測驗",
        },
        example: "来週(らいしゅう)日本語(にほんご)の試験(しけん)があります。",
        exampleMeaning: {
          en: "I have a Japanese test next week.",
          zh: "我下週有日語考試。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1235",
        expression: "すき焼き",
        reading: "すきやき",
        definition: "牛肉と野菜の鍋料理",
        meaning: {
          en: "sukiyaki (beef and vegetables hot pot)",
          zh: "壽喜燒",
        },
        example: "すき焼(や)きはとてもおいしいです。",
        exampleMeaning: {
          en: "Sukiyaki is very delicious.",
          zh: "壽喜燒非常好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1236",
        expression: "刺身",
        reading: "さしみ",
        definition: "生の魚の切り身",
        meaning: {
          en: "sashimi (sliced raw fish)",
          zh: "生魚片、刺身",
        },
        example: "刺身(さしみ)を食(た)べたことがありますか。",
        exampleMeaning: {
          en: "Have you ever eaten sashimi?",
          zh: "你吃過生魚片嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1237",
        expression: "すし",
        reading: "すし",
        definition: "酢飯に魚介を乗せた料理",
        meaning: {
          en: "sushi (vinegared rice topped with raw fish)",
          zh: "壽司",
        },
        example: "日本(にほん)のすしは世界(せかい)で有名(ゆうめい)です。",
        exampleMeaning: {
          en: "Japanese sushi is famous worldwide.",
          zh: "日本的壽司在世界上很有名。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1238",
        expression: "てんぷら",
        reading: "てんぷら",
        definition: "魚介類や野菜の揚げ物",
        meaning: {
          en: "tempura (seafood and vegetables deep fried in batter)",
          zh: "天婦羅、天麩羅（日式炸蝦、炸蔬菜等）",
        },
        example: "えびのてんぷらを注文(ちゅうもん)します。",
        exampleMeaning: {
          en: "I will order shrimp tempura.",
          zh: "我要點炸蝦天婦羅。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1239",
        expression: "生け花",
        reading: "いけばな",
        definition: "日本の伝統的なフラワーアレンジメント",
        meaning: {
          en: "flower arrangement (Ikebana)",
          zh: "插花、花道",
        },
        example: "生(い)け花(ばな)を習(なら)いたいです。",
        exampleMeaning: {
          en: "I want to learn flower arrangement.",
          zh: "我想學插花。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1240",
        expression: "生け花をします",
        reading: "いけばなをします",
        definition: "生け花を練習する",
        meaning: {
          en: "practice flower arrangement",
          zh: "進行插花練習",
        },
        example: "毎週(まいしゅう)土曜日(どようび)に生(い)け花(ばな)をします。",
        exampleMeaning: {
          en: "I practice flower arrangement every Saturday.",
          zh: "我每週六練習插花。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1241",
        expression: "紅葉",
        reading: "もみじ",
        definition: "カエデの葉、または紅葉した葉",
        meaning: {
          en: "maple, red leaves of autumn",
          zh: "楓葉、紅葉",
        },
        example: "京都(きょうと)の紅葉(もみじ)を見(み)に行(い)きました。",
        exampleMeaning: {
          en: "I went to see the autumn leaves in Kyoto.",
          zh: "我去看了京都的紅葉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1242",
        expression: "どちら",
        reading: "どちら",
        definition: "二つのうちの選択を尋ねる疑問詞",
        meaning: {
          en: "which one (between two things)",
          zh: "哪一個（兩者擇一）",
        },
        example: "夏(なつ)と冬(ふゆ)と、どちらが好(す)きですか。",
        exampleMeaning: {
          en: "Between summer and winter, which do you prefer?",
          zh: "夏天和冬天，您喜歡哪一個？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1243",
        expression: "どちらも",
        reading: "どちらも",
        definition: "二つの物事の全て",
        meaning: {
          en: "both",
          zh: "兩者都",
        },
        example: "どちらも大(だい)好(す)きです。",
        exampleMeaning: {
          en: "I like both of them very much.",
          zh: "我兩者都非常喜歡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1244",
        expression: "ずっと",
        reading: "ずっと",
        definition: "比較の程度が非常に大きい",
        meaning: {
          en: "by far, much more (used for strong comparison)",
          zh: "一直、～得多（用於強調比較）",
        },
        example: "東京(とうきょう)は大阪(おおさか)よりずっと寒(さむ)いです。",
        exampleMeaning: {
          en: "Tokyo is much colder than Osaka.",
          zh: "東京比大阪冷得多。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1245",
        expression: "初めて",
        reading: "はじめて",
        definition: "最初に",
        meaning: {
          en: "for the first time",
          zh: "第一次",
        },
        example: "日本(にほん)の食(た)べ物(もの)を初(はじ)めて食(た)べました。",
        exampleMeaning: {
          en: "I ate Japanese food for the first time.",
          zh: "我第一次吃日本食物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1246",
        expression: "ただいま",
        reading: "ただいま",
        definition: "帰宅時の挨拶",
        meaning: {
          en: "I'm home (said upon returning)",
          zh: "我回來了",
        },
        example: "A: ただいま。B: おかえりなさい。",
        exampleMeaning: {
          en: "A: I'm home. B: Welcome home.",
          zh: "A: 我回來了。B: 歡迎回家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1247",
        expression: "おかえりなさい",
        reading: "おかえりなさい",
        definition: "帰宅者への挨拶",
        meaning: {
          en: "Welcome home (said to the person returning)",
          zh: "歡迎回家",
        },
        example: "A: ただいま。B: おかえりなさい。",
        exampleMeaning: {
          en: "A: I'm home. B: Welcome home.",
          zh: "A: 我回來了。B: 歡迎回家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1248",
        expression: "すごいですね",
        reading: "すごいですね",
        definition: "感嘆を表す表現",
        meaning: {
          en: "That's amazing/incredible",
          zh: "太厲害了/真棒啊",
        },
        example: "A: 試験(しけん)に合格(ごうかく)しました。B: すごいですね。",
        exampleMeaning: {
          en: "A: I passed the exam. B: That's amazing.",
          zh: "A: 我通過了考試。B: 太厲害了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1249",
        expression: "でも",
        reading: "でも",
        definition: "接続詞、逆接",
        meaning: {
          en: "but, however",
          zh: "但是、不過",
        },
        example: "この車(くるま)は速(はや)いです。でも、高(たか)いです。",
        exampleMeaning: {
          en: "This car is fast. But it is expensive.",
          zh: "這輛車很快。但是很貴。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1250",
        expression: "疲れました",
        reading: "つかれました",
        definition: "疲労している状態",
        meaning: {
          en: "(I'm) tired, exhausted",
          zh: "累了",
        },
        example: "仕事(しごと)の後(あと)で、疲(つか)れました。",
        exampleMeaning: {
          en: "I'm tired after work.",
          zh: "工作之後，我累了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1251",
        expression: "祇園祭",
        reading: "ぎおんまつり",
        definition: "京都の有名なお祭り",
        meaning: {
          en: "the Gion Festival (Kyoto's most famous festival)",
          zh: "祇園祭（京都最著名的節日）",
        },
        example: "祇園祭(ぎおんまつり)は七月(しちがつ)にあります。",
        exampleMeaning: {
          en: "The Gion Festival is in July.",
          zh: "祇園祭在七月舉行。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1252",
        expression: "香港",
        reading: "ホンコン",
        definition: "地名",
        meaning: {
          en: "Hong Kong",
          zh: "香港",
        },
        example: "香港(ホンコン)は賑(にぎ)やかです。",
        exampleMeaning: {
          en: "Hong Kong is lively.",
          zh: "香港很熱鬧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1253",
        expression: "シンガポール",
        reading: "シンガポール",
        definition: "国名",
        meaning: {
          en: "Singapore",
          zh: "新加坡",
        },
        example: "シンガポールは一年中(いちねんじゅう)暑(あつ)いです。",
        exampleMeaning: {
          en: "Singapore is hot all year round.",
          zh: "新加坡一年四季都很熱。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c13",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 13",
      zh: "大家的日本語 初級I 第十三課",
      ja: "みんなの日本語 初級I 第十三課",
    },
    description: {
      en: "Lesson 13 focuses on expressing wants using the **い-adjective ほしい**, as well as various action verbs (transitive and intransitive) such as **遊びます**, **泳ぎます**, and **出ます**. It also covers expressions related to hunger, thirst, and agreeing to a suggestion.",
      zh: "第十三課著重於使用 **い形容詞 ほしい** 來表達慾望（想要某物），以及各種動作動詞（及物和不及物），例如 **遊びます**、**泳ぎます** 和 **出ます**。它還涵蓋了與飢餓、口渴和同意建議相關的表達方式。",
      ja: "第十三課では、**ほしい**（い形容詞）を使った願望の表現、および**遊びます**、**泳ぎます**、**出ます**などの様々な動作動詞（他動詞と自動詞）を学びます。また、空腹や喉の渇き、提案への同意に関する表現も学習します。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1301",
        expression: "遊びます",
        reading: "あそびます",
        definition: "楽しむ、遊興にふける",
        meaning: {
          en: "enjoy oneself, play",
          zh: "玩耍、遊玩",
        },
        example: "子(こ)どもたちは公園(こうえん)で遊(あそ)びます。",
        exampleMeaning: {
          en: "The children play in the park.",
          zh: "孩子們在公園裡玩耍。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1302",
        expression: "泳ぎます",
        reading: "およぎます",
        definition: "水中を進む",
        meaning: {
          en: "swim",
          zh: "游泳",
        },
        example: "私(わたし)は海(うみ)で泳(およ)ぐのが好(す)きです。",
        exampleMeaning: {
          en: "I like swimming in the sea.",
          zh: "我喜歡在海裡游泳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1303",
        expression: "迎えます",
        reading: "むかえます",
        definition: "出迎える、迎えに行く",
        meaning: {
          en: "go to meet, welcome (someone)",
          zh: "迎接、去接（某人）",
        },
        example:
          "明日(あした)空港(くうこう)へ友(とも)だちを迎(むか)えに行(い)きます。",
        exampleMeaning: {
          en: "I will go to the airport to meet my friend tomorrow.",
          zh: "我明天要去機場接朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1304",
        expression: "疲れます",
        reading: "つかれます",
        definition: "疲労する",
        meaning: {
          en: "get tired, become exhausted",
          zh: "疲倦",
        },
        example: "仕事(しごと)が終(お)わって疲(つか)れました。",
        exampleMeaning: {
          en: "I got tired after finishing work.",
          zh: "工作結束後，我累了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1305",
        expression: "出します",
        reading: "だします",
        definition: "外へ出す、提出する",
        meaning: {
          en: "send, take out, submit",
          zh: "寄出、拿出、提交",
        },
        example: "レポートを出(だ)しました。",
        exampleMeaning: {
          en: "I submitted the report.",
          zh: "我提交了報告。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1306",
        expression: "手紙を出します",
        reading: "てがみをだします",
        definition: "手紙を郵便で送る",
        meaning: {
          en: "send a letter",
          zh: "寄信",
        },
        example: "昨日(きのう)、母(はは)に手紙(てがみ)を出(だ)しました。",
        exampleMeaning: {
          en: "I sent a letter to my mother yesterday.",
          zh: "我昨天給媽媽寄了信。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1307",
        expression: "入ります",
        reading: "はいります",
        definition: "中へ入る",
        meaning: {
          en: "enter, go into",
          zh: "進入",
        },
        example: "部屋(へや)に入(はい)ります。",
        exampleMeaning: {
          en: "I enter the room.",
          zh: "我進入房間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1308",
        expression: "喫茶店に入ります",
        reading: "きっさてんにはいります",
        definition: "喫茶店の中へ入る",
        meaning: {
          en: "enter a coffee shop",
          zh: "進入咖啡廳",
        },
        example:
          "少(しょう)し休(やす)むために喫茶店(きっさてん)に入(はい)ります。",
        exampleMeaning: {
          en: "I enter a coffee shop to rest a little.",
          zh: "我進咖啡廳休息一下。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1309",
        expression: "出ます",
        reading: "でます",
        definition: "外へ出る",
        meaning: {
          en: "go out, leave",
          zh: "出去、離開",
        },
        example: "私(わたし)は今(いま)から家(いえ)を出(で)ます。",
        exampleMeaning: {
          en: "I am leaving the house now.",
          zh: "我現在要出門了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1310",
        expression: "喫茶店を出ます",
        reading: "きっさてんをでます",
        definition: "喫茶店から外へ出る",
        meaning: {
          en: "go out of a coffee shop",
          zh: "離開咖啡廳",
        },
        example: "コーヒーを飲(の)んでから喫茶店(きっさてん)を出(で)ました。",
        exampleMeaning: {
          en: "After drinking coffee, I left the coffee shop.",
          zh: "喝完咖啡後，我離開了咖啡廳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1311",
        expression: "結婚します",
        reading: "けっこんします",
        definition: "婚姻を結ぶ",
        meaning: {
          en: "marry, get married",
          zh: "結婚",
        },
        example: "来年(らいねん)結婚(けっこん)します。",
        exampleMeaning: {
          en: "I will get married next year.",
          zh: "我明年要結婚。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1312",
        expression: "買い物します",
        reading: "かいものします",
        definition: "品物を買う",
        meaning: {
          en: "do shopping",
          zh: "購物",
        },
        example: "デパートで買(かい)い物(もの)をします。",
        exampleMeaning: {
          en: "I will do shopping at the department store.",
          zh: "我要去百貨公司購物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1313",
        expression: "食事します",
        reading: "しょくじします",
        definition: "ご飯を食べる",
        meaning: {
          en: "have a meal, dine",
          zh: "用餐、吃飯",
        },
        example: "彼(かれ)と食事(しょくじ)をしました。",
        exampleMeaning: {
          en: "I had a meal with him.",
          zh: "我跟他一起吃飯了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1314",
        expression: "散歩します",
        reading: "さんぽします",
        definition: "歩いて楽しむ",
        meaning: {
          en: "take a walk, stroll",
          zh: "散步",
        },
        example: "毎朝(まいあさ)公園(こうえん)を散歩(さんぽ)します。",
        exampleMeaning: {
          en: "I take a walk in the park every morning.",
          zh: "我每天早上在公園散步。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1315",
        expression: "公園を散歩します",
        reading: "こうえんをさんぽします",
        definition: "公園の中を歩き回る",
        meaning: {
          en: "take a walk in a park (using the 'o' particle for the path/area of movement)",
          zh: "在公園散步",
        },
        example:
          "犬(いぬ)と一緒(いっしょ)に公園(こうえん)を散歩(さんぽ)します。",
        exampleMeaning: {
          en: "I walk in the park with my dog.",
          zh: "我帶狗在公園裡散步。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1316",
        expression: "大変",
        reading: "たいへん",
        definition: "（な）苦労が多い、ひどい",
        meaning: {
          en: "hard, tough, severe, awful (な-adjective)",
          zh: "辛苦、糟糕、嚴重",
        },
        example: "仕事(しごと)は大変(たいへん)ですが、楽(たの)しいです。",
        exampleMeaning: {
          en: "The work is tough, but it's fun.",
          zh: "工作很辛苦，但是很開心。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1317",
        expression: "欲しい",
        reading: "ほしい",
        definition: "（い）何かを手に入れたい気持ち",
        meaning: {
          en: "want (something) (い-adjective, used with 'ga' particle)",
          zh: "想要（某物）",
        },
        example: "新(あたら)しいパソコンが欲(ほ)しいです。",
        exampleMeaning: {
          en: "I want a new computer.",
          zh: "我想要一台新電腦。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1318",
        expression: "寂しい",
        reading: "さびしい",
        definition: "（い）一人でいて心細い",
        meaning: {
          en: "lonely (い-adjective)",
          zh: "寂寞的",
        },
        example: "家族(かぞく)に会(あ)えなくて寂(さび)しいです。",
        exampleMeaning: {
          en: "I am lonely because I can't meet my family.",
          zh: "因為見不到家人，所以我很寂寞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1319",
        expression: "広い",
        reading: "ひろい",
        definition: "（い）面積が大きい",
        meaning: {
          en: "wide, spacious (い-adjective)",
          zh: "寬敞的",
        },
        example: "広(ひろ)い家(いえ)に住(す)みたいです。",
        exampleMeaning: {
          en: "I want to live in a spacious house.",
          zh: "我想住在一個寬敞的房子裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1320",
        expression: "狭い",
        reading: "せまい",
        definition: "（い）面積が小さい",
        meaning: {
          en: "narrow, small (room, etc.) (い-adjective)",
          zh: "狹窄的、小的",
        },
        example: "この部屋(へや)は少(すこ)し狭(せま)いです。",
        exampleMeaning: {
          en: "This room is a little small.",
          zh: "這個房間有點狹窄。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1321",
        expression: "市役所",
        reading: "しやくしょ",
        definition: "市の役所、シティーホール",
        meaning: {
          en: "municipal office, city hall",
          zh: "市政府、市政廳",
        },
        example: "市役所(しやくしょ)は駅(えき)の近(ちか)くにあります。",
        exampleMeaning: {
          en: "The city hall is near the station.",
          zh: "市政府在車站附近。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1322",
        expression: "プール",
        reading: "プール",
        definition: "水泳用の場所",
        meaning: {
          en: "swimming pool",
          zh: "游泳池",
        },
        example: "夏(なつ)は毎日(まいにち)プールに行(い)きます。",
        exampleMeaning: {
          en: "I go to the swimming pool every day in the summer.",
          zh: "夏天我每天都去游泳池。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1323",
        expression: "川",
        reading: "かわ",
        definition: "自然の大きな流れ",
        meaning: {
          en: "river",
          zh: "河流",
        },
        example: "この川(かわ)で魚(さかな)を釣(つ)ります。",
        exampleMeaning: {
          en: "I fish in this river.",
          zh: "我在這條河裡釣魚。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1324",
        expression: "経済",
        reading: "けいざい",
        definition: "お金や生産に関わる活動",
        meaning: {
          en: "economy",
          zh: "經濟",
        },
        example:
          "彼(かれ)は大学(だいがく)で経済(けいざい)を勉強(べんきょう)しています。",
        exampleMeaning: {
          en: "He is studying economics at university.",
          zh: "他在大學學習經濟學。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1325",
        expression: "美術",
        reading: "びじゅつ",
        definition: "絵画、彫刻などの芸術",
        meaning: {
          en: "fine arts",
          zh: "美術",
        },
        example: "美術(びじゅつ)の展覧会(てんらんかい)に行(い)きました。",
        exampleMeaning: {
          en: "I went to an art exhibition.",
          zh: "我去看了一個美術展覽會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1326",
        expression: "釣り",
        reading: "つり",
        definition: "魚を釣る行為",
        meaning: {
          en: "fishing",
          zh: "釣魚",
        },
        example: "週末(しゅうまつ)に釣(つ)りに行(い)きます。",
        exampleMeaning: {
          en: "I will go fishing on the weekend.",
          zh: "我週末要去釣魚。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1327",
        expression: "釣りをします",
        reading: "つりをします",
        definition: "魚を釣る",
        meaning: {
          en: "fish, angle",
          zh: "釣魚",
        },
        example: "川(かわ)で釣(つ)りをしました。",
        exampleMeaning: {
          en: "I fished in the river.",
          zh: "我在河裡釣魚了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1328",
        expression: "スキー",
        reading: "スキー",
        definition: "雪上スポーツ",
        meaning: {
          en: "skiing",
          zh: "滑雪",
        },
        example: "北海道(ほっかいどう)はスキーで有名(ゆうめい)です。",
        exampleMeaning: {
          en: "Hokkaido is famous for skiing.",
          zh: "北海道以滑雪而聞名。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1329",
        expression: "スキーをします",
        reading: "スキーをします",
        definition: "スキーをする",
        meaning: {
          en: "ski",
          zh: "滑雪",
        },
        example: "冬(ふゆ)にスキーをします。",
        exampleMeaning: {
          en: "I go skiing in winter.",
          zh: "我冬天去滑雪。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1330",
        expression: "会議",
        reading: "かいぎ",
        definition: "打ち合わせ、ミーティング",
        meaning: {
          en: "meeting, conference",
          zh: "會議",
        },
        example: "午後(ごご)３時(じ)から会議(かいぎ)があります。",
        exampleMeaning: {
          en: "There is a meeting from 3 p.m.",
          zh: "下午3點有一個會議。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1331",
        expression: "会議をします",
        reading: "かいぎをします",
        definition: "会議を開く、行う",
        meaning: {
          en: "hold a conference/meeting",
          zh: "開會",
        },
        example: "明日(あした)、会議(かいぎ)をします。",
        exampleMeaning: {
          en: "We will hold a meeting tomorrow.",
          zh: "我們明天要開會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1332",
        expression: "登録",
        reading: "とうろく",
        definition: "記名して記録すること",
        meaning: {
          en: "registration",
          zh: "登錄、註冊",
        },
        example: "このサイトは登録(とうろく)が必要です。",
        exampleMeaning: {
          en: "This site requires registration.",
          zh: "這個網站需要註冊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1333",
        expression: "登録をします",
        reading: "とうろくをします",
        definition: "登録する",
        meaning: {
          en: "register",
          zh: "註冊、登記",
        },
        example: "まず登録(とうろく)をします。",
        exampleMeaning: {
          en: "First, I will register.",
          zh: "首先，我要進行註冊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1334",
        expression: "週末",
        reading: "しゅうまつ",
        definition: "土曜日と日曜日",
        meaning: {
          en: "weekend",
          zh: "週末",
        },
        example: "週末(しゅうまつ)はゆっくり休(やす)みます。",
        exampleMeaning: {
          en: "I will rest well on the weekend.",
          zh: "我週末會好好休息。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1335",
        expression: "～ごろ",
        reading: "～ごろ",
        definition: "およそその時間",
        meaning: {
          en: "about (time), around (time)",
          zh: "大約～（時間）",
        },
        example: "４時(じ)ごろ、家(いえ)に帰(かえ)ります。",
        exampleMeaning: {
          en: "I will return home around 4 o'clock.",
          zh: "我大約四點回家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1336",
        expression: "何か",
        reading: "なにか",
        definition: "何らかの物、物事",
        meaning: {
          en: "something, anything",
          zh: "某物、某事、什麼",
        },
        example: "何(なに)か飲(の)み物(もの)が欲(ほ)しいです。",
        exampleMeaning: {
          en: "I want something to drink.",
          zh: "我想要點喝的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1337",
        expression: "どこか",
        reading: "どこか",
        definition: "どこかの場所",
        meaning: {
          en: "somewhere, some place, anywhere",
          zh: "某處、某地、哪裡",
        },
        example: "涼(すず)しい所(ところ)へどこか行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go somewhere cool.",
          zh: "我想去一個涼快的地方。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1338",
        expression: "おなかがすきました",
        reading: "おなかがすきました",
        definition: "空腹になった",
        meaning: {
          en: "(I'm) hungry (lit. My stomach is empty)",
          zh: "肚子餓了",
        },
        example: "おなかがすきましたから、ご飯(はん)を食(た)べましょう。",
        exampleMeaning: {
          en: "I'm hungry, so let's eat.",
          zh: "我肚子餓了，我們吃飯吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1339",
        expression: "おなかがいっぱいです",
        reading: "おなかがいっぱいです",
        definition: "満腹である",
        meaning: {
          en: "(I'm) full (lit. My stomach is full)",
          zh: "肚子飽了",
        },
        example: "おなかがいっぱいですから、もう食(た)べられません。",
        exampleMeaning: {
          en: "I'm full, so I can't eat any more.",
          zh: "我飽了，不能再吃了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1340",
        expression: "のどがかわきました",
        reading: "のどがかわきました",
        definition: "喉が渇いた",
        meaning: {
          en: "(I'm) thirsty (lit. My throat is dry)",
          zh: "口渴了",
        },
        example: "のどがかわきましたね。お茶(ちゃ)を飲(の)みましょう。",
        exampleMeaning: {
          en: "I'm thirsty. Let's drink some tea.",
          zh: "我口渴了。我們喝茶吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1341",
        expression: "そうですね",
        reading: "そうですね",
        definition: "相手の意見に同意する相槌",
        meaning: {
          en: "I agree with you (used when agreeing to something, or thinking about something)",
          zh: "是啊、說得對（表示同意或思考）",
        },
        example: "A: 今日(きょう)は寒(さむ)いですね。B: そうですね。",
        exampleMeaning: {
          en: "A: It's cold today, isn't it? B: I agree.",
          zh: "A: 今天很冷呢。B: 是啊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1342",
        expression: "そうしましょう",
        reading: "そうしましょう",
        definition: "相手の提案を受け入れる表現",
        meaning: {
          en: "Let's do that (used when agreeing to someone's suggestion)",
          zh: "就這麼辦吧、好主意",
        },
        example:
          "A: 映画(えいが)を見(み)に行(い)きませんか。B: そうしましょう。",
        exampleMeaning: {
          en: "A: Shall we go see a movie? B: Let's do that.",
          zh: "A: 我們去看電影好嗎？B: 就這麼辦吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1343",
        expression: "ご注文は",
        reading: "ごちゅうもんは",
        definition: "「ご注文は何にしますか」を省略した表現",
        meaning: {
          en: "May I take your order? (polite shortening of ご注文は何にしますか)",
          zh: "請問您點什麼？",
        },
        example: "店員(てんいん)：ご注文(ちゅうもん)は？",
        exampleMeaning: {
          en: "Clerk: May I take your order?",
          zh: "店員：請問您點什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1344",
        expression: "定食",
        reading: "ていしょく",
        definition: "セットメニュー、日替わり料理",
        meaning: {
          en: "set meal, lunch special",
          zh: "套餐、定食",
        },
        example: "今日(きょう)の定食(ていしょく)をお願(ねが)いします。",
        exampleMeaning: {
          en: "I'd like today's set meal, please.",
          zh: "請給我今天的定食。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1345",
        expression: "牛どん",
        reading: "ぎゅうどん",
        definition: "ご飯の上に牛肉を煮たものを乗せた料理",
        meaning: {
          en: "gyūdon (bowl of rice topped with beef)",
          zh: "牛丼（牛肉蓋飯）",
        },
        example: "牛(ぎゅう)どんの大盛(おおもり)をください。",
        exampleMeaning: {
          en: "Please give me a large bowl of gyūdon.",
          zh: "請給我一份大碗的牛丼。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1346",
        expression: "少々お待ちください",
        reading: "しょうしょうおまちください",
        definition:
          "少(すこ)し待(ま)ってください（丁寧(ていねい)な表現(ひょうげん)）",
        meaning: {
          en: "Please wait a moment (very polite)",
          zh: "請稍等一下",
        },
        example: "店員(てんいん)：少々(しょうしょう)お待(ま)ちください。",
        exampleMeaning: {
          en: "Clerk: Please wait a moment.",
          zh: "店員：請稍等。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1347",
        expression: "別々に",
        reading: "べつべつに",
        definition: "一緒(いっしょ)でなく",
        meaning: {
          en: "separately",
          zh: "分開地",
        },
        example: "お会計(かいけい)は別々(べつべつ)にお願(ねが)いします。",
        exampleMeaning: {
          en: "We would like to pay separately, please.",
          zh: "請分開結帳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1348",
        expression: "ロシア",
        reading: "ロシア",
        definition: "国名",
        meaning: {
          en: "Russia",
          zh: "俄羅斯",
        },
        example: "ロシアはとても寒(さむ)い国(くに)です。",
        exampleMeaning: {
          en: "Russia is a very cold country.",
          zh: "俄羅斯是一個非常寒冷的國家。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c14",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 14",
      zh: "大家的日本語 初級I 第十四課",
      ja: "みんなの日本語 初級I 第十四課",
    },
    description: {
      en: "Lesson 14 introduces the fundamental **Te-form** ($sim \text{て}$) of verbs. Key grammar includes making requests ($sim \text{て} \text{ください}$), connecting consecutive actions, and asking for/giving permission ($sim \text{て} \text{もいいですか}$). It also covers a variety of common action verbs and directional expressions.",
      zh: "第十四課介紹了動詞的基本形式，即 **Te 形** ($sim \text{て}$)。主要語法包括提出請求（$sim \text{て} \text{ください}$）、連接連續動作，以及詢問/給予許可（$sim \text{て} \text{もいいですか}$）。它還涵蓋了各種常見的動作動詞和方向表達。",
      ja: "第十四課では、動詞の基本的な**て形** ($sim \text{て}$)を学習します。主な文法事項として、依頼（$sim \text{て} \text{ください}$）、動作の連結、許可（$sim \text{て} \text{もいいですか}$）の表現があります。また、様々な動作動詞や方向に関する表現も学びます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1401",
        expression: "つけます",
        reading: "つけます",
        definition: "電気などをオンにする",
        meaning: {
          en: "turn on (e.g., light, electricity)",
          zh: "打開、開啟（例如燈、電器）",
        },
        example: "電気(でんき)をつけます。",
        exampleMeaning: {
          en: "I turn on the light.",
          zh: "我打開燈。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1402",
        expression: "消します",
        reading: "けします",
        definition: "電気などをオフにする",
        meaning: {
          en: "turn off (e.g., light, electricity)",
          zh: "關閉、熄滅（例如燈、電器）",
        },
        example: "テレビを消(け)します。",
        exampleMeaning: {
          en: "I turn off the TV.",
          zh: "我關掉電視。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1403",
        expression: "開けます",
        reading: "あけます",
        definition: "扉などを開く",
        meaning: {
          en: "open (a door, window, etc.)",
          zh: "打開（門、窗等）",
        },
        example: "窓(まど)を開(あ)けます。",
        exampleMeaning: {
          en: "I open the window.",
          zh: "我打開窗戶。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1404",
        expression: "閉めます",
        reading: "しめます",
        definition: "扉などを閉じる",
        meaning: {
          en: "close, shut (a door, window, etc.)",
          zh: "關閉、關上（門、窗等）",
        },
        example: "ドアを閉(し)めます。",
        exampleMeaning: {
          en: "I close the door.",
          zh: "我關上門。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1405",
        expression: "急ぎます",
        reading: "いそぎます",
        definition: "急いで行動する",
        meaning: {
          en: "hurry, be in a hurry",
          zh: "趕快、著急",
        },
        example: "時間(じかん)がないので、急(いそ)ぎます。",
        exampleMeaning: {
          en: "Since there is no time, I will hurry.",
          zh: "因為沒時間了，我要趕快。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1406",
        expression: "待ちます",
        reading: "まちます",
        definition: "時間が来るのを待つ",
        meaning: {
          en: "wait",
          zh: "等待",
        },
        example: "少(しょう)々待(ま)ってください。",
        exampleMeaning: {
          en: "Please wait a moment.",
          zh: "請稍等一下。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1407",
        expression: "止めます",
        reading: "とめます",
        definition: "動いているものを静止させる",
        meaning: {
          en: "stop, park (a car, machine, etc.)",
          zh: "停止、停車",
        },
        example: "ここに車(くるま)を止(と)めます。",
        exampleMeaning: {
          en: "I will park the car here.",
          zh: "我把車停在這裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1408",
        expression: "曲がります",
        reading: "まがります",
        definition: "方向を変える",
        meaning: {
          en: "turn, bend (intransitive verb)",
          zh: "轉彎、拐彎",
        },
        example: "次(つぎ)の角(かど)を曲(まが)がります。",
        exampleMeaning: {
          en: "I will turn at the next corner.",
          zh: "我在下一個路口轉彎。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1409",
        expression: "右へ曲がります",
        reading: "みぎへまがります",
        definition: "右方向に方向を変える",
        meaning: {
          en: "turn to the right (uses 'e' $sim \text{へ}$ particle to indicate direction of movement)",
          zh: "向右轉",
        },
        example: "次(つぎ)の信号(しんごう)を右(みぎ)へ曲(まが)がります。",
        exampleMeaning: {
          en: "I will turn right at the next traffic light.",
          zh: "我在下一個紅綠燈向右轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1410",
        expression: "持ちます",
        reading: "もちます",
        definition: "手で持つ",
        meaning: {
          en: "hold, carry",
          zh: "拿著、攜帶",
        },
        example: "荷物(にもつ)を持(も)ちます。",
        exampleMeaning: {
          en: "I carry the luggage.",
          zh: "我拿著行李。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1411",
        expression: "取ります",
        reading: "とります",
        definition: "手に取る、渡す",
        meaning: {
          en: "take, pass (e.g., take a photo, pass the salt)",
          zh: "拿、遞給",
        },
        example: "塩(しお)を取(と)ってください。",
        exampleMeaning: {
          en: "Please pass the salt.",
          zh: "請把鹽遞給我。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1412",
        expression: "手伝います",
        reading: "てつだいます",
        definition: "手助けする",
        meaning: {
          en: "help (with a task)",
          zh: "幫忙",
        },
        example: "仕事(しごと)を手伝(てつだ)います。",
        exampleMeaning: {
          en: "I help with the work.",
          zh: "我幫忙工作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1413",
        expression: "呼びます",
        reading: "よびます",
        definition: "声をかけて来させる",
        meaning: {
          en: "call (e.g., a person, a taxi)",
          zh: "呼喚、叫（例如人、計程車）",
        },
        example: "タクシーを呼(よ)びます。",
        exampleMeaning: {
          en: "I call a taxi.",
          zh: "我叫計程車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1414",
        expression: "話します",
        reading: "はなします",
        definition: "言葉を交わす",
        meaning: {
          en: "speak, talk",
          zh: "說話、交談",
        },
        example: "日本語(にほんご)で話(はな)します。",
        exampleMeaning: {
          en: "I speak in Japanese.",
          zh: "我說日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1415",
        expression: "見せます",
        reading: "みせます",
        definition: "見えるようにする",
        meaning: {
          en: "show, display",
          zh: "展示、給...看",
        },
        example: "パスポートを見(み)せます。",
        exampleMeaning: {
          en: "I show my passport.",
          zh: "我出示我的護照。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1416",
        expression: "教えます",
        reading: "おしえます",
        definition: "知識や情報を伝える",
        meaning: {
          en: "tell, teach, inform",
          zh: "告訴、教導",
        },
        example: "電話番号(でんわばんごう)を教(おし)えます。",
        exampleMeaning: {
          en: "I tell you the phone number.",
          zh: "我告訴你電話號碼。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1417",
        expression: "住所を教えます",
        reading: "じゅうしょをおしえます",
        definition: "住所を伝える",
        meaning: {
          en: "tell an address",
          zh: "告訴地址",
        },
        example: "地図(ちず)を見(み)て、住所(じゅうしょ)を教(おし)えます。",
        exampleMeaning: {
          en: "I will look at the map and tell you the address.",
          zh: "我會看地圖告訴你地址。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1418",
        expression: "始めます",
        reading: "はじめます",
        definition: "開始する",
        meaning: {
          en: "start, begin (transitive verb)",
          zh: "開始",
        },
        example: "会議(かいぎ)を始(はじ)めます。",
        exampleMeaning: {
          en: "I will start the meeting.",
          zh: "我開始會議。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1419",
        expression: "降ります",
        reading: "ふります",
        definition: "雨や雪が空から落ちる",
        meaning: {
          en: "rain (intransitive verb)",
          zh: "下雨",
        },
        example: "外(そと)で雨(あめ)が降(ふ)っています。",
        exampleMeaning: {
          en: "It's raining outside.",
          zh: "外面正在下雨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1420",
        expression: "雨が降ります",
        reading: "あめがふります",
        definition: "雨が降る",
        meaning: {
          en: "rain",
          zh: "下雨",
        },
        example: "明日(あした)は雨(あめ)が降(ふ)るでしょう。",
        exampleMeaning: {
          en: "It will probably rain tomorrow.",
          zh: "明天可能會下雨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1421",
        expression: "コピーします",
        reading: "コピーします",
        definition: "複製する",
        meaning: {
          en: "copy",
          zh: "影印、複製",
        },
        example: "この書類(しょるい)をコピーします。",
        exampleMeaning: {
          en: "I will copy this document.",
          zh: "我會影印這份文件。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1422",
        expression: "エアコン",
        reading: "エアコン",
        definition: "空調",
        meaning: {
          en: "air conditioner, air conditioning",
          zh: "空調、冷氣機",
        },
        example: "部屋(へや)のエアコンをつけます。",
        exampleMeaning: {
          en: "I turn on the air conditioner in the room.",
          zh: "我打開房間裡的冷氣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1423",
        expression: "パスポート",
        reading: "パスポート",
        definition: "旅券",
        meaning: {
          en: "passport",
          zh: "護照",
        },
        example: "パスポートを見(み)せてください。",
        exampleMeaning: {
          en: "Please show me your passport.",
          zh: "請出示您的護照。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1424",
        expression: "名前",
        reading: "なまえ",
        definition: "人や物に付けられた名称",
        meaning: {
          en: "name",
          zh: "名字、名稱",
        },
        example: "あなたの名前(なまえ)は何(なん)ですか。",
        exampleMeaning: {
          en: "What is your name?",
          zh: "你叫什麼名字？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1425",
        expression: "住所",
        reading: "じゅうしょ",
        definition: "住んでいる場所",
        meaning: {
          en: "address",
          zh: "地址",
        },
        example: "住所(じゅうしょ)を紙(かみ)に書(か)いてください。",
        exampleMeaning: {
          en: "Please write down your address on the paper.",
          zh: "請把您的地址寫在紙上。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1426",
        expression: "地図",
        reading: "ちず",
        definition: "場所を示す図",
        meaning: {
          en: "map",
          zh: "地圖",
        },
        example: "この地図(ちず)を見(み)て、道(みち)を教(おし)えてください。",
        exampleMeaning: {
          en: "Please look at this map and tell me the way.",
          zh: "請看這張地圖告訴我路。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1427",
        expression: "塩",
        reading: "しお",
        definition: "調味料",
        meaning: {
          en: "salt",
          zh: "鹽",
        },
        example: "塩(しお)を取(と)ってください。",
        exampleMeaning: {
          en: "Please pass me the salt.",
          zh: "請把鹽遞給我。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1428",
        expression: "砂糖",
        reading: "さとう",
        definition: "甘味料",
        meaning: {
          en: "sugar",
          zh: "糖",
        },
        example: "コーヒーに砂糖(さとう)を入(い)れます。",
        exampleMeaning: {
          en: "I put sugar in my coffee.",
          zh: "我在咖啡裡加糖。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1429",
        expression: "読み方",
        reading: "よみかた",
        definition: "読みる方法",
        meaning: {
          en: "how to read, way of reading",
          zh: "讀法、如何閱讀",
        },
        example: "この漢字(かんじ)の読(よ)み方(かた)を教(おし)えてください。",
        exampleMeaning: {
          en: "Please tell me how to read this Kanji.",
          zh: "請告訴我這個漢字的讀法。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1430",
        expression: "～方",
        reading: "～かた",
        definition: "～する方法、やり方",
        meaning: {
          en: "how to $sim$, way of $sim \text{ing}$",
          zh: "～的方法、方式",
        },
        example: "パソコンの使(つか)い方(かた)が分(わ)かりません。",
        exampleMeaning: {
          en: "I don't know how to use the computer.",
          zh: "我不知道電腦的使用方法。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1431",
        expression: "ゆっくり",
        reading: "ゆっくり",
        definition: "速くない様、余裕を持って",
        meaning: {
          en: "slowly, leisurely, in a relaxed manner",
          zh: "慢慢地、悠閒地",
        },
        example: "もっとゆっくり話(はな)してください。",
        exampleMeaning: {
          en: "Please speak more slowly.",
          zh: "請說慢一點。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1432",
        expression: "すぐ",
        reading: "すぐ",
        definition: "間をおかずに",
        meaning: {
          en: "immediately, right away",
          zh: "立刻、馬上",
        },
        example: "すぐ行(い)きます。",
        exampleMeaning: {
          en: "I will go immediately.",
          zh: "我馬上就去。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1433",
        expression: "また",
        reading: "また",
        definition: "もう一度",
        meaning: {
          en: "again",
          zh: "再、又",
        },
        example: "また明日(あした)。",
        exampleMeaning: {
          en: "See you again tomorrow.",
          zh: "明天見。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1434",
        expression: "あとで",
        reading: "あとで",
        definition: "時間的に後になって",
        meaning: {
          en: "later",
          zh: "之後、稍後",
        },
        example: "会議(かいぎ)はあとで始(はじ)めます。",
        exampleMeaning: {
          en: "The meeting will start later.",
          zh: "會議將在稍後開始。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1435",
        expression: "もう少し",
        reading: "もうすこし",
        definition: "少しだけ追加して",
        meaning: {
          en: "a little more, a little longer",
          zh: "再一點、再多一點",
        },
        example: "もう少(すこ)し待(ま)ってください。",
        exampleMeaning: {
          en: "Please wait a little longer.",
          zh: "請再等一下。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1436",
        expression: "もう～",
        reading: "もう～",
        definition: "追加・反復の強調",
        meaning: {
          en: "$ sim$ more, another $ sim$ (used for emphasis or repetition)",
          zh: "再～、又一個～",
        },
        example: "もう一杯(いっぱい)ビールを飲(の)みます。",
        exampleMeaning: {
          en: "I will drink one more glass of beer.",
          zh: "我再喝一杯啤酒。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1437",
        expression: "いいですよ",
        reading: "いいですよ",
        definition: "承諾、許可を与える",
        meaning: {
          en: "Sure, Certainly, That's fine (used to grant permission)",
          zh: "好的、沒問題、可以",
        },
        example: "A: ここに座(すわ)ってもいいですか。B: いいですよ。",
        exampleMeaning: {
          en: "A: May I sit here? B: Sure, that's fine.",
          zh: "A: 我可以坐在這裡嗎？B: 好的，可以。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1438",
        expression: "さあ",
        reading: "さあ",
        definition: "相手に促す時の掛け声",
        meaning: {
          en: "right (used when encouraging some course of action, 'come on')",
          zh: "來吧、那麼（用於鼓勵或催促）",
        },
        example: "さあ、始(はじ)めましょう。",
        exampleMeaning: {
          en: "Right, let's begin.",
          zh: "那麼，我們開始吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1439",
        expression: "あれ",
        reading: "あれ",
        definition: "驚きや不思議に思った時に使う言葉",
        meaning: {
          en: "Oh! (in surprise or in wonder)",
          zh: "哎呀！咦！（表示驚訝或疑問）",
        },
        example: "あれ、鍵(かぎ)がない。",
        exampleMeaning: {
          en: "Oh! My key is missing.",
          zh: "咦，我的鑰匙不見了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1440",
        expression: "信号を右へ曲がってください",
        reading: "しんごうをみぎへまがってください",
        definition: "信号のところで右に曲がるよう依頼する",
        meaning: {
          en: "Turn right at the signal (polite request using the Te-form)",
          zh: "請在紅綠燈處向右轉",
        },
        example: "次(つぎ)の信号(しんごう)を右(みぎ)へ曲(ま)がってください。",
        exampleMeaning: {
          en: "Please turn right at the next traffic light.",
          zh: "請在下一個紅綠燈向右轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1441",
        expression: "まっすぐ",
        reading: "まっすぐ",
        definition: "曲がらずに直進する様",
        meaning: {
          en: "straight (ahead)",
          zh: "直直地、一直",
        },
        example: "この道(みち)をまっすぐ行(い)ってください。",
        exampleMeaning: {
          en: "Please go straight along this road.",
          zh: "請沿著這條路直走。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1442",
        expression: "これでお願いします",
        reading: "これでおねがいします",
        definition: "（支払いの際に）これで支払いを完了するよう依頼する",
        meaning: {
          en: "I'd like to pay with this (used when handing money to a clerk)",
          zh: "請用這些（錢）結帳、就這些了",
        },
        example: "（お金(かね)を渡(わた)して）これで終(お)願(ねが)いします。",
        exampleMeaning: {
          en: "(Handing over money) I'd like to pay with this.",
          zh: "（遞過錢）請幫我結帳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1443",
        expression: "お釣り",
        reading: "おつり",
        definition: "支払い後、残って返されるお金",
        meaning: {
          en: "change (money returned)",
          zh: "零錢、找零",
        },
        example: "お釣(つ)りをチェックしてください。",
        exampleMeaning: {
          en: "Please check your change.",
          zh: "請檢查您的找零。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c15",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 15",
      zh: "大家的日本語 初級I 第十五課",
      ja: "みんなの日本語 初級I 第十五課",
    },
    description: {
      en: "Lesson 15 introduces the versatile continuous and state form of the verb: $sim \text{て} \text{います}$. Key usages covered are **ongoing actions** ($sim \text{ing}$), **current states** (like knowing, living, marrying), and **habitual/customary actions**.",
      zh: "第十五課介紹了動詞多功能的持續和狀態形式：$sim \text{て} \text{います}$。涵蓋的主要用法包括**正在進行的動作**（$sim \text{ing}$）、**目前的狀態**（如知道、居住、結婚）和**習慣性/常規動作**。",
      ja: "第十五課では、動詞の汎用性の高い継続・状態を表す形、$sim \text{て} \text{います}$を学びます。主な用法は、**継続中の動作**、**現在の状態**（知っている、住んでいる、結婚しているなど）、**習慣的な動作**です。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1501",
        expression: "立ちます",
        reading: "たちます",
        definition: "立っている姿勢になる",
        meaning: {
          en: "stand up",
          zh: "站立、起立",
        },
        example: "立(た)ってください。",
        exampleMeaning: {
          en: "Please stand up.",
          zh: "請站起來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1502",
        expression: "座ります",
        reading: "すわります",
        definition: "座っている姿勢になる",
        meaning: {
          en: "sit down",
          zh: "坐下",
        },
        example: "椅子(いす)に座(すわ)ります。",
        exampleMeaning: {
          en: "I sit on the chair.",
          zh: "我坐在椅子上。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1503",
        expression: "使います",
        reading: "つかいます",
        definition: "利用する",
        meaning: {
          en: "use, utilize",
          zh: "使用、利用",
        },
        example: "この辞書(じしょ)を使(つか)ってもいいですか。",
        exampleMeaning: {
          en: "May I use this dictionary?",
          zh: "我可以使用這本字典嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1504",
        expression: "置きます",
        reading: "おきます",
        definition: "物をある場所に留める",
        meaning: {
          en: "put, place, set (down)",
          zh: "放置、擺放",
        },
        example: "ここに荷物(にもつ)を置(お)きます。",
        exampleMeaning: {
          en: "I put the luggage here.",
          zh: "我把行李放在這裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1505",
        expression: "作ります",
        reading: "つくります",
        definition: "形のあるものを作る（料理、作品など）",
        meaning: {
          en: "make, produce, cook (concrete objects like food, crafts)",
          zh: "製作、做（飯菜、產品等）",
        },
        example: "ケーキを作(つく)ります。",
        exampleMeaning: {
          en: "I make a cake.",
          zh: "我做蛋糕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1506",
        expression: "造ります",
        reading: "つくります",
        definition: "大きなもの、大掛かりなものを作る（家、酒など）",
        meaning: {
          en: "make, produce, build (large-scale items like houses, ships, sake)",
          zh: "製造、建造（房屋、酒等）",
        },
        example: "昔(むかし)はここでお酒(さけ)を造(つく)っていました。",
        exampleMeaning: {
          en: "They used to make sake here.",
          zh: "以前這裡是用來釀酒的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1507",
        expression: "売ります",
        reading: "うります",
        definition: "お金と引き換えに品物を渡す",
        meaning: {
          en: "sell",
          zh: "販賣、出售",
        },
        example: "私(わたし)の会社(かいしゃ)は車(くるま)を売(う)っています。",
        exampleMeaning: {
          en: "My company sells cars.",
          zh: "我的公司是賣汽車的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1508",
        expression: "知ります",
        reading: "しります",
        definition: "知識を得る（変化の動詞）",
        meaning: {
          en: "get to know, find out (verb of change)",
          zh: "得知、認識、了解",
        },
        example: "彼(かれ)の名前(なまえ)を知(し)りました。",
        exampleMeaning: {
          en: "I found out his name (I got to know his name).",
          zh: "我得知了他的名字。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1509",
        expression: "住みます",
        reading: "すみます",
        definition: "居住する（場所の動詞）",
        meaning: {
          en: "start living, move to (verb of place/action leading to a state)",
          zh: "開始居住",
        },
        example: "東京(とうきょう)に住(す)みます。",
        exampleMeaning: {
          en: "I will live in Tokyo (e.g., I'm moving there).",
          zh: "我要搬到東京居住。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1510",
        expression: "研究します",
        reading: "けんきゅうします",
        definition: "専門的な調査を行う",
        meaning: {
          en: "do research, study (a topic)",
          zh: "研究",
        },
        example: "経済(けいざい)を研究(けんきゅう)しています。",
        exampleMeaning: {
          en: "I am researching the economy.",
          zh: "我正在研究經濟學。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1511",
        expression: "知っています",
        reading: "しっています",
        definition: "知識を持っている（状態）",
        meaning: {
          en: "know (state of knowing, result of 知ります)",
          zh: "知道、認識",
        },
        example: "彼(かれ)の電話番号(でんわばんごう)を知(し)っています。",
        exampleMeaning: {
          en: "I know his phone number.",
          zh: "我知道他的電話號碼。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1512",
        expression: "知りません",
        reading: "しりません",
        definition: "知識を持っていない（否定形）",
        meaning: {
          en: "don't know (negative state)",
          zh: "不知道、不認識",
        },
        example: "私(わたし)はそのニュースを知(し)りません。",
        exampleMeaning: {
          en: "I don't know that news.",
          zh: "我不知道那個消息。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1513",
        expression: "住んでいます",
        reading: "すんでいます",
        definition: "居住している（状態）",
        meaning: {
          en: "live (state of living, result of 住みます)",
          zh: "居住",
        },
        example: "どこに住(す)んでいますか。",
        exampleMeaning: {
          en: "Where do you live?",
          zh: "您住在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1514",
        expression: "大阪に住んでいます",
        reading: "おおさかにすんでいます",
        definition: "大阪に居住している",
        meaning: {
          en: "live in Osaka",
          zh: "居住在大阪",
        },
        example: "私(わたし)は大阪(おおさか)に住(す)んでいます。",
        exampleMeaning: {
          en: "I live in Osaka.",
          zh: "我居住在大阪。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1515",
        expression: "資料",
        reading: "しりょう",
        definition: "データ、情報",
        meaning: {
          en: "materials, data, documentation",
          zh: "資料、數據",
        },
        example: "会議(かいぎ)の資料(しりょう)をコピーしてください。",
        exampleMeaning: {
          en: "Please copy the materials for the meeting.",
          zh: "請影印會議資料。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1516",
        expression: "カタログ",
        reading: "カタログ",
        definition: "商品の目録",
        meaning: {
          en: "catalog",
          zh: "目錄、型錄",
        },
        example: "新(あたら)しい車(くるま)のカタログを見(み)ました。",
        exampleMeaning: {
          en: "I saw the catalog for the new car.",
          zh: "我看了新車的目錄。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1517",
        expression: "時刻表",
        reading: "じこくひょう",
        definition: "交通機関の運行時間表",
        meaning: {
          en: "timetable, schedule (train, bus, etc.)",
          zh: "時刻表",
        },
        example: "電車(でんしゃ)の時刻表(じこくひょう)はどこですか。",
        exampleMeaning: {
          en: "Where is the train timetable?",
          zh: "火車時刻表在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1518",
        expression: "服",
        reading: "ふく",
        definition: "衣類",
        meaning: {
          en: "clothes, garment",
          zh: "衣服",
        },
        example: "新(あたら)しい服(ふく)を買(か)いました。",
        exampleMeaning: {
          en: "I bought new clothes.",
          zh: "我買了新衣服。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1519",
        expression: "製品",
        reading: "せいひん",
        definition: "生産された品物",
        meaning: {
          en: "products, manufactured goods",
          zh: "產品、製品",
        },
        example:
          "この工場(こうじょう)では、いろいろな製品(せいひん)を作(つく)っています。",
        exampleMeaning: {
          en: "This factory produces various products.",
          zh: "這家工廠生產各種產品。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1520",
        expression: "ソフト",
        reading: "ソフト",
        definition: "コンピュータプログラム",
        meaning: {
          en: "software",
          zh: "軟體",
        },
        example: "新(あたら)しいソフトを使(つか)います。",
        exampleMeaning: {
          en: "I use new software.",
          zh: "我使用新軟體。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1521",
        expression: "専門",
        reading: "せんもん",
        definition: "特(とく)に深(ふか)く研究(けんきゅう)している分野(ぶんや)",
        meaning: {
          en: "specialty, field of study",
          zh: "專業、專長",
        },
        example: "あなたのご専門(せんもん)は何(なん)ですか。",
        exampleMeaning: {
          en: "What is your specialty/field of study?",
          zh: "您的專業是什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1522",
        expression: "歯医者",
        reading: "はいしゃ",
        definition: "歯科医師",
        meaning: {
          en: "dentist, dentist's office",
          zh: "牙醫、牙科診所",
        },
        example: "歯(は)が痛(いた)いので歯医者(はいしゃ)に行(い)きます。",
        exampleMeaning: {
          en: "My tooth hurts, so I'm going to the dentist.",
          zh: "我的牙齒痛，所以我要去看牙醫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1523",
        expression: "床屋",
        reading: "とこや",
        definition: "理髪店",
        meaning: {
          en: "barber, barbershop",
          zh: "理髮店、理髮師",
        },
        example: "床屋(とこや)で髪(かみ)を切(き)ってもらいます。",
        exampleMeaning: {
          en: "I get my hair cut at the barbershop.",
          zh: "我在理髮店理髮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1524",
        expression: "プレイガイド",
        reading: "プレイガイド",
        definition: "劇場やイベントのチケット販売所",
        meaning: {
          en: "(theatre) ticket agency, booking office",
          zh: "售票處（戲劇、活動）",
        },
        example: "コンサートのチケットをプレイガイドで買(か)いました。",
        exampleMeaning: {
          en: "I bought concert tickets at the ticket agency.",
          zh: "我在售票處買了音樂會門票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1525",
        expression: "独身",
        reading: "どくしん",
        definition: "（名・な）結婚していないこと",
        meaning: {
          en: "single, unmarried (noun/な-adjective)",
          zh: "單身、未婚",
        },
        example: "私(わたし)は今(いま)独身(どくしん)です。",
        exampleMeaning: {
          en: "I am single now.",
          zh: "我現在是單身。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1526",
        expression: "特に",
        reading: "とくに",
        definition: "他と比べて際立って",
        meaning: {
          en: "especially, particularly",
          zh: "特別地、尤其",
        },
        example: "特(とく)に日本料理(にほんりょうり)が好(す)きです。",
        exampleMeaning: {
          en: "I especially like Japanese food.",
          zh: "我特別喜歡日本料理。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1527",
        expression: "思い出します",
        reading: "おもいだします",
        definition: "過去の経験などを心によみがえらせる",
        meaning: {
          en: "remember, recollect, recall",
          zh: "回想、想起",
        },
        example: "昔(むかし)の旅行(りょこう)を思(おも)い出(だ)します。",
        exampleMeaning: {
          en: "I remember my old trip.",
          zh: "我想起了以前的旅行。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1528",
        expression: "ご家族",
        reading: "ごかぞく",
        definition: "（相手の）家族（尊敬語）",
        meaning: {
          en: "your family (polite/honorific equivalent of 家族)",
          zh: "您的家人（敬語）",
        },
        example: "ご家族(かぞく)はどちらにいらっしゃいますか。",
        exampleMeaning: {
          en: "Where is your family?",
          zh: "您的家人在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1529",
        expression: "いらっしゃいます",
        reading: "いらっしゃいます",
        definition: "「います」の尊敬語",
        meaning: {
          en: "be (honorific equivalent of imasu/kimasu/ikimasu)",
          zh: "在、來、去（「います/きます/いきます」的敬語）",
        },
        example:
          "社長(しゃちょう)は今(いま)会議室(かいぎしつ)にいらっしゃいます。",
        exampleMeaning: {
          en: "The company president is currently in the conference room.",
          zh: "總裁現在在會議室裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1530",
        expression: "高校",
        reading: "こうこう",
        definition: "高等学校",
        meaning: {
          en: "senior high school (short for 高等学校)",
          zh: "高中",
        },
        example: "私(わたし)の高校(こうこう)はとても大(おお)きいです。",
        exampleMeaning: {
          en: "My high school is very big.",
          zh: "我的高中非常大。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c16",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 16",
      zh: "大家的日本語 初級I 第十六課",
      ja: "みんなの日本語 初級I 第十六課",
    },
    description: {
      en: "Lesson 16 covers the use of adjectives to describe people and things. Key grammar points include using the particle **が** to describe a specific feature of a subject ($\text{Noun} + \text{が} + \text{Adjective}$), using **Te-form** ($sim \text{て}$) to connect multiple adjectives, and vocabulary related to the body and transactions.",
      zh: "第十六課涵蓋了使用形容詞來描述人事物。重點語法包括使用助詞 **が** 來描述主語的特定特徵（$\text{名詞} + \text{が} + \text{形容詞}$）、使用 **Te 形** ($sim \text{て}$) 來連接多個形容詞，以及與身體和交易相關的詞彙。",
      ja: "第十六課では、人や物を説明するための形容詞の使用を学びます。主要な文法ポイントは、主語の特定の特長を述べる際の助詞**が**の使用（$\text{名詞} + \text{が} + \text{形容詞}$）、複数の形容詞を接続するための**て形** ($sim \text{て}$) の使用、および身体や取引に関連する語彙です。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1601",
        expression: "乗ります",
        reading: "のります",
        definition: "乗り物の中に入る",
        meaning: {
          en: "ride, get on (a vehicle) (uses $\text{に}$ particle)",
          zh: "乘坐、搭乘",
        },
        example: "バスに乗(の)ります。",
        exampleMeaning: {
          en: "I get on the bus.",
          zh: "我搭公車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1602",
        expression: "電車に乗ります",
        reading: "でんしゃにのります",
        definition: "電車に乗る",
        meaning: {
          en: "ride, get on a train",
          zh: "搭乘火車",
        },
        example:
          "毎日(まいにち)、電車(でんしゃ)に乗(の)って会社(かいしゃ)に行(い)きます。",
        exampleMeaning: {
          en: "I go to the office by train every day.",
          zh: "我每天搭火車去公司。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1603",
        expression: "降ります",
        reading: "おります",
        definition: "乗り物から外に出る",
        meaning: {
          en: "get off, disembark (from a vehicle) (uses $\text{を}$ particle)",
          zh: "下車、下（交通工具）",
        },
        example: "駅(えき)でバスを降(お)ります。",
        exampleMeaning: {
          en: "I get off the bus at the station.",
          zh: "我在車站下公車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1604",
        expression: "電車を降ります",
        reading: "でんしゃをおります",
        definition: "電車から降りる",
        meaning: {
          en: "get off a train",
          zh: "下火車",
        },
        example: "次(つぎ)の駅(えき)で電車(でんしゃ)を降(お)ります。",
        exampleMeaning: {
          en: "I get off the train at the next station.",
          zh: "我在下一站下火車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1605",
        expression: "乗り換えます",
        reading: "のりかえます",
        definition: "違う乗り物に乗り換える",
        meaning: {
          en: "change (trains, buses, etc.), transfer",
          zh: "轉乘、換車",
        },
        example: "東京(とうきょう)で新幹線(しんかんせん)に(のりかえ)ます。",
        exampleMeaning: {
          en: "I will change to the Shinkansen in Tokyo.",
          zh: "我會在東京轉乘新幹線。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1606",
        expression: "シャワーを浴びます",
        reading: "シャワーをあびます",
        definition: "シャワーを浴びる",
        meaning: {
          en: "take a shower, bathe",
          zh: "淋浴、沖澡",
        },
        example: "朝(あさ)シャワーを浴(あ)びます。",
        exampleMeaning: {
          en: "I take a shower in the morning.",
          zh: "我早上沖澡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1607",
        expression: "入れます",
        reading: "いれます",
        definition: "物やお金を中に入れる",
        meaning: {
          en: "put in, insert (e.g., money into a machine)",
          zh: "放入、插入",
        },
        example: "お金(かね)を機械(きかい)に入(い)れます。",
        exampleMeaning: {
          en: "I put money into the machine.",
          zh: "我把錢放入機器裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1608",
        expression: "出します",
        reading: "だします",
        definition: "外へ出す、引き出す",
        meaning: {
          en: "take out, withdraw (e.g., money from a bank)",
          zh: "取出、提領（例如錢）",
        },
        example: "銀行(ぎんこう)でお金(かね)を出(だ)します。",
        exampleMeaning: {
          en: "I withdraw money at the bank.",
          zh: "我在銀行提錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1609",
        expression: "入ります",
        reading: "はいります",
        definition: "中に入る",
        meaning: {
          en: "enter, join (an organization) (uses $\text{に}$ particle)",
          zh: "進入、加入",
        },
        example: "会社(かいしゃ)に入(はい)ります。",
        exampleMeaning: {
          en: "I join the company.",
          zh: "我進入了公司。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1610",
        expression: "大学に入ります",
        reading: "だいがくにはいります",
        definition: "大学に入学する",
        meaning: {
          en: "enter a university, start university",
          zh: "進入大學、上大學",
        },
        example: "来年(らいねん)大学(だいがく)に入(はい)ります。",
        exampleMeaning: {
          en: "I will enter university next year.",
          zh: "我明年將上大學。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1611",
        expression: "出ます",
        reading: "でます",
        definition: "卒業する、組織を抜ける",
        meaning: {
          en: "graduate (from), leave (an organization) (uses $\text{を}$ particle)",
          zh: "畢業、離開（組織）",
        },
        example: "会社(かいしゃ)を出(で)ます。",
        exampleMeaning: {
          en: "I leave the company.",
          zh: "我離開了公司。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1612",
        expression: "大学を出ます",
        reading: "だいがくをでます",
        definition: "大学を卒業する",
        meaning: {
          en: "graduate from a university",
          zh: "大學畢業",
        },
        example: "今年(ことし)の春(はる)に大学(だいがく)を出(で)ました。",
        exampleMeaning: {
          en: "I graduated from university this spring.",
          zh: "我今年春天大學畢業了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1613",
        expression: "やめます",
        reading: "やめます",
        definition: "中止する、辞職する",
        meaning: {
          en: "quit or retire from, stop, give up (uses $\text{を}$ particle)",
          zh: "辭職、停止、放棄",
        },
        example: "タバコをやめます。",
        exampleMeaning: {
          en: "I quit smoking.",
          zh: "我戒菸了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1614",
        expression: "会社をやめます",
        reading: "かいしゃをやめます",
        definition: "会社を辞職する",
        meaning: {
          en: "quit or retire from a company",
          zh: "辭職、從公司退休",
        },
        example: "３月(がつ)に会社(かいしゃ)をやめます。",
        exampleMeaning: {
          en: "I will quit the company in March.",
          zh: "我將在三月辭職。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1615",
        expression: "押します",
        reading: "おします",
        definition: "力を加えて動かす",
        meaning: {
          en: "press, push",
          zh: "按、推",
        },
        example: "ボタンを押(お)します。",
        exampleMeaning: {
          en: "I press the button.",
          zh: "我按下按鈕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1616",
        expression: "若い",
        reading: "わかい",
        definition: "（い）年齢が少ない",
        meaning: {
          en: "young (い-adjective)",
          zh: "年輕的",
        },
        example: "彼(かれ)は若(わか)いですが、仕事(しごと)ができます。",
        exampleMeaning: {
          en: "He is young, but he can do the job well.",
          zh: "他雖然年輕，但工作能力很強。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1617",
        expression: "長い",
        reading: "ながい",
        definition: "（い）長さが大きい",
        meaning: {
          en: "long (い-adjective)",
          zh: "長的",
        },
        example: "長(なが)い髪(かみ)が美(うつく)しいです。",
        exampleMeaning: {
          en: "Long hair is beautiful.",
          zh: "長頭髮很漂亮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1618",
        expression: "短い",
        reading: "みじかい",
        definition: "（い）長さが小さい",
        meaning: {
          en: "short (い-adjective)",
          zh: "短的",
        },
        example: "短(みじか)い時間(じかん)で終(お)わりました。",
        exampleMeaning: {
          en: "It finished in a short time.",
          zh: "它在短時間內結束了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1619",
        expression: "明るい",
        reading: "あかるい",
        definition: "（い）光が多い、陽気な",
        meaning: {
          en: "bright, light (as in color or character) (い-adjective)",
          zh: "明亮的、開朗的",
        },
        example: "この部屋(へや)はとても明(あか)るいです。",
        exampleMeaning: {
          en: "This room is very bright.",
          zh: "這個房間非常明亮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1620",
        expression: "暗い",
        reading: "くらい",
        definition: "（い）光が少ない、陰気な",
        meaning: {
          en: "dark (as in color or mood) (い-adjective)",
          zh: "黑暗的、陰沉的",
        },
        example: "この道(みち)は夜(よる)になると暗(くら)いです。",
        exampleMeaning: {
          en: "This road is dark at night.",
          zh: "這條路到了晚上很黑。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1621",
        expression: "背が高い",
        reading: "せがたかい",
        definition: "身長が高い",
        meaning: {
          en: "tall (referring to person's height)",
          zh: "個子高",
        },
        example: "彼(かれ)は背(せ)が高(たか)いです。",
        exampleMeaning: {
          en: "He is tall.",
          zh: "他個子很高。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1622",
        expression: "頭がいい",
        reading: "あたまがいい",
        definition: "賢い、頭が良い",
        meaning: {
          en: "clever, smart, intelligent (lit. head is good)",
          zh: "聰明、頭腦好",
        },
        example: "彼(かれ)は頭(あたま)がいいので、すぐ覚(おぼ)えます。",
        exampleMeaning: {
          en: "He is smart, so he remembers quickly.",
          zh: "他很聰明，所以很快就記住了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1623",
        expression: "体",
        reading: "からだ",
        definition: "肉体、身体",
        meaning: {
          en: "body, health",
          zh: "身體",
        },
        example: "体(からだ)に気(き)をつけてください。",
        exampleMeaning: {
          en: "Please take care of your health.",
          zh: "請注意身體。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1624",
        expression: "頭",
        reading: "あたま",
        definition: "首から上にある部分",
        meaning: {
          en: "head, mind",
          zh: "頭部、頭腦",
        },
        example: "頭(あたま)が痛(いた)いです。",
        exampleMeaning: {
          en: "I have a headache.",
          zh: "我頭痛。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1625",
        expression: "髪",
        reading: "かみ",
        definition: "頭に生えている毛",
        meaning: {
          en: "hair",
          zh: "頭髮",
        },
        example: "長(なが)い髪(かみ)を切(き)りました。",
        exampleMeaning: {
          en: "I cut my long hair.",
          zh: "我剪了我的長頭髮。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1626",
        expression: "顔",
        reading: "かお",
        definition: "頭の前面",
        meaning: {
          en: "face",
          zh: "臉",
        },
        example: "彼(かれ)の顔(かお)は覚(おぼ)えています。",
        exampleMeaning: {
          en: "I remember his face.",
          zh: "我記得他的臉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1627",
        expression: "目",
        reading: "め",
        definition: "視覚器官",
        meaning: {
          en: "eye",
          zh: "眼睛",
        },
        example: "目(め)が疲(つか)れました。",
        exampleMeaning: {
          en: "My eyes are tired.",
          zh: "我的眼睛累了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1628",
        expression: "耳",
        reading: "みみ",
        definition: "聴覚器官",
        meaning: {
          en: "ear",
          zh: "耳朵",
        },
        example: "耳(みみ)が悪(わる)いです。",
        exampleMeaning: {
          en: "I have poor hearing (My ears are bad).",
          zh: "我的聽力不好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1629",
        expression: "口",
        reading: "くち",
        definition: "話したり食べたりする部分",
        meaning: {
          en: "mouth",
          zh: "嘴巴",
        },
        example: "口(くち)を開(あ)けてください。",
        exampleMeaning: {
          en: "Please open your mouth.",
          zh: "請張開你的嘴巴。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1630",
        expression: "歯",
        reading: "は",
        definition: "口の中の骨",
        meaning: {
          en: "tooth, teeth",
          zh: "牙齒",
        },
        example: "歯(は)が痛(いた)いので、歯医者(はいしゃ)に行(い)きます。",
        exampleMeaning: {
          en: "My tooth hurts, so I'm going to the dentist.",
          zh: "我的牙齒痛，所以我要去看牙醫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1631",
        expression: "おなか",
        reading: "おなか",
        definition: "腹部",
        meaning: {
          en: "stomach, belly",
          zh: "肚子、腹部",
        },
        example: "おなか(なか)が痛(いた)いです。",
        exampleMeaning: {
          en: "My stomach hurts.",
          zh: "我肚子痛。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1632",
        expression: "足",
        reading: "あし",
        definition: "脚、または足首から下の部分",
        meaning: {
          en: "leg, foot",
          zh: "腿、腳",
        },
        example: "足(あし)が疲(つか)れました。",
        exampleMeaning: {
          en: "My legs/feet are tired.",
          zh: "我的腿/腳累了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1633",
        expression: "サービス",
        reading: "サービス",
        definition: "奉仕、接客",
        meaning: {
          en: "service",
          zh: "服務",
        },
        example: "あの店(みせ)はサービスがいいです。",
        exampleMeaning: {
          en: "That store has good service.",
          zh: "那家店的服務很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1634",
        expression: "ジョギング",
        reading: "ジョギング",
        definition: "軽いランニング",
        meaning: {
          en: "jogging",
          zh: "慢跑",
        },
        example: "毎朝(まいあさ)ジョギングをします。",
        exampleMeaning: {
          en: "I go jogging every morning.",
          zh: "我每天早上慢跑。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1635",
        expression: "ジョギングをします",
        reading: "ジョギングをします",
        definition: "ジョギングをする",
        meaning: {
          en: "jog",
          zh: "慢跑",
        },
        example: "公園(こうえん)でジョギングをします。",
        exampleMeaning: {
          en: "I jog in the park.",
          zh: "我在公園裡慢跑。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1636",
        expression: "シャワー",
        reading: "シャワー",
        definition: "浴びるお湯または水",
        meaning: {
          en: "shower",
          zh: "淋浴、蓮蓬頭",
        },
        example: "シャワーを浴(あ)びてから寝(ね)ます。",
        exampleMeaning: {
          en: "I go to sleep after taking a shower.",
          zh: "我沖完澡後才睡覺。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1637",
        expression: "緑",
        reading: "みどり",
        definition: "緑色、または草木",
        meaning: {
          en: "green, greenery",
          zh: "綠色、綠意",
        },
        example: "この街(まち)は緑(みどり)が多(おお)いです。",
        exampleMeaning: {
          en: "This town has a lot of greenery.",
          zh: "這個城鎮有很多綠色植物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1638",
        expression: "寺",
        reading: "てら",
        definition: "仏教の施設",
        meaning: {
          en: "Buddhist temple",
          zh: "寺廟（佛教）",
        },
        example:
          "京都(きょうと)には有名(ゆうめい)な寺(てら)がたくさんあります。",
        exampleMeaning: {
          en: "There are many famous temples in Kyoto.",
          zh: "京都有許多著名的寺廟。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1639",
        expression: "神社",
        reading: "じんじゃ",
        definition: "神道の施設",
        meaning: {
          en: "Shinto shrine",
          zh: "神社（神道）",
        },
        example: "正月(しょうがつ)に神社(じんじゃ)へ行(い)きます。",
        exampleMeaning: {
          en: "I go to a shrine for New Year's.",
          zh: "我在新年去神社。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1640",
        expression: "留学生",
        reading: "りゅうがくせい",
        definition: "外国で学んでいる学生",
        meaning: {
          en: "foreign student, exchange student",
          zh: "留學生",
        },
        example:
          "私(わたし)は日本(にほん)の大学(だいがく)の留学生(りゅうがくせい)です。",
        exampleMeaning: {
          en: "I am a foreign student at a Japanese university.",
          zh: "我是日本大學的留學生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1641",
        expression: "～番",
        reading: "～ばん",
        definition: "順序を表す",
        meaning: {
          en: "number $sim$, $sim \text{th}$",
          zh: "第～號、第～",
        },
        example:
          "私(わたし)の電話番号(でんわばんごう)は１２３の４５６７番(ばん)です。",
        exampleMeaning: {
          en: "My phone number is 123-4567.",
          zh: "我的電話號碼是123-4567。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1642",
        expression: "どうやって",
        reading: "どうやって",
        definition: "方法を尋ねる",
        meaning: {
          en: "in what way, how (to do something)",
          zh: "如何、怎麼做",
        },
        example: "ここへはどうやって行(い)きますか。",
        exampleMeaning: {
          en: "How do I get here?",
          zh: "怎麼去這裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1643",
        expression: "どの～",
        reading: "どの～",
        definition: "３つ以上のうちから選択を尋ねる",
        meaning: {
          en: "which $sim$ (used for three or more options)",
          zh: "哪一個～（用於三個或三個以上選項）",
        },
        example: "この中(なか)で、どれがあなたの傘(かさ)ですか。",
        exampleMeaning: {
          en: "Which one of these is your umbrella?",
          zh: "這些當中，哪一把是你的傘？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1644",
        expression: "いいえ、まだまだです",
        reading: "いいえまだまだです",
        definition: "（謙遜して）まだ不十分である",
        meaning: {
          en: "No, I still have a long way to go (humble response to praise)",
          zh: "不，還差得遠呢（謙虛的回答）",
        },
        example:
          "A: 日本語(にほんご)がお上手(じょうず)ですね。B: いいえ、まだまだです。",
        exampleMeaning: {
          en: "A: Your Japanese is very good. B: No, I still have a long way to go.",
          zh: "A: 您的日語說得真好。B: 不，還差得遠呢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1645",
        expression: "お引き出しですか",
        reading: "おひきだしですか",
        definition: "（銀行などで）お金を引き出しますか（丁寧な表現）",
        meaning: {
          en: "Are you making a withdrawal? (polite question used at ATMs/banks)",
          zh: "您是要提款嗎？（禮貌的說法）",
        },
        example: "窓口(まどぐち)：お引(ひ)き出(だ)しですか。",
        exampleMeaning: {
          en: "Teller: Are you making a withdrawal?",
          zh: "櫃檯：您是要提款嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1646",
        expression: "まず",
        reading: "まず",
        definition: "最初に、とりあえず",
        meaning: {
          en: "first of all, to begin with",
          zh: "首先、第一步",
        },
        example: "まず、名前(なまえ)を書(か)いてください。",
        exampleMeaning: {
          en: "First of all, please write your name.",
          zh: "首先，請寫下您的名字。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1647",
        expression: "キャッシュカード",
        reading: "キャッシュカード",
        definition: "現金引き出し用のカード",
        meaning: {
          en: "cash dispensing card, ATM card",
          zh: "提款卡",
        },
        example: "キャッシュカードを入(い)れます。",
        exampleMeaning: {
          en: "I insert the ATM card.",
          zh: "我插入提款卡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1648",
        expression: "暗証番号",
        reading: "あんしょうばんごう",
        definition: "秘密の番号、PIN",
        meaning: {
          en: "personal identification number, PIN",
          zh: "密碼、PIN碼",
        },
        example: "暗証番号(あんしょうばんごう)を押(お)します。",
        exampleMeaning: {
          en: "I press the PIN.",
          zh: "我輸入密碼。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1649",
        expression: "次に",
        reading: "つぎに",
        definition: "その次に",
        meaning: {
          en: "next, as a next step",
          zh: "接著、下一步",
        },
        example: "まず洗(あら)って、次(つぎ)に切(き)ります。",
        exampleMeaning: {
          en: "First, wash it, and next, cut it.",
          zh: "首先，清洗它，然後切開它。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1650",
        expression: "金額",
        reading: "きんがく",
        definition: "お金の量",
        meaning: {
          en: "amount of money",
          zh: "金額",
        },
        example: "金額(きんがく)を入力(にゅうりょく)します。",
        exampleMeaning: {
          en: "I enter the amount of money.",
          zh: "我輸入金額。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1651",
        expression: "確認",
        reading: "かくにん",
        definition: "確かめること",
        meaning: {
          en: "confirmation, check",
          zh: "確認",
        },
        example: "予約(よやく)の確認(かくにん)をします。",
        exampleMeaning: {
          en: "I confirm the reservation.",
          zh: "我確認預約。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1652",
        expression: "確認します",
        reading: "かくにんします",
        definition: "確かめる",
        meaning: {
          en: "confirm, check",
          zh: "確認、核對",
        },
        example: "時間(じかん)を確認(かくにん)してください。",
        exampleMeaning: {
          en: "Please confirm the time.",
          zh: "請確認時間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1653",
        expression: "ボタン",
        reading: "ボタン",
        definition: "スイッチ、押し釦",
        meaning: {
          en: "button",
          zh: "按鈕",
        },
        example: "このボタンを押(お)してください。",
        exampleMeaning: {
          en: "Please push this button.",
          zh: "請按這個按鈕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1654",
        expression: "アジア",
        reading: "アジア",
        definition: "大陸名",
        meaning: {
          en: "Asia",
          zh: "亞洲",
        },
        example: "アジア料理(りょうり)は種類(しゅるい)が多(おお)いです。",
        exampleMeaning: {
          en: "Asian cuisine has many varieties.",
          zh: "亞洲料理種類很多。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1655",
        expression: "バンドン",
        reading: "バンドン",
        definition: "都市名（インドネシア）",
        meaning: {
          en: "Bandung (in Indonesia)",
          zh: "萬隆（印度尼西亞）",
        },
        example: "バンドンはインドネシアの都市(とし)です。",
        exampleMeaning: {
          en: "Bandung is a city in Indonesia.",
          zh: "萬隆是印度尼西亞的一個城市。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1656",
        expression: "ベラクルス",
        reading: "ベラクルス",
        definition: "都市名（メキシコ）",
        meaning: {
          en: "Veracruz (in Mexico)",
          zh: "維拉克魯斯（墨西哥）",
        },
        example: "ベラクルスはメキシコの港町(みなとまち)です。",
        exampleMeaning: {
          en: "Veracruz is a port city in Mexico.",
          zh: "維拉克魯斯是墨西哥的一個港口城市。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1657",
        expression: "フランケン",
        reading: "フランケン",
        definition: "地名（ドイツ）",
        meaning: {
          en: "Franken (in Germany)",
          zh: "弗蘭肯（德國）",
        },
        example: "フランケンはドイツの地域(ちいき)です。",
        exampleMeaning: {
          en: "Franken is a region in Germany.",
          zh: "弗蘭肯是德國的一個地區。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1658",
        expression: "ベトナム",
        reading: "ベトナム",
        definition: "国名",
        meaning: {
          en: "Vietnam",
          zh: "越南",
        },
        example: "ベトナム料理(りょうり)はヘルシーです。",
        exampleMeaning: {
          en: "Vietnamese cuisine is healthy.",
          zh: "越南菜很健康。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1659",
        expression: "フエ",
        reading: "フエ",
        definition: "都市名（ベトナム）",
        meaning: {
          en: "Hue (in Vietnam)",
          zh: "順化（越南）",
        },
        example: "フエはベトナムの古都(こと)です。",
        exampleMeaning: {
          en: "Hue is an old capital of Vietnam.",
          zh: "順化是越南的一座古都。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c17",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 17",
      zh: "大家的日本語 初級I 第十七課",
      ja: "みんなの日本語 初級I 第十七課",
    },
    description: {
      en: "Lesson 17 focuses on verbs related to memory, movement, and daily chores. The lesson's core grammar introduces the use of the negative verb form (the $sim \text{ない}$ form) to express negative commands ($sim \text{ないで} \text{ください}$), permission not to do something ($sim \text{なくてもいいです}$), and the need to do something ($sim \text{なければなりません}$).",
      zh: "第十七課著重於與記憶、移動和日常雜務相關的動詞。本課的核心語法引入了動詞否定形式（$sim \text{ない}$形）的用法，用於表達否定命令（$sim \text{ないで} \text{ください}$）、允許不做某事（$sim \text{なくてもいいです}$）以及必須做某事（$sim \text{なければなりません}$）。",
      ja: "第十七課は、記憶、移動、および日課に関連する動詞に焦点を当てています。本課の主要文法は、動詞の否定形（$sim \text{ない}$形）を用いた否定の依頼（$sim \text{ないで} \text{ください}$）、不必要の許可（$sim \text{なくてもいいです}$）、および義務（$sim \text{なければなりません}$）の表現を導入します。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1701",
        expression: "覚えます",
        reading: "おぼえます",
        definition: "記憶する",
        meaning: {
          en: "memorize, remember",
          zh: "記住、背誦",
        },
        example: "単語(たんご)を覚(おぼ)えます。",
        exampleMeaning: {
          en: "I memorize vocabulary.",
          zh: "我記住單字。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1702",
        expression: "忘れます",
        reading: "わすれます",
        definition: "記憶から失う",
        meaning: {
          en: "forget, leave behind",
          zh: "忘記、遺忘",
        },
        example: "財布(さいふ)を忘(わす)れました。",
        exampleMeaning: {
          en: "I forgot my wallet (or left it behind).",
          zh: "我忘記帶錢包了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1703",
        expression: "なくします",
        reading: "なくします",
        definition: "紛失する",
        meaning: {
          en: "lose (something)",
          zh: "弄丟、遺失",
        },
        example: "鍵(かぎ)をなくしました。",
        exampleMeaning: {
          en: "I lost my key.",
          zh: "我弄丟了鑰匙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1704",
        expression: "出します",
        reading: "だします",
        definition: "提出する",
        meaning: {
          en: "hand in, submit",
          zh: "交出、提出",
        },
        example: "手紙(てがみ)を出(だ)します。",
        exampleMeaning: {
          en: "I hand in the letter (mail it).",
          zh: "我寄出信件。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1705",
        expression: "レポートを出します",
        reading: "レポートをだします",
        definition: "レポートを提出する",
        meaning: {
          en: "hand in a report",
          zh: "提交報告",
        },
        example:
          "レポートは来週(らいしゅう)の月曜日(げつようび)までに出(だ)さなければなりません。",
        exampleMeaning: {
          en: "You have to hand in the report by next Monday.",
          zh: "你必須在下週一之前提交報告。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1706",
        expression: "払います",
        reading: "はらいます",
        definition: "代金を支払う",
        meaning: {
          en: "pay",
          zh: "支付、付款",
        },
        example: "お金(かね)を払(はら)います。",
        exampleMeaning: {
          en: "I pay the money.",
          zh: "我付錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1707",
        expression: "返します",
        reading: "かえします",
        definition: "借りたものを元に戻す",
        meaning: {
          en: "give back, return (an item)",
          zh: "歸還、退還",
        },
        example: "本(ほん)を図書館(としょかん)に返(かえ)します。",
        exampleMeaning: {
          en: "I return the book to the library.",
          zh: "我將書還給圖書館。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1708",
        expression: "出かけます",
        reading: "でかけます",
        definition: "家から外へ出る",
        meaning: {
          en: "go out, leave (for a short period)",
          zh: "出門、外出",
        },
        example: "今(いま)から出(で)かけます。",
        exampleMeaning: {
          en: "I'm going out now.",
          zh: "我現在要出門了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1709",
        expression: "脱ぎます",
        reading: "ぬぎます",
        definition: "衣服や靴を身から離す",
        meaning: {
          en: "take off (clothes, shoes, etc.)",
          zh: "脫下（衣服、鞋子等）",
        },
        example: "靴(くつ)を脱(ぬ)ぎます。",
        exampleMeaning: {
          en: "I take off my shoes.",
          zh: "我脫下鞋子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1710",
        expression: "持って行きます",
        reading: "もっていきます",
        definition: "携行して行く",
        meaning: {
          en: "take (something) to a place",
          zh: "帶去",
        },
        example: "傘(かさ)を持(も)って行(い)きます。",
        exampleMeaning: {
          en: "I will take my umbrella with me.",
          zh: "我會帶傘去。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1711",
        expression: "持って来ます",
        reading: "もってきます",
        definition: "携行して来る",
        meaning: {
          en: "bring (something) to the speaker's location",
          zh: "帶來",
        },
        example: "辞書(じしょ)を持(も)って来(き)てください。",
        exampleMeaning: {
          en: "Please bring the dictionary.",
          zh: "請把字典帶來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1712",
        expression: "心配します",
        reading: "しんぱいします",
        definition: "気にかける",
        meaning: {
          en: "worry, be concerned",
          zh: "擔心",
        },
        example: "試験(しけん)について心配(しんぱい)します。",
        exampleMeaning: {
          en: "I worry about the exam.",
          zh: "我擔心考試。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1713",
        expression: "残業します",
        reading: "ざんぎょうします",
        definition: "決められた時間以上に働く",
        meaning: {
          en: "work overtime",
          zh: "加班",
        },
        example: "今日(きょう)は残業(ざんぎょう)しなければなりません。",
        exampleMeaning: {
          en: "I have to work overtime today.",
          zh: "我今天必須加班。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1714",
        expression: "出張します",
        reading: "しゅっちょうします",
        definition: "仕事で他の場所へ行く",
        meaning: {
          en: "go on a business trip",
          zh: "出差",
        },
        example: "明日(あした)大阪(おおさか)へ出張(しゅっちょう)します。",
        exampleMeaning: {
          en: "I will go on a business trip to Osaka tomorrow.",
          zh: "我明天要去大阪出差。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1715",
        expression: "薬を飲みます",
        reading: "くすりをのみます",
        definition: "薬を服用する",
        meaning: {
          en: "take medicine",
          zh: "吃藥、服藥",
        },
        example: "食後(しょくご)に薬(くすり)を飲(の)みます。",
        exampleMeaning: {
          en: "I take medicine after meals.",
          zh: "我飯後吃藥。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1716",
        expression: "おふろに入ります",
        reading: "おふろにはいります",
        definition: "入浴する",
        meaning: {
          en: "take a bath",
          zh: "泡澡",
        },
        example: "寝(ね)る前(まえ)におふろに入(はい)ります。",
        exampleMeaning: {
          en: "I take a bath before sleeping.",
          zh: "我睡覺前泡澡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1717",
        expression: "大切",
        reading: "たいせつ",
        definition: "（な）重要で価値がある",
        meaning: {
          en: "important, precious, valuable (な-adjective)",
          zh: "重要的、珍貴的",
        },
        example: "家族(かぞく)は大切(たいせつ)です。",
        exampleMeaning: {
          en: "Family is important.",
          zh: "家人很重要。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1718",
        expression: "大丈夫",
        reading: "だいじょうぶ",
        definition: "（な）問題がない、心配ない",
        meaning: {
          en: "all right, okay, no problem (な-adjective)",
          zh: "沒關係、沒問題、不要緊",
        },
        example: "このままで大丈夫(だいじょうぶ)ですか。",
        exampleMeaning: {
          en: "Is it all right like this?",
          zh: "這樣可以嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1719",
        expression: "危ない",
        reading: "あぶない",
        definition: "（い）危険である",
        meaning: {
          en: "dangerous, risky (い-adjective)",
          zh: "危險的",
        },
        example: "ここから先(さき)は危(あぶ)ないです。",
        exampleMeaning: {
          en: "It is dangerous beyond this point.",
          zh: "從這裡再往前就很危險了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1720",
        expression: "問題",
        reading: "もんだい",
        definition: "解決すべきこと、課題",
        meaning: {
          en: "question (on a test), problem, trouble",
          zh: "問題、難題",
        },
        example: "問題(もんだい)が難(むずか)しいです。",
        exampleMeaning: {
          en: "The problem is difficult.",
          zh: "這個問題很難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1721",
        expression: "答え",
        reading: "こたえ",
        definition: "質問に対する返事",
        meaning: {
          en: "answer, response",
          zh: "答案、回答",
        },
        example: "答(こた)えは３番(ばん)です。",
        exampleMeaning: {
          en: "The answer is number 3.",
          zh: "答案是第三個。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1722",
        expression: "禁煙",
        reading: "きんえん",
        definition: "喫煙禁止",
        meaning: {
          en: "No Smoking",
          zh: "禁止吸菸",
        },
        example: "この場所(ばしょ)は禁煙(きんえん)です。",
        exampleMeaning: {
          en: "This place is no smoking.",
          zh: "這個地方禁止吸菸。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1723",
        expression: "健康保険証",
        reading: "けんこうほけんしょう",
        definition: "健康保険の証明書",
        meaning: {
          en: "health insurance card",
          zh: "健康保險證",
        },
        example:
          "病院(びょういん)で健康保険証(けんこうほけんしょう)を見(み)せます。",
        exampleMeaning: {
          en: "I show my health insurance card at the hospital.",
          zh: "我在醫院出示我的健康保險證。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1724",
        expression: "かぜ",
        reading: "かぜ",
        definition: "風邪",
        meaning: {
          en: "a cold, flu",
          zh: "感冒、風寒",
        },
        example: "かぜ(かぜ)をひきました。",
        exampleMeaning: {
          en: "I caught a cold.",
          zh: "我感冒了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1725",
        expression: "熱",
        reading: "ねつ",
        definition: "体温が上がる症状",
        meaning: {
          en: "fever, temperature",
          zh: "發燒、體溫",
        },
        example: "熱(ねつ)があります。",
        exampleMeaning: {
          en: "I have a fever.",
          zh: "我發燒了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1726",
        expression: "病気",
        reading: "びょうき",
        definition: "健康でない状態",
        meaning: {
          en: "illness, disease",
          zh: "疾病、生病",
        },
        example: "病気(びょうき)なので、会社(かいしゃ)を休(やす)みます。",
        exampleMeaning: {
          en: "Since I'm sick, I will take a day off work.",
          zh: "因為生病，我休假。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1727",
        expression: "薬",
        reading: "くすり",
        definition: "病気を治療するためのもの",
        meaning: {
          en: "medicine, drug",
          zh: "藥物",
        },
        example: "薬(くすり)を飲(の)みました。",
        exampleMeaning: {
          en: "I took medicine.",
          zh: "我吃了藥。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1728",
        expression: "おふろ",
        reading: "おふろ",
        definition: "風呂、入浴の設備",
        meaning: {
          en: "bath (often used with the honorific prefix お)",
          zh: "澡盆、泡澡",
        },
        example: "おふろ(おふろ)が熱(あつ)いです。",
        exampleMeaning: {
          en: "The bath water is hot.",
          zh: "洗澡水很燙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1729",
        expression: "上着",
        reading: "うわぎ",
        definition: "上から羽織る服",
        meaning: {
          en: "jacket, outerwear, coat",
          zh: "外套、上衣",
        },
        example: "上着(うわぎ)を脱(ぬ)ぎます。",
        exampleMeaning: {
          en: "I take off my jacket.",
          zh: "我脫下外套。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1730",
        expression: "下着",
        reading: "したぎ",
        definition: "下着",
        meaning: {
          en: "underwear, inner clothing",
          zh: "內衣",
        },
        example: "下着(したぎ)を洗(あら)います。",
        exampleMeaning: {
          en: "I wash my underwear.",
          zh: "我洗內衣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1731",
        expression: "先生",
        reading: "せんせい",
        definition: "（医療関係者に対する呼びかけ）",
        meaning: {
          en: "doctor (used when addressing a medical doctor, often without a name)",
          zh: "醫生（稱呼醫務人員時用）",
        },
        example: "先生(せんせい)、のどが痛(いた)いです。",
        exampleMeaning: {
          en: "Doctor, my throat hurts.",
          zh: "醫生，我喉嚨痛。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1732",
        expression: "～までに",
        reading: "～までに",
        definition: "期限を表す",
        meaning: {
          en: "before $sim$, by $sim$ (indicating time limit, deadline)",
          zh: "在～之前、最晚到～",
        },
        example: "５時(じ)までに帰(かえ)ります。",
        exampleMeaning: {
          en: "I will return by 5 o'clock.",
          zh: "我會在五點前回來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1733",
        expression: "ですから",
        reading: "ですから",
        definition: "理由を説明する際の接続詞",
        meaning: {
          en: "therefore, so, for that reason",
          zh: "所以、因此",
        },
        example: "雨(あめ)です。ですから、出(で)かけません。",
        exampleMeaning: {
          en: "It's raining. Therefore, I won't go out.",
          zh: "下雨了。因此，我不會出門。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1734",
        expression: "どうしましたか",
        reading: "どうしましたか",
        definition: "相手の様子を尋ねる",
        meaning: {
          en: "What's the matter? (used when someone seems ill or troubled)",
          zh: "怎麼了？發生什麼事了？",
        },
        example: "顔色(かおいろ)が悪(わる)いですね。どうしましたか。",
        exampleMeaning: {
          en: "Your complexion is poor. What's the matter?",
          zh: "你臉色不好。怎麼了？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1735",
        expression: "～が痛いです",
        reading: "～がいたいです",
        definition: "体のどこかが痛い",
        meaning: {
          en: "have a pain in my $sim$ (uses $\text{が}$ particle to indicate the location of pain)",
          zh: "～很痛",
        },
        example: "頭(あたま)が痛(いた)いです。",
        exampleMeaning: {
          en: "I have a headache.",
          zh: "我頭痛。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1736",
        expression: "のど",
        reading: "のど",
        definition: "喉",
        meaning: {
          en: "throat",
          zh: "喉嚨",
        },
        example: "のど(のど)が渇(かわ)きました。",
        exampleMeaning: {
          en: "I am thirsty (lit. my throat is dry).",
          zh: "我口渴了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1737",
        expression: "お大事に",
        reading: "おだいじに",
        definition: "（病人にかける言葉）体を大切にしてください",
        meaning: {
          en: "Take care of yourself (said to people who are ill, short for お大事に $\text{して}$ $\text{ください}$)",
          zh: "請多保重、保重身體",
        },
        example: "A: さようなら。B: お大事(だいじ)に。",
        exampleMeaning: {
          en: "A: Goodbye. B: Take care of yourself.",
          zh: "A: 再見。B: 請多保重。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c18",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 18",
      zh: "大家的日本語 初級I 第十八課",
      ja: "みんなの日本語 初級I 第十八課",
    },
    description: {
      en: "Lesson 18 introduces the fundamental concept of expressing **ability** or **capability** using the verb **$\text{できます}$** (can/be able to). The structure is $\text{Noun} + \text{が} + \text{できます}$ (Can do $\text{Noun}$). New vocabulary includes verbs related to music/hobbies and organizational titles.",
      zh: "第十八課介紹了使用動詞 **$\text{できます}$** 來表達**能力**或**可能性**的基本概念。基本句型是 $\text{名詞} + \text{が} + \text{できます}$（能做 $\text{名詞}$）。新詞彙包括與音樂/愛好和職位名稱相關的動詞。",
      ja: "第十八課では、動詞 **$\text{できます}$** を用いた**能力**や**可能**の表現を学びます。基本的な文型は、$\text{名詞} + \text{が} + \text{できます}$（$\text{名詞}$ができる）です。新しい語彙には、音楽・趣味に関連する動詞や役職名が含まれています。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1801",
        expression: "できます",
        reading: "できます",
        definition: "能力や可能がある",
        meaning: {
          en: "be able to, can (used for capability or completion)",
          zh: "會、能夠、可以、完成",
        },
        example: "私(わたし)は日本語(にほんご)を話(はな)すことができます。",
        exampleMeaning: {
          en: "I can speak Japanese.",
          zh: "我會說日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1802",
        expression: "洗います",
        reading: "あらいます",
        definition: "水などを使って汚れを落とす",
        meaning: {
          en: "wash",
          zh: "洗",
        },
        example: "手(て)を洗(あら)います。",
        exampleMeaning: {
          en: "I wash my hands.",
          zh: "我洗手。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1803",
        expression: "弾きます",
        reading: "ひきます",
        definition: "弦楽器や鍵盤楽器を演奏する",
        meaning: {
          en: "play (a stringed instrument or piano, etc.)",
          zh: "彈奏",
        },
        example: "ギターを弾(ひ)くことができますか。",
        exampleMeaning: {
          en: "Can you play the guitar?",
          zh: "你會彈吉他嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1804",
        expression: "歌います",
        reading: "うたいます",
        definition: "歌を歌う",
        meaning: {
          en: "sing",
          zh: "唱歌",
        },
        example: "カラオケで歌(うた)います。",
        exampleMeaning: {
          en: "I sing at karaoke.",
          zh: "我在卡拉OK唱歌。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1805",
        expression: "集めます",
        reading: "あつめます",
        definition: "散らばっているものを一つにまとめる",
        meaning: {
          en: "collect, gather",
          zh: "收集、聚集",
        },
        example: "切手(きって)を集(あつ)めています。",
        exampleMeaning: {
          en: "I collect stamps.",
          zh: "我收集郵票。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1806",
        expression: "捨てます",
        reading: "すてます",
        definition: "不要なものを放り出す",
        meaning: {
          en: "throw away, discard",
          zh: "丟棄、扔掉",
        },
        example: "古(ふる)い新聞(しんぶん)を捨(す)てます。",
        exampleMeaning: {
          en: "I throw away the old newspaper.",
          zh: "我扔掉舊報紙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1807",
        expression: "換えます",
        reading: "かえます",
        definition: "古いものや要らないものを新しいものにする",
        meaning: {
          en: "exchange, change, replace",
          zh: "交換、更換",
        },
        example: "ドルを円(えん)に換(か)えます。",
        exampleMeaning: {
          en: "I exchange dollars for yen.",
          zh: "我將美元換成日圓。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1808",
        expression: "運転します",
        reading: "うんてんします",
        definition: "車などを操作して走らせる",
        meaning: {
          en: "drive (a vehicle)",
          zh: "駕駛、開車",
        },
        example: "毎日(まいにち)車(くるま)を運転(うんてん)します。",
        exampleMeaning: {
          en: "I drive a car every day.",
          zh: "我每天開車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1809",
        expression: "予約します",
        reading: "よやくします",
        definition: "あらかじめ約束する",
        meaning: {
          en: "reserve, book (an appointment, seat, etc.)",
          zh: "預約、預訂",
        },
        example: "レストランを予約(よやく)します。",
        exampleMeaning: {
          en: "I reserve a restaurant.",
          zh: "我預訂餐廳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1810",
        expression: "見学します",
        reading: "けんがくします",
        definition: "実際に見て勉強する",
        meaning: {
          en: "visit some place for study, inspect",
          zh: "參觀、考察",
        },
        example: "工場(こうじょう)を見学(けんがく)します。",
        exampleMeaning: {
          en: "I visit the factory for study.",
          zh: "我參觀工廠。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1811",
        expression: "ピアノ",
        reading: "ピアノ",
        definition: "鍵盤楽器の一種",
        meaning: {
          en: "piano",
          zh: "鋼琴",
        },
        example: "ピアノを習(なら)っています。",
        exampleMeaning: {
          en: "I am learning the piano.",
          zh: "我在學鋼琴。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1812",
        expression: "～メートル",
        reading: "～メートル",
        definition: "長さの単位",
        meaning: {
          en: "$sim$ meter(s)",
          zh: "～公尺",
        },
        example: "あの木(き)は５メートルあります。",
        exampleMeaning: {
          en: "That tree is 5 meters tall.",
          zh: "那棵樹有5公尺高。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1813",
        expression: "国際～",
        reading: "こくさい～",
        definition: "国際的な $sim$",
        meaning: {
          en: "international $sim$",
          zh: "國際～",
        },
        example: "国際(こくさい)会議(かいぎ)に出(で)ます。",
        exampleMeaning: {
          en: "I attend an international conference.",
          zh: "我參加一個國際會議。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1814",
        expression: "現金",
        reading: "げんきん",
        definition: "紙幣や硬貨",
        meaning: {
          en: "cash",
          zh: "現金",
        },
        example: "現金(げんきん)で払(はら)います。",
        exampleMeaning: {
          en: "I pay in cash.",
          zh: "我用現金支付。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1815",
        expression: "趣味",
        reading: "しゅみ",
        definition: "好(す)きなこと、余暇の活動",
        meaning: {
          en: "hobby, pastime",
          zh: "愛好、興趣",
        },
        example: "私(わたし)の趣味(しゅみ)は映画(えいが)を見(み)ることです。",
        exampleMeaning: {
          en: "My hobby is watching movies.",
          zh: "我的愛好是看電影。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1816",
        expression: "日記",
        reading: "にっき",
        definition: "日々の記録",
        meaning: {
          en: "diary, journal",
          zh: "日記",
        },
        example: "毎日(まいにち)日記(にっき)を書(か)いています。",
        exampleMeaning: {
          en: "I write a diary every day.",
          zh: "我每天寫日記。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1817",
        expression: "お祈り",
        reading: "おいのり",
        definition: "（神仏への）祈り",
        meaning: {
          en: "prayer (used with the honorific prefix お)",
          zh: "祈禱",
        },
        example: "毎朝(まいあさ)お祈(いの)りをします。",
        exampleMeaning: {
          en: "I pray every morning.",
          zh: "我每天早上祈禱。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1818",
        expression: "お祈りをします",
        reading: "おいのりをします",
        definition: "祈る",
        meaning: {
          en: "pray",
          zh: "祈禱",
        },
        example: "家族(かぞく)の健康(けんこう)のためにお祈(いの)りをします。",
        exampleMeaning: {
          en: "I pray for my family's health.",
          zh: "我為家人的健康祈禱。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1819",
        expression: "課長",
        reading: "かちょう",
        definition: "会社の課の責任者",
        meaning: {
          en: "section chief (managerial title)",
          zh: "課長",
        },
        example: "田中(たなか)課長(かちょう)は出張(しゅっちょう)中です。",
        exampleMeaning: {
          en: "Section Chief Tanaka is on a business trip.",
          zh: "田中課長正在出差。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1820",
        expression: "部長",
        reading: "ぶちょう",
        definition: "会社の部の責任者",
        meaning: {
          en: "department chief (higher managerial title than 課長)",
          zh: "部長",
        },
        example: "部長(ぶちょう)に報告(ほうこく)します。",
        exampleMeaning: {
          en: "I report to the department chief.",
          zh: "我向部長報告。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1821",
        expression: "社長",
        reading: "しゃちょう",
        definition: "会社の代表者",
        meaning: {
          en: "president of a company (CEO/President)",
          zh: "社長、總裁",
        },
        example: "社長(しゃちょう)は今(いま)会議(かいぎ)中です。",
        exampleMeaning: {
          en: "The company president is currently in a meeting.",
          zh: "社長現在正在開會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1822",
        expression: "動物",
        reading: "どうぶつ",
        definition: "生き物",
        meaning: {
          en: "animal",
          zh: "動物",
        },
        example: "動物(どうぶつ)が好(す)きです。",
        exampleMeaning: {
          en: "I like animals.",
          zh: "我喜歡動物。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1823",
        expression: "馬",
        reading: "うま",
        definition: "動物の一種",
        meaning: {
          en: "horse",
          zh: "馬",
        },
        example: "馬(うま)に乗(の)ることができます。",
        exampleMeaning: {
          en: "I can ride a horse.",
          zh: "我會騎馬。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1824",
        expression: "へえ",
        reading: "へえ",
        definition: "驚きや感心を表現する間投詞",
        meaning: {
          en: "Really! Wow! (used when expressing surprise or interest)",
          zh: "咦！哇！（表示驚訝或感興趣）",
        },
        example:
          "A: 私(わたし)は馬(うま)に乗(の)れます。B: へえ、すごいですね。",
        exampleMeaning: {
          en: "A: I can ride a horse. B: Wow, that's amazing.",
          zh: "A: 我會騎馬。B: 咦，真厲害！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1825",
        expression: "それはおもしろいですね",
        reading: "それはおもしろいですね",
        definition: "相手の話に興味を示す表現",
        meaning: {
          en: "That must be interesting (used to show interest)",
          zh: "那一定很有趣",
        },
        example:
          "A: 私(わたし)の趣味(しゅみ)は切手(きって)集(あつ)めです。B: それはおもしろいですね。",
        exampleMeaning: {
          en: "A: My hobby is stamp collecting. B: That must be interesting.",
          zh: "A: 我的愛好是集郵。B: 那一定很有趣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1826",
        expression: "なかなか",
        reading: "なかなか",
        definition: "容易ではない、めったに（否定形と使用）",
        meaning: {
          en: "not easily, not readily (used with negatives)",
          zh: "不輕易、不太（與否定形式連用）",
        },
        example: "この問題(もんだい)はなかなか分(わ)かりません。",
        exampleMeaning: {
          en: "I can't understand this problem easily.",
          zh: "這個問題不容易理解。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1827",
        expression: "牧場",
        reading: "ぼくじょう",
        definition: "牛馬などを飼育する場所",
        meaning: {
          en: "ranch, stock farm, dairy farm",
          zh: "牧場、農場",
        },
        example:
          "北海道(ほっかいどう)には大(おお)きい牧場(ぼくじょう)があります。",
        exampleMeaning: {
          en: "There are large ranches in Hokkaido.",
          zh: "北海道有很大的牧場。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1828",
        expression: "ほんとうですか",
        reading: "ほんとうですか",
        definition: "事実か尋ねる",
        meaning: {
          en: "Really? Is that true?",
          zh: "真的嗎？",
        },
        example:
          "A: 来週(らいしゅう)旅行(りょこう)に行(い)きます。B: ほんとうですか。",
        exampleMeaning: {
          en: "A: I'm going on a trip next week. B: Really?",
          zh: "A: 我下週要去旅行。B: 真的嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1829",
        expression: "ぜひ",
        reading: "ぜひ",
        definition: "確実(かくじつ)に、必(かなら)ず",
        meaning: {
          en: "by all means, definitely (expresses a strong desire to do something)",
          zh: "務必、一定",
        },
        example: "ぜひ日本(にほん)へ行(い)きたいです。",
        exampleMeaning: {
          en: "I definitely want to go to Japan.",
          zh: "我非常想去日本。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c19",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 19",
      zh: "大家的日本語 初級I 第十九課",
      ja: "みんなの日本語 初級I 第十九課",
    },
    description: {
      en: "Lesson 19 focuses on expressing **change of state** using the verb **$\text{なります}$** (to become). This includes changes to nouns, $\text{い-adjectives}$ (using the $sim \text{く}$ form), and $\text{な-adjectives}$ (using the $sim \text{に}$ form). New vocabulary relates to daily activities, hobbies, and conditions.",
      zh: "第十九課著重於使用動詞 **$\text{なります}$**（成為）來表達**狀態變化**。這包括名詞、$\text{い}$形容詞（使用 $sim \text{く}$形）和 $\text{な}$形容詞（使用 $sim \text{に}$形）的變化。新詞彙與日常活動、愛好和狀態有關。",
      ja: "第十九課では、動詞 **$\text{なります}$** を使って**状態の変化**を表現する方法を学びます。これは、名詞、い形容詞（$sim \text{く}$形を使用）、な形容詞（$sim \text{に}$形を使用）の変化を含みます。新しい語彙は、日常活動、趣味、状態に関連するものです。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1901",
        expression: "登ります",
        reading: "のぼります",
        definition: "高い所に上がる",
        meaning: {
          en: "climb, ascend (a mountain, tree, etc.) (uses $\text{に}$ particle)",
          zh: "攀登、爬",
        },
        example: "山(やま)に登(のぼ)ります。",
        exampleMeaning: {
          en: "I climb a mountain.",
          zh: "我爬山。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1902",
        expression: "山に登ります",
        reading: "やまにのぼります",
        definition: "山頂へ向かって進む",
        meaning: {
          en: "climb a mountain",
          zh: "爬山",
        },
        example: "富士山(ふじさん)に登(のぼ)ったことがあります。",
        exampleMeaning: {
          en: "I have climbed Mt. Fuji.",
          zh: "我爬過富士山。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1903",
        expression: "泊まります",
        reading: "とまります",
        definition: "宿泊する",
        meaning: {
          en: "stay (at a hotel, etc.) (uses $\text{に}$ particle)",
          zh: "住宿、過夜",
        },
        example: "友達(ともだち)の家(いえ)に泊(と)まります。",
        exampleMeaning: {
          en: "I stay at my friend's house.",
          zh: "我住在朋友家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1904",
        expression: "ホテルに泊まります",
        reading: "ホテルにとまります",
        definition: "ホテルに宿泊する",
        meaning: {
          en: "stay at a hotel",
          zh: "住在飯店",
        },
        example: "来月(らいげつ)は京都(きょうと)のホテルに泊(と)まります。",
        exampleMeaning: {
          en: "I will stay at a hotel in Kyoto next month.",
          zh: "我下個月會住在京都的飯店。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1905",
        expression: "掃除します",
        reading: "そうじします",
        definition: "部屋などを綺麗にする",
        meaning: {
          en: "clean (a room, house, etc.)",
          zh: "打掃",
        },
        example: "部屋(へや)を掃除(そうじ)します。",
        exampleMeaning: {
          en: "I clean the room.",
          zh: "我打掃房間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1906",
        expression: "洗濯します",
        reading: "せんたくします",
        definition: "衣類を洗う",
        meaning: {
          en: "wash (clothes), do laundry",
          zh: "洗衣服",
        },
        example: "毎日(まいにち)洗濯(せんたく)します。",
        exampleMeaning: {
          en: "I do laundry every day.",
          zh: "我每天洗衣服。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1907",
        expression: "練習します",
        reading: "れんしゅうします",
        definition: "技能を向上させるために繰り返す",
        meaning: {
          en: "practice, drill",
          zh: "練習",
        },
        example: "毎日(まいにち)日本語(にほんご)を練習(れんしゅう)します。",
        exampleMeaning: {
          en: "I practice Japanese every day.",
          zh: "我每天練習日語。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1908",
        expression: "なります",
        reading: "なります",
        definition: "変化して、ある状態・身分になる",
        meaning: {
          en: "become, turn into (main verb for expressing change of state)",
          zh: "變成、成為",
        },
        example: "寒(さむ)くなりました。",
        exampleMeaning: {
          en: "It has become cold.",
          zh: "天氣變冷了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1909",
        expression: "眠い",
        reading: "ねむい",
        definition: "（い）眠気を覚える",
        meaning: {
          en: "sleepy (い-adjective)",
          zh: "睏倦的",
        },
        example: "とても眠(ねむ)いです。",
        exampleMeaning: {
          en: "I am very sleepy.",
          zh: "我很睏。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1910",
        expression: "強い",
        reading: "つよい",
        definition: "（い）力がある、程度が大きい",
        meaning: {
          en: "strong, powerful (い-adjective)",
          zh: "強壯的、強大的",
        },
        example: "彼(かれ)は体(からだ)が強(つよ)いです。",
        exampleMeaning: {
          en: "He is physically strong.",
          zh: "他身體強壯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1911",
        expression: "弱い",
        reading: "よわい",
        definition: "（い）力が小さい、程度が小さい",
        meaning: {
          en: "weak, frail (い-adjective)",
          zh: "虛弱的、弱小的",
        },
        example: "熱(ねつ)があるので、体(からだ)が弱(よわ)いです。",
        exampleMeaning: {
          en: "I have a fever, so my body is weak.",
          zh: "我發燒了，所以身體虛弱。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1912",
        expression: "調子がいい",
        reading: "ちょうしがいい",
        definition: "状態が良い",
        meaning: {
          en: "be in good condition, fine (e.g., a person or machine)",
          zh: "狀況良好、順利",
        },
        example: "今日(きょう)は体(からだ)の調子(ちょうし)がいいです。",
        exampleMeaning: {
          en: "My body is in good condition today.",
          zh: "我今天身體狀況很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1913",
        expression: "調子が悪い",
        reading: "ちょうしがわるい",
        definition: "状態が良くない",
        meaning: {
          en: "be in bad condition, unwell",
          zh: "狀況不佳、身體不適",
        },
        example: "パソコンの調子(ちょうし)が悪(わる)いです。",
        exampleMeaning: {
          en: "My computer is in bad condition (malfunctioning).",
          zh: "我的電腦狀況不佳。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1914",
        expression: "調子",
        reading: "ちょうし",
        definition: "物事や体などの状態",
        meaning: {
          en: "condition, state",
          zh: "狀況、狀態",
        },
        example: "最近(さいきん)仕事(しごと)の調子(ちょうし)はどうですか。",
        exampleMeaning: {
          en: "How is your work condition recently?",
          zh: "你最近的工作狀況如何？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1915",
        expression: "ゴルフ",
        reading: "ゴルフ",
        definition: "スポーツの一種",
        meaning: {
          en: "golf",
          zh: "高爾夫球",
        },
        example: "趣味(しゅみ)はゴルフです。",
        exampleMeaning: {
          en: "My hobby is golf.",
          zh: "我的愛好是高爾夫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1916",
        expression: "ゴルフをします",
        reading: "ゴルフをします",
        definition: "ゴルフをする",
        meaning: {
          en: "play golf",
          zh: "打高爾夫球",
        },
        example: "週末(しゅうまつ)にゴルフをします。",
        exampleMeaning: {
          en: "I play golf on the weekend.",
          zh: "我週末打高爾夫球。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1917",
        expression: "相撲",
        reading: "すもう",
        definition: "日本の伝統的な格闘技",
        meaning: {
          en: "sumo wrestling",
          zh: "相撲",
        },
        example: "相撲(すもう)を見(み)に行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go watch sumo wrestling.",
          zh: "我想去看相撲。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1918",
        expression: "パチンコ",
        reading: "パチンコ",
        definition: "遊技機（ギャンブル）",
        meaning: {
          en: "pachinko (Japanese pinball game)",
          zh: "柏青哥（彈珠遊戲）",
        },
        example: "パチンコ屋(や)は駅(えき)の前(まえ)にあります。",
        exampleMeaning: {
          en: "The pachinko parlor is in front of the station.",
          zh: "柏青哥店在車站前面。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1919",
        expression: "パチンコをします",
        reading: "パチンコをします",
        definition: "パチンコをする",
        meaning: {
          en: "play pachinko",
          zh: "玩柏青哥",
        },
        example: "父(ちち)は時々(ときどき)パチンコをします。",
        exampleMeaning: {
          en: "My father sometimes plays pachinko.",
          zh: "我爸爸偶爾會玩柏青哥。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1920",
        expression: "お茶",
        reading: "おちゃ",
        definition: "茶道、または日本茶",
        meaning: {
          en: "tea ceremony, Japanese tea (often used with the honorific prefix お)",
          zh: "茶道、茶",
        },
        example: "日本(にほん)で(おちゃ)を習(なら)いたいです。",
        exampleMeaning: {
          en: "I want to learn the tea ceremony in Japan.",
          zh: "我想在日本學習茶道。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1921",
        expression: "日",
        reading: "ひ",
        definition: "一日、日付",
        meaning: {
          en: "day, date",
          zh: "日子、日期",
        },
        example: "いい日(ひ)でした。",
        exampleMeaning: {
          en: "It was a good day.",
          zh: "這是美好的一天。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1922",
        expression: "一度",
        reading: "いちど",
        definition: "一回",
        meaning: {
          en: "once, one time",
          zh: "一次",
        },
        example: "富士山(ふじさん)に一度(いちど)登(のぼ)りました。",
        exampleMeaning: {
          en: "I climbed Mt. Fuji once.",
          zh: "我爬過一次富士山。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1923",
        expression: "一度も",
        reading: "いちども",
        definition: "一回も（否定形と使用）",
        meaning: {
          en: "not once, never (used with negatives)",
          zh: "一次也沒有、從未（與否定形式連用）",
        },
        example: "日本(にほん)へは一度(いちど)も行(い)ったことがありません。",
        exampleMeaning: {
          en: "I have never been to Japan.",
          zh: "我從未去過日本。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1924",
        expression: "だんだん",
        reading: "だんだん",
        definition: "次第に、少しずつ",
        meaning: {
          en: "gradually, step by step",
          zh: "漸漸地、逐步地",
        },
        example: "だんだん寒(さむ)くなりました。",
        exampleMeaning: {
          en: "It gradually became cold.",
          zh: "天氣漸漸變冷了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1925",
        expression: "もうすぐ",
        reading: "もうすぐ",
        definition: "まもなく",
        meaning: {
          en: "soon, very soon",
          zh: "馬上、很快",
        },
        example: "もうすぐクリスマスです。",
        exampleMeaning: {
          en: "It's Christmas soon.",
          zh: "聖誕節很快就要到了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1926",
        expression: "おかげさまで",
        reading: "おかげさまで",
        definition: "相手の助けや配慮に感謝する言葉",
        meaning: {
          en: "Thank you (used when expressing gratitude for help received, often in response to inquiries about health/situation)",
          zh: "托您的福（感謝對方的幫助或關心）",
        },
        example: "A: お元(げんき)ですか。B: おかげさまで、元気(げんき)です。",
        exampleMeaning: {
          en: "A: Are you well? B: Thank you, I'm well.",
          zh: "A: 您身體好嗎？B: 托您的福，我很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1927",
        expression: "乾杯",
        reading: "かんぱい",
        definition: "酒を飲み干す時の掛け声",
        meaning: {
          en: "Cheers! Bottoms up!",
          zh: "乾杯",
        },
        example: "乾杯(かんぱい)！",
        exampleMeaning: {
          en: "Cheers!",
          zh: "乾杯！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1928",
        expression: "実は",
        reading: "じつは",
        definition: "本当のことを言う時に使う",
        meaning: {
          en: "actually, to tell the truth, as a matter of fact",
          zh: "其實、事實上",
        },
        example: "実(じつ)は、明日(あした)引(ひ)っ越(こ)しします。",
        exampleMeaning: {
          en: "Actually, I'm moving tomorrow.",
          zh: "其實，我明天要搬家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1929",
        expression: "ダイエット",
        reading: "ダイエット",
        definition: "減量するための食事療法",
        meaning: {
          en: "diet (for weight loss)",
          zh: "減肥、節食",
        },
        example: "ダイエット(ダイエット)を始(はじ)めました。",
        exampleMeaning: {
          en: "I started a diet.",
          zh: "我開始減肥了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1930",
        expression: "ダイエットをします",
        reading: "ダイエットをします",
        definition: "ダイエットをする",
        meaning: {
          en: "go on a diet",
          zh: "節食、減肥",
        },
        example: "来週(らいしゅう)からダイエットをします。",
        exampleMeaning: {
          en: "I will go on a diet starting next week.",
          zh: "我將從下週開始減肥。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1931",
        expression: "何回も",
        reading: "なんかいも",
        definition: "数(かず)の多(おお)い回数",
        meaning: {
          en: "many times, repeatedly",
          zh: "很多次、多次",
        },
        example: "何回(なんかい)も電話(でんわ)をかけました。",
        exampleMeaning: {
          en: "I called many times.",
          zh: "我打了好幾次電話。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1932",
        expression: "しかし",
        reading: "しかし",
        definition: "逆接の接続詞",
        meaning: {
          en: "but, however, nevertheless",
          zh: "但是、然而",
        },
        example:
          "日本語(にほんご)は難(むずか)しいです。しかし、おもしろいです。",
        exampleMeaning: {
          en: "Japanese is difficult. However, it's interesting.",
          zh: "日語很難。但是很有趣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1933",
        expression: "無理",
        reading: "むり",
        definition: "（な）不可能、困難、または過度なこと",
        meaning: {
          en: "excessive, impossible, unreasonable (な-adjective/noun)",
          zh: "辦不到、勉強、過分",
        },
        example: "それは少(すこ)し無理(むり)です。",
        exampleMeaning: {
          en: "That is a little impossible/too much to ask.",
          zh: "那有點辦不到/太強人所難了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1934",
        expression: "体にいい",
        reading: "からだにいい",
        definition: "健康に良い",
        meaning: {
          en: "good for one's health",
          zh: "對身體好",
        },
        example: "野菜(やさい)は体(からだ)にいいです。",
        exampleMeaning: {
          en: "Vegetables are good for one's health.",
          zh: "蔬菜對身體很好。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1935",
        expression: "ケーキ",
        reading: "ケーキ",
        definition: "洋菓子の一種",
        meaning: {
          en: "cake",
          zh: "蛋糕",
        },
        example: "誕生日(たんじょうび)にケーキを食(た)べました。",
        exampleMeaning: {
          en: "I ate cake for my birthday.",
          zh: "我生日吃了蛋糕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f1936",
        expression: "葛飾北斎",
        reading: "かつしかほくさい",
        definition: "江戸時代の浮世絵師",
        meaning: {
          en: "Katsushika Hokusai (famous Edo period ukiyo-e artist and painter, 1760-1849)",
          zh: "葛飾北齋（江戶時代著名的浮世繪藝術家和畫家）",
        },
        example:
          "葛飾北斎(かつしかほくさい)の絵(え)はとても有名(ゆうめい)です。",
        exampleMeaning: {
          en: "Katsushika Hokusai's paintings are very famous.",
          zh: "葛飾北齋的畫作非常有名。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c20",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 20",
      zh: "大家的日本語 初級I 第二十課",
      ja: "みんなの日本語 初級I 第二十課",
    },
    description: {
      en: "Lesson 20 introduces the **casual form** (plain form) of verbs, nouns, and adjectives, which is essential for speaking in informal settings and for forming complex sentences. The lesson covers expressing necessity using **$\text{いります}$** (need/require) and vocabulary for investigation and repair.",
      zh: "第二十課介紹了動詞、名詞和形容詞的**普通形**（休閒形式），這對於非正式場合的對話和構成複雜句型至關重要。本課涵蓋了使用 **$\text{いります}$**（需要）來表達必要性，以及與調查和修理相關的詞彙。",
      ja: "第二十課では、動詞、名詞、形容詞の**普通形**（カジュアル形）を導入します。これは、非公式な会話や複雑な文を構成する上で不可欠です。本課では、**$\text{いります}$**（必要とする）を使った必要性の表現や、調査・修理に関連する語彙を扱います。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2001",
        expression: "要ります",
        reading: "いります",
        definition: "必要とする",
        meaning: {
          en: "need, require (uses $\text{が}$ particle)",
          zh: "需要、必要",
        },
        example: "お金(かね)が要(い)ります。",
        exampleMeaning: {
          en: "I need money.",
          zh: "我需要錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2002",
        expression: "ビザが要ります",
        reading: "ビザがいります",
        definition: "ビザが必要である",
        meaning: {
          en: "need, require a visa",
          zh: "需要簽證",
        },
        example: "旅行(りょこう)にビザが要(い)りますか。",
        exampleMeaning: {
          en: "Do you need a visa for the trip?",
          zh: "旅行需要簽證嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2003",
        expression: "調べます",
        reading: "しらべます",
        definition: "事実や情報を探る",
        meaning: {
          en: "check, investigate, look up (e.g., a word)",
          zh: "查、調查、檢索",
        },
        example: "辞書(じしょ)で言葉(ことば)を調(しら)べます。",
        exampleMeaning: {
          en: "I look up a word in the dictionary.",
          zh: "我在字典裡查一個單字。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2004",
        expression: "直します",
        reading: "なおします",
        definition: "故障を治す、間違いを正す",
        meaning: {
          en: "repair, correct, fix (something broken or an error)",
          zh: "修理、改正",
        },
        example: "間違(まちが)いを直(なお)します。",
        exampleMeaning: {
          en: "I correct the mistake.",
          zh: "我改正錯誤。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2005",
        expression: "修理します",
        reading: "しゅうりします",
        definition: "機械などを修理する",
        meaning: {
          en: "repair, mend (specifically machines, structures, etc.)",
          zh: "修理",
        },
        example: "時計(とけい)を修理(しゅうり)します。",
        exampleMeaning: {
          en: "I repair the watch.",
          zh: "我修理手錶。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2006",
        expression: "電話します",
        reading: "でんわします",
        definition: "電話をかける",
        meaning: {
          en: "to phone, call",
          zh: "打電話",
        },
        example: "友達(ともだち)に電話(でんわ)します。",
        exampleMeaning: {
          en: "I phone my friend.",
          zh: "我打電話給朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2007",
        expression: "僕",
        reading: "ぼく",
        definition: "私（男性が使用するインフォーマルな一人称）",
        meaning: {
          en: "I (an informal equivalent of $\text{わたし}$ used by men)",
          zh: "我（男性使用的非正式第一人稱）",
        },
        example: "僕(ぼく)は学生(がくせい)だ。",
        exampleMeaning: {
          en: "I am a student (casual).",
          zh: "我是學生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2008",
        expression: "君",
        reading: "きみ",
        definition: "あなた（男性が使用するインフォーマルな二人称）",
        meaning: {
          en: "you (an informal equivalent of $\text{あなた}$ used by men to address peers/subordinates)",
          zh: "你（男性使用的非正式第二人稱，用於平輩或下屬）",
        },
        example: "君(きみ)は何歳(なんさい)？",
        exampleMeaning: {
          en: "How old are you? (casual)",
          zh: "你幾歲？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2009",
        expression: "～君",
        reading: "～くん",
        definition: "（男性の同僚や年下に対する呼称）",
        meaning: {
          en: "Mr. $sim$ (an informal equivalent of $sim \text{さん}$ used by men, often for boys or male peers/juniors)",
          zh: "～君（用於男性的姓氏或名字之後，非正式稱呼）",
        },
        example: "佐藤(さとう)君(くん)はどこですか。",
        exampleMeaning: {
          en: "Where is Sato-kun?",
          zh: "佐藤君在哪裡？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2010",
        expression: "うん",
        reading: "うん",
        definition: "はい（インフォーマル）",
        meaning: {
          en: "yes (an informal equivalent of $\text{はい}$)",
          zh: "嗯、是的（非正式）",
        },
        example: "A: 行(い)く？ B: うん、行(い)く。",
        exampleMeaning: {
          en: "A: Going? B: Yeah, I'm going (casual).",
          zh: "A: 去嗎？ B: 嗯，去。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2011",
        expression: "ううん",
        reading: "ううん",
        definition: "いいえ（インフォーマル）",
        meaning: {
          en: "no (an informal equivalent of $\text{いいえ}$)",
          zh: "唔、不（非正式）",
        },
        example: "A: 疲(つか)れた？ B: ううん、大丈夫(だいじょうぶ)。",
        exampleMeaning: {
          en: "A: Are you tired? B: Nah, I'm fine (casual).",
          zh: "A: 累嗎？ B: 不，沒關係。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2012",
        expression: "サラリーマン",
        reading: "サラリーマン",
        definition: "会社で給料をもらって働く人",
        meaning: {
          en: "salaried worker, office worker (wasei-eigo: 'salary man')",
          zh: "上班族、領薪水的員工",
        },
        example: "父(ちち)はサラリーマンです。",
        exampleMeaning: {
          en: "My father is a salaried worker.",
          zh: "我爸爸是上班族。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2013",
        expression: "ことば",
        reading: "ことば",
        definition: "言葉、言語",
        meaning: {
          en: "word, language",
          zh: "詞語、語言",
        },
        example: "外国(がいこく)の言葉(ことば)を勉強(べんきょう)します。",
        exampleMeaning: {
          en: "I study a foreign language.",
          zh: "我學習外國語言。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2014",
        expression: "物価",
        reading: "ぶっか",
        definition: "商品の価格",
        meaning: {
          en: "commodity prices, cost of living",
          zh: "物價",
        },
        example: "日本(にほん)の物価(ぶっか)は高(たか)いです。",
        exampleMeaning: {
          en: "Prices in Japan are high.",
          zh: "日本的物價很高。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2015",
        expression: "着物",
        reading: "きもの",
        definition: "日本の伝統的な衣服",
        meaning: {
          en: "kimono (traditional Japanese attire)",
          zh: "和服、浴衣",
        },
        example: "着物(きもの)を着(き)ます。",
        exampleMeaning: {
          en: "I wear a kimono.",
          zh: "我穿和服。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2016",
        expression: "ビザ",
        reading: "ビザ",
        definition: "査証",
        meaning: {
          en: "visa (often written in katakana as $\text{ビザ}$)",
          zh: "簽證",
        },
        example: "ビザ(ビザ)を申請(しんせい)します。",
        exampleMeaning: {
          en: "I apply for a visa.",
          zh: "我申請簽證。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2017",
        expression: "初め",
        reading: "はじめ",
        definition: "最初、始まり",
        meaning: {
          en: "the beginning, the start",
          zh: "開始、開端",
        },
        example: "最初(さいしょ)は難(むずか)しいです。",
        exampleMeaning: {
          en: "The beginning is difficult.",
          zh: "剛開始很難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2018",
        expression: "終わり",
        reading: "おわり",
        definition: "終了、最後",
        meaning: {
          en: "the end, the conclusion",
          zh: "結束、最後",
        },
        example: "話(はなし)の終(お)わり。",
        exampleMeaning: {
          en: "The end of the story.",
          zh: "故事的結尾。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2019",
        expression: "こっち",
        reading: "こっち",
        definition: "こちら（インフォーマル）",
        meaning: {
          en: "this way, this place (an informal equivalent of $\text{こちら}$)",
          zh: "這邊、這個地方（非正式）",
        },
        example: "こっち(こっち)に来(き)て。",
        exampleMeaning: {
          en: "Come this way (casual).",
          zh: "來這邊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2020",
        expression: "そっち",
        reading: "そっち",
        definition: "そちら（インフォーマル）",
        meaning: {
          en: "that way, that place (near the listener) (an informal equivalent of $\text{そちら}$)",
          zh: "那邊、那個地方（非正式，靠近聽者）",
        },
        example: "そっち(そっち)はどう？",
        exampleMeaning: {
          en: "How about over there (casual)?",
          zh: "那邊怎麼樣？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2021",
        expression: "あっち",
        reading: "あっち",
        definition: "あちら（インフォーマル）",
        meaning: {
          en: "that way, that place over there (away from both) (an informal equivalent of $\text{あちら}$)",
          zh: "那邊、那個遠處（非正式，離雙方都遠）",
        },
        example: "あっち(あっち)に行(い)こう。",
        exampleMeaning: {
          en: "Let's go over there (casual).",
          zh: "我們去那邊吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2022",
        expression: "どっち",
        reading: "どっち",
        definition: "どちら（インフォーマル）",
        meaning: {
          en: "which one (between two things), which way, where (an informal equivalent of $\text{どちら}$)",
          zh: "哪一個（兩者之間）、哪邊、哪裡（非正式）",
        },
        example: "コーラとジュース、どっち(どっち)がいい？",
        exampleMeaning: {
          en: "Which one do you prefer, cola or juice? (casual)",
          zh: "可樂和果汁，你喜歡哪一個？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2023",
        expression: "この間",
        reading: "このあいだ",
        definition: "先日",
        meaning: {
          en: "the other day, recently (often used for a specific recent past day)",
          zh: "前幾天、上次",
        },
        example: "この間(このあいだ)、田中(たなか)さんに会(あ)いました。",
        exampleMeaning: {
          en: "I met Mr. Tanaka the other day.",
          zh: "我前幾天見到了田中先生。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2024",
        expression: "みんなで",
        reading: "みんなで",
        definition: "全員で一緒に",
        meaning: {
          en: "all together, everyone doing something together",
          zh: "大家一起",
        },
        example: "みんなで(みんなで)歌(うた)を歌(うた)います。",
        exampleMeaning: {
          en: "Everyone sings a song together.",
          zh: "大家一起唱歌。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2025",
        expression: "～けど",
        reading: "～けど",
        definition: "逆接、または前置き（がのインフォーマルな表現）",
        meaning: {
          en: "but, although (an informal equivalent of $\text{が}$)",
          zh: "但是、雖然（が的非正式表達）",
        },
        example: "行(い)きたいけど、お金(かね)がない。",
        exampleMeaning: {
          en: "I want to go, but I don't have money (casual).",
          zh: "我想去，但是沒錢。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2026",
        expression: "国へ帰るの",
        reading: "くにへかえるの",
        definition: "国に帰るんですか？（インフォーマルな疑問）",
        meaning: {
          en: "Are you going back to your country? (casual question ending)",
          zh: "你要回國嗎？（非正式問句）",
        },
        example: "いつ国(くに)へ帰(かえ)るの。",
        exampleMeaning: {
          en: "When are you going back to your country? (casual)",
          zh: "你什麼時候回國？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2027",
        expression: "どうするの",
        reading: "どうするの",
        definition: "どうするんですか？（インフォーマルな疑問）",
        meaning: {
          en: "What will you do? (casual question ending)",
          zh: "你要怎麼辦？（非正式問句）",
        },
        example: "明日(あした)の予定(よてい)、どうするの。",
        exampleMeaning: {
          en: "What will we do about tomorrow's plans? (casual)",
          zh: "明天的計畫怎麼辦？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2028",
        expression: "どうしようかな",
        reading: "どうしようかな",
        definition: "どうすればいいだろうか（独り言）",
        meaning: {
          en: "What shall I do? / I wonder what to do (self-talk, casual)",
          zh: "我該怎麼辦呢？/ 該怎麼做呢？（非正式自言自語）",
        },
        example: "傘(かさ)がない。どうしようかな。",
        exampleMeaning: {
          en: "I don't have an umbrella. What should I do, I wonder.",
          zh: "我沒有傘。我該怎麼辦呢？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2029",
        expression: "よかったら",
        reading: "よかったら",
        definition: "もし都合(つごう)が良(よ)ければ",
        meaning: {
          en: "if you like, if it's convenient for you (softening a request/invitation)",
          zh: "如果你願意、如果方便的話",
        },
        example: "よかったら、一緒(いっしょ)にご飯(はん)を食(た)べませんか。",
        exampleMeaning: {
          en: "If you like, won't you eat together with me?",
          zh: "如果你願意，要不要一起吃飯？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2030",
        expression: "いろいろ",
        reading: "いろいろ",
        definition: "（な）様々",
        meaning: {
          en: "various, diverse (used as a $\text{な-adjective}$ or adverbially)",
          zh: "各種各樣、多種多樣",
        },
        example: "いろいろ(いろいろ)な国(くに)の人(ひと)がいます。",
        exampleMeaning: {
          en: "There are people from various countries.",
          zh: "有來自不同國家的人。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c21",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 21",
      zh: "大家的日本語 初級I 第二十一課",
      ja: "みんなの日本語 初級I 第二十一課",
    },
    description: {
      en: "Lesson 21 focuses on using the plain form (casual form) to embed full clauses before the quotative particle **$\text{と}$**. This allows learners to express reported thought (**$\text{と}$ $\text{思います}$**) and reported speech (**$\text{と}$ $\text{言います}$**). The lesson also introduces vocabulary for necessity, opinions, and current events.",
      zh: "第二十一課著重於使用普通形（休閒形式）在引號助詞 **$\text{と}$** 之前嵌入完整的句子。這使學習者能夠表達轉述的思想（**$\text{と}$ $\text{思います}$**）和轉述的言語（**$\text{と}$ $\text{言います}$**）。本課還介紹了關於必要性、意見和時事的新詞彙。",
      ja: "第二十一課は、引用助詞 **$\text{と}$** の前に普通形を用いて完全な節を埋め込むことに焦点を当てています。これにより、学習者は思考の伝達（**$\text{と}$ $\text{思います}$**）や発言の伝達（**$\text{と}$ $\text{言います}$**）を表現できます。また、必要性、意見、時事に関連する語彙も導入されます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2101",
        expression: "思います",
        reading: "おもいます",
        definition: "心の中で考える",
        meaning: {
          en: "think, believe (used with the quotative particle $\text{と}$ $sim \text{と}$ $\text{思います}$)",
          zh: "想、認為",
        },
        example: "彼(かれ)は来(こ)ないと思(おも)います。",
        exampleMeaning: {
          en: "I don't think he will come.",
          zh: "我認為他不會來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2102",
        expression: "言います",
        reading: "いいます",
        definition: "発言する",
        meaning: {
          en: "say, tell (used with the quotative particle $\text{と}$ $sim \text{と}$ $\text{言います}$)",
          zh: "說、告訴",
        },
        example: "田中(たなか)さんにおはようと言(い)いました。",
        exampleMeaning: {
          en: "I said 'Good morning' to Mr. Tanaka.",
          zh: "我向田中先生說了聲「早安」。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2103",
        expression: "足ります",
        reading: "たります",
        definition: "十分にある、満たされる",
        meaning: {
          en: "be enough, be sufficient, suffice",
          zh: "足夠、充分",
        },
        example: "時間(じかん)が足(た)りません。",
        exampleMeaning: {
          en: "Time is not enough.",
          zh: "時間不夠。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2104",
        expression: "勝ちます",
        reading: "かちます",
        definition: "競争で勝利する",
        meaning: {
          en: "win, beat",
          zh: "贏、勝利",
        },
        example: "試合(しあい)に勝(か)ちました。",
        exampleMeaning: {
          en: "I won the game.",
          zh: "我贏了比賽。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2105",
        expression: "負けます",
        reading: "まけます",
        definition: "競争で敗北する",
        meaning: {
          en: "lose, be beaten",
          zh: "輸、敗北",
        },
        example: "彼(かれ)に負(ま)けました。",
        exampleMeaning: {
          en: "I lost to him.",
          zh: "我輸給他了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2106",
        expression: "あります",
        reading: "あります",
        definition: "行われる、開催される（無生物主語）",
        meaning: {
          en: "be held, take place (for events, meetings, etc.)",
          zh: "舉行、發生",
        },
        example: "来週(らいしゅう)パーティーがあります。",
        exampleMeaning: {
          en: "There will be a party next week.",
          zh: "下週有個派對。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2107",
        expression: "お祭りがあります",
        reading: "おまつりがあります",
        definition: "祭りが開催される",
        meaning: {
          en: "a festival is held, takes place",
          zh: "舉行祭典",
        },
        example: "７月(がつ)に大き(おお)いお祭(まつり)があります。",
        exampleMeaning: {
          en: "A big festival will be held in July.",
          zh: "七月將會舉行一個大型祭典。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2108",
        expression: "役に立ちます",
        reading: "やくにたちます",
        definition: "有用である",
        meaning: {
          en: "be useful, be of service",
          zh: "有用、有幫助",
        },
        example: "この辞書(じしょ)はとても役(やく)に立(た)ちます。",
        exampleMeaning: {
          en: "This dictionary is very useful.",
          zh: "這本字典很有用。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2109",
        expression: "むだ",
        reading: "むだ",
        definition: "（な）無駄である、不要である",
        meaning: {
          en: "wasteful, pointless, useless (used as a $\text{な-adjective}$ or noun)",
          zh: "浪費、無用",
        },
        example: "無駄(むだ)な買(か)い物(もの)はやめましょう。",
        exampleMeaning: {
          en: "Let's stop wasteful shopping.",
          zh: "別再浪費錢購物了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2110",
        expression: "不便",
        reading: "ふべん",
        definition: "（な）便利でない",
        meaning: {
          en: "inconvenient (な-adjective)",
          zh: "不方便",
        },
        example: "この町(まち)は交通(こうつう)が不便(ふべん)です。",
        exampleMeaning: {
          en: "Transportation is inconvenient in this town.",
          zh: "這個城鎮交通不方便。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2111",
        expression: "同じ",
        reading: "おなじ",
        definition: "（な）同一である",
        meaning: {
          en: "the same, identical (な-adjective/adnominal use)",
          zh: "一樣的、相同的",
        },
        example: "私(わたし)と彼(かれ)は同(おな)じ意見(いけん)です。",
        exampleMeaning: {
          en: "He and I have the same opinion.",
          zh: "我和他有相同的意見。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2112",
        expression: "すごい",
        reading: "すごい",
        definition: "（い）驚嘆(きょうたん)するほど優れている、またはひどい",
        meaning: {
          en: "awful, great, tremendous (expresses astonishment or admiration)",
          zh: "厲害、驚人、可怕（表示驚訝或讚嘆）",
        },
        example: "彼(かれ)の日本語(にほんご)はすごいですね。",
        exampleMeaning: {
          en: "His Japanese is amazing!",
          zh: "他的日語很厲害呢！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2113",
        expression: "首相",
        reading: "しゅしょう",
        definition: "内閣総理大臣",
        meaning: {
          en: "prime minister",
          zh: "首相",
        },
        example: "首相(しゅしょう)がスピーチをします。",
        exampleMeaning: {
          en: "The prime minister will make a speech.",
          zh: "首相將發表演講。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2114",
        expression: "大統領",
        reading: "だいとうりょう",
        definition: "共和国の元首",
        meaning: {
          en: "president (of a republic)",
          zh: "總統",
        },
        example:
          "大統領(だいとうりょう)は会議(かいぎ)に出席(しゅっせき)します。",
        exampleMeaning: {
          en: "The president will attend the meeting.",
          zh: "總統將出席會議。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2115",
        expression: "政治",
        reading: "せいじ",
        definition: "国家を治める活動",
        meaning: {
          en: "politics, government",
          zh: "政治",
        },
        example: "政治(せいじ)のニュースを見(み)ます。",
        exampleMeaning: {
          en: "I watch the politics news.",
          zh: "我看政治新聞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2116",
        expression: "ニュース",
        reading: "ニュース",
        definition: "報道、情報",
        meaning: {
          en: "news",
          zh: "新聞",
        },
        example: "毎日(まいにち)ニュースを見(み)ます。",
        exampleMeaning: {
          en: "I watch the news every day.",
          zh: "我每天看新聞。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2117",
        expression: "スピーチ",
        reading: "スピーチ",
        definition: "演説",
        meaning: {
          en: "speech",
          zh: "演講",
        },
        example: "スピーチ(スピーチ)の練習(れんしゅう)をします。",
        exampleMeaning: {
          en: "I practice my speech.",
          zh: "我練習我的演講。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2118",
        expression: "スピーチをします",
        reading: "スピーチをします",
        definition: "演説する",
        meaning: {
          en: "make a speech, give a presentation",
          zh: "發表演講",
        },
        example: "部長(ぶちょう)がスピーチをしました。",
        exampleMeaning: {
          en: "The department chief made a speech.",
          zh: "部長發表演講了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2119",
        expression: "試合",
        reading: "しあい",
        definition: "競技、ゲーム",
        meaning: {
          en: "game, match, competition",
          zh: "比賽、賽事",
        },
        example: "サッカーの試合(しあい)を見(み)ました。",
        exampleMeaning: {
          en: "I watched a soccer match.",
          zh: "我看了足球比賽。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2120",
        expression: "アルバイト",
        reading: "アルバイト",
        definition: "副業、パートタイムの仕事",
        meaning: {
          en: "part-time job, side job (from German $\text{Arbeit}$)",
          zh: "打工、兼職",
        },
        example: "アルバイト(アルバイト)を探(さが)しています。",
        exampleMeaning: {
          en: "I am looking for a part-time job.",
          zh: "我在找兼職工作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2121",
        expression: "アルバイトをします",
        reading: "アルバイトをします",
        definition: "アルバイトをする",
        meaning: {
          en: "work part-time",
          zh: "打工",
        },
        example: "学校(がっこう)の近(ちか)くでアルバイトをします。",
        exampleMeaning: {
          en: "I work part-time near the school.",
          zh: "我在學校附近打工。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2122",
        expression: "意見",
        reading: "いけん",
        definition: "考(かんが)え、見解",
        meaning: {
          en: "opinion, view",
          zh: "意見、看法",
        },
        example: "彼(かれ)の意見(いけん)は私(わたし)と違(ちが)います。",
        exampleMeaning: {
          en: "His opinion is different from mine.",
          zh: "他的意見與我的不同。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2123",
        expression: "話",
        reading: "はなし",
        definition: "物語、会話の内容",
        meaning: {
          en: "talk, speech, what one says, story",
          zh: "談話、故事、內容",
        },
        example: "面白(おもしろ)い話(はなし)を聞(き)きました。",
        exampleMeaning: {
          en: "I heard an interesting story.",
          zh: "我聽到了一個有趣的故事。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2124",
        expression: "話をします",
        reading: "はなしをします",
        definition: "会話する、物語る",
        meaning: {
          en: "talk, tell a story, converse",
          zh: "說話、聊天、講故事",
        },
        example: "先生(せんせい)と話(はなし)をしました。",
        exampleMeaning: {
          en: "I talked with the teacher.",
          zh: "我跟老師談了話。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2125",
        expression: "ユーモア",
        reading: "ユーモア",
        definition: "ユーモア、おかしみ",
        meaning: {
          en: "humor",
          zh: "幽默",
        },
        example: "彼(かれ)はユーモア(ユーモア)があります。",
        exampleMeaning: {
          en: "He has a sense of humor.",
          zh: "他有幽默感。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2126",
        expression: "むだ",
        reading: "むだ",
        definition: "無駄（名詞）",
        meaning: {
          en: "waste, uselessness (noun)",
          zh: "浪費、白費",
        },
        example: "時間(じかん)の無駄(むだ)です。",
        exampleMeaning: {
          en: "It is a waste of time.",
          zh: "這是浪費時間。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2127",
        expression: "デザイン",
        reading: "デザイン",
        definition: "意匠、設計",
        meaning: {
          en: "design (e.g., product design, graphic design)",
          zh: "設計、圖案",
        },
        example: "この車(くるま)のデザイン(デザイン)は古(ふる)いです。",
        exampleMeaning: {
          en: "The design of this car is old.",
          zh: "這輛車的設計很舊。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2128",
        expression: "交通",
        reading: "こうつう",
        definition: "人や車の往来",
        meaning: {
          en: "transportation, traffic",
          zh: "交通",
        },
        example: "東京(とうきょう)の交通(こうつう)は便利(べんり)です。",
        exampleMeaning: {
          en: "Transportation in Tokyo is convenient.",
          zh: "東京的交通很方便。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2129",
        expression: "ラッシュ",
        reading: "ラッシュ",
        definition: "通勤時間などの混雑",
        meaning: {
          en: "rush hour (e.g., morning/evening $\text{ラッシュ}$)",
          zh: "交通尖峰時間、人潮擁擠",
        },
        example: "朝(あさ)のラッシュ(ラッシュ)は大変(たいへん)です。",
        exampleMeaning: {
          en: "The morning rush hour is tough.",
          zh: "早上交通尖峰時間很辛苦。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2130",
        expression: "最近",
        reading: "さいきん",
        definition: "近(ちか)ごろ",
        meaning: {
          en: "recently, these days",
          zh: "最近、近來",
        },
        example: "最近(さいきん)忙(いそが)しいですか。",
        exampleMeaning: {
          en: "Are you busy recently?",
          zh: "你最近忙嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2131",
        expression: "たぶん",
        reading: "たぶん",
        definition: "おそらく、確実ではないが可能性が高い",
        meaning: {
          en: "probably, perhaps, maybe",
          zh: "大概、也許、或許",
        },
        example: "たぶん(たぶん)雨(あめ)が降(ふ)ると思(おも)います。",
        exampleMeaning: {
          en: "I think it will probably rain.",
          zh: "我想大概會下雨。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2132",
        expression: "きっと",
        reading: "きっと",
        definition: "確実(かくじつ)に、必(かなら)ず",
        meaning: {
          en: "surely, certainly, without fail",
          zh: "一定、必定",
        },
        example: "彼(かれ)はきっと(きっと)来(く)るでしょう。",
        exampleMeaning: {
          en: "He will surely come.",
          zh: "他一定會來的。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2133",
        expression: "ほんとうに",
        reading: "ほんとうに",
        definition: "本当に、真実に",
        meaning: {
          en: "really, truly, genuinely",
          zh: "真的、的確",
        },
        example: "本当(ほんとう)に(ほんとうに)助(たす)かりました。",
        exampleMeaning: {
          en: "You truly helped me.",
          zh: "你真的幫了我大忙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2134",
        expression: "そんなに",
        reading: "そんなに",
        definition: "それほど（否定形と使用）",
        meaning: {
          en: "not so much, not to that extent (used with negatives)",
          zh: "沒有那麼、不至於（與否定形式連用）",
        },
        example: "そんなに(そんなに)難(むずか)しくないと思(おも)います。",
        exampleMeaning: {
          en: "I don't think it's that difficult.",
          zh: "我認為沒有那麼難。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2135",
        expression: "～について",
        reading: "～について",
        definition: "～に関(かん)して",
        meaning: {
          en: "about $sim$, concerning $sim$",
          zh: "關於～",
        },
        example:
          "日本(にほん)の生活(せいかつ)について(について)話(はなし)をしました。",
        exampleMeaning: {
          en: "I talked about life in Japan.",
          zh: "我談論了關於日本的生活。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2136",
        expression: "しかたがありません",
        reading: "しかたがありません",
        definition: "どうすることもできない",
        meaning: {
          en: "There is no other choice. It can't be helped. / It's unavoidable.",
          zh: "沒辦法、無可奈何",
        },
        example:
          "約束(やくそく)ですから、行(い)かなければなりません。しかたがありません。",
        exampleMeaning: {
          en: "Since it's a promise, I have to go. It can't be helped.",
          zh: "既然是約定，我必須去。沒辦法。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2137",
        expression: "しばらくですね",
        reading: "しばらくですね",
        definition:
          "お久(ひさ)しぶりですね（久(ひさ)しぶりに会(あ)った時(とき)の挨拶(あいさつ)）",
        meaning: {
          en: "It's been a long time (since I last saw you). Long time no see. (More formal version of $\text{ひさしぶり}$)",
          zh: "好久不見了（久未見面時的問候）",
        },
        example:
          "A: ああ、佐藤(さとう)さん。しばらく(しばらく)ですね。B: お元気(げんき)でしたか。",
        exampleMeaning: {
          en: "A: Oh, Sato-san. Long time no see. B: Have you been well?",
          zh: "A: 啊，佐藤先生。好久不見了。B: 你好嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2138",
        expression: "～でも飲みませんか",
        reading: "～でものみませんか",
        definition: "～などいかがですか（誘い）",
        meaning: {
          en: "How about drinking $sim$ or something? (used to make a casual suggestion or invitation)",
          zh: "要不要喝點～之類的？（邀請）",
        },
        example: "お茶(おちゃ)でも飲(の)みませんか。",
        exampleMeaning: {
          en: "How about drinking some tea or something?",
          zh: "要不要喝點茶之類的？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2139",
        expression: "見ないと",
        reading: "みないと",
        definition: "見なければならない（インフォーマル）",
        meaning: {
          en: "I've got to watch it, I must see it (short for $\text{見}$ $\text{ないと}$ $\text{いけません}$/$\text{だめです}$)",
          zh: "我非看不可、我得看（非正式）",
        },
        example: "あの映画(えいが)、面白(おもしろ)いらしいよ。見(み)ないと。",
        exampleMeaning: {
          en: "That movie seems interesting. I've got to watch it.",
          zh: "聽說那部電影很有趣。我非看不可。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2140",
        expression: "もちろん",
        reading: "もちろん",
        definition: "当然(とうぜん)、言(い)うまでもなく",
        meaning: {
          en: "of course, certainly",
          zh: "當然、自然",
        },
        example: "A: 明日(あした)来(き)ますか。B: もちろん(もちろん)！",
        exampleMeaning: {
          en: "A: Are you coming tomorrow? B: Of course!",
          zh: "A: 你明天來嗎？B: 當然！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2141",
        expression: "カンガルー",
        reading: "カンガルー",
        definition: "オーストラリアの有袋類",
        meaning: {
          en: "kangaroo",
          zh: "袋鼠",
        },
        example: "カンガルー(カンガルー)は跳(は)ねるのが速(はや)いです。",
        exampleMeaning: {
          en: "Kangaroos are fast jumpers.",
          zh: "袋鼠跳得很快。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2142",
        expression: "キャプテンクック",
        reading: "キャプテンクック",
        definition: "ジェームズ・クック船長",
        meaning: {
          en: "Captain Cook (James Cook, British explorer, 1728-79)",
          zh: "庫克船長（英國探險家）",
        },
        example:
          "キャプテンクック(キャプテンクック)はオーストラリアを探検(たんけん)しました。",
        exampleMeaning: {
          en: "Captain Cook explored Australia.",
          zh: "庫克船長探索了澳洲。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c22",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 22",
      zh: "大家的日本語 初級I 第二十二課",
      ja: "みんなの日本語 初級I 第二十二課",
    },
    description: {
      en: "Lesson 22 introduces the use of a **plain form clause** to modify a noun (noun-modifying clause, similar to a relative clause). This structure is essential for complex descriptions (e.g., 'the person who wears a hat'). New vocabulary includes verbs for putting on various types of clothing and terms related to housing and daily life.",
      zh: "第二十二課介紹了使用**普通形子句**來修飾名詞（名詞修飾子句，類似於關係子句）。這個結構對於複雜的描述至關重要（例如：「戴帽子的人」）。新詞彙包括穿戴各類衣物的動詞以及與住房和日常生活相關的詞彙。",
      ja: "第二十二課では、**普通形の節**を用いて名詞を修飾する方法（名詞修飾節）を導入します。これは、複雑な描写（例：「帽子をかぶっている人」）に不可欠な構造です。新しい語彙には、様々な種類の衣類を身につける動詞や、住居と日常生活に関連する用語が含まれます。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2201",
        expression: "着ます",
        reading: "きます",
        definition: "上半身に衣類を身につける",
        meaning: {
          en: "put on (a shirt, jacket, sweater, etc. - anything covering the upper body)",
          zh: "穿（上衣、襯衫等，覆蓋上半身的衣物）",
        },
        example: "Tシャツを着(き)ます。",
        exampleMeaning: {
          en: "I put on a T-shirt.",
          zh: "我穿T恤。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2202",
        expression: "シャツを着ます",
        reading: "シャツをきます",
        definition: "シャツを上半身に身につける",
        meaning: {
          en: "put on a shirt",
          zh: "穿襯衫",
        },
        example: "新(あたら)しいシャツを着(き)ました。",
        exampleMeaning: {
          en: "I put on a new shirt.",
          zh: "我穿了一件新襯衫。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2203",
        expression: "はきます",
        reading: "はきます",
        definition: "下半身や足に衣類を身につける",
        meaning: {
          en: "put on (shoes, trousers, skirt, socks, etc. - anything below the waist or on the feet)",
          zh: "穿、套（鞋子、褲子、裙子等，下半身或足部的衣物）",
        },
        example: "ズボンをはきます。",
        exampleMeaning: {
          en: "I put on trousers.",
          zh: "我穿褲子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2204",
        expression: "靴をはきます",
        reading: "くつをはきます",
        definition: "靴を足に身につける",
        meaning: {
          en: "put on shoes",
          zh: "穿鞋子",
        },
        example: "急(いそ)いで靴(くつ)をはきました。",
        exampleMeaning: {
          en: "I quickly put on my shoes.",
          zh: "我趕快穿上鞋子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2205",
        expression: "かぶります",
        reading: "かぶります",
        definition: "頭に帽子などを身につける",
        meaning: {
          en: "put on (a hat, cap, helmet, etc. - anything on the head)",
          zh: "戴（帽子等，頭部的覆蓋物）",
        },
        example: "帽子(ぼうし)をかぶります。",
        exampleMeaning: {
          en: "I put on a hat.",
          zh: "我戴帽子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2206",
        expression: "帽子をかぶります",
        reading: "ぼうしをかぶります",
        definition: "帽子を頭に身につける",
        meaning: {
          en: "put on a hat/cap",
          zh: "戴帽子",
        },
        example: "いつも黒(くろ)い帽子(ぼうし)をかぶっています。",
        exampleMeaning: {
          en: "He always wears a black hat.",
          zh: "他總是戴著一頂黑帽子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2207",
        expression: "かけます",
        reading: "かけます",
        definition: "顔に眼鏡などを身につける",
        meaning: {
          en: "put on (glasses, sunglasses, etc. - specifically items worn over the eyes/ears)",
          zh: "戴、掛（眼鏡等，用於臉部）",
        },
        example: "眼鏡(めがね)をかけます。",
        exampleMeaning: {
          en: "I put on glasses.",
          zh: "我戴眼鏡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2208",
        expression: "眼鏡をかけます",
        reading: "めがねをかけます",
        definition: "眼鏡を顔に身につける",
        meaning: {
          en: "put on glasses",
          zh: "戴眼鏡",
        },
        example: "あの眼鏡(めがね)をかけている人(ひと)は誰(だれ)ですか。",
        exampleMeaning: {
          en: "Who is the person wearing those glasses?",
          zh: "那個戴眼鏡的人是誰？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2209",
        expression: "生まれます",
        reading: "うまれます",
        definition: "世にでる",
        meaning: {
          en: "be born",
          zh: "出生",
        },
        example: "私(わたし)は大阪(おおさか)で生(う)まれました。",
        exampleMeaning: {
          en: "I was born in Osaka.",
          zh: "我出生在大阪。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2210",
        expression: "コート",
        reading: "コート",
        definition: "防寒用の上着",
        meaning: {
          en: "coat (outerwear)",
          zh: "外套、大衣",
        },
        example: "寒(さむ)いので、コートを着(き)ます。",
        exampleMeaning: {
          en: "It's cold, so I put on a coat.",
          zh: "天氣很冷，所以我穿上大衣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2211",
        expression: "スーツ",
        reading: "スーツ",
        definition: "背広、洋服の一揃い",
        meaning: {
          en: "suit (business attire)",
          zh: "西裝、套裝",
        },
        example: "毎日(まいにち)スーツを着(き)て仕事(しごと)に行(い)きます。",
        exampleMeaning: {
          en: "I go to work wearing a suit every day.",
          zh: "我每天穿西裝去上班。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2212",
        expression: "セーター",
        reading: "セーター",
        definition: "編(あ)み物(もの)の上着",
        meaning: {
          en: "sweater, jumper",
          zh: "毛衣",
        },
        example: "赤(あか)いセーター(セーター)を買(か)いました。",
        exampleMeaning: {
          en: "I bought a red sweater.",
          zh: "我買了一件紅色毛衣。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2213",
        expression: "帽子",
        reading: "ぼうし",
        definition: "頭にかぶるもの",
        meaning: {
          en: "hat, cap",
          zh: "帽子",
        },
        example: "帽子(ぼうし)を脱(ぬ)ぎます。",
        exampleMeaning: {
          en: "I take off my hat.",
          zh: "我脫下帽子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2214",
        expression: "眼鏡",
        reading: "めがね",
        definition: "視力を補正するもの",
        meaning: {
          en: "glasses, spectacles",
          zh: "眼鏡",
        },
        example: "新(あたら)しい眼鏡(めがね)が要(い)ります。",
        exampleMeaning: {
          en: "I need new glasses.",
          zh: "我需要新眼鏡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2215",
        expression: "よく",
        reading: "よく",
        definition: "しばしば、頻繁に",
        meaning: {
          en: "often, frequently (often used for habitual actions)",
          zh: "經常、常常",
        },
        example: "彼(かれ)はよく(よく)図書館(としょかん)へ行(い)きます。",
        exampleMeaning: {
          en: "He often goes to the library.",
          zh: "他經常去圖書館。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2216",
        expression: "おめでとうございます",
        reading: "おめでとうございます",
        definition: "祝いの言葉",
        meaning: {
          en: "Congratulations (used for various celebratory occasions like birthdays, weddings, New Year's Day)",
          zh: "恭喜、祝賀",
        },
        example: "ご結婚(けっこん)おめでとうございます(おめでとうございます)！",
        exampleMeaning: {
          en: "Congratulations on your marriage!",
          zh: "恭喜您結婚！",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2217",
        expression: "こちら",
        reading: "こちら",
        definition: "これ（丁寧(ていねい)な言(い)い方(かた)）",
        meaning: {
          en: "this (polite equivalent of $\text{これ}$, often used to introduce people/places)",
          zh: "這位、這邊、這個（「これ」的禮貌說法）",
        },
        example: "こちら(こちら)が私(わたし)の妻(つま)です。",
        exampleMeaning: {
          en: "This is my wife.",
          zh: "這位是我的妻子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2218",
        expression: "家賃",
        reading: "やちん",
        definition: "家(いえ)を借(か)りる費用(ひよう)",
        meaning: {
          en: "house rent, rent money",
          zh: "房租",
        },
        example: "毎月(まいつき)家賃(やちん)を払(はら)います。",
        exampleMeaning: {
          en: "I pay the house rent every month.",
          zh: "我每個月繳房租。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2219",
        expression: "うーん",
        reading: "うーん",
        definition: "考(かんが)えている時(とき)の声(こえ)",
        meaning: {
          en: "Let me see... / Hmm... (used when thinking or considering something)",
          zh: "嗯...讓我想想...（表示思考或考慮）",
        },
        example:
          "A: どこへ行(い)きましょうか。B: うーん(うーん)、映画(えいが)はどうですか。",
        exampleMeaning: {
          en: "A: Where should we go? B: Hmm, how about a movie?",
          zh: "A: 我們去哪裡好呢？B: 嗯...看電影怎麼樣？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2220",
        expression: "ダイニングキッチン",
        reading: "ダイニングキッチン",
        definition: "食事(しょくじ)をするスペースがある台所(だいどころ)",
        meaning: {
          en: "kitchen with a dining area (often abbreviated as $\text{DK}$ in real estate)",
          zh: "飯廳兼廚房",
        },
        example:
          "広(ひろ)いダイニングキッチン(ダイニングキッチン)がある家(いえ)です。",
        exampleMeaning: {
          en: "It's a house with a spacious dining kitchen.",
          zh: "這是一間有寬敞飯廳兼廚房的房子。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2221",
        expression: "和室",
        reading: "わしつ",
        definition:
          "畳(たたみ)のある日本(にほん)の伝統的(でんとうてき)な部屋(へや)",
        meaning: {
          en: "Japanese-style room (room with tatami mats)",
          zh: "和室、日式房間",
        },
        example: "私(わたし)の家(いえ)には和室(わしつ)があります。",
        exampleMeaning: {
          en: "My house has a Japanese-style room.",
          zh: "我家有一個和室。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2222",
        expression: "押し入れ",
        reading: "おしいれ",
        definition:
          "布団(ふとん)などを収納(しゅうのう)する日本式(にほんしき)の物入(ものい)れ",
        meaning: {
          en: "Japanese-style closet (for storing futon, etc.)",
          zh: "壁櫥、日式衣櫥",
        },
        example: "布団(ふとん)を押(お)し入(い)れにしまいます。",
        exampleMeaning: {
          en: "I put the futon in the closet.",
          zh: "我把棉被收進壁櫥裡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2223",
        expression: "布団",
        reading: "ふとん",
        definition: "日本式(にほんしき)の寝具(しんぐ)",
        meaning: {
          en: "Japanese-style mattress and quilt (bedding)",
          zh: "棉被、日式寢具",
        },
        example: "布団(ふとん)を敷(し)いて寝(ね)ます。",
        exampleMeaning: {
          en: "I lay out the futon and sleep.",
          zh: "我鋪上棉被睡覺。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2224",
        expression: "アパート",
        reading: "アパート",
        definition: "共同住宅、マンションより簡易なもの",
        meaning: {
          en: "apartment (often an older, cheaper, or low-rise building in Japan)",
          zh: "公寓、出租房",
        },
        example: "駅(えき)の近(ちか)くにアパート(アパート)を借(か)りました。",
        exampleMeaning: {
          en: "I rented an apartment near the station.",
          zh: "我在車站附近租了一間公寓。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2225",
        expression: "パリ",
        reading: "パリ",
        definition: "フランスの首都",
        meaning: {
          en: "Paris",
          zh: "巴黎",
        },
        example: "一度(いちど)パリ(パリ)へ行(い)きたいです。",
        exampleMeaning: {
          en: "I want to go to Paris once.",
          zh: "我想去一次巴黎。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c23",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 23",
      zh: "大家的日本語 初級I 第二十三課",
      ja: "みんなの日本語 初級I 第二十三課",
    },
    description: {
      en: "Lesson 23 introduces verbs of motion and manipulation, and associated nouns related to machines and traffic. Grammatically, it covers the use of the **$\text{～て}$ $\text{います}$** form to describe habitual actions and the use of the particle **$\text{に}$** with $\text{触ります}$ (touch) and $\text{気をつけます}$ (pay attention).",
      zh: "第二十三課介紹了運動和操作動詞，以及與機器和交通相關的名詞。語法上，涵蓋了使用**$\text{～て}$ $\text{います}$** 形式來描述習慣性動作，以及 $\text{触ります}$（摸）和 $\text{気をつけます}$（注意）動詞與助詞 **$\text{に}$** 的用法。",
      ja: "第二十三課では、動作や操作を表す動詞と、機械や交通に関する名詞を導入します。文法的には、習慣的動作を説明するための **$\text{～て}$ $\text{います}$** の使用、および $\text{触ります}$ や $\text{気をつけます}$ と助詞 **$\text{に}$** の使用を扱います。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2301",
        expression: "聞きます",
        reading: "ききます",
        definition: "尋(たず)ねる",
        meaning: {
          en: "ask, enquire (uses $\text{に}$ particle for the person asked)",
          zh: "問、詢問",
        },
        example: "道(みち)を先生(せんせい)に聞(き)きます。",
        exampleMeaning: {
          en: "I ask the teacher for directions (a road).",
          zh: "我向老師問路。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2302",
        expression: "先生に聞きます",
        reading: "せんせいにききます",
        definition: "先生に尋(たず)ねる",
        meaning: {
          en: "ask the teacher",
          zh: "問老師",
        },
        example: "分(わ)からないことはすぐ先生(せんせい)に聞(き)きます。",
        exampleMeaning: {
          en: "I immediately ask the teacher about things I don't understand.",
          zh: "我不明白的事情會馬上問老師。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2303",
        expression: "回します",
        reading: "まわします",
        definition: "回転(かいてん)させる",
        meaning: {
          en: "turn, rotate, spin",
          zh: "轉、旋轉",
        },
        example: "つまみを右(みぎ)に回(まわ)します。",
        exampleMeaning: {
          en: "I turn the knob to the right.",
          zh: "我把旋鈕向右轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2304",
        expression: "引きます",
        reading: "ひきます",
        definition: "手前(てまえ)に力(ちから)を加(くわ)える",
        meaning: {
          en: "pull, drag",
          zh: "拉、拖",
        },
        example: "ドア(ドア)を引(ひ)いて開(あ)けます。",
        exampleMeaning: {
          en: "I pull the door open.",
          zh: "我拉開門。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2305",
        expression: "変えます",
        reading: "かえます",
        definition: "変更(へんこう)する",
        meaning: {
          en: "change, alter",
          zh: "改變、更換",
        },
        example: "予定(よてい)を変(か)えます。",
        exampleMeaning: {
          en: "I change the schedule.",
          zh: "我更改了行程。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2306",
        expression: "触ります",
        reading: "さわります",
        definition: "手(て)で触(ふ)れる",
        meaning: {
          en: "touch, feel (uses $\text{に}$ particle for the object touched)",
          zh: "摸、觸摸",
        },
        example: "絵(え)に触(さわ)らないでください。",
        exampleMeaning: {
          en: "Please don't touch the painting.",
          zh: "請不要觸摸畫作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2307",
        expression: "ドアに触ります",
        reading: "ドアにさわります",
        definition: "ドアを手で触(ふ)れる",
        meaning: {
          en: "touch a door",
          zh: "摸門",
        },
        example: "冷(つめ)たいドア(ドア)に触(さわ)りました。",
        exampleMeaning: {
          en: "I touched the cold door.",
          zh: "我摸了冰冷的門。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2308",
        expression: "出ます",
        reading: "でます",
        definition: "外(そと)に出(で)る、現(あらわ)れる",
        meaning: {
          en: "come out, appear, be produced",
          zh: "出來、出現、產出",
        },
        example: "自動販売機(じどうはんばいき)からジュースが出(で)ます。",
        exampleMeaning: {
          en: "Juice comes out of the vending machine.",
          zh: "果汁從自動販賣機出來。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2309",
        expression: "お釣りがでます",
        reading: "おつりがでます",
        definition: "おつりが外(そと)に出(で)る",
        meaning: {
          en: "change (money) comes out",
          zh: "找零出來",
        },
        example: "お金(かね)を入(い)れるとお釣(つり)りが出(で)ます。",
        exampleMeaning: {
          en: "When you put in the money, the change comes out.",
          zh: "投幣後會找零。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2310",
        expression: "動きます",
        reading: "うごきます",
        definition: "停止(ていし)せず動作(どうさ)する",
        meaning: {
          en: "move, work, operate",
          zh: "動、運作",
        },
        example: "機械(きかい)が動(うご)きません。",
        exampleMeaning: {
          en: "The machine doesn't work.",
          zh: "機器不動（不運作）了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2311",
        expression: "時計が動きます",
        reading: "とけいがうごきます",
        definition: "時計が動作(どうさ)する",
        meaning: {
          en: "a watch/clock moves, works (i.e., the hands move, it keeps time)",
          zh: "時鐘/手錶在走",
        },
        example: "この時計(とけい)はまだ動(うご)きますか。",
        exampleMeaning: {
          en: "Does this watch still work?",
          zh: "這個手錶還會動嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2312",
        expression: "歩きます",
        reading: "あるきます",
        definition: "足(あし)で進(すす)む",
        meaning: {
          en: "walk",
          zh: "走路、步行",
        },
        example: "駅(えき)まで歩(ある)いて行(い)きます。",
        exampleMeaning: {
          en: "I walk to the station.",
          zh: "我步行到車站。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2313",
        expression: "道を歩きます",
        reading: "みちをあるきます",
        definition: "道路(どうろ)を通行(つうこう)する",
        meaning: {
          en: "walk along a road/path (uses $\text{を}$ particle to indicate the path of movement)",
          zh: "沿著路走",
        },
        example:
          "毎日(まいにち)この道(みち)を歩(ある)いて学校(がっこう)へ行(い)きます。",
        exampleMeaning: {
          en: "I walk along this road to school every day.",
          zh: "我每天沿著這條路走到學校。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2314",
        expression: "渡ります",
        reading: "わたります",
        definition: "向(む)こう側(がわ)へ行(い)く",
        meaning: {
          en: "cross (a bridge, road, river, etc.)",
          zh: "渡過、穿越",
        },
        example: "信号(しんごう)を渡(わた)ります。",
        exampleMeaning: {
          en: "I cross the road (at the traffic light).",
          zh: "我過馬路（在紅綠燈處）。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2315",
        expression: "橋を渡ります",
        reading: "はしをわたります",
        definition: "橋(はし)の上(うえ)を通(とお)る",
        meaning: {
          en: "cross a bridge",
          zh: "過橋",
        },
        example: "毎日(まいにち)この橋(はし)を渡(わた)ります。",
        exampleMeaning: {
          en: "I cross this bridge every day.",
          zh: "我每天過這座橋。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2316",
        expression: "気をつけます",
        reading: "きをつけます",
        definition: "注意(ちゅうい)を払(はら)う",
        meaning: {
          en: "pay attention, take care, be careful (uses $\text{に}$ particle for the object of caution)",
          zh: "注意、小心",
        },
        example: "風邪(かぜ)に気(き)をつけます。",
        exampleMeaning: {
          en: "I take care not to catch a cold.",
          zh: "我小心不要感冒。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2317",
        expression: "車に気をつけます",
        reading: "くるまにきをつけます",
        definition: "車に注意(ちゅうい)する",
        meaning: {
          en: "pay attention to cars, beware of cars",
          zh: "注意汽車",
        },
        example: "道(みち)を渡(わた)るときは車(くるま)に気(き)をつけます。",
        exampleMeaning: {
          en: "I pay attention to cars when crossing the road.",
          zh: "過馬路時要注意汽車。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2318",
        expression: "引っ越しします",
        reading: "ひっこしします",
        definition: "住居(じゅうきょ)を変(か)える",
        meaning: {
          en: "move (house), change residence",
          zh: "搬家",
        },
        example: "来月(らいげつ)東京(とうきょう)へ引(ひ)っ越(こ)しします。",
        exampleMeaning: {
          en: "I will move to Tokyo next month.",
          zh: "我下個月要搬到東京。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2319",
        expression: "電気屋",
        reading: "でんきや",
        definition:
          "電気(でんき)製品(せいひん)を売(う)る店(みせ)、または電気工事(でんきこうじ)をする人(ひと)",
        meaning: {
          en: "electrician, electrical appliance shop",
          zh: "電器行、電器技師",
        },
        example: "電気屋(でんきや)に修理(しゅうり)を頼(たの)みました。",
        exampleMeaning: {
          en: "I asked the electrician for a repair.",
          zh: "我請電器技師修理了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2320",
        expression: "～屋",
        reading: "～や",
        definition: "～を売(う)る店(みせ)や人(ひと)",
        meaning: {
          en: "person of $sim$ shop, $sim$ shop (e.g., $\text{本屋}$ - bookstore, $\text{肉屋}$ - butcher)",
          zh: "～店、～家（表示賣某種東西的店或人）",
        },
        example: "魚屋(さかなや)で魚(さかな)を買(か)いました。",
        exampleMeaning: {
          en: "I bought fish at the fish shop.",
          zh: "我在魚店買了魚。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2321",
        expression: "サイズ",
        reading: "サイズ",
        definition: "大きさ",
        meaning: {
          en: "size",
          zh: "尺寸、大小",
        },
        example: "私(わたし)のサイズ(サイズ)はLです。",
        exampleMeaning: {
          en: "My size is L.",
          zh: "我的尺寸是 L。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2322",
        expression: "音",
        reading: "おと",
        definition: "空気(くうき)の振動(しんどう)による聞(き)こえ",
        meaning: {
          en: "sound, noise",
          zh: "聲音",
        },
        example: "大(おお)きい音(おと)がしました。",
        exampleMeaning: {
          en: "There was a loud sound.",
          zh: "發出了很大的聲音。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2323",
        expression: "機械",
        reading: "きかい",
        definition: "装置(そうち)、マシン",
        meaning: {
          en: "machine, mechanism",
          zh: "機械",
        },
        example: "新(あたら)しい機械(きかい)を使(つか)います。",
        exampleMeaning: {
          en: "I use a new machine.",
          zh: "我使用新機械。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2324",
        expression: "つまみ",
        reading: "つまみ",
        definition: "回(まわ)す取(と)っ手(て)、ノブ",
        meaning: {
          en: "knob, dial",
          zh: "旋鈕、把手",
        },
        example: "ラジオのつまみを回(まわ)します。",
        exampleMeaning: {
          en: "I turn the radio's knob.",
          zh: "我轉動收音機的旋鈕。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2325",
        expression: "故障",
        reading: "こしょう",
        definition: "機械などが壊(こわ)れること",
        meaning: {
          en: "breakdown, fault, trouble (noun)",
          zh: "故障",
        },
        example: "パソコンが故障(こしょう)しました。",
        exampleMeaning: {
          en: "My computer broke down.",
          zh: "我的電腦故障了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2326",
        expression: "故障します",
        reading: "こしょうします",
        definition: "機械などが壊れる",
        meaning: {
          en: "break down, malfunction",
          zh: "發生故障",
        },
        example: "急(きゅう)に車(くるま)が故障(こしょう)しました。",
        exampleMeaning: {
          en: "The car suddenly broke down.",
          zh: "汽車突然發生故障。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2327",
        expression: "道",
        reading: "みち",
        definition: "道路(どうろ)、通路(つうろ)",
        meaning: {
          en: "road, way, path",
          zh: "路、道路",
        },
        example: "この道(みち)は狭(せま)いです。",
        exampleMeaning: {
          en: "This road is narrow.",
          zh: "這條路很窄。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2328",
        expression: "交差点",
        reading: "こうさてん",
        definition: "道路(どうろ)が交(まじ)わる場所(ばしょ)",
        meaning: {
          en: "crossroad, intersection",
          zh: "十字路口、交叉點",
        },
        example: "交差点(こうさてん)で右(みぎ)に曲(ま)がります。",
        exampleMeaning: {
          en: "I turn right at the intersection.",
          zh: "我在十字路口右轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2329",
        expression: "信号",
        reading: "しんごう",
        definition: "交通整理(こうつうせいり)の光(ひかり)",
        meaning: {
          en: "traffic light, signal",
          zh: "交通號誌、紅綠燈",
        },
        example: "信号(しんごう)が青(あお)に変わ(か)りました。",
        exampleMeaning: {
          en: "The traffic light turned green.",
          zh: "紅綠燈變成綠燈了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2330",
        expression: "角",
        reading: "かど",
        definition: "曲(ま)がり角(かど)、コーナー",
        meaning: {
          en: "corner (of a street or object)",
          zh: "街角、轉角",
        },
        example: "次(つぎ)の角(かど)を左(ひだり)に曲(ま)がってください。",
        exampleMeaning: {
          en: "Please turn left at the next corner.",
          zh: "請在下一個街角左轉。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2331",
        expression: "橋",
        reading: "はし",
        definition: "川(かわ)などを渡(わた)るための構造物(こうぞうぶつ)",
        meaning: {
          en: "bridge",
          zh: "橋",
        },
        example: "大(おお)きい橋(はし)を見(み)ました。",
        exampleMeaning: {
          en: "I saw a big bridge.",
          zh: "我看到一座大橋。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2332",
        expression: "駐車場",
        reading: "ちゅうしゃじょう",
        definition: "車(くるま)を停(と)める場所(ばしょ)",
        meaning: {
          en: "parking lot, car park",
          zh: "停車場",
        },
        example: "ここには駐車場(ちゅうしゃじょう)がありません。",
        exampleMeaning: {
          en: "There is no parking lot here.",
          zh: "這裡沒有停車場。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2333",
        expression: "ー目",
        reading: "ーめ",
        definition: "順序(じゅんじょ)を表(あらわ)す",
        meaning: {
          en: "the $sim \text{th}$ (indicating order, e.g., $\text{二}$ $\text{つ目}$ - the second one)",
          zh: "第～（表示順序）",
        },
        example: "二(ふた)つ目(め)の角(かど)を曲(ま)がります。",
        exampleMeaning: {
          en: "I turn at the second corner.",
          zh: "我在第二個街角轉彎。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2334",
        expression: "正月",
        reading: "しょうがつ",
        definition: "新(しん)年(ねん)、一月(いちがつ)の初(はじ)め",
        meaning: {
          en: "New Year's Day, New Year holidays (the first few days of January)",
          zh: "正月、新年",
        },
        example: "正月(しょうがつ)は家族(かぞく)と過(す)ごします。",
        exampleMeaning: {
          en: "I spend the New Year with my family.",
          zh: "我跟家人一起過新年。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2335",
        expression: "ごちそうさまでした",
        reading: "ごちそうさまでした",
        definition: "食事(しょくじ)を終(お)わった後(あと)の挨拶(あいさつ)",
        meaning: {
          en: "That was delicious (said after eating or drinking to express gratitude for the meal)",
          zh: "謝謝款待（飯後說，表示對食物的感謝）",
        },
        example:
          "ごちそうさまでした(ごちそうさまでした)。とてもおいしかったです。",
        exampleMeaning: {
          en: "Thank you for the meal. It was very delicious.",
          zh: "謝謝款待。非常好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2336",
        expression: "建物",
        reading: "たてもの",
        definition: "ビル、家(いえ)など",
        meaning: {
          en: "building, structure",
          zh: "建築物",
        },
        example: "あの高(たか)い建物(たてもの)は何(なん)ですか。",
        exampleMeaning: {
          en: "What is that tall building?",
          zh: "那棟高高的建築物是什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2337",
        expression: "外国人登録証",
        reading: "がいこくじんとうろくしょう",
        definition:
          "外国人(がいこくじん)が持(も)つ身分証明書(みぶんしょうめいしょ)",
        meaning: {
          en: "alien registration card (old term for resident card for foreigners in Japan)",
          zh: "外國人登錄證（日本外國人居留卡舊稱）",
        },
        example:
          "外国人登録証(がいこくじんとうろくしょう)を見(み)せてください。",
        exampleMeaning: {
          en: "Please show me your alien registration card.",
          zh: "請出示您的外國人登錄證。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c24",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 24",
      zh: "大家的日本語 初級I 第二十四課",
      ja: "みんなの日本語 初級I 第二十四課",
    },
    description: {
      en: "Lesson 24 introduces the key benefactive verbs: **$\text{くれます}$** (someone gives/does something for the speaker/in-group) and the $\text{Te-form}$ patterns: **$\text{て}$ $\text{あげます}$** (doing for others) and **$\text{て}$ $\text{もらいます}$** (receiving a favor). Vocabulary focuses on actions of social support, guidance, and preparation.",
      zh: "第二十四課介紹了主要的恩惠動詞：**$\text{くれます}$**（別人給予/為說話者做事），以及 $\text{Te}$ 形模式：**$\text{て}$ $\text{あげます}$**（為別人做事）和 **$\text{て}$ $\text{もらいます}$**（接受恩惠）。詞彙集中於社交支持、引導和準備等動作。",
      ja: "第二十四課では、主要な授受動詞（あげます・もらいます・**$\text{くれます}$**）を導入します。特に**$\text{くれます}$**（相手が自分に何かをする）と、$\text{て}$ $\text{形}$ を使った恩恵の表現（**$\text{て}$ $\text{あげます}$**、**$\text{て}$ $\text{もらいます}$**、**$\text{て}$ $\text{くれます}$**）が中心です。語彙は、社会的サポート、案内、準備の行動に焦点を当てています。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2401",
        expression: "くれます",
        reading: "くれます",
        definition: "（人(ひと)が）私(わたし)に物(もの)を与(あた)える",
        meaning: {
          en: "give (me/us, or my/our in-group). *The recipient is always the speaker or someone close to them.*",
          zh: "給（我/我們）（收受方是說話者或其近親）",
        },
        example: "山田(やまだ)さんが私(わたし)に本(ほん)をくれました。",
        exampleMeaning: {
          en: "Mr. Yamada gave a book to me.",
          zh: "山田先生給了我一本書。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2402",
        expression: "連れて行きます",
        reading: "つれていきます",
        definition: "人(ひと)を伴(ともな)って行(い)く",
        meaning: {
          en: "take (someone) along, escort (someone) to a place",
          zh: "帶（人）去",
        },
        example: "子供(こども)を公園(こうえん)に連(つ)れて行(い)きます。",
        exampleMeaning: {
          en: "I take the child to the park.",
          zh: "我帶孩子去公園。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2403",
        expression: "連れて来ます",
        reading: "つれてきます",
        definition: "人(ひと)を伴(ともな)って来(く)る",
        meaning: {
          en: "bring (someone) along, escort (someone) here",
          zh: "帶（人）來",
        },
        example: "友達(ともだち)を家(いえ)に連(つ)れて来(き)ました。",
        exampleMeaning: {
          en: "I brought my friend to my house.",
          zh: "我帶了朋友來我家。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2404",
        expression: "送ります",
        reading: "おくります",
        definition: "（場所(ばしょ)まで）付(つ)き添(そ)って行(い)く",
        meaning: {
          en: "escort, go with, see off",
          zh: "送（人）",
        },
        example: "駅(えき)まで送(おく)ります。",
        exampleMeaning: {
          en: "I will escort you to the station.",
          zh: "我送你到車站。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2405",
        expression: "人(ひと)を送ります",
        reading: "ひとをおくります",
        definition: "人(ひと)に付(つ)き添(そ)って行(い)く",
        meaning: {
          en: "escort, go with someone, see someone off",
          zh: "送某人（去某地）",
        },
        example: "お客(きゃく)さんを玄関(げんかん)まで送(おく)りました。",
        exampleMeaning: {
          en: "I escorted the guest to the entrance.",
          zh: "我把客人送到玄關。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2406",
        expression: "紹介します",
        reading: "しょうかいします",
        definition: "人(ひと)を他(ほか)の人(ひと)に知(し)らせる",
        meaning: {
          en: "introduce (a person)",
          zh: "介紹",
        },
        example: "友達(ともだち)に彼女(かのじょ)を紹介(しょうかい)します。",
        exampleMeaning: {
          en: "I introduce my girlfriend to my friend.",
          zh: "我向朋友介紹我的女朋友。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2407",
        expression: "案内します",
        reading: "あんないします",
        definition: "場所(ばしょ)や道(みち)を示(しめ)す",
        meaning: {
          en: "show around, guide, show the way",
          zh: "帶路、導覽、介紹",
        },
        example: "東京(とうきょう)を案内(あんない)します。",
        exampleMeaning: {
          en: "I will show you around Tokyo.",
          zh: "我會帶您參觀東京。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2408",
        expression: "説明します",
        reading: "せつめいします",
        definition: "詳(くわ)しく教(おし)える",
        meaning: {
          en: "explain, clarify",
          zh: "說明、解釋",
        },
        example: "この文法(ぶんぽう)を説明(せつめい)します。",
        exampleMeaning: {
          en: "I will explain this grammar point.",
          zh: "我來解釋這個語法點。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2409",
        expression: "コーヒーをいれます",
        reading: "コーヒーをいれます",
        definition: "コーヒーを淹(い)れる",
        meaning: {
          en: "make coffee, brew coffee",
          zh: "泡咖啡、煮咖啡",
        },
        example: "毎朝(まいあさ)コーヒーをいれます。",
        exampleMeaning: {
          en: "I make coffee every morning.",
          zh: "我每天早上泡咖啡。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2410",
        expression: "おじいさん",
        reading: "おじいさん",
        definition: "祖父(そふ)、高齢(こうれい)の男性(だんせい)",
        meaning: {
          en: "grandfather, old man (polite or general term)",
          zh: "祖父、爺爺、老爺爺",
        },
        example:
          "おじいさん(おじいさん)は庭(にわ)で新聞(しんぶん)を読(よ)んでいます。",
        exampleMeaning: {
          en: "Grandfather is reading the newspaper in the garden.",
          zh: "爺爺正在花園裡看報紙。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2411",
        expression: "おじいちゃん",
        reading: "おじいちゃん",
        definition: "祖父(そふ)（親(した)しい呼(よ)び方(かた)）",
        meaning: {
          en: "grandfather, grandpa (familiar/affectionate term)",
          zh: "爺爺（親密稱呼）",
        },
        example: "おじいちゃん(おじいちゃん)が遊(あそ)んでくれました。",
        exampleMeaning: {
          en: "Grandpa played with me (did me the favor of playing with me).",
          zh: "爺爺陪我玩了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2412",
        expression: "おばあさん",
        reading: "おばあさん",
        definition: "祖母(そぼ)、高齢(こうれい)の女性(じょせい)",
        meaning: {
          en: "grandmother, old woman (polite or general term)",
          zh: "祖母、奶奶、老奶奶",
        },
        example: "おばあさん(おばあさん)が優(やさ)しく笑(わら)いました。",
        exampleMeaning: {
          en: "The old woman smiled kindly.",
          zh: "那位老奶奶親切地笑了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2413",
        expression: "おばあちゃん",
        reading: "おばあちゃん",
        definition: "祖母(そぼ)（親(した)しい呼(よ)び方(かた)）",
        meaning: {
          en: "grandmother, grandma (familiar/affectionate term)",
          zh: "奶奶、外婆（親密稱呼）",
        },
        example:
          "おばあちゃん(おばあちゃん)の作(つく)ったケーキ(ケーキ)は美味(おい)しいです。",
        exampleMeaning: {
          en: "The cake that Grandma made is delicious.",
          zh: "奶奶做的蛋糕很好吃。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2414",
        expression: "準備",
        reading: "じゅんび",
        definition: "用意(ようい)、備(そな)えること",
        meaning: {
          en: "preparation, arrangements (noun)",
          zh: "準備",
        },
        example: "旅行(りょこう)の準備(じゅんび)はできましたか。",
        exampleMeaning: {
          en: "Are the preparations for the trip complete?",
          zh: "旅行的準備工作完成了嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2415",
        expression: "準備します",
        reading: "じゅんびします",
        definition: "用意(ようい)する",
        meaning: {
          en: "prepare, make arrangements",
          zh: "準備",
        },
        example: "会議(かいぎ)の資料(しりょう)を準備(じゅんび)します。",
        exampleMeaning: {
          en: "I prepare the materials for the meeting.",
          zh: "我準備會議資料。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2416",
        expression: "意味",
        reading: "いみ",
        definition: "言葉(ことば)などの内容(ないよう)",
        meaning: {
          en: "meaning, significance",
          zh: "意思、含義",
        },
        example: "この言葉(ことば)の意味(いみ)は何(なん)ですか。",
        exampleMeaning: {
          en: "What is the meaning of this word?",
          zh: "這個詞是什麼意思？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2417",
        expression: "お菓子",
        reading: "おかし",
        definition: "甘(あま)い食(た)べ物(もの)、スナック(スナック)",
        meaning: {
          en: "sweets, snacks, confectionery",
          zh: "點心、零食",
        },
        example: "子供(こども)にお菓子(おかし)をあげます。",
        exampleMeaning: {
          en: "I give sweets to the child.",
          zh: "我給孩子點心。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2418",
        expression: "全部",
        reading: "ぜんぶ",
        definition: "すべて、全(まった)く",
        meaning: {
          en: "all, entirely, whole",
          zh: "全部、所有",
        },
        example: "宿題(しゅくだい)を全部(ぜんぶ)終(お)わらせました。",
        exampleMeaning: {
          en: "I finished all the homework.",
          zh: "我把所有的作業都完成了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2419",
        expression: "自分(じぶん)で",
        reading: "じぶんで",
        definition: "他(ほか)の人(ひと)の手(て)を借(か)りずに",
        meaning: {
          en: "by oneself, personally, on one's own",
          zh: "自己、親自",
        },
        example: "ご飯(はん)を自分(じぶん)で食(た)べます。",
        exampleMeaning: {
          en: "I eat the meal by myself.",
          zh: "我自己吃飯。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2420",
        expression: "ほかに",
        reading: "ほかに",
        definition: "別(べつ)に、その他(そのた)に",
        meaning: {
          en: "besides, in addition, else",
          zh: "此外、另外、還有別的",
        },
        example: "ほかに(ほかに)質問(しつもん)はありませんか。",
        exampleMeaning: {
          en: "Do you have any other questions (besides these)?",
          zh: "還有其他問題嗎？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2421",
        expression: "ワゴン車",
        reading: "ワゴンしゃ",
        definition: "ステーションワゴン(ステーションワゴン)",
        meaning: {
          en: "station wagon, minivan, van (multi-purpose vehicle)",
          zh: "旅行車、廂型車",
        },
        example:
          "家族(かぞく)旅行(りょこう)のためにワゴン車(ワゴンしゃ)を買(か)いました。",
        exampleMeaning: {
          en: "I bought a station wagon for family trips.",
          zh: "我買了一輛旅行車供家庭旅行使用。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2422",
        expression: "弁当",
        reading: "べんとう",
        definition: "持(も)ち運(はこ)びできる食(た)べ物(もの)",
        meaning: {
          en: "box lunch, packed meal (bento)",
          zh: "便當",
        },
        example: "毎日(まいにち)自分(じぶん)で弁当(べんとう)を作(つく)ります。",
        exampleMeaning: {
          en: "I make a box lunch by myself every day.",
          zh: "我每天自己做便當。",
        },
      },
    ],
  },
  {
    uuid: "p7q8r9s0-1t2u-3v4w-5x6y-7z8a9b0c25",
    title: {
      en: "Minna no Nihongo — Elementary I, Lesson 25",
      zh: "大家的日本語 初級I 第二十五課",
      ja: "みんなの日本語 初級I 第二十五課",
    },
    description: {
      en: "Lesson 25 is the final lesson of Minna no Nihongo I, focusing on the essential **$\text{た}$ $\text{ら}$ $\text{conditional}$ $\text{form}$** (if/when) and the structure $\text{～ば}$ $\text{いい}$ (it would be good if $sim$). The vocabulary includes verbs of consideration and arrival, nouns related to future plans, and important valediction phrases.",
      zh: "第二十五課是《大家的日本語 初級I》的最後一課，重點介紹了必不可少的**$\text{た}$ $\text{ら}$ $\text{條件}$ $\text{形式}$**（如果/當 $sim$ 時）和結構 $\text{～ば}$ $\text{いい}$（如果 $sim$ 就好了）。詞彙包括思考和抵達的動詞、與未來計劃相關的名詞，以及重要的道別用語。",
      ja: "第二十五課は『みんなの日本語 初級I』の最終課であり、不可欠な**$\text{た}$ $\text{ら}$ $\text{条件形}$**（もし～なら/～たら）と、$\text{～ば}$ $\text{いい}$（～すればよい）の構文に焦点を当てています。語彙には、考慮や到着の動詞、将来の計画に関する名詞、そして重要な別れの挨拶が含まれています。",
    },
    words: [
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2501",
        expression: "考えます",
        reading: "かんがえます",
        definition: "思案(しあん)する、判断(はんだん)する",
        meaning: {
          en: "think, consider, decide upon",
          zh: "思考、考慮",
        },
        example: "もう少(すこ)し考(かんが)えます。",
        exampleMeaning: {
          en: "I will think about it a little more.",
          zh: "我會再多考慮一下。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2502",
        expression: "着きます",
        reading: "つきます",
        definition: "目的地(もくてきち)に到達(とうたつ)する",
        meaning: {
          en: "arrive, reach (uses $\text{に}$ particle for the destination)",
          zh: "到達、抵達",
        },
        example: "会社(かいしゃ)に着(つ)きました。",
        exampleMeaning: {
          en: "I arrived at the office.",
          zh: "我到達公司了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2503",
        expression: "駅に着きます",
        reading: "えきにつきます",
        definition: "駅(えき)に到達(とうたつ)する",
        meaning: {
          en: "arrive at the station",
          zh: "抵達車站",
        },
        example: "電車(でんしゃ)は１０時(じ)に駅(えき)に着(つ)きます。",
        exampleMeaning: {
          en: "The train will arrive at the station at 10 o'clock.",
          zh: "火車將於十點抵達車站。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2504",
        expression: "留学します",
        reading: "りゅうがくします",
        definition: "外国(がいこく)で学(まな)ぶ",
        meaning: {
          en: "study abroad",
          zh: "留學",
        },
        example: "来年(らいねん)アメリカ(アメリカ)へ留学(りゅうがく)します。",
        exampleMeaning: {
          en: "I will study abroad in the U.S. next year.",
          zh: "我明年要去美國留學。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2505",
        expression: "年を取ります",
        reading: "としをとります",
        definition: "年齢(ねんれい)を重(かさ)ねる",
        meaning: {
          en: "grow old, get older",
          zh: "年紀變大、上年紀",
        },
        example:
          "年(とし)を取(と)ると、時間(じかん)が速(はや)く感(かん)じます。",
        exampleMeaning: {
          en: "When you get older, time feels fast.",
          zh: "人老了之後，會覺得時間過得很快。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2506",
        expression: "田舎",
        reading: "いなか",
        definition: "都会(とかい)から離(はな)れた場所(ばしょ)、故郷(ふるさと)",
        meaning: {
          en: "countryside, rural area, hometown (often used to refer to a place far from the city)",
          zh: "鄉下、老家",
        },
        example: "私(わたし)の田舎(いなか)は静(しず)かです。",
        exampleMeaning: {
          en: "My hometown/countryside is quiet.",
          zh: "我的老家很安靜。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2507",
        expression: "大使館",
        reading: "たいしかん",
        definition:
          "外国(がいこく)に設(もう)けられた外交(がいこう)機関(きかん)",
        meaning: {
          en: "embassy",
          zh: "大使館",
        },
        example:
          "ビザ(ビザ)を取(と)るために大使館(たいしかん)へ行(い)きました。",
        exampleMeaning: {
          en: "I went to the embassy to get a visa.",
          zh: "我去了大使館辦簽證。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2508",
        expression: "グループ",
        reading: "グループ",
        definition: "集団(しゅうだん)、仲間(なかま)",
        meaning: {
          en: "group",
          zh: "群組、團體",
        },
        example: "３人(にん)のグループ(グループ)で仕事(しごと)をします。",
        exampleMeaning: {
          en: "We work in a group of three people.",
          zh: "我們以三人一組的方式工作。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2509",
        expression: "チャンス",
        reading: "チャンス",
        definition: "機会(きかい)、好機(こうき)",
        meaning: {
          en: "chance, opportunity",
          zh: "機會",
        },
        example: "いいチャンス(チャンス)を逃(のが)しました。",
        exampleMeaning: {
          en: "I missed a good chance.",
          zh: "我錯過了一個好機會。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2510",
        expression: "億",
        reading: "おく",
        definition: "数(かず)の単位(たんい)（１００，０００，０００）",
        meaning: {
          en: "hundred million ($\text{100,000,000}$)",
          zh: "億",
        },
        example:
          "日本(にほん)の人口(じんこう)は約(やく)一億(いちおく)二千万(にせんまん)人(にん)です。",
        exampleMeaning: {
          en: "The population of Japan is about 120 million (one hundred million and twenty million) people.",
          zh: "日本的人口約為一億兩千萬人。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2511",
        expression: "もし～たら",
        reading: "もし～たら",
        definition:
          "仮定(かてい)を表(あらわ)す（$\text{～ば}$ $\text{の丁寧語}$）",
        meaning: {
          en: "if $sim$, when $sim$ (introduces a condition or contingency; **$\text{もし}$** emphasizes the 'if' part)",
          zh: "如果～、要是～（用於假設情況）",
        },
        example:
          "もし(もし)１億円(おくえん)当(あ)たったら(たら)、何(なに)をしますか。",
        exampleMeaning: {
          en: "If you win 100 million yen, what will you do?",
          zh: "如果你中了日幣一億元，你會做什麼？",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2512",
        expression: "いくら～ても",
        reading: "いくら～ても",
        definition: "どれほど～でも",
        meaning: {
          en: "however $sim$, no matter how $sim$, even if $sim$",
          zh: "無論多麼～、即使～",
        },
        example: "いくら(いくら)難(むずか)しくても(ても)、諦(あきら)めません。",
        exampleMeaning: {
          en: "However difficult it is, I won't give up.",
          zh: "無論多麼困難，我都不會放棄。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2513",
        expression: "転勤",
        reading: "てんきん",
        definition: "勤務地(きんむち)の移動(いどう)",
        meaning: {
          en: "transfer (noun, change of office/work location)",
          zh: "調職",
        },
        example: "彼(かれ)は大阪(おおさか)に転勤(てんきん)になりました。",
        exampleMeaning: {
          en: "He was transferred to Osaka.",
          zh: "他被調職到大阪了。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2514",
        expression: "転勤します",
        reading: "てんきんします",
        definition: "勤務地(きんむち)を変(か)える",
        meaning: {
          en: "be transferred to another office/location",
          zh: "調職",
        },
        example: "夫(おっと)が来月(らいげつ)転勤(てんきん)します。",
        exampleMeaning: {
          en: "My husband will be transferred next month.",
          zh: "我的丈夫下個月要調職。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2515",
        expression: "こと",
        reading: "こと",
        definition: "事柄(ことがら)、事実(じじつ)",
        meaning: {
          en: "thing, matter, abstract concept (often used to nominalize a clause)",
          zh: "事情、事情（用於將子句名詞化）",
        },
        example: "日本(にほん)へ来(き)たこと(こと)があります。",
        exampleMeaning: {
          en: "I have been to Japan (have the experience of coming to Japan).",
          zh: "我曾經來過日本。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2516",
        expression: "一杯飲みましょう",
        reading: "いっぱいのみましょう",
        definition:
          "一緒(いっしょ)にお酒(さけ)を飲(の)みましょう（誘(さそ)い）",
        meaning: {
          en: "Let's have a drink together, Let's go for a quick drink (a friendly invitation)",
          zh: "一起喝一杯吧（邀請）",
        },
        example:
          "仕事(しごと)が終(お)わったら、一杯(いっぱい)飲(の)みましょう。",
        exampleMeaning: {
          en: "When work is finished, let's have a drink together.",
          zh: "工作結束後，我們一起去喝一杯吧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2517",
        expression: "いろいろお世話になりました",
        reading: "いろいろおせわになりました",
        definition:
          "様々(さまざま)な助(たす)けに感謝(かんしゃ)する（別(わか)れの挨拶(あいさつ)）",
        meaning: {
          en: "Thank you for everything you have done for me (a phrase used when leaving or saying goodbye to someone who has helped you)",
          zh: "感謝您一直以來的照顧（道別時用）",
        },
        example:
          "長(なが)い間(あいだ)、色々(いろいろ)お世話(おせわ)になりました(なりました)。",
        exampleMeaning: {
          en: "Thank you very much for your help over a long period.",
          zh: "長久以來，感謝您的諸多照顧。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2518",
        expression: "頑張ります",
        reading: "がんばります",
        definition: "最善(さいぜん)を尽(つ)くす",
        meaning: {
          en: "do one's best, work hard, persist",
          zh: "努力、加油、盡力而為",
        },
        example: "試験(しけん)のために頑張(がんば)ります。",
        exampleMeaning: {
          en: "I will do my best for the exam.",
          zh: "我會為考試而努力。",
        },
      },
      {
        uuid: "70a1b2c3-4d5e-6f70-8a9b-0c1d2e3f2519",
        expression: "どうぞお元気で",
        reading: "どうぞおげんきで",
        definition:
          "お別(わか)れの際(さい)の挨拶(あいさつ)（長(なが)い別(わか)れの時(とき)）",
        meaning: {
          en: "Best of luck, Take care, Please stay well (said when expecting a long separation or permanent departure)",
          zh: "請保重身體、祝您健康（長期分離或永久告別時使用）",
        },
        example:
          "日本(にほん)へ帰(かえ)ります。どうぞ(どうぞ)お元気(げんき)で(で)。",
        exampleMeaning: {
          en: "I am returning to Japan. Please take care.",
          zh: "我要回日本了。請多保重。",
        },
      },
    ],
  },
];

export type Deck = {
  uuid: string;
  title: {
    en: string;
    zh: string;
    ja: string;
  };
  description: {
    en: string;
    zh: string;
    ja: string;
  };
  words: Word[];
};

export type Word = {
  uuid: string;
  expression: string;
  reading: string;
  definition: string;
  meaning: {
    en: string;
    zh: string;
  };
  example: string;
  exampleMeaning: {
    en: string;
    zh: string;
  };
};
