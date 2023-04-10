const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true);
  });
});
describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  it("returns true for shirtObject, anotherShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it('returns false for shirtObject, longSleeveShirtObject', () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});