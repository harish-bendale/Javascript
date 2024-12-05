
// console.log("4" > 2); // true
// console.log("2" > 4); // false
// console.log("04" > 2); // true
// console.log("04" < 2) // false
 
// Below types of comparisons should be avoided
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0); 

/*
Equality check == and comparisons > < >= <= 
work differently.
Comparisons convert the null to a number ,
treating it as 0 
Thats why (3) null >= 0 is true and 
(1) null > 0 is false , null == 0 is also false
*/


// Strictly Check ( === )
console.log("2" === 2); //(false) It checks datatype as well