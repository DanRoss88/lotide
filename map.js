

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




const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const people = [
  { name: "John", age: 80 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 }
];
const callback = function (person) {
  return person.age;
}
const expected = [80, 30, 40];
const actual = map(people, callback);
console.log(actual); // [20, 30, 40]
assertArrayEquals(actual, expected);

/* const nums = [1, 2, 3, 4, 5];
const callback = function(item) {
  return item * 2;
}
const expected = [2, 4, 6, 8, 10];
const actual = map(nums, callback);
console.log(actual); // [2, 4, 6, 8, 10]
assertArrayEquals(actual, expected); */

/*const emptyArray = [];
const callback = function(item) {
  return item * 2;
}
const expected = [];
const actual = map(emptyArray, callback);
console.log(actual); // []
assertArrayEquals(actual, expected); */