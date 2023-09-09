// Write a function which implement range

// range(1, 50);
// 1,2,3,4,....50

const rangeFun = (start, end) => {
    const rangeResult = [];
    for (let i = start; i <= end; i++) {
        rangeResult.push(i);
    }
    return rangeResult;
}

// console.log('range(1,10)', rangeFun(1,10));

const range = ((start, end) => {
    return [...Array(end-start).keys()].map((ele) => ele + start)
})

// console.log('range(1,20)', range(1,20));

const a = {test1: 1, test2: 2};

console.log(a);
const b = a
console.log('b', b)
delete a.test1;
console.log('after del a is', a);
console.log('after del b is', b);

console.log([...Array(10 + 1).keys()].slice(1))

const person = {
    name: 'John',
    getName: function() {
        console.log('Name is', this.name)
    }
}
var messenger = {
    greeting: 'Hello'
}
var greeting = "Hi"

function say(name) {
    console.log(this.greeting + ' ' + name);
}
// say.call(this, 'Peach');
// say.call(messenger, 'Peaches');
console.log(typeof '123a')

function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(1,2,3))

function multyCurry(a) {
    return (b) => {
        return (c) => {
            return a*b*c
        }
    }
}
console.log(multyCurry(1)(2)(3))

function calculate(a, b, method) {
    if (method === 'add') {
        return a + b
    } else if (method === 'minus') {
        return a - b
    }
}
console.log(calculate(1,2, 'add'))
console.log(calculate(1,2, 'minus'))

function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function callCal(a, b, callback) {
    return callback(a,b)
}
console.log(callCal(2, 3, add))


// var kepHisWord = true;
// promiseOne = new Promise((resolve, reject) => {
//     if (kepHisWord) {
//         resolve('his promise is resolved')
//     } else {
//         reject('his not fullfilled ')
//     }
// })

// console.log(promiseOne)
// kepHisWord = false;
// promiseTwo = new Promise((resolve, reject) => {
//     if (kepHisWord) {
//         resolve('his promise is resolved')
//     } else {
//         reject('his not fullfilled ')
//     }
// })

// console.log(promiseTwo)



function check(str) {
    return !!(Number(str));
}
console.log(check('12a3'))

let x = 1;
let y = x;
x++
console.log(x)
console.log(y)

function show () {
    let a = 5;
    try {
        setTimeout(() => { throw new Error('error')}, 1000);
        a = 30
    } catch (err) {
        console.log('OH NO', err);
        a = 40
    }
    console.log(a)
}

console.log(show(), a)