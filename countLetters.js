const assertEqual = require('./assertEqual');

function countLetters(string) {
  const output = {};

  for (const letter of string) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter]++;
      }
      output[letter] = 1;

    }
  }
  return output;
};

module.exports = countLetters;