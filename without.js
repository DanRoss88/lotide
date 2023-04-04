function eqArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}

function without(sourceItems, removeItems) {
  let newArr = [];
  for (let source of sourceItems) {
    if (!removeItems.includes(source)) {
      newArr.push(source);
    }
  }
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL


// Test cases for without function
assertArraysEqual(without([], []), []); // empty array
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // empty itemsToRemove array
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // removing one item
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // removing all items
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]); // removing non-existent item
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // removing multiple items, including strings
assertArraysEqual(without(["hello", "world", "lighthouse"], ["world"]), ["hello", "lighthouse"]); // removing one item from array of strings
assertArraysEqual(without([true, false, undefined, null, "", 0], [false, null]), [true, undefined, "", 0]); // removing falsy values
