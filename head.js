const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🚫🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
};

let head = function(array){
return array.length === 0 ? undefined : array[0];
}
console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));



console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));