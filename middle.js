const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let output = [];
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return output;
  } else if (arr.length % 2) {
    output.push(arr[middleIndex]);
  } else {
    output.push(arr[middleIndex - 1], arr[middleIndex]);
  }

  return output;
};

module.exports = middle;