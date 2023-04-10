const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArrayEquals = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArrayEquals;