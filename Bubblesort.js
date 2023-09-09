const sort = (arr) => {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const bubbleSort = (arr) => {
    //Outer pass
    for (let i = 0; i < arr.length; i++) {
        //Inner pass
        for (let j = 0; j < arr.length - i - 1; j++) {
            //Value comparison using ascending order
            if (arr[j+1] < arr[j]) {
                //Value comparison using ascending order
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }
    return arr
}


console.log('sorting',sort([5,3,8,4,6]));
console.log('bubbleSort',bubbleSort([5,3,8,4,6]))