// setTimeout()

setTimeout( function () {
    console.log('start');
}, 3000);

console.log('end'); 

// Two parameters in setTimeout(), a function and a number, 
// The number represents the delay in miliseconds. Mili == Thousand, therefore 3000 == 3 seconds. 

// This function parameter is called by setTimeout() like a function. It represents something 
// that we conventionally refer to as a "callback function", a function that is passed into 
// another function to be called by that function. 

// In JS, functions are just like any other variables : 
typeof( "hello" );
//'string'
typeof( function() {} );
//'function'

// We can declare a variable and set it equal to a function then then call that function using variable name : 

var exampleFunction = function(message){
    console.log( message );
};
    
exampleFunction( "Hello from exampleFunction" );

// Like above, we can also pass functions as a parameter 
// into parent functions, example of calling parameter 'callback' and passing as a message: 

function parentFunction(callback) {
    callback('Info from parent function');
}

// calling parent function : 

parentFunction(exampleFunction); 

// often times parent functions are used in anonymous functions, we can re-write like this : 

parentFunction(function(message) {
    console.log(message);
}); 


// callback functions are used a lot when : 
// Code needs to run after event (onClick)
// Making API calls 
// Querying Database 


