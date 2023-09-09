// What will be logged here?

// Task 1
// function getItem1() {
//     console.log(this) 
//     // Inside a functions `this` is always reference a window but its not correct
//     // Inside functions `this` is referencing the global object it may be window, it may be undefined and it may be something else.
//     // It all depends on the context. But if you define the function key word
// }
// getItem1()


// // Task 2
// const item = {
//     title: "Ball",
//     getItem() {
//         console.log('item-this', this)
//     }
// }
// item.getItem();

// // Task 3

// class ItemClass {
//     //title = "Ball";
//     // getItem() {
//     //     console.log('item-class -this', this)
//     // }
//     getItem() {

//         [1,2].map((item) => {
//             console.log('inside map', this)// Arrow function getting the context from the parent and it has the reference to the instance.
//         });
//         // function someFun() {
//         //     console.log('inside function', this)
//         // }
//         // someFun()
//     }
// }


// const itemObj = new ItemClass();
// itemObj.getItem();

function outer() {
    const x = 10;
    return function() {
        const y = 5;
        return x + y;
    }
}
let some = outer();
console.log(some());
//https://blog.bitsrc.io/a-practical-guide-to-es6-arrow-functions-c16975100cf5
const details = {
    name: 'Arfat',
    friends: ['John', 'Ram'],
    getName: function() {
        //const manualThis = this;
        this.friends.forEach(function(friend) {
            console.log(this.name + " is friends with " + friend);
        }, this)
        // this.friends.forEach((friend) => {
        //     console.log(this.name + " is friends with " + friend);
        // })
        //console.log('Name', this.name)
    }
}
details.getName();

let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
console.log('Multuline string', greeting)

// Destructuring
//Array
let fruits = ['Orange', 'Banana'];
let [a, b] = fruits; // Array Destructuring
console.log('Array Destructuring', a,b);

//Object;
let person = {name: 'Josh', age: 22};
let {name, age} = person; // Object Destructuring
console.log('Object Destructuring', name,age);

function sum (a,b,c) {
    return a + b + c;
}

console.log('call',sum.call(this, 1,2,3));
console.log('appy',sum.apply(this, [3,2,1]));
console.log('spread operator',sum(...[3,2,1]));
let ref = sum.bind(this);
console.log('bind',ref(3,2,1));

const student = {
    registration: "123456",
    name: "Sandeep",
    age: 33,
}

for(key in student) {
  console.log(key, student[key]);
}

const str = "Hello World";

for(element of str) {
  console.log(element);
}

const arr = [1,2,3];

for(ele of arr) {
  console.log(ele);
}