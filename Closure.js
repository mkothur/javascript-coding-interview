// Create a counter function which has increment and getValue functionality

// Closure means that we have access inside of a function to the outside scope

const privateCounter = () => {
    let count = 0;
    return {
        increment: (val = 1) => {
            count += val;
        },
        getValue: () => {
            return count;
        }
    }
}

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// Create a function which stores a secret word which cannot be changed or accessd from outside

const someFn = () => {
    const secret = "secret word";

    return () => secret;
}

const getFn = someFn();
console.log('closure', someFn())
