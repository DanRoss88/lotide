const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (output[item]) {
        output[item]++;
      } else {
        output[item] = 1;
      }
    }
  }
  return output;
};

module.exports = countOnly;