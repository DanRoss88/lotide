
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

const assertArrayEquals = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
 // => []
middle([1, 2]) // => []
For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/

const middle = function (arr) {
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
console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));