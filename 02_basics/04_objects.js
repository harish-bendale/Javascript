const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a",2:"b"};
const obj2 = {3 : "a" , 4 : "b"};
const obj3 = {5 : "a" , 6 : "b"};

const obj4 = {...obj1, ...obj2 , ...obj3};
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// Destruct the object
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
};

const {courseInstructor } = course;
console.log(courseInstructor); // hitesh

const {courseInstructor : instructor} = course;
console.log(instructor); // hitesh

