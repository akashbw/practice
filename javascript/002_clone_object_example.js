/**
 * How to clone object in Javascript
 *
 * https://www.youtube.com/watch?v=0ltJGE5Y4Mk
 */

const initialObject = { a: 1, b: 2 };
// cloning the object with spread operator
let clone1 = { ...initialObject };
clone1.foo = 'bar';
console.log(initialObject, clone1);
// cloning the object using Object.assign
let clone2 = Object.assign({}, initialObject);
clone2.fizz = 'buzz';
console.log(initialObject, clone2);
// cloning the object with `structuredClone`
// (used for deep cloning, provided in node 17)
let clone3 = structuredClone(initialObject);
clone3.newKey = 'newValue';
console.log(initialObject, clone3);
