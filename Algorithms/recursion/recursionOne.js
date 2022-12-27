// recursion is when a function calls itself

// 1 Write a function that given a number returns the sum of all numbers from 1 to given number : 

function rSum(number) {
if (number <= 1 ) {
    return number
}
return number + rSum(number - 1);
}
console.log(rSum(10)); 
// written without recursion : 
function sumOfNumb(x) {
    if(x <= 1) {
        return x
    }
    let number = 0; 
    for(let i = 1; i <= x; i++){
        number += i; 
    }
    return number; 

}
console.log(sumOfNumb(10));

// Factorial recursion : 

function factorial(n) {
    if (n <= 1) {
        return n 
    }
    return n * factorial(n -1);
}

console.log(factorial(0));