// Reverse each word in sentence

const str = "Hello"
const reverseString = str => str.split('').reverse().join(' ');
console.log('reverse sentence', reverseString(str))

// Most common string in the array.

const mostcommonString = (strings) => {
    const commonStrings = {};
    strings.map((str) => {
        if (commonStrings[str] === undefined) {
            commonStrings[str] = 1;
        } else {
            commonStrings[str]++
        }
    });
    // let maxEntry, maxValue = 0;
    // for (let commonString in commonStrings) {
    //     if (commonStrings[commonString] > maxValue) {
    //         maxEntry=commonString;
    //         maxValue=commonStrings[commonString]
    //     }
    // }
    //return maxEntry
    //{maxEntry: maxValue} 
    return commonStrings;
}

const mostFrequent = (arr) => {
    const mapping = arr.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {})
    //return mapping;
    return Object.entries(mapping).reduce((acc, el) => el[1] > acc[1] ? el : acc, [null, 0])[0]
}

console.log('most common is ', mostcommonString(['a', 'b', 'c', 'b']))
console.log('most common is ', mostcommonString(['1', '2', '1', '1']))
console.log('most common is ', mostcommonString('aaabbbccc'.split('')))
console.log('most common is ', mostFrequent(['a', 'b', 'c', 'b']))


// Convert string into an array
const string = 'aabbccc';

// Option 1
console.log(string.split(''));

// Option 2
console.log([...string]);

// Option 3
console.log(Array.from(string));

// Option 4
console.log(Object.assign([], string))

