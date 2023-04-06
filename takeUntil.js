

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


const takeUntil = function (array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }

  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
assertArrayEquals(takeUntil(data1, x => x < 0), expected1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ["I've", "been", "to", "Hollywood"];
assertArrayEquals(takeUntil(data2, x => x === ','), expected2);