const name = "hitesh"
const repoCount = 50;
// console.log(typeof name); // string

//console.log(name + repoCount + " Value"); // old method to concatenate string
// console.log(`Hello my name is ${name} and my repo count is
//     ${repoCount}`); // new method to concat the string

const gameName = new String("hitesh-hc-com")
console.log(gameName[0]); // h


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf("t")); // 2
console.log(gameName.indexOf('t')); // 2
// "" and '' does not make any difference both works same

const newString = gameName.substring(0,4);
console.log(newString); // hite (doest not include the last charcter of the specified range same as of sort function in cpp)

const anotherString = gameName.slice(0,4); // it also accepts negative values
console.log(anotherString); // hite (same as of substring it also does not include the last character from the specified range)

const newStringOne = "    hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

console.log(gameName.split('-')[0]);







