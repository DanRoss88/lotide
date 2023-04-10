const assertEqual = require('./assertEqual');

const head = function(array) {
  return array.length === 0 ? undefined : array[0];
};  

module.exports = head;