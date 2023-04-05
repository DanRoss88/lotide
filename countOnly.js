const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🚫🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
};
console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));
//The function should report back how many instances of each string were found in the allItems array of strings.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let output = {}
  for (let item of allItems) {
    if (itemsToCount[item]){
    if(output[item]){
      output[item]++;
      } else {
      output[item]= 1;
    }
    }
  }
  return output 
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));