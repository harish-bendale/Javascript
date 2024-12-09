// array

const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman','naagraj']

const myArr2 = new Array(1,2,3,4)
// console.log(typeof myArr) // object

// Array Methods

// myArr.push(6);
// console.log(myArr);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);


myArr.unshift(9) // [9, 0, 1, 2, 3, 4, 5]
myArr.shift() // [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3)) // 3

const newArr = myArr.join()
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); //0,1,2,3,4,5 (converted array into string)
console.log(typeof newArr); // string


// splice , splice

console.log("Original Array ",myArr); // [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3); 
console.log(myn1); // [ 1, 2 ]
console.log("A ",myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);
console.log(myn2); // [ 1, 2, 3 ]
console.log("B ",myArr);  // B  [ 0, 4, 5 ]