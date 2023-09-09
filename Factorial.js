const Facorial = (num) => {
    if (num === 0 || num === 1) {
        return 1
    } else {
        return (num * Facorial(num - 1))
    }
}

console.log(Facorial(0));
console.log(Facorial(1));
console.log(Facorial(2));
console.log(Facorial(3));
console.log(Facorial(4));
console.log(Facorial(5))