// Qusetion 1
//console.log(foo); // ReferenceError: foo is not defined
foo = 1;

// Question 2
console.log(bar); // undefined
var bar = 1;

// Question 3
val = 10;
console.log(val);
var val;

function test() {
    console.log('hoisting')
}
test();