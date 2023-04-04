const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🚫🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
};

let tail = function(array){

return array.length === 0 ? undefined : array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));