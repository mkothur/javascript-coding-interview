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