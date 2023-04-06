const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🚫🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
};
console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));

function countLetters(string) {
  let output = {}; // end object

  for (letter of string) {  //each letter from string
    if (letter !== " ") {
      if (output[letter]) {
        output[letter]++;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};





console.log(countLetters("lighthouse in the house"));