const eqArrays = require('../eqArrays')
const assertArrayEquals = require('../assertArraysEqual')

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertArrayEquals(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArrayEquals(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertArrayEquals(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArrayEquals(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL