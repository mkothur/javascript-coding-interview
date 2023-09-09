// 1. Write a code to get array of names from given array of users.
// 2. Get back only active users
// 3. Sort users by age descending
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

const names1 = [];
const activeNames1 = [];
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
for (let i =0; i < users.length; i++) {
    if (users[i].isActive) {
        activeNames1.push(users[i].name)
    } 
    names1.push(users[i].name)
}
console.log('Names array using for loop', names1);
console.log('Only active Names array using for loop', activeNames1);

const names2 = [];
const activeNames2 = [];
users.forEach((user) => {
    if (user.isActive) {
        activeNames2.push(user.name)
    }
    names2.push(user.name)
})
console.log('Names array using forEach', names2);
console.log('Only active Names array using forEach', activeNames2);


let names = users.sort((user1, user2) => user1.age - user2.age ).filter((user)=> user.isActive).map((user) => user.name)
console.log('Names array using map', names)

// let sortUsers = users.sort((a, b) => a.age - b.age);
// console.log('sorted', sortUsers)


