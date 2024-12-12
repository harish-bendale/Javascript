const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage :function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage(); // hitesh, welcome to the website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.username = "sam";
user.welcomeMessage(); // sam, welcome to the website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this) // {}
// this keyword not works in functions

function user1(){
    let name = 'Hitesh'
    console.log(`${this.name} of the user`); // undefined of the user
}
user1();

const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}
chai()

// If we used () brackets then there is no need to write return keyword

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }


// const addTwo = (num1,num2) => num1+num2;

const addTwo = (num1,num2)=>(
    num1+num2
);
console.log(addTwo(8,9)); // 17