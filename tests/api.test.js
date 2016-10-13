// 对 api 进行测试
var xhr = require('../src/xhr.js');
var apis = {
  "single": "http://api.vanthink.cn/api/audio/index?t=",
  "multi": "http://api.vanthink.cn/api/audio/multi?t=",
  "sentence": "http://v.vanthink.cn/?tl=en-US&sv=&vn=&pitch=0.5&vol=1&t=",
};
describe("single word test", function() {
  var request, anotherRequest, response;
  var success, error, complete;
  var client, onreadystatechange;
  var sharedContext = {};
  var fakeGlobal, mockAjax;
  var word = 'news';
  var testRes = {
    status: 200,
    responseText: '{"errcode":0,"errstr":"","data":"http:\/\/res.cloud.vanthink.cn\/\/audio\/508c75c8507a2ae5223dfd2faeb98122--500--350.mp3","debug":{"url":"http:\/\/api.vanthink.cn\/api\/audio\/index?t=news","get":{"api\/audio\/index":"","t":"news"},"post":[]}}'
  };
  beforeEach(function() {
    jasmine.Ajax.install();

    onSuccess = jasmine.createSpy('onSuccess');
    onFailure = jasmine.createSpy('onFailure');

    xhr('GET',apis['single'] + word,{},{},onSuccess);


    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe("http://api.vanthink.cn/api/audio/index?t=news");
    expect(request.method).toBe('GET');
  });

  describe("on success", function() {
    beforeEach(function() {
      request.respondWith(testRes);
    });

    it("get the audio uri", function() {
      expect(onSuccess).toHaveBeenCalled();
      var successArgs = onSuccess.calls.mostRecent().args[0];
      expect(successArgs.data).toEqual('http://res.cloud.vanthink.cn//audio/508c75c8507a2ae5223dfd2faeb98122--500--350.mp3');
    });
  });
});

describe("multi word test", function() {
  var request, anotherRequest, response;
  var onSuccess;
  var client, onreadystatechange;
  var sharedContext = {};
  var fakeGlobal, mockAjax;
  var wordArr = ['news','test','play'];
  var testRes = {
    status: 200,
    responseText: '{"errcode":0,"errstr":"","data":["http:\/\/res.cloud.vanthink.cn\/\/audio\/508c75c8507a2ae5223dfd2faeb98122--500--350.mp3","http:\/\/res.cloud.vanthink.cn\/\/audio\/098f6bcd4621d373cade4e832627b4f6--500--350.mp3","http:\/\/res.cloud.vanthink.cn\/\/audio\/a3b34c0871dc2fd51eec5559b68f709d--500--350.mp3"]}'
  };
  beforeEach(function() {

    onSuccess = jasmine.createSpy('onSuccess');
    xhr('GET',apis['multi'] + encodeURIComponent(JSON.stringify(wordArr)),{},{},onSuccess);

    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('http://api.vanthink.cn/api/audio/multi?t=%5B%22news%22%2C%22test%22%2C%22play%22%5D');
    expect(request.method).toBe('GET');
  });

  describe("on success", function() {
    beforeEach(function() {
      request.respondWith(testRes);
    });

    it("get the  audio array", function() {
      expect(onSuccess).toHaveBeenCalled();
      var successArgs = onSuccess.calls.mostRecent().args[0];
      expect(successArgs.data[0]).toEqual('http://res.cloud.vanthink.cn//audio/508c75c8507a2ae5223dfd2faeb98122--500--350.mp3');
      expect(successArgs.data.length).toEqual(3);
    });
  });
});

