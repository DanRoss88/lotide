const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.length === 0 ? undefined : array.slice(1);
};

module.exports = tail;