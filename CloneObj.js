// How can I clone an object in javascript

let obj = {a: 1, b: 2 };
//let clone = { ...obj };
let clone = Object.assign({}, obj)
clone.foo = 'foo';
console.log('Original', obj);
console.log('clone using Object assign', clone);

