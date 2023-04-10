const assert = require('chai').assert;
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL