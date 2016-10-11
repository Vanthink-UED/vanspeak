var vanspeak = require('../src/vanspeak.js');
var word = 'funny';
it('is it a word', function () {
    expect(vanspeak.isWord(word)).toEqual(true);
});