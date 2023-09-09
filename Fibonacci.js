const Fibonacci = (num) => {
   let fibSeq = [0,1];
   if (num <=1) {
    return fibSeq[0]

   }
   if (num <=2) {
    return [...fibSeq]
   }
   if (num > 2) {
        for (let i = 1; i < num; i++) {
            fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])
        }
       return [...fibSeq]
   }
    // const result = [0, 1];
    // for (var i = 2; i <= num; i++) {
    // const a = result[i - 1];
    // const b = result[i - 2];
    // result.push(a + b);
    // }
    // console.log(result);
    //return result[num];
    // if (num === 0) {
    //     return 0;
    // }
    // if (num === 1) {
    //     return 1;
    // } else {
    //     return Fibonacci(num - 1) + Fibonacci(num - 2)
    // }
}
console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
console.log(Fibonacci(10))