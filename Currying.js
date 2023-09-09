// Write a function which helps to achieve multiply(a)(b) and return a product of a and b

const multiply = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}

console.log(multiply(2)(3));

const multiplyNew = num1 => num2 => num1 * num2;

console.log(multiplyNew(2)(5));


// Create a curry function : Currying is a advanced techniques of working with functions. 
//Currying is a transformation of functions that translates a function from func(a,b,c) into func(a)(b)(c)