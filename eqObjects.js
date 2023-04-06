function eqArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  } for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
      return false;
    }
  }
  return true;
};


const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🚫🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
};
console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));


// Returns true if both objects have identical keys with identical values.
// If the key value is an array, ensure that eqArrays can be called to compare the array key values for both objects.

/*Toggleable Tip: Try to implement the solution here yourself and use this to ensure that your approach matches our expectations. That said, expand the tip if you're stuck.

Within our loop, we can use Array.isArray against both values to see if array comparisons need to be made.

If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.
Otherwise (else): assume that they are primitives and continue to use === to compare the two values
*/

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);



  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false