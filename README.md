# vanspeak.js

[![Build Status](https://travis-ci.org/Vanthink-UED/vanspeak.svg?branch=master)](https://travis-ci.org/Vanthink-UED/vanspeak)

a plugin for text to speech (<=12KB)



### 快速开始

``` html
<script src="./build/vanspeak.min.js"></script>

```

``` JS
vanSpeak.say('Hello wolrd');
```

### 流程
``` bash
    判断浏览器 
       |
  是否支持发音API  -- 否 --> 请求服务器音频，播放音频 
       | 是
使用浏览器进行单词发音
```

### 方法 

+ say(word,options)

`word`: 需要读的单词

`options`: 配置

读出一个单词
``` JS
vanSpeak.say('hello');
```
[Demo]( http://vanthink-ued.github.io/vanspeak/ )

+ preAudio

预加载音频，仅仅对于不支持 本地发音的浏览器有效果，接受多个单词组成的数组作为参数

``` JS
vanSpeak.preAudio(['say','this','word']);
```

+ startHandle 

防止iOS设备无法呼醒，iOS(<=9) 需要用户手动触发屏幕后才能进行发音，如果你是自动发音，需要在初始化的时候加入改方法

``` js
var btn = document.querySelector('.btn-start');
btn.onclick = function() {
  vanSpeak.startHandle();
};
```

+ cancel

取消当前的发音

+ setVolume 

设置音量大小 @param v(0-1) 



### 初始化配置 Options

| key        | Type         | Example  | Description  |
| ------------- |:----------| ---------|--------------|
| rate     | Number | 0.7 | the speech speed |
| volume      | Number      |  1 | speech volume |
| maxWordNum | Number     |   120 | limte the word length |
| speechStart | Function   |     | when speech start |
| speechEnd | Function   |    | when speech end |
| speechError | Function   |    | when speech error|


example: 

``` js
var options = {
  'rate': 0.7,
  'volume': 1,
  // max words num for better experence  so we limit max words 
  'maxWordNum': 100,
  'speechStart': function () {
    console.log('start');
  }
}

vanspeak.say('hello',options);

```

