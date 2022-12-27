// 1 -- Set myNumber to 42 and myName to my name, then swap values 
let myNumber = 42; 
let myName = "ryan";
console.log(myName, myNumber); // ryan, 42
[myNumber, myName] = [myName, myNumber];
console.log(myName, myNumber); // 42 ryan

// 2 print -52 to 1066

function printNums(x, y) {
    let start = x 
    let end = y 
    
    for(let i = start; i <= end; i++){
        console.log(i);
    };
};

    printNums(-52, 1066);


// 3 Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6. 

function multiplesOfThree(x,y,z) {
let start = x 
let end = y 
let array = z;
for(let i = start; i<= end; i++) {
    if(array.includes(i)) {
        continue
    }
    else {
        if(i%3 == 0 ){
            console.log(i);
        };
    }

};
};
multiplesOfThree(-300, 0, [-3,-6]);

//4 Print integers with while 
function printInts(x,y){
    let start = x; 
    let end = y; 
    while(start < end) {
        start++; 
        console.log(start); 

    }

}
printInts(2000, 5280); 

// 5 dont worry be happy 

function beCheerful(x,y){
let message = x; 
let amount = y; 

for(let i = 0; i <= amount; i++){
    console.log(message, i); 
}

}
beCheerful('good morning', 98);

// 6 you say its your birthday 

const ryansBirthday = [05, 28]; 



