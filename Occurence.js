// find the number of occurences of minimum value in the list.

// const arr = [1,2,3,1,1,1];
// const minVal = Math.min(...arr);
// const minArr = arr.filter((el) => el === minVal);
// console.log(minArr.length)


// const check = (arr) => {
//     let count = {};
//     let N = arr.length;
//     for (let i = 0; i < N; i++) {
//        if (!count[arr[i]]) count[arr[i]] = 0;
//        count[arr[i]]++
//     }
//     console.log(count)
//   console.log(Object.keys(obj).map(key => obj[key]));
//   return Object.values(count);
//   }
//   check('Hello world'.split(''));


//Problem 2:

// Give - Given a string, can you print the occurrence of each character in a string
const Occurence = (str) => {
    let strCount = {};
    let N = str.length;
    for (let i = 0; i<N; i++) {
       if (!strCount[str[i]]) strCount[str[i]] = 0;
       strCount[str[i]]++
    }
  return strCount;
}
  console.log(Occurence('hello world'));

// Problem 4:

// Give - Reverse a string using built-in functions
  console.log('Hellow'.split('').reverse().join(''))

// Problem 1:

// Give - Print duplicate characters from a string using JavaScript 

const duplicateStr = (strArr) => {
    let alreadySeen = {};
    // let N = strArr.length;
    // for (let i = 0; i <= N; i++) {
    //     if (alreadySeen[strArr[i]]) {
    //         console.log(strArr[i]);
    //     } else {
    //         alreadySeen[strArr[i]] = true
    //     }
    // }
    strArr.forEach((str) => alreadySeen[str] ? console.log(str) : alreadySeen[str] = true)
    //console.log(str.split(''))
    // return alreadySeen;
}

console.log(duplicateStr('Hello World'.split('')));

const check = (str) => {
  let strCount = {};
  let N = str.length;
  for (let i = 0; i<N; i++) {
     if (!strCount[str[i]]) strCount[str[i]] = 0;
     strCount[str[i]]++
  }
return strCount;
}
console.log(check('hello world'));


const Occurence1 = (str) => {
  let strMap = {};
  let N = str.length;
  for (let i = 0; i < N; i++) {
    if (!strMap[str[i]]) {
      strMap[str[i]] = 0;
    }
    strMap[str[i]]++
  }
  return strMap
}

console.log(Occurence1('Hello'))

const PrintDuplicates = (str) => {
  let alreadySeenMap = {};
  let dups = []
  let N = str.length;
  for(let i =0; i < N; i++) {
    if (alreadySeenMap[str[i]]) {
        dups.push(str[i])
    } else {
      alreadySeenMap[str[i]] = true;
    }
  }
  return dups;
}
console.log('Duplicates', PrintDuplicates('amma'))

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  let left = 0;
  let right = str.length - 1;
  while(left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++;
    right--
  }
  return true
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('amma'));

const longestWrod = (str) => {
  let words = str.slpit(' ');
  let longest_word = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWrod.length){}
  }
}

  