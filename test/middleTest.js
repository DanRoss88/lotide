const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));

assertArraysEqual(middle([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(middle([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertArraysEqual(middle(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(middle(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
