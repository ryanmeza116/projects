// Object.freeze(); 

// If we use const, we cannot change value after it is first declared, 
// unless variable is an array or object, in which we can add, change, or remvoe values. 

const arr = [1,2,3,4]; 
arr.push(300); 
console.log(arr); 

// If we want to prevent a variable from having values added or removed, we use freeze()

const frozenArr = Object.freeze([1,2,3,4]); 
// frozenArr.push(300); 

// error : Cannot add property 4, object is not extensible

// -----SPREAD, CONCAT, SLICE----- : 
// Given we have imutable list of groceries : 

const groceryList = Object.freeze([ 
    {"item":"carrots", "haveIngredient": false},
    {"item":"onions", "haveIngredient": true},
    {"item":"celery", "haveIngredient": false},
    {"item":"cermini mushrooms", "haveIngredient": false},
    {"item":"butter", "haveIngredient": true},
    {"item":"milk", "haveIngredient": false},
]);

// if we need to add a value to it, we use spread to make a copy, and add to that new list : 

const needThyme = [...groceryList, {"item": "thyme", "haveIngredient": false} ]; 
console.log("need thyme", needThyme); 
// the ...groceryList at beginning of array makes copy of objs in array,
// we then follow this with a comma, as if we are simply declaring an array with new "thyme" object

// can also use .concat(), takes two arrays and "glues" them together, giving us new array. 
const needMoreThyme = groceryList.concat( [ {"item": "Thyme", "haveIngredient": false}])
console.log("need more thyme", needMoreThyme); 
// if later we found we have thyme and want to change "haveIngredient" value to true, we can : 
const gotTheThyme = [...needThyme.slice(0,6) , {...needThyme[6], "haveIngredient": true}];
console.log("got the thyme" , gotTheThyme);

// slice is function which takes 2 parameters and returns an array of values that have indexes between those two parameters. 
// first number, 0 , will be included in our array. Second, 6, will not be. 

// If celery is non ingredient, we can also remove with slice : 

const nonNeceCelery = [...gotTheThyme.slice(0,2), ...gotTheThyme.slice(3) ];
console.log(nonNeceCelery); 

// Once again we can use slice, the first slice giving us the ingredients at indexes 0 and 1 
// (because index 2 is NOT included), the second slice giving us all the ingredients with indexes from 3 to the end.

// -----SORTING----- 

// When we use sort, we manipulate the array it was run on, not giving us a new one : 
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
 // items.sort(); // this will throw an error 


// we can get around error by using ... operator 
const sortedItems = [...items].sort();
console.log(sortedItems); 


const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );
console.log(
    "sorted groceries" , sortedGroceries);