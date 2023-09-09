// Write a function which gets an array and an element an return a array with this element at the end

const numbers = [1,2]
const append = (arr, ele) => {
    // arr.push(ele);
    // return arr;

    return [...arr, 3]  // it returns all the time same result without modifying the actual array its called pure function
}

const newNumbers = append(numbers, 3)

console.log(newNumbers);
console.log(numbers);


// Concatinate two arrays

const mergeArrays = (arr1, arr2) => {
    // arr1.push(...arr2)
    // return arr1;
    // return arr1.concat(...arr2);
    return [...arr1, ...arr2];
}

const arr1 = [1], arr2 = [2, 3], result= mergeArrays(arr1, arr2);

console.log('MergeArray:', result, 'arr1:', arr1, 'arr2:', arr2)


//  Check if user with such name exists

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30
    }
]

const isNameExists = (name, users) => {
    // let exists = false;
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].name === name) {
    //         exists = true;
    //     }
    // }
    // return exists;
    // const user = users.find((user) => user.name === name);
    // return Boolean(user)

     const idx = users.findIndex((user) => user.name === name);
    return idx >= 0;
}

console.log(isNameExists('Jones', users))

const isNameExistsNew = (name, users) => users.some((user) => user.name === name);
console.log("new way using some method", isNameExistsNew('Jack', users));

