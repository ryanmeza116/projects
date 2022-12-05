const person = {
    firstName: 'Ryan',
    lastName: 'Meza',
    email: 'ryanmeza116@gmail.com',
    password: 'bananas'
};

const animals = ['horse','dog','cat','mouse','bird']
// before es6
let preEmail = person.email;
let preFirstAnimal = animals[0];

//after es6

const { email } = person; 
const [ firstAnimal ] = animals; 
const { password : hashedPassword } = person; 

console.log(email);
console.log(firstAnimal);

// accessing nested values 

const dude = {
firstName: 'Bob',
lastName: 'Marley',
email: 'bob@marley.com',
password: 'sekureP@ssw0rd9',
username: 'barley',
addresses: [
    {
    address: '1600 Pennsylvania Avenue',
    city: 'Washington, D.C.',
    zipcode: '20500',
    },
    {
    address: '221B Baker St.',
    city: 'London',
    zipcode: 'WC2N 5DU',
    }
],
createdAt: 1543945177623
};

// to access individual values : 

const {addresses : [whiteHouse, sherlock ]} = dude;
console.log(whiteHouse, sherlock); // returns : {
    //address: '1600 Pennsylvania Avenue',
    //city: 'Washington, D.C.',
    //zipcode: '20500'
 // } { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }

// to access values other than first : 

const { addresses : [, {city: london}]} = dude; 
console.log(london); // returns London