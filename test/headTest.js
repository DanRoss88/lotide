const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(assertEqual("You did ", "You did it!"));
console.log(assertEqual(16, 16));

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));