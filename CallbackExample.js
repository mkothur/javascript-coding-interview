// WIthout callback
const calculateNoCallback = (a, b, method) => {
    if (method === 'add') {
        return a + b;
    } else if (method === 'subtract') {
        return a - b;
    } else if (method === 'custom') {
        return a * 2 + b / 3;
    }
}
console.log('without callback')
console.log(calculateNoCallback(2,3,'add'));
console.log(calculateNoCallback(2,3,'subtract'));
console.log(calculateNoCallback(2,3,'custom'));

// Functional programming with callback
// Callback is a function passed into another function

// To improve the above code, the idea is that instead of passing custom string into the calculate() function,
// we can pass afunction into the calculate() function — Callback!

function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function custom (a, b) {
    return a *2 + b/3;
}

function calculate (a, b, cb) {
    return cb(a,b)
}

console.log('with callback')
console.log(calculate(2,3, add));
console.log(calculate(2,3, subtract));
console.log(calculate(2,3, custom));
console.log(calculate(2,3, function (a, b){
    return a *3 + b/3
}));

// Greet a person

function greet (name) {
    console.log('greet() called!');
    return `Hello ${name}`;
}
console.log(greet('mahesh'));

const persons = ['Mahesh', 'Kumar'];
const message = persons.map(greet);
console.log(message)


function map(array, callback) {
    console.log('map() starts!');
    const mappedArray = [];
    for (const item of array) { mappedArray.push(callback(item)) }
    console.log('map() completed!');
    return mappedArray;
  }
  
  function greet(name) {
    console.log('greet() called!');
    return `Hello, ${name}!`;
  }
    
  map(persons, greet);

  // The synchronous callback is executed during the execution of the higher-order function that uses the callback.
  // Examples of synchronous callbacks
  
  // A lot of methods of native JavaScript types use synchronous callbacks.
  // like array.map(callback), array.forEach(callback), array.find(callback), 
  // array.filter(callback), array.reduce(callback, init):

  // executed synchronously
  persons.forEach(function callback(name) {
    console.log(name)
  })

  // The asynchronous callback
  // The asynchronous callback is executed after the execution of the higher-order function.
  // Simply saying, the asynchronous callbacks are non-blocking: the higher-order function completes its execution
  // without waiting for the callback. 
  // The higher-order function makes sure to execute the callback later on a certain event.

  console.log('setTimeout() started')
  setTimeout(function later(){
    console.log('later() called')
  }, 1000)
  console.log('setTimeout() completed')
