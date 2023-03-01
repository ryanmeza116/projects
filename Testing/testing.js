//  Return sum of array
function addArray(array) {
    let sum = 0;
    for(let i of array){
        sum += i; 
    }
    return sum; 
}

function reduceArray(array) {

    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return sum;

}

// The reduce method does what the first function does, but in less lines of code. It takes in two callback functions, (accumulator, currentValue) and (0)
// The second argument declares the value of accumulator, currentValue is the current element in the array. 

console.log(reduceArray([1,2,3,4,5,6,7,8,9]))
console.log(addArray([1,2,3,4,5,6,7,8,9]))

//  same function ran with reduce method : 

// Compares two arrays, awards points depending on different conditions
function aliceAndBob(a, b) {
    let Bob = 0; 
    let Alice = 0; 
    let sumArray = []
    for(let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            Alice += 1; 
        } else if (a[i] < b[i]) {
            Bob += 1; 
        }
    }
    sumArray = [Alice, Bob]
    return sumArray;
}

console.log(aliceAndBob([1,2,3], [3,2,1]))

// Absolute diagonal difference : 

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0; 
    console.log(arr.length);
    for(let i = 0; i < arr.length; i++) {
        console.log(sum1)
        sum1 = sum1 + arr[i][i]
        sum2 = sum2 + arr[i][arr.length-1-i]
    }
    return Math.abs(sum1-sum2)
}


console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]));