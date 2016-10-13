var vanspeak = require('../src/vanspeak-1.0.2.js');
var word = 'funny';
var sentence = "BBC News is the BBC's rolling news";
var flag = false;
var asyncTest = function(done) {
   // Wait two seconds, then set the flag to true
  setTimeout(function () {
      flag = true;
      done();
  }, 2000);
};

describe("vanspeak-1.0.2 test", function() { 
  var speechTest;
  beforeEach(function (done) {
      // Make an async call, passing the special done callback        
      asyncTest(done);
  });
  
  it('say a word', function () {
    expect(vanspeak.say(word)).toEqual(true);
  });
  
  it('test a voice', function () {
    expect(vanspeak.voice.lang).toEqual('en-US');
  });
  
  it('cancel to say a voice', function () {
    vanspeak.say(word)
    expect(vanspeak.cancel()).toEqual(true);
  });
  
  it('set a voice volume', function () {
    vanspeak.setVolume(0.5)
    expect(vanspeak.options.volume).toEqual(0.5);
  });
  
  it('preload some audios', function () {
    vanspeak.preAudio(['this','is','too','long']);
    expect(typeof vanspeak.audioList).toEqual('undefined');
  }); 
  
  it("Should be true if the async call has completed", function () {
        expect(flag).toEqual(true);
  });

});

