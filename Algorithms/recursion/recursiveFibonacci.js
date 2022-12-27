// Write rFib(num). Recursively compute and return numth Fibonacci value.

function Fibonacci(n){
    if(n<2) {
        return n;
    }
    return (Fibonacci(n-1) + Fibonacci(n-2));
}
console.log(Fibonacci(10));