function eqArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  } for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEquals = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// consider countOnly function, and add in another section to the array for index
const letterPositions = function (sentence) {
  const results = {};
  for (const i in sentence) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } 
        results[letter] = [i];
      
    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));
console.log(assertArrayEquals(letterPositions("hello world") , ("hello world")));