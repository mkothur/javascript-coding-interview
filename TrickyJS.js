// 1.String reverse

const reverseString = str => str.split('').reverse().join(' ');
console.log('Reverse a string', reverseString('Welcome to this Javascript Guide!'));


// 2. Empty an array
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// option 1
arr.length = 0;
// option 2;
arr = [];
// option 3
arr.splice(0, arr.length);
console.log(arr);

// 3. Number is int or not
const isInt = num => num % 2 === 0 ;
console.log(isInt(4.4));

// 4.Define callback and give simple example
// Callback is a function that is passed to another function as an argument and its executed after some operation has been completed.
// Example
function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });

  // 5 Anagram strings
  const isAnagramString = (str1, str2) => {
      let a = str1.toLowerCase();
      let b = str2.toLowerCase();
      // Sort the strings, and join the resulting array to a string. Compare the results
      a = a.split('').sort().join('')
      b = b.split('').sort().join('')
      return a === b
  }
console.log('anagram strings', isAnagramString('Mary', 'Army'));

// 6
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// 7
(function() {
    var a = b = 5;
  })();
  
  console.log(b);

// 8
for (var i = 0; i < 4; i++) {
    const log = function() {
        console.log(i)
    }
    setTimeout(log, 0);
    //setTimeout(() => console.log(i), 0)
}

// The classic pitfall here is the Zero delays. setTimeout(callback, 0) doesn't mean that the callback will be fire after zero milliseconds.

// Here’s what happen on the event loop side:

// Current Call Stack is set to the first setTimeout().

// windows.setTimeout() is considered as a Web APIs (for better Non-Blocking I/O). So the call stack sends this part of code to correct Web APIs. After 0 milliseconds, the callback (here an anonymous function) would be sent to the Queue (not to the call stack).

// As the call stack is free, for-loop can continue to the second setTimeout …(repeat after we meet this condition i < 4)…

// Now the loop is over and i === 4. JS can now execute the callback queue one by one. Each console.log(i) will print the 4.
//var k;
// for (k = 0; k < 4; k++) {
//     const log1 = function() {
//        console.log(k)
//      }(k);
//     setTimeout(log1, 3000);
// }


// 9. palindrome

const isPalindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparison
    return str === str.split('').reverse().join('')
}
console.log('is this string palindorme', isPalindrome('amma'));

// 10. count vowels

// Count vowels in the strings

const findVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // let count = 0;
    // for (let char of str.toLowerCase()) {
    //     if (vowels.includes(char)) {
    //        count++
    //     }
    // }
    // return count;
    return str.toLowerCase().split('').reduce((acc, char) => vowels.includes(char) ? acc + 1 : acc, 0)
}

console.log('Vowels count using reduce in this string is', findVowels('aadessso'))
//console.log('Vowels count using for in this string is', findVowels('aadessso'))


console.log('aadessso'.split(''))