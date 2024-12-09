// Singleton
// Objects.create

// object literals

const mySym = Symbol("key1");
// Used symbols as a key in objects

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Chaudhary", // we cant access it by Jsuser.full name If we have to access it then syntax is Jsuser["full name"]
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // prefer detail description comment in object declaration
console.log(JsUser[mySym]); // mykey1
console.log(JsUser.mySym) // undefined

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser); // It would not allow to modify object further
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); // does not made any changes in the above object values

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting()); // If we are using still after freezing the 
//object then it would give error
// Answer -> Hello JS user

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(JsUser.greetingTwo()); // Hello JS user , Hitesh
console.log(JsUser) // 
// {
//     name: 'Hitesh',
//     'full name': 'Hitesh Chaudhary',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@microsoft.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     greeting: [Function (anonymous)],
//     greetingTwo: [Function (anonymous)],
//     [Symbol(key1)]: 'mykey1'
//   }