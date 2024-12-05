// Is javascript statically typed language
// or dynamically typed language -> dynamically


// Primitive Datatypes
/*
 7 Types : String , Number , Boolean ,null 
 , undefined , Symbol , BigInt
*/

const score = 100 
console.log(typeof score); // number

const scoreValue = 100.3
console.log(typeof scoreValue); // number

const isLoggedIn = false
console.log(typeof isLoggedIn) // boolean

const outsideTemp = null
console.log(typeof outsideTemp) //object

let userEmail;
console.log(userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(typeof id); // symbol
// Symbol gives uniqueness to every value irrespective of the value passed
console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n
// applying n after the number automatically converts the Number into BigInt
console.log(typeof bigNumber); // bigint


// (Reference) Non-Primitive 
// Array , Objects , Functions

const heros = ["shaktiman", "naagraj" , "doga"];
console.log(typeof heros) // object

let myObj = {
    name : "hitesh",
    age : 22
}
console.log(typeof myObj); // object

const myFunction = function(){
    console.log("Helo World");
}
console.log(typeof myFunction); // function
 
// Link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive) , Heap (Non-Primitive)

// In stack memory allocation we get the copy of the address 
// after making some changes also adress holding value doesnt changes

// In head memory allocation we get the direct access of the address 
// after making changes , the changes persists in original address also
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); // hiteshchoudharydotcom
console.log(anothername); // chaiaurcode

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com
