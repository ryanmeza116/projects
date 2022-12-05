// Prediciting destrucuring : 
// For the following five blocks of code, predict the output. If code throws error, explain error:

// problem 1 

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // =>  Tesla
console.log(otherRandomCar) // =>  Mercedes 

// problem 2 

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); // will throw error, name is not defined. To fix : console.log(employee.name); 
console.log(otherName); // This will return Elon, because otherName is the name attribute of the employee object. 

// problem 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // will print out 12345 because password is defined. 
console.log(hashedPassword); // will print out undefined because password is not a attribute of the person object

// problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2 
const [,,,second] = numbers; // 5 
const [,,,,,,,,third] = numbers; // 2 
//Predict the output
console.log(first == second); // false 
console.log(first == third); // true 

//problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // 'value' ? 
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1 
console.log(willThisWork);// 5 ? 

// question marks show uncertainty while writing -- yet we prevailed. 