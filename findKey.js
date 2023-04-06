const assertArrayEquals = function (actual, expected) {
  if (actual, expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  let result ;
  for (let element in obj) {
    if (callback(obj[element])) {
      result = element;
      break;
    }
  }
  return result;
}



/* Test case 1
const obj1 = {
  a: { num: 1 },
  b: { num: 2 },
  c: { num: 3 }
};
const callback1 = (x) => x.num === 2;
assertArrayEquals(findKey(obj1, callback1), 'b'); 
*?
/* Test case 2
const obj2 = {
  a: { num: 1 },
  b: { num: 2 },
  c: { num: 3 }
};
const callback2 = (x) => x.num === 4;
assertArrayEquals(findKey(obj2, callback2), undefined); 
*/
/*Test case 3
const obj3 = {};
const callback3 = (x) => x.num === 2;
assertArrayEquals(findKey(obj3, callback3), undefined); 

*/