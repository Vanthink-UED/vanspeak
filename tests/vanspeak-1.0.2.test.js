var vanspeak = require('../src/vanspeak-1.0.2.js');
var word = 'funny';
var sentence = "BBC News is the BBC's 24-hour rolling news television network in the United Kingdom. The channel launched as BBC News 24 on 9 November 1997 at 17:30";
it('is it a word', function () {
  expect(vanspeak.say(word)).toEqual(undefined);
});

it('long sentence to short', function () {
  vanspeak.say(sentence);
  expect(vanspeak.wordsGroup.length).toEqual(2);
});

it('preload some audios', function () {
  vanspeak.preAudio(['this','is','too','long']);
  expect(typeof vanspeak.audioList).toEqual('undefined');
});