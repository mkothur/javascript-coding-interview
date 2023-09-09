// Remove all duplicates in the array

// Using new Set
const uniqueArr = (arr) => {
    return [...new Set(arr)]
}
// console.log('Remove duplicates using set which implicilty will delete the duplicates:', uniqueArr([1,2,3,2]));

// Using forEach
const uniqueArrUsingForEach = (arr) => {
    const resultArr = [];
    arr.map((ele) => {
        if(!resultArr.includes(ele)) {
            resultArr.push(ele)
        }
    })
    return resultArr;
}
console.log('Remove duplicates using forEach:', uniqueArrUsingForEach([1,2,3,2,3,4]));
// console.log('Remove duplicates using forEach:', uniqueArrUsingForEach('Hello World'.split('')));


// Using Reduce
const uniqueArrUsingReduce = (arr) => {
    return arr.reduce((acc, ele) => {
        return acc.includes(ele) ? acc : [...acc, ele]
    }, [])
}
// console.log('Remove duplicates using Reduce:', uniqueArrUsingReduce([0,1,2,3,2,3,4]));
