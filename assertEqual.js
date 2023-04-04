const assertEqual = function (actual, expected) {
  return actual === expected
    ? "✅✅✅✅" + " Assertion Passed: " + actual + " === " + expected
    : "🚫🚫🚫🚫" + " Assertion Failed: " + actual + " !== " + expected;
};
console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));