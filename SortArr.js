// Sort the array of numbers

const result = [3,5,1].sort((a,b) => (a < b ? -1 : 1)); // sort method mutates existing array
console.log(result);

const arr = [2,1,10,0];
const sortedArr =  arr.sort((a, b) => (a < b ? 1 : -1)) // Descending order
// arr.sort((a, b) => a - b) // Ascending order
// arr.sort((a, b) => b - a) // Descending order
//arr.sort((a, b) => (a < b ? -1 : 1)); // Ascending order
console.log('sortedArr:', sortedArr, "originalArr:", arr);

// Sort array of objects by author's lastname;

const books = [
    {name: "Harry Potter", author: "Joanne Rowlling"},
    {name: "Warcross", author: "Marie Lu"},
    {name: "The Hunger Games", author: "Suzanne Collins"}
]
books.sort((book1, book2) => {
    const authorLastname1 = book1.author.split(" ")[1];
    const authorLastname2 = book2.author.split(" ")[1];
    return authorLastname1 < authorLastname2 ? -1 : 1
})
console.log('Sort array of objects by authors lastname', books)