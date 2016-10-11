if ("undefined" != typeof responsiveVoice);
else var ResponsiveVoice = function () {
    var self = this;
    self.version = "1.4.5.2", self.responsivevoices = [{
      name: "UK English Female",
      flag: "gb",
      gender: "f",
      voiceIDs: [3, 5, 1, 6, 7, 171, 201, 8]
    }, {
      name: "UK English Male",
      flag: "gb",
      gender: "m",
      voiceIDs: [0, 4, 2, 75, 202, 159, 6, 7]
    }, {
      name: "US English Female",
      flag: "us",
      gender: "f",
      voiceIDs: [39, 40, 41, 42, 43, 173, 205, 204, 44]
    }, {
      name: "Chinese Female",
      flag: "cn",
      gender: "f",
      voiceIDs: [58, 59, 60, 155, 191, 231, 61]
    }, {
      name: "Italian Female",
      flag: "it",
      gender: "f",
      voiceIDs: [33, 34, 35, 36, 37, 79, 181, 216, 38]
    }, {
      name: "Japanese Female",
      flag: "jp",
      gender: "f",
      voiceIDs: [50, 51, 52, 153, 182, 217, 53]
    }, {
      name: "Korean Female",
      flag: "kr",
      gender: "f",
      voiceIDs: [54, 55, 56, 156, 183, 218, 57]
    }], self.voicecollection = [{
      name: "Google UK English Male"
    }, {
      name: "Agnes"
    }, {
      name: "Daniel Compact"
    }, {
      name: "Google UK English Female"
    }, {
      name: "en-GB",
      rate: .25,
      pitch: 1
    }, {
      name: "en-AU",
      rate: .25,
      pitch: 1
    }, {
      name: "inglés Reino Unido"
    }, {
      name: "English United Kingdom"
    }, {
      name: "Fallback en-GB Female",
      lang: "en-GB",
      fallbackvoice: !0
    }, {
      name: "Eszter Compact"
    }, {
      name: "hu-HU",
      rate: .4
    }, {
      name: "Fallback Hungarian",
      lang: "hu",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Serbian",
      lang: "sr",
      fallbackvoice: !0
    }, {
      name: "Fallback Croatian",
      lang: "hr",
      fallbackvoice: !0
    }, {
      name: "Fallback Bosnian",
      lang: "bs",
      fallbackvoice: !0
    }, {
      name: "Fallback Spanish",
      lang: "es",
      fallbackvoice: !0
    }, {
      name: "Spanish Spain"
    }, {
      name: "español España"
    }, {
      name: "Diego Compact",
      rate: .3
    }, {
      name: "Google Español"
    }, {
      name: "es-ES",
      rate: .2
    }, {
      name: "Google Français"
    }, {
      name: "French France"
    }, {
      name: "francés Francia"
    }, {
      name: "Virginie Compact",
      rate: .5
    }, {
      name: "fr-FR",
      rate: .25
    }, {
      name: "Fallback French",
      lang: "fr",
      fallbackvoice: !0
    }, {
      name: "Google Deutsch"
    }, {
      name: "German Germany"
    }, {
      name: "alemán Alemania"
    }, {
      name: "Yannick Compact",
      rate: .5
    }, {
      name: "de-DE",
      rate: .25
    }, {
      name: "Fallback Deutsch",
      lang: "de",
      fallbackvoice: !0
    }, {
      name: "Google Italiano"
    }, {
      name: "Italian Italy"
    }, {
      name: "italiano Italia"
    }, {
      name: "Paolo Compact",
      rate: .5
    }, {
      name: "it-IT",
      rate: .25
    }, {
      name: "Fallback Italian",
      lang: "it",
      fallbackvoice: !0
    }, {
      name: "Google US English",
      timerSpeed: 1
    }, {
      name: "English United States"
    }, {
      name: "inglés Estados Unidos"
    }, {
      name: "Vicki"
    }, {
      name: "en-US",
      rate: .2,
      pitch: 1,
      timerSpeed: 1.3
    }, {
      name: "Fallback English",
      lang: "en-US",
      fallbackvoice: !0,
      timerSpeed: 0
    }, {
      name: "Fallback Dutch",
      lang: "nl",
      fallbackvoice: !0,
      timerSpeed: 0
    }, {
      name: "Fallback Romanian",
      lang: "ro",
      fallbackvoice: !0
    }, {
      name: "Milena Compact"
    }, {
      name: "ru-RU",
      rate: .25
    }, {
      name: "Fallback Russian",
      lang: "ru",
      fallbackvoice: !0
    }, {
      name: "Google 日本人",
      timerSpeed: 1
    }, {
      name: "Kyoko Compact"
    }, {
      name: "ja-JP",
      rate: .25
    }, {
      name: "Fallback Japanese",
      lang: "ja",
      fallbackvoice: !0
    }, {
      name: "Google 한국의",
      timerSpeed: 1
    }, {
      name: "Narae Compact"
    }, {
      name: "ko-KR",
      rate: .25
    }, {
      name: "Fallback Korean",
      lang: "ko",
      fallbackvoice: !0
    }, {
      name: "Google 中国的",
      timerSpeed: 1
    }, {
      name: "Ting-Ting Compact"
    }, {
      name: "zh-CN",
      rate: .25
    }, {
      name: "Fallback Chinese",
      lang: "zh-CN",
      fallbackvoice: !0
    }, {
      name: "Alexandros Compact"
    }, {
      name: "el-GR",
      rate: .25
    }, {
      name: "Fallback Greek",
      lang: "el",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Swedish",
      lang: "sv",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "hi-IN",
      rate: .25
    }, {
      name: "Fallback Hindi",
      lang: "hi",
      fallbackvoice: !0
    }, {
      name: "Fallback Catalan",
      lang: "ca",
      fallbackvoice: !0
    }, {
      name: "Aylin Compact"
    }, {
      name: "tr-TR",
      rate: .25
    }, {
      name: "Fallback Turkish",
      lang: "tr",
      fallbackvoice: !0
    }, {
      name: "Stine Compact"
    }, {
      name: "no-NO",
      rate: .25
    }, {
      name: "Fallback Norwegian",
      lang: "no",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Daniel"
    }, {
      name: "Monica"
    }, {
      name: "Amelie"
    }, {
      name: "Anna"
    }, {
      name: "Alice"
    }, {
      name: "Melina"
    }, {
      name: "Mariska"
    }, {
      name: "Yelda"
    }, {
      name: "Milena"
    }, {
      name: "Xander"
    }, {
      name: "Alva"
    }, {
      name: "Lee Compact"
    }, {
      name: "Karen"
    }, {
      name: "Fallback Australian",
      lang: "en-AU",
      fallbackvoice: !0
    }, {
      name: "Mikko Compact"
    }, {
      name: "Satu"
    }, {
      name: "fi-FI",
      rate: .25
    }, {
      name: "Fallback Finnish",
      lang: "fi",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Afrikans",
      lang: "af",
      fallbackvoice: !0
    }, {
      name: "Fallback Albanian",
      lang: "sq",
      fallbackvoice: !0
    }, {
      name: "Maged Compact"
    }, {
      name: "Tarik"
    }, {
      name: "ar-SA",
      rate: .25
    }, {
      name: "Fallback Arabic",
      lang: "ar",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Armenian",
      lang: "hy",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Zuzana Compact"
    }, {
      name: "Zuzana"
    }, {
      name: "cs-CZ",
      rate: .25
    }, {
      name: "Fallback Czech",
      lang: "cs",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Ida Compact"
    }, {
      name: "Sara"
    }, {
      name: "da-DK",
      rate: .25
    }, {
      name: "Fallback Danish",
      lang: "da",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Esperanto",
      lang: "eo",
      fallbackvoice: !0
    }, {
      name: "Fallback Hatian Creole",
      lang: "ht",
      fallbackvoice: !0
    }, {
      name: "Fallback Icelandic",
      lang: "is",
      fallbackvoice: !0
    }, {
      name: "Damayanti"
    }, {
      name: "id-ID",
      rate: .25
    }, {
      name: "Fallback Indonesian",
      lang: "id",
      fallbackvoice: !0
    }, {
      name: "Fallback Latin",
      lang: "la",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Latvian",
      lang: "lv",
      fallbackvoice: !0
    }, {
      name: "Fallback Macedonian",
      lang: "mk",
      fallbackvoice: !0
    }, {
      name: "Fallback Moldavian",
      lang: "mo",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Montenegrin",
      lang: "sr-ME",
      fallbackvoice: !0
    }, {
      name: "Agata Compact"
    }, {
      name: "Zosia"
    }, {
      name: "pl-PL",
      rate: .25
    }, {
      name: "Fallback Polish",
      lang: "pl",
      fallbackvoice: !0
    }, {
      name: "Raquel Compact"
    }, {
      name: "Luciana"
    }, {
      name: "pt-BR",
      rate: .25
    }, {
      name: "Fallback Brazilian Portugese",
      lang: "pt-BR",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Joana Compact"
    }, {
      name: "Joana"
    }, {
      name: "pt-PT",
      rate: .25
    }, {
      name: "Fallback Portuguese",
      lang: "pt-PT",
      fallbackvoice: !0
    }, {
      name: "Fallback Serbo-Croation",
      lang: "sh",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Laura Compact"
    }, {
      name: "Laura"
    }, {
      name: "sk-SK",
      rate: .25
    }, {
      name: "Fallback Slovak",
      lang: "sk",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Javier Compact"
    }, {
      name: "Paulina"
    }, {
      name: "es-MX",
      rate: .25
    }, {
      name: "Fallback Spanish (Latin American)",
      lang: "es-419",
      fallbackvoice: !0,
      service: "g2"
    }, {
      name: "Fallback Swahili",
      lang: "sw",
      fallbackvoice: !0
    }, {
      name: "Fallback Tamil",
      lang: "ta",
      fallbackvoice: !0
    }, {
      name: "Narisa Compact"
    }, {
      name: "Kanya"
    }, {
      name: "th-TH",
      rate: .25
    }, {
      name: "Fallback Thai",
      lang: "th",
      fallbackvoice: !0
    }, {
      name: "Fallback Vietnamese",
      lang: "vi",
      fallbackvoice: !0
    }, {
      name: "Fallback Welsh",
      lang: "cy",
      fallbackvoice: !0
    }, {
      name: "Oskar Compact"
    }, {
      name: "sv-SE",
      rate: .25
    }, {
      name: "Simona Compact"
    }, {
      name: "Ioana"
    }, {
      name: "ro-RO",
      rate: .25
    }, {
      name: "Kyoko"
    }, {
      name: "Lekha"
    }, {
      name: "Ting-Ting"
    }, {
      name: "Yuna"
    }, {
      name: "Xander Compact"
    }, {
      name: "nl-NL",
      rate: .25
    }, {
      name: "Fallback UK English Male",
      lang: "en-GB",
      fallbackvoice: !0,
      service: "g1",
      voicename: "rjs"
    }, {
      name: "Finnish Male",
      lang: "fi",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Czech Male",
      lang: "cs",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Danish Male",
      lang: "da",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Greek Male",
      lang: "el",
      fallbackvoice: !0,
      service: "g1",
      voicename: "",
      rate: .25
    }, {
      name: "Hungarian Male",
      lang: "hu",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Latin Male",
      lang: "la",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Norwegian Male",
      lang: "no",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Slovak Male",
      lang: "sk",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Swedish Male",
      lang: "sv",
      fallbackvoice: !0,
      service: "g1",
      voicename: ""
    }, {
      name: "Fallback US English Male",
      lang: "en",
      fallbackvoice: !0,
      service: "tts-api",
      voicename: ""
    }, {
      name: "German Germany",
      lang: "de_DE"
    }, {
      name: "English United Kingdom",
      lang: "en_GB"
    }, {
      name: "English India",
      lang: "en_IN"
    }, {
      name: "English United States",
      lang: "en_US"
    }, {
      name: "Spanish Spain",
      lang: "es_ES"
    }, {
      name: "Spanish Mexico",
      lang: "es_MX"
    }, {
      name: "Spanish United States",
      lang: "es_US"
    }, {
      name: "French Belgium",
      lang: "fr_BE"
    }, {
      name: "French France",
      lang: "fr_FR"
    }, {
      name: "Hindi India",
      lang: "hi_IN"
    }, {
      name: "Indonesian Indonesia",
      lang: "in_ID"
    }, {
      name: "Italian Italy",
      lang: "it_IT"
    }, {
      name: "Japanese Japan",
      lang: "ja_JP"
    }, {
      name: "Korean South Korea",
      lang: "ko_KR"
    }, {
      name: "Dutch Netherlands",
      lang: "nl_NL"
    }, {
      name: "Polish Poland",
      lang: "pl_PL"
    }, {
      name: "Portuguese Brazil",
      lang: "pt_BR"
    }, {
      name: "Portuguese Portugal",
      lang: "pt_PT"
    }, {
      name: "Russian Russia",
      lang: "ru_RU"
    }, {
      name: "Thai Thailand",
      lang: "th_TH"
    }, {
      name: "Turkish Turkey",
      lang: "tr_TR"
    }, {
      name: "Chinese China",
      lang: "zh_CN_#Hans"
    }, {
      name: "Chinese Hong Kong",
      lang: "zh_HK_#Hans"
    }, {
      name: "Chinese Hong Kong",
      lang: "zh_HK_#Hant"
    }, {
      name: "Chinese Taiwan",
      lang: "zh_TW_#Hant"
    }, {
      name: "Alex"
    }, {
      name: "Maged",
      lang: "ar-SA"
    }, {
      name: "Zuzana",
      lang: "cs-CZ"
    }, {
      name: "Sara",
      lang: "da-DK"
    }, {
      name: "Anna",
      lang: "de-DE"
    }, {
      name: "Melina",
      lang: "el-GR"
    }, {
      name: "Karen",
      lang: "en-AU"
    }, {
      name: "Daniel",
      lang: "en-GB"
    }, {
      name: "Moira",
      lang: "en-IE"
    }, {
      name: "Samantha (Enhanced)",
      lang: "en-US"
    }, {
      name: "Samantha",
      lang: "en-US"
    }, {
      name: "Tessa",
      lang: "en-ZA"
    }, {
      name: "Monica",
      lang: "es-ES"
    }, {
      name: "Paulina",
      lang: "es-MX"
    }, {
      name: "Satu",
      lang: "fi-FI"
    }, {
      name: "Amelie",
      lang: "fr-CA"
    }, {
      name: "Thomas",
      lang: "fr-FR"
    }, {
      name: "Carmit",
      lang: "he-IL"
    }, {
      name: "Lekha",
      lang: "hi-IN"
    }, {
      name: "Mariska",
      lang: "hu-HU"
    }, {
      name: "Damayanti",
      lang: "id-ID"
    }, {
      name: "Alice",
      lang: "it-IT"
    }, {
      name: "Kyoko",
      lang: "ja-JP"
    }, {
      name: "Yuna",
      lang: "ko-KR"
    }, {
      name: "Ellen",
      lang: "nl-BE"
    }, {
      name: "Xander",
      lang: "nl-NL"
    }, {
      name: "Nora",
      lang: "no-NO"
    }, {
      name: "Zosia",
      lang: "pl-PL"
    }, {
      name: "Luciana",
      lang: "pt-BR"
    }, {
      name: "Joana",
      lang: "pt-PT"
    }, {
      name: "Ioana",
      lang: "ro-RO"
    }, {
      name: "Milena",
      lang: "ru-RU"
    }, {
      name: "Laura",
      lang: "sk-SK"
    }, {
      name: "Alva",
      lang: "sv-SE"
    }, {
      name: "Kanya",
      lang: "th-TH"
    }, {
      name: "Yelda",
      lang: "tr-TR"
    }, {
      name: "Ting-Ting",
      lang: "zh-CN"
    }, {
      name: "Sin-Ji",
      lang: "zh-HK"
    }, {
      name: "Mei-Jia",
      lang: "zh-TW"
    }], self.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), self.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()), self.is_chrome = navigator.userAgent.indexOf("Chrome") > -1, self.is_safari = navigator.userAgent.indexOf("Safari") > -1, self.is_chrome && self.is_safari && (self.is_safari = !1), self.is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0, self.is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1, self.iOS_initialized = !1, self.iOS9_initialized = !1, self.cache_ios_voices = [{
      name: "he-IL",
      voiceURI: "he-IL",
      lang: "he-IL"
    }, {
      name: "th-TH",
      voiceURI: "th-TH",
      lang: "th-TH"
    }, {
      name: "pt-BR",
      voiceURI: "pt-BR",
      lang: "pt-BR"
    }, {
      name: "sk-SK",
      voiceURI: "sk-SK",
      lang: "sk-SK"
    }, {
      name: "fr-CA",
      voiceURI: "fr-CA",
      lang: "fr-CA"
    }, {
      name: "ro-RO",
      voiceURI: "ro-RO",
      lang: "ro-RO"
    }, {
      name: "no-NO",
      voiceURI: "no-NO",
      lang: "no-NO"
    }, {
      name: "fi-FI",
      voiceURI: "fi-FI",
      lang: "fi-FI"
    }, {
      name: "pl-PL",
      voiceURI: "pl-PL",
      lang: "pl-PL"
    }, {
      name: "de-DE",
      voiceURI: "de-DE",
      lang: "de-DE"
    }, {
      name: "nl-NL",
      voiceURI: "nl-NL",
      lang: "nl-NL"
    }, {
      name: "id-ID",
      voiceURI: "id-ID",
      lang: "id-ID"
    }, {
      name: "tr-TR",
      voiceURI: "tr-TR",
      lang: "tr-TR"
    }, {
      name: "it-IT",
      voiceURI: "it-IT",
      lang: "it-IT"
    }, {
      name: "pt-PT",
      voiceURI: "pt-PT",
      lang: "pt-PT"
    }, {
      name: "fr-FR",
      voiceURI: "fr-FR",
      lang: "fr-FR"
    }, {
      name: "ru-RU",
      voiceURI: "ru-RU",
      lang: "ru-RU"
    }, {
      name: "es-MX",
      voiceURI: "es-MX",
      lang: "es-MX"
    }, {
      name: "zh-HK",
      voiceURI: "zh-HK",
      lang: "zh-HK"
    }, {
      name: "sv-SE",
      voiceURI: "sv-SE",
      lang: "sv-SE"
    }, {
      name: "hu-HU",
      voiceURI: "hu-HU",
      lang: "hu-HU"
    }, {
      name: "zh-TW",
      voiceURI: "zh-TW",
      lang: "zh-TW"
    }, {
      name: "es-ES",
      voiceURI: "es-ES",
      lang: "es-ES"
    }, {
      name: "zh-CN",
      voiceURI: "zh-CN",
      lang: "zh-CN"
    }, {
      name: "nl-BE",
      voiceURI: "nl-BE",
      lang: "nl-BE"
    }, {
      name: "en-GB",
      voiceURI: "en-GB",
      lang: "en-GB"
    }, {
      name: "ar-SA",
      voiceURI: "ar-SA",
      lang: "ar-SA"
    }, {
      name: "ko-KR",
      voiceURI: "ko-KR",
      lang: "ko-KR"
    }, {
      name: "cs-CZ",
      voiceURI: "cs-CZ",
      lang: "cs-CZ"
    }, {
      name: "en-ZA",
      voiceURI: "en-ZA",
      lang: "en-ZA"
    }, {
      name: "en-AU",
      voiceURI: "en-AU",
      lang: "en-AU"
    }, {
      name: "da-DK",
      voiceURI: "da-DK",
      lang: "da-DK"
    }, {
      name: "en-US",
      voiceURI: "en-US",
      lang: "en-US"
    }, {
      name: "en-IE",
      voiceURI: "en-IE",
      lang: "en-IE"
    }, {
      name: "hi-IN",
      voiceURI: "hi-IN",
      lang: "hi-IN"
    }, {
      name: "el-GR",
      voiceURI: "el-GR",
      lang: "el-GR"
    }, {
      name: "ja-JP",
      voiceURI: "ja-JP",
      lang: "ja-JP"
    }], self.cache_ios9_voices = [{
      name: "Maged",
      voiceURI: "com.apple.ttsbundle.Maged-compact",
      lang: "ar-SA",
      localService: !0,
      "default": !0
    }, {
      name: "Zuzana",
      voiceURI: "com.apple.ttsbundle.Zuzana-compact",
      lang: "cs-CZ",
      localService: !0,
      "default": !0
    }, {
      name: "Sara",
      voiceURI: "com.apple.ttsbundle.Sara-compact",
      lang: "da-DK",
      localService: !0,
      "default": !0
    }, {
      name: "Anna",
      voiceURI: "com.apple.ttsbundle.Anna-compact",
      lang: "de-DE",
      localService: !0,
      "default": !0
    }, {
      name: "Melina",
      voiceURI: "com.apple.ttsbundle.Melina-compact",
      lang: "el-GR",
      localService: !0,
      "default": !0
    }, {
      name: "Karen",
      voiceURI: "com.apple.ttsbundle.Karen-compact",
      lang: "en-AU",
      localService: !0,
      "default": !0
    }, {
      name: "Daniel",
      voiceURI: "com.apple.ttsbundle.Daniel-compact",
      lang: "en-GB",
      localService: !0,
      "default": !0
    }, {
      name: "Moira",
      voiceURI: "com.apple.ttsbundle.Moira-compact",
      lang: "en-IE",
      localService: !0,
      "default": !0
    }, {
      name: "Samantha (Enhanced)",
      voiceURI: "com.apple.ttsbundle.Samantha-premium",
      lang: "en-US",
      localService: !0,
      "default": !0
    }, {
      name: "Samantha",
      voiceURI: "com.apple.ttsbundle.Samantha-compact",
      lang: "en-US",
      localService: !0,
      "default": !0
    }, {
      name: "Tessa",
      voiceURI: "com.apple.ttsbundle.Tessa-compact",
      lang: "en-ZA",
      localService: !0,
      "default": !0
    }, {
      name: "Monica",
      voiceURI: "com.apple.ttsbundle.Monica-compact",
      lang: "es-ES",
      localService: !0,
      "default": !0
    }, {
      name: "Paulina",
      voiceURI: "com.apple.ttsbundle.Paulina-compact",
      lang: "es-MX",
      localService: !0,
      "default": !0
    }, {
      name: "Satu",
      voiceURI: "com.apple.ttsbundle.Satu-compact",
      lang: "fi-FI",
      localService: !0,
      "default": !0
    }, {
      name: "Amelie",
      voiceURI: "com.apple.ttsbundle.Amelie-compact",
      lang: "fr-CA",
      localService: !0,
      "default": !0
    }, {
      name: "Thomas",
      voiceURI: "com.apple.ttsbundle.Thomas-compact",
      lang: "fr-FR",
      localService: !0,
      "default": !0
    }, {
      name: "Carmit",
      voiceURI: "com.apple.ttsbundle.Carmit-compact",
      lang: "he-IL",
      localService: !0,
      "default": !0
    }, {
      name: "Lekha",
      voiceURI: "com.apple.ttsbundle.Lekha-compact",
      lang: "hi-IN",
      localService: !0,
      "default": !0
    }, {
      name: "Mariska",
      voiceURI: "com.apple.ttsbundle.Mariska-compact",
      lang: "hu-HU",
      localService: !0,
      "default": !0
    }, {
      name: "Damayanti",
      voiceURI: "com.apple.ttsbundle.Damayanti-compact",
      lang: "id-ID",
      localService: !0,
      "default": !0
    }, {
      name: "Alice",
      voiceURI: "com.apple.ttsbundle.Alice-compact",
      lang: "it-IT",
      localService: !0,
      "default": !0
    }, {
      name: "Kyoko",
      voiceURI: "com.apple.ttsbundle.Kyoko-compact",
      lang: "ja-JP",
      localService: !0,
      "default": !0
    }, {
      name: "Yuna",
      voiceURI: "com.apple.ttsbundle.Yuna-compact",
      lang: "ko-KR",
      localService: !0,
      "default": !0
    }, {
      name: "Ellen",
      voiceURI: "com.apple.ttsbundle.Ellen-compact",
      lang: "nl-BE",
      localService: !0,
      "default": !0
    }, {
      name: "Xander",
      voiceURI: "com.apple.ttsbundle.Xander-compact",
      lang: "nl-NL",
      localService: !0,
      "default": !0
    }, {
      name: "Nora",
      voiceURI: "com.apple.ttsbundle.Nora-compact",
      lang: "no-NO",
      localService: !0,
      "default": !0
    }, {
      name: "Zosia",
      voiceURI: "com.apple.ttsbundle.Zosia-compact",
      lang: "pl-PL",
      localService: !0,
      "default": !0
    }, {
      name: "Luciana",
      voiceURI: "com.apple.ttsbundle.Luciana-compact",
      lang: "pt-BR",
      localService: !0,
      "default": !0
    }, {
      name: "Joana",
      voiceURI: "com.apple.ttsbundle.Joana-compact",
      lang: "pt-PT",
      localService: !0,
      "default": !0
    }, {
      name: "Ioana",
      voiceURI: "com.apple.ttsbundle.Ioana-compact",
      lang: "ro-RO",
      localService: !0,
      "default": !0
    }, {
      name: "Milena",
      voiceURI: "com.apple.ttsbundle.Milena-compact",
      lang: "ru-RU",
      localService: !0,
      "default": !0
    }, {
      name: "Laura",
      voiceURI: "com.apple.ttsbundle.Laura-compact",
      lang: "sk-SK",
      localService: !0,
      "default": !0
    }, {
      name: "Alva",
      voiceURI: "com.apple.ttsbundle.Alva-compact",
      lang: "sv-SE",
      localService: !0,
      "default": !0
    }, {
      name: "Kanya",
      voiceURI: "com.apple.ttsbundle.Kanya-compact",
      lang: "th-TH",
      localService: !0,
      "default": !0
    }, {
      name: "Yelda",
      voiceURI: "com.apple.ttsbundle.Yelda-compact",
      lang: "tr-TR",
      localService: !0,
      "default": !0
    }, {
      name: "Ting-Ting",
      voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
      lang: "zh-CN",
      localService: !0,
      "default": !0
    }, {
      name: "Sin-Ji",
      voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
      lang: "zh-HK",
      localService: !0,
      "default": !0
    }, {
      name: "Mei-Jia",
      voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
      lang: "zh-TW",
      localService: !0,
      "default": !0
    }], self.systemvoices = null, self.CHARACTER_LIMIT = 100, self.VOICESUPPORT_ATTEMPTLIMIT = 5, self.voicesupport_attempts = 0, self.fallbackMode = !1, self.WORDS_PER_MINUTE = 130, self.fallback_parts = null, self.fallback_part_index = 0, self.fallback_audio = null, self.fallback_playbackrate = 1, self.def_fallback_playbackrate = self.fallback_playbackrate, self.fallback_audiopool = [], self.msgparameters = null, self.timeoutId = null, self.OnLoad_callbacks = [], self.useTimer = !1, self.utterances = [], self.tstCompiled = function (xy) {
      return xy = 0, eval("typeof xy === 'undefined'")
    }, self.fallbackServicePath = "http://v.vanthink.cn/", self.default_rv = self.responsivevoices[0], self.init = function () {
      self.is_android && (self.useTimer = !0), self.is_opera || "undefined" == typeof speechSynthesis ? self.enableFallbackMode() : setTimeout(function () {
        var e = setInterval(function () {
          var a = window.speechSynthesis.getVoices();
          0 != a.length || null != self.systemvoices && 0 != self.systemvoices.length ? (self.systemVoicesReady(a), clearInterval(e)) : (self.voicesupport_attempts++, self.voicesupport_attempts > self.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(e), null != window.speechSynthesis && self.iOS ? self.systemVoicesReady(self.iOS9 ? self.cache_ios9_voices : self.cache_ios_voices) : self.enableFallbackMode()))
        }, 100)
      }, 100), self.Dispatch("OnLoad")
    }, self.systemVoicesReady = function (e) {
      self.systemvoices = e, self.mapRVs(), null != self.OnVoiceReady && self.OnVoiceReady.call(), self.Dispatch("OnReady"), window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
    }, self.enableFallbackMode = function () {
      self.fallbackMode = !0, self.mapRVs(), null != self.OnVoiceReady && self.OnVoiceReady.call(), self.Dispatch("OnReady"), window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
    }, self.getVoices = function () {
      for (var e = [], a = 0; a < self.responsivevoices.length; a++) e.push({
        name: self.responsivevoices[a].name
      });
      return e
    }, self.speak = function (e, a, l) {
      var l = {
        rate: .7
      };
      if (self.iOS && (l = {
          rate: .9
        }), self.iOS9 && !self.iOS9_initialized) return setTimeout(function () {
        self.speak(e, a, l)
      }, 100), self.clickEvent(), void(self.iOS9_initialized = !0);
      self.isPlaying() && self.cancel(), self.fallbackMode && self.fallback_audiopool.length > 0 && self.clearFallbackPool(), e = e.replace(/[\"\`]/gm, "'");
      var n = "US English Female",
        a = n,
        c = {
          volume: 1,
          rate: self.iOS ? .9 : .7
        };
      self.msgparameters = c, self.msgtext = e, self.msgvoicename = a, self.onstartFired = !1;
      var s = [];
      if (e.length > self.CHARACTER_LIMIT) {
        for (var i = e; i.length > self.CHARACTER_LIMIT;) {
          var o = i.search(/[:!?.;]+/),
            t = "";
          if ((-1 == o || o >= self.CHARACTER_LIMIT) && (o = i.search(/[,]+/)), -1 == o && -1 == i.search(" ") && (o = 99), -1 == o || o >= self.CHARACTER_LIMIT)
            for (var m = i.split(" "), f = 0; f < m.length && !(t.length + m[f].length + 1 > self.CHARACTER_LIMIT); f++) t += (0 != f ? " " : "") + m[f];
          else t = i.substr(0, o + 1);
          i = i.substr(t.length, i.length - t.length), s.push(t)
        }
        i.length > 0 && s.push(i)
      } else s.push(e);
      self.multipartText = s;
      var r;
      r = null == a ? self.default_rv : self.getResponsiveVoice(a);
      var v = {};
      if (null != r.mappedProfile) v = r.mappedProfile;
      else if (v.systemvoice = self.getMatchedVoice(r), v.collectionvoice = {}, null == v.systemvoice) return;
      1 == v.collectionvoice.fallbackvoice ? (self.fallbackMode = !0, self.fallback_parts = []) : self.fallbackMode = !1, self.msgprofile = v, self.utterances = [];
      for (var f = 0; f < s.length; f++)
        if (self.fallbackMode) {
          self.fallback_playbackrate = self.def_fallback_playbackrate;
          var g = self.selectBest([v.collectionvoice.pitch, v.systemvoice.pitch, 1]),
            p = self.selectBest([self.iOS9 ? 1 : null, v.collectionvoice.rate, v.systemvoice.rate, 1]),
            u = self.selectBest([v.collectionvoice.volume, v.systemvoice.volume, 1]);
          null != l && (g = (null != l.pitch ? l.pitch : 1) * g, p = (null != l.rate ? l.rate : 1) * p, u = (null != l.volume ? l.volume : 1) * u), g /= 2, p /= 2, u *= 2, g = Math.min(Math.max(g, 0), 1), p = Math.min(Math.max(p, 0), 1), u = Math.min(Math.max(u, 0), 1);
          var d = self.fallbackServicePath + "?t=" + encodeURIComponent(s[f]) + "&tl=" + (v.collectionvoice.lang || v.systemvoice.lang || "en-US") + "&sv=" + (v.collectionvoice.service || v.systemvoice.service || "") + "&vn=" + (v.collectionvoice.voicename || v.systemvoice.voicename || "") + "&pitch=" + g.toString() + "&rate=" + p.toString() + "&vol=" + u.toString(),
            k = document.createElement("AUDIO");
          k.src = d, k.playbackRate = self.fallback_playbackrate, k.preload = "auto", k.load(), self.fallback_parts.push(k)
        } else {
          var h = new SpeechSynthesisUtterance;
          h.voice = v.systemvoice, h.voiceURI = v.systemvoice.voiceURI, h.volume = self.selectBest([v.collectionvoice.volume, v.systemvoice.volume, 1]), h.rate = self.selectBest([self.iOS9 ? 1 : null, v.collectionvoice.rate, v.systemvoice.rate, 1]), h.pitch = self.selectBest([v.collectionvoice.pitch, v.systemvoice.pitch, 1]), h.text = s[f], h.lang = self.selectBest([v.collectionvoice.lang, v.systemvoice.lang]), h.rvIndex = f, h.rvTotal = s.length, 0 == f && (h.onstart = self.speech_onstart), self.msgparameters.onendcalled = !1, null != l ? (f < s.length - 1 && s.length > 1 ? (h.onend = self.onPartEnd, h.hasOwnProperty("addEventListener") && h.addEventListener("end", self.onPartEnd)) : (h.onend = self.speech_onend, h.hasOwnProperty("addEventListener") && h.addEventListener("end", self.speech_onend)), h.onerror = l.onerror || function () {}, h.onpause = l.onpause, h.onresume = l.onresume, h.onmark = l.onmark, h.onboundary = l.onboundary || self.onboundary, h.pitch = null != l.pitch ? l.pitch : h.pitch, h.rate = self.iOS ? (null != l.rate ? l.rate * l.rate : 1) * h.rate : (null != l.rate ? l.rate : 1) * h.rate, h.volume = null != l.volume ? l.volume : h.volume) : (h.onend = self.speech_onend, h.onerror = function () {}), self.utterances.push(h), 0 == f && (self.currentMsg = h), self.tts_speak(h)
        }
      self.fallbackMode && (self.fallback_part_index = 0, self.fallback_startPart())
    }, self.startTimeout = function (e, a) {
      var l = self.msgprofile.collectionvoice.timerSpeed;
      if (null == self.msgprofile.collectionvoice.timerSpeed && (l = 1), !(0 >= l)) {
        var n = e.split(/\s+/).length,
          c = (e.match(/[^ ]/gim) || e).length,
          s = c / n / 5.1,
          i = 1e3 * l * (60 / self.WORDS_PER_MINUTE) * s * n;
        3 > n && (i = 4e3), 3e3 > i && (i = 3e3), self.timeoutId = setTimeout(a, i)
      }
    }, self.checkAndCancelTimeout = function () {
      null != self.timeoutId && (clearTimeout(self.timeoutId), self.timeoutId = null)
    }, self.speech_timedout = function () {
      self.cancel(), self.cancelled = !1, self.speech_onend()
    }, self.speech_onend = function () {
      return self.checkAndCancelTimeout(), self.cancelled === !0 ? void(self.cancelled = !1) : void(null != self.msgparameters && null != self.msgparameters.onend && 1 != self.msgparameters.onendcalled && (self.msgparameters.onendcalled = !0, self.msgparameters.onend()))
    }, self.speech_onstart = function () {
      self.onstartFired || (self.onstartFired = !0, (self.iOS || self.is_safari || self.useTimer) && (self.fallbackMode || self.startTimeout(self.msgtext, self.speech_timedout)), self.msgparameters.onendcalled = !1, null != self.msgparameters && null != self.msgparameters.onstart && self.msgparameters.onstart())
    }, self.fallback_startPart = function () {
      if (0 == self.fallback_part_index && self.speech_onstart(), self.fallback_audio = self.fallback_parts[self.fallback_part_index], null == self.fallback_audio);
      else {
        var e = self.fallback_audio;
        self.fallback_audiopool.push(e), setTimeout(function () {
          e.playbackRate = self.fallback_playbackrate
        }, 50), e.onloadedmetadata = function () {
          e.play(), e.playbackRate = self.fallback_playbackrate
        }, self.fallback_audio.play(), self.fallback_audio.addEventListener("ended", self.fallback_finishPart)
      }
    }, self.fallback_finishPart = function () {
      self.checkAndCancelTimeout(), self.fallback_part_index < self.fallback_parts.length - 1 ? (self.fallback_part_index++, self.fallback_startPart()) : self.speech_onend()
    }, self.cancel = function () {
      self.checkAndCancelTimeout(), self.fallbackMode ? (null != self.fallback_audio && self.fallback_audio.pause(), self.clearFallbackPool()) : (self.cancelled = !0, speechSynthesis.cancel())
    }, self.voiceSupport = function () {
      return "speechSynthesis" in window
    }, self.OnFinishedPlaying = function () {
      null != self.msgparameters && null != self.msgparameters.onend && self.msgparameters.onend()
    }, self.setDefaultVoice = function (e) {
      var a = self.getResponsiveVoice(e);
      null != a && (self.default_rv = a)
    }, self.mapRVs = function () {
      for (var e = 0; e < self.responsivevoices.length; e++)
        for (var a = self.responsivevoices[e], l = 0; l < a.voiceIDs.length; l++) {
          var n = self.voicecollection[a.voiceIDs[l]];
          if (1 == n.fallbackvoice) {
            a.mappedProfile = {
              systemvoice: {},
              collectionvoice: n
            };
            break
          }
          var c = self.getSystemVoice(n.name);
          if (null != c) {
            a.mappedProfile = {
              systemvoice: c,
              collectionvoice: n
            };
            break
          }
        }
    }, self.getMatchedVoice = function (e) {
      for (var a = 0; a < e.voiceIDs.length; a++) {
        var l = self.getSystemVoice(self.voicecollection[e.voiceIDs[a]].name);
        if (null != l) return l
      }
      return null
    }, self.getSystemVoice = function (e) {
      if ("undefined" == typeof self.systemvoices || null === self.systemvoices) return null;
      for (var a = 0; a < self.systemvoices.length; a++)
        if (self.systemvoices[a].name == e) return self.systemvoices[a];
      return null
    }, self.getResponsiveVoice = function (e) {
      for (var a = 0; a < self.responsivevoices.length; a++)
        if (self.responsivevoices[a].name == e) return self.responsivevoices[a];
      return null
    }, self.Dispatch = function (e) {
      if (self.hasOwnProperty(e + "_callbacks") && null != self[e + "_callbacks"] && self[e + "_callbacks"].length > 0) {
        for (var a = self[e + "_callbacks"], l = 0; l < a.length; l++) a[l]();
        return !0
      }
      var n = e + "_callbacks_timeout",
        c = e + "_callbacks_timeoutCount";
      return self.hasOwnProperty(n) || (self[c] = 10, self[n] = setInterval(function () {
        self[c] = self[c] - 1, (self.Dispatch(e) || self[c] < 0) && clearTimeout(self[n])
      }, 50)), !1
    }, self.AddEventListener = function (e, a) {
      self.hasOwnProperty(e + "_callbacks") || (self[e + "_callbacks"] = []), self[e + "_callbacks"].push(a)
    }, self.addEventListener = self.AddEventListener, self.clickEvent = function () {
      if (self.iOS && !self.iOS_initialized) {
        var e = new SpeechSynthesisUtterance(" ");
        speechSynthesis.speak(e), self.iOS_initialized = !0
      }
    }, self.isPlaying = function () {
      return self.fallbackMode ? null != self.fallback_audio && !self.fallback_audio.ended && !self.fallback_audio.paused : speechSynthesis.speaking
    }, self.clearFallbackPool = function () {
      for (var e = 0; e < self.fallback_audiopool.length; e++) null != self.fallback_audiopool[e] && (self.fallback_audiopool[e].pause(), self.fallback_audiopool[e].src = "");
      self.fallback_audiopool = []
    }, "complete" === document.readyState ? self.init() : document.addEventListener("DOMContentLoaded", function () {
      self.init()
    }), self.selectBest = function (e) {
      for (var a = 0; a < e.length; a++)
        if (null != e[a]) return e[a];
      return null
    }, self.pause = function () {
      self.fallbackMode ? null != self.fallback_audio && self.fallback_audio.pause() : speechSynthesis.pause()
    }, self.resume = function () {
      self.fallbackMode ? null != self.fallback_audio && self.fallback_audio.play() : speechSynthesis.resume()
    }, self.tts_speak = function (e) {
      setTimeout(function () {
        self.cancelled = !1, speechSynthesis.speak(e)
      }, .01)
    }, self.setVolume = function (e) {
      if (self.isPlaying())
        if (self.fallbackMode) {
          for (var a = 0; a < self.fallback_parts.length; a++) self.fallback_parts[a].volume = e;
          for (var a = 0; a < self.fallback_audiopool.length; a++) self.fallback_audiopool[a].volume = e;
          self.fallback_audio.volume = e
        } else
          for (var a = 0; a < self.utterances.length; a++) self.utterances[a].volume = e
    }, self.onPartEnd = function (e) {
      null != self.msgparameters && null != self.msgparameters.onchuckend && self.msgparameters.onchuckend(), self.Dispatch("OnPartEnd");
      var a = self.utterances.indexOf(e.utterance);
      self.currentMsg = self.utterances[a + 1]
    }, self.onboundary = function () {
      self.iOS && !self.onstartFired && self.speech_onstart()
    }
  },
  responsiveVoice = new ResponsiveVoice;
//# 1.4.6.2 change the audio src to voice vanthink