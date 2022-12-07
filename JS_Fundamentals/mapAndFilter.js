// .map() 

// .map() makes a copy of an existing array and manipulates it, creating a new array afterwards : 

let array1 = [1,2,3,4,5]; 
let array2 = array1.map( i => i*2); 
// "i" refers to each individual value in the array, everything after the "=>" is what happens to "i".
console.log(array1, array2); // [ 1, 2, 3, 4, 5 ] and [ 2, 4, 6, 8, 10 ]

// .filter() 

// filter will return to us only specific values in a array by providing boolean callbacks to each element, if true, filter adds to new array : 

const values = [1,2,3,4,5]; 
const evens = values.filter( i => i % 2 == 0); 
console.log(values, evens); // [ 1, 2, 3, 4, 5 ] and [ 2, 4 ]


