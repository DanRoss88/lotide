const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it('returns false for "You did ", "You did it!"', () => {
    assert(assertEqual("You did ", "You did it!"), false);
  });
  it('returns true for 16, 16', () => {
    assert(assertEqual(16, 16), true);
  });
});