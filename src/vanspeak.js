/** vanspeak
 *  a plugin to speak your words 
 *  v 1.22
 * the first version some params was not supported beacuse we force users to accept US accent and the speed
 **/

;
var vanspeak = (function () {

    var defaultVoice = {
        'us': [
            {
                name: 'Google US English',
                default: false,
                voiceURI: "Google US English",
                lang: "en-US",
                localService: false
            },
            {
                name: 'English United States',
                lang: 'en_US'
            },
            {
                name: 'en-US',
                rate: 0.2,
                pitch: 1,
                timerSpeed: 1.3
            },
            {
                name: 'Samantha',
                voiceURI: 'com.apple.speech.synthesis.voice.Samantha'
            }
        ],
        'uk': [
            {
                name: 'Google UK English Feale',
                flag: 'gb',
                gender: 'f'
            }
        ]
    };
    var ua = window.navigator.userAgent.toLowerCase();

    var isIOS = function () {
        return /(iPad|iPhone|iPod)/gi.test(ua);
    };

    var isIOS9 = function () {
        return /(iphone|ipod|ipad).* os 9_/.test(ua);
    };

    var isChrome = function () {
        return ua.indexOf('chrome') > -1;
    };
    var isSafari = function () {
        return ua.indexOf('safari') > -1 && !isChrome();
    };


    var isAndroid = function () {
        return ua.indexOf('android') > -1;
    }

    //Fallback cache voices
    var iosCacheVoice = {
        "name": "en-US",
        "voiceURI": "en-US",
        "lang": "en-US"
    };
    var ios9CacheVoice = {
        name: "Samantha",
        voiceURI: "com.apple.ttsbundle.Samantha-premium",
        lang: "en-US",
        localService: !0,
        "default": !0
    };

    // not support set speed 
    var defaultParams = {
        'rate': 0.7,
        'volume': 1,
        // max words num for better experence  so we limit max words 
        'maxWordNum': 100,

    };

    var WORDS_PER_MINUTE = 130,
        voiceFindTry = 0;

    // server config and server not supprot self-defined voice params
    var APIHOST = {
        "single": "http://api.vanthink.cn/api/audio/index?t=",
        "multi": "http://api.vanthink.cn/api/audio/multi?t=",
        "sentence": "http://v.vanthink.cn/?tl=en-US&sv=&vn=&pitch=0.5&vol=1&t=",
    };

    // find the right voice and right way to speak
    var speakMode = 2; // 1: speechSynthesis 2: audio from server
    var speakVoice = '',
        systemVoice = '';
    var iosVoiceInit = false;

    function init() {
        if (typeof (window.speechSynthesis) != 'undefined') {
            setTimeout(function () {
                var gsvinterval = setInterval(function () {
                    // get all voice supported
                    var voices = window.speechSynthesis.getVoices();

                    if (voices.length == 0) {

                        voiceFindTry++;
                        if (voiceFindTry > 20) {

                            clearInterval(gsvinterval);

                            //On IOS, sometimes getVoices is just empty, but speech works. So we use a cached voice collection.
                            if (window.speechSynthesis != null) {
                                if (isIOS()) {
                                    speakMode = 1;
                                    selectRightVoice(voices);
                                }

                            } else {
                                speakMode = 1;
                                selectRightVoice(voices);
                            }
                        }
                    } else {
                        clearInterval(gsvinterval);
                        speakMode = 1;
                        selectRightVoice(voices);
                    }

                }, 25);
            }, 100);
        }

        // some debug test
        setTimeout(function () {
            window.vanspeak.hiddenSendUserVoice();
        }, 2000)
    };

    // find the right voice name for speech 
    function selectRightVoice(allVoice) {
        if (isChrome()) {
            speakVoice = defaultVoice['us'][0];
        }
        if (isSafari()) {
            speakVoice = defaultVoice['us'][3];
        }
        if (isAndroid()) {
            speakVoice = defaultVoice['us'][1]
        }
        if (isIOS()) {
            speakVoice = iosCacheVoice;
        }

        if (isIOS9()) {
            speakVoice = ios9CacheVoice;
            systemVoice = speakVoice;
            return;
        }
        // we need force to hidden the voice for a long time waiting
        if (isAndroid() && !isChrome()) {
            speakMode = 2;
        }
        window.allvoices = allVoice;
        systemVoice = getSystemVoice(speakVoice['name'], allVoice, speakVoice['lang']);
    }

    function getSystemVoice(name, allVoice, lang) {
        for (var i = 0; i < allVoice.length; i++) {
            if (allVoice[i].name == name) {
                return allVoice[i];
            }

            // for some device we should  find the right language
        }
        for (var i = 0; i < allVoice.length; i++) {
            if (allVoice[i].lang == lang) {
                return allVoice[i];
            }
        }
        speakMode = 2;
        return {};

    }

    init();

    return {

        // @param words the words you want to speel
        say: function (words, params) {
            var self = this;
            this.params = defaultParams;
            //  this.preAudio(['exercise','demo','test']);
            if (isIOS9() && iosVoiceInit === false) {
                setTimeout(function () {
                    self.say(words, params);
                }, 100);
                self.startHandle();
                return self.iOS9_initialized = true;
            }
            if (this.audioList === undefined) {
                this.audioList = [];
            }
            if (this.isPlaying()) {
                this.cancel();
            }
            //Prevent fallbackmode to play more than 1 speech at the same time
            if (speakMode === 2 && this.audioList.length > 0) {
                this.clearAudio();
            }

            // words detect and group
            this.groupWords(words);

            for (var i = 0; i < this.wordsGroup.length; i++) {

                // use speech api SpeechSynthesis
                var word = self.wordsGroup[i];
                if (speakMode === 1) {
                    var msg = new SpeechSynthesisUtterance();
                    if (systemVoice.voiceURI) {
                        msg.voice = systemVoice;
                        msg.voiceURI = systemVoice.voiceURI;
                    }
                    // we need loudly volume
                    msg.volume = 1;
                    if (isIOS()) {
                        msg.rate = (this.params.rate != null ? (this.params.rate * this.params.rate) : 1) * msg.rate;
                    } else {
                        msg.rate = (this.params.rate != null ? this.params.rate : 1) * msg.rate;
                    }

                    msg.pitch = self.selectBest([this.params.pitch, 1]);
                    msg.text = this.wordsGroup[i];
                    msg.lang = speakVoice.lang;

                    msg.rvIndex = i;
                    msg.rvTotal = this.wordsGroup.length;

                    if (i == 0) {
                        msg.onstart = self.speech_onstart;
                    }
                    this.params.onendcalled = false;
                    this.params.words = msg.text;

                    if (this.params != null) {

                        if (i < this.wordsGroup.length - 1 && this.wordsGroup.length > 1) {
                            msg.onend = self.onPartEnd;
                            if (msg.hasOwnProperty("addEventListener"))
                                msg.addEventListener('end', self.onPartEnd);

                        } else {
                            msg.onend = self.speech_onend;
                            if (msg.hasOwnProperty("addEventListener"))
                                msg.addEventListener('end', self.speech_onend);
                        }



                        msg.onerror = this.params.onerror || function (e) {
                            console.warn('voice not workong!');
                        };

                        msg.onpause = this.params.onpause;
                        msg.onresume = this.params.onresume;
                        msg.onmark = this.params.onmark;
                        msg.onboundary = this.params.onboundary || self.onboundary.bind(self);
                        msg.pitch = this.params.pitch || msg.pitch;
                        msg.volume = this.params.volume || msg.volume;


                    } else {
                        msg.onend = self.speech_onend;
                        msg.onerror = function (e) {
                            console.warn('voice not working');
                        };
                    }

                    if (this.utterances === undefined) {
                        this.utterances = [];
                    }
                    this.utterances.push(msg);
                    if (i == 0) {
                        this.currentMsg = msg;
                    }

                    this.runTTS(msg);

                } else {

                    // the audio url
                    var src = '';
                    var cacheAudio = this.findPreLoadAudio(word);
                    if (cacheAudio !== false) {
                        src = cacheAudio['src'];
                        var audio = document.createElement("AUDIO");
                        audio.src = src;
                        audio.playbackRate = 1;
                        audio.preload = 'auto';
                        this.audioList.push(audio);
                        if (!this.isPlaying() && this.audioList.length == 1) {
                            self.audioTrackIndex = 0;
                            self.playAudio();
                        }
                    } else {
                        // if user say a long sentences we suggest to use sentences api
                        if (!this.isWord(words)) {
                            var rate = this.selectBest([(self.iOS9 ? 1 : null), defaultParams['rate'], 1]);

                            rate /= 2;
                            rate = Math.min(Math.max(rate, 0), 1);
                            var url = APIHOST['sentence'] + '&rate=' + rate + '&t=' + encodeURIComponent(this.wordsGroup[i]);

                            self.createAudio(word, url);
                        } else {
                            var url = APIHOST['single'] + encodeURIComponent(this.wordsGroup[i]);
                            this.xhr('GET', url, {}, {}, function (res) {
                                if (res.errcode == 0) {
                                    src = res.data;
                                    self.createAudio(word, src);
                                }
                            });

                        }
                    }

                }
            }

        },

        runTTS: function (msg) {
            var self = this;
            setTimeout(function () {
                self.cancelled = false;
                speechSynthesis.speak(msg);
            }, 0.01);
        },

        // check the word is the normal word we are not supporting sentences Cache
        isWord: function (word) {

            if (word.length > (defaultParams['maxWordNum'] / 2)) {
                return false;
            }

            if (/[a-zA-Z\d\._\-\']/.test(word)) {
                return true;
            }

            return false;
        },

        // if your sentence is so long we need divid those words into groups
        groupWords: function (words) {
            this.wordsGroup = [];

            if (words.length > defaultParams['maxWordNum']) {

                var tmptxt = words;
                var max = defaultParams['maxWordNum'];
                while (tmptxt.length > max) {

                    //Split by common phrase delimiters
                    var p = tmptxt.search(/[:!?.;。！；]+/);
                    var part = '';

                    //Coludn't split by priority characters, try commas
                    if (p == -1 || p >= max) {
                        p = tmptxt.search(/[,]+/);
                    }

                    //Check for spaces. If no spaces then split by 99 characters.
                    if (p == -1) {

                        if (tmptxt.search(' ') == -1)
                            p = 99;
                    }

                    //Couldn't split by normal characters, then we use spaces
                    if (p == -1 || p >= max) {

                        var words = tmptxt.split(' ');

                        for (var i = 0; i < words.length; i++) {

                            if (part.length + words[i].length + 1 > max)
                                break;

                            part += (i != 0 ? ' ' : '') + words[i];

                        }

                    } else {
                        part = tmptxt.substr(0, p + 1);
                    }

                    tmptxt = tmptxt.substr(part.length, tmptxt.length - part.length);
                    this.wordsGroup.push(part);
                }

                //Add the remaining text
                if (tmptxt.length > 0) {
                    this.wordsGroup.push(tmptxt);
                }

            } else {

                //Small text
                this.wordsGroup.push(words);
            }

        },

        selectBest: function (a) {

            for (var i = 0; i < a.length; i++) {
                if (a[i] != null) return a[i];
            }
            return null;
        },

        startTTS: function () {
            var self = this;
            if (this.onstartFired) {
                return
            }

            this.onstartFired = true;
            if (isIOS() || isSafari() || isAndroid()) {
                if (speakMode === 1)
                    self.startTimeout(self.params.words, self.speech_timedout);

            }
            self.params.onendcalled = false;
            if (self.params != null && self.params.onstart != null) {
                self.params.onstart();
            }

        },

        endTTS: function () {
            this.checkAndCancelTimeout();

            if (this.cancelled === true) {
                this.cancelled = false;
                return;
            }

            if (this.params != null && this.params.onend != null && this.params.onendcalled != true) {
                this.params.onendcalled = true;
                this.params.onend();

            }

        },

        startTimeout: function (words, callback) {

            var multiplier = speakVoice.timerSpeed;
            if (speakVoice.timerSpeed === null) {
                multiplier = 1;
            }


            if (multiplier <= 0) {
                return;
            }

            var realwords = words.split(/\s+/).length;
            var chars = (words.match(/[^ ]/igm) || words).length;
            var wlf = (chars / realwords) / 5.1; //word length factor: 5.1 is the average word length in english.

            var length = multiplier * 1000 * (60 / WORDS_PER_MINUTE) * wlf * realwords; //avg 140 words per minute speech time

            if (words < 3) {
                length = 4000;
            }

            if (length < 3000)
                length = 3000;

            this.timeoutId = setTimeout(callback, length);
            ////console.log("Timeout " + self.timeoutId + " started: " + length);            
        },

        // ios need click somethink to start spell word
        startHandle: function () {
            if (isIOS() && !iosVoiceInit) {
                var u = new SpeechSynthesisUtterance(" ");
                speechSynthesis.speak(u);
                iosVoiceInit = true;
            }
        },

        onboundary: function (e) {

            var self = this;
            if (isIOS() && !self.onstartFired) {
                self.startTTS();
            }

        },


        onPartEnd: function (e) {

            if (this.params != null && this.params.onchuckend != null) {
                this.params.onchuckend();
            }

            this.Dispatch("OnPartEnd");

            var i = this.utterances.indexOf(e.utterance);
            this.currentMsg = this.utterances[i + 1];

        },

        Dispatch: function (name) {
            var self = this;
            if (self.hasOwnProperty(name + "_callbacks") &&
                self[name + "_callbacks"] != null &&
                self[name + "_callbacks"].length > 0) {
                var callbacks = self[name + "_callbacks"];
                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i]();
                }
                ////console.log("Dispatched " + name);
                return true;
            } else {
                //Try calling a few ms later
                var timeoutName = name + "_callbacks_timeout";
                var timeoutCount = name + "_callbacks_timeoutCount";
                if (self.hasOwnProperty(timeoutName)) {

                } else {
                    //console.log("Setting up timeout for " + name);
                    self[timeoutCount] = 10;
                    self[timeoutName] = setInterval(function () {
                        ////console.log("Timeout function for " + name)
                        self[timeoutCount] = self[timeoutCount] - 1;

                        if (self.Dispatch(name) || self[timeoutCount] < 0) {
                            clearTimeout(self[timeoutName]);
                            //if (self[timeoutCount]<0) //console.log("Timeout ran out");
                        } else {
                            ////console.log("Keep waiting..." + name);
                        }
                    }, 50);
                }


                ////console.log("not found");
                return false;
            }
        },

        createAudio: function (word, src) {
            var audio = document.createElement("AUDIO");
            audio.src = src;
            audio.playbackRate = 1;
            audio.preload = 'auto';
            audio.load();
            if (this.audioList === undefined) {
                self.audioList = [];
            }
            this.audioList.push(audio);


            this.addPreLoadAudio(word, src);
            if (!this.isPlaying() && this.audioList.length == 1) {
                this.audioTrackIndex = 0;
                this.playAudio();
            }

        },

        playAudio: function () {

            if (this.audioTrackIndex == 0) {
                // self.startTTS();
            }

            if (this.audioTrackIndex == this.audioList.length) {
                return;
            }

            this.currentAudio = this.audioList[this.audioTrackIndex];

            var audio = this.currentAudio;

            //Add to pool to prevent multiple streams to be played at the same time
            if (!Array.isArray(this.audioPlayedList)) {
                this.audioPlayedList = [];
            }
            this.audioPlayedList.push(audio);


            setTimeout(function () {
                audio.playbackRate = 1;
            }, 50)
            audio.onloadedmetadata = function () {
                audio.play();
            }
            this.currentAudio.play();
            this.currentAudio.addEventListener('ended', this.audioPlayFinish.bind(this));
        },

        audioPlayFinish: function (e) {

            this.checkAndCancelTimeout();

            if (this.audioTrackIndex <= this.audioList.length - 1) {
                ////console.log('chunk ended');
                this.audioTrackIndex++;
                this.playAudio();

            } else {

                this.endTTS();

            }

        },

        checkAndCancelTimeout: function () {
            if (this.timeoutId != null) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
        },

        isPlaying: function () {
            if (speakMode === 2) {
                return (this.currentAudio != null && !this.currentAudio.ended && !this.currentAudio.paused);

            } else {
                return speechSynthesis.speaking;

            }
        },

        setVolume: function (v) {

            if (this.isPlaying()) {
                if (speakMode == 2) {
                    for (var i = 0; i < this.audioList.length; i++) {
                        this.audioList[i].volume = v;
                    }
                    for (var i = 0; i < self.audioPlayedList.length; i++) {
                        self.audioPlayedList[i].volume = v;
                    }
                    this.currentAudio.volume = v;
                } else {
                    for (var i = 0; i < self.utterances.length; i++) {
                        this.utterances[i].volume = v;
                    }
                }
            }
        },

        cancel: function () {

            this.checkAndCancelTimeout();

            if (speakMode == 2) {
                if (this.currentAudio != null) {
                    this.currentAudio.pause();
                }

                this.clearAudio();
            } else {
                this.cancelled = true;
                speechSynthesis.cancel();

            }
        },




        clearAudio: function () {
            return this.audioList = [];
        },

        preAudio: function (arr) {
            if (speakMode == 1) {
                return;
            }
            if (!Array.isArray(arr)) {
                return;
            }
            var newWordArr = [];
            if (!Array.isArray(this.preloadAudioList)) {
                this.preloadAudioList = [];
            }
            for (var i = 0; i < arr.length; i++) {
                if (this.isWord(arr[i]) && this.preloadAudioList.indexOf(arr[i]) != -1) {
                    newWordArr.push(arr[i]);
                }
            }

            var self = this;

            var timeSpan = (new Date()).getTime() + '.' + Math.floor(Math.random() * 10000);
            var url = APIHOST['multi'] + encodeURIComponent(JSON.stringify(arr)) + '&_req=' + timeSpan;
            this.xhr('GET', url, {}, {}, function (res) {
                if (res.errcode == 0) {
                    for (var i = 0; i < res.data.length; i++) {
                        self.xhr('GET', res.data[i]);
                        self.addPreLoadAudio(arr[i], res.data[i]);
                    }
                }
            });
        },

        // find the cache voice
        findPreLoadAudio: function (name) {
            if (this.preloadAudioList == undefined) {
                return false;
            }
            for (var i = 0; i < this.preloadAudioList.length; i++) {
                if (this.preloadAudioList[i]['key'] === name) {
                    return this.preloadAudioList[i];
                }
            }

            return false;
        },

        addPreLoadAudio: function (word, src) {

            this.preloadAudioList.push({
                key: word,
                src: src
            });
        },

        // ajax get audio and api
        xhr: function (method, url, headers, data, callback) {

            var r = new XMLHttpRequest();
            var error = this.error;

            // Binary?
            var binary = false;
            if (method === 'blob') {
                binary = method;
                method = 'GET';
            }

            method = method.toUpperCase();

            // Xhr.responseType 'json' is not supported in any of the vendors yet.
            r.onload = function (e) {
                var json = r.response;
                try {
                    json = JSON.parse(r.responseText);
                } catch (_e) {
                    if (r.status === 401) {
                        json = console.error('access_denied', r.statusText);
                    }
                }

                var headers = headersToJSON(r.getAllResponseHeaders());
                headers.statusCode = r.status;
                callback = callback || function () {};
                callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
            };

            r.onerror = function (e) {
                var json = r.responseText;
                try {
                    json = JSON.parse(r.responseText);
                } catch (_e) {}

                callback && callback(json || console.error('access_denied', 'Could not get resource'));
            };

            var x;

            // Should we add the query to the URL?
            if (method === 'GET' || method === 'DELETE') {
                data = null;
            } else if (data && typeof (data) !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
                // Loop through and add formData
                var f = new FormData();
                for (x in data)
                    if (data.hasOwnProperty(x)) {
                        if (data[x] instanceof HTMLInputElement) {
                            if ('files' in data[x] && data[x].files.length > 0) {
                                f.append(x, data[x].files[0]);
                            }
                        } else if (data[x] instanceof Blob) {
                            f.append(x, data[x], data.name);
                        } else {
                            f.append(x, data[x]);
                        }
                    }

                data = f;
            }

            // Open the path, async
            r.open(method, url, true);

            if (binary) {
                if ('responseType' in r) {
                    r.responseType = binary;
                } else {
                    r.overrideMimeType('text/plain; charset=x-user-defined');
                }
            }

            // Set any bespoke headers
            if (headers) {
                for (x in headers) {
                    r.setRequestHeader(x, headers[x]);
                }
            }

            r.send(data);

            return r;

            // Headers are returned as a string
            function headersToJSON(s) {
                var r = {};
                var reg = /([a-z\-]+):\s?(.*);?/gi;
                var m;
                while ((m = reg.exec(s))) {
                    r[m[1]] = m[2];
                }
                return r;
            }
        },

        hiddenSendUserVoice: function (voices) {
            // we need voice for your device 
            var self = this;
            setTimeout(function () {

                if (!Array.isArray(window.allvoices)) {
                    voices = [];
                } else {
                    voices = allvoices;
                }
                var str = voices.map(function (item) {
                    return '_name:' + item.name + ';_voiceURI:' + item.voiceURI || '****' + ';'
                });

                self.xhr('POST', 'http://test.platform.vanthink.cn/api/voice/add', {}, {
                    voice: 'speech:' + (speakMode == 1 ? 'enable' : 'NOT SUPPORT!') + '\r\n voiceInfo:' + str
                });
            }, 20000);


        },


    };


}());