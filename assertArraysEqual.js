
function eqArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  } for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEquals = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertArrayEquals(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArrayEquals(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertArrayEquals(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArrayEquals(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL