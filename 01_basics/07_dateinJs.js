//Dates

let myDate = new Date()
console.log(myDate.toString()); // Sun Dec 08 2024 08:33:25 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Dec 08 2024
console.log(myDate.toLocaleString());  // 12/8/2024, 8:37:27 AM
console.log(typeof myDate); //Object

let myCreatedDate = new Date(2023,11,23);
// let myCreatedDate = new Date(2023,0,23,5,3); (5:03 AM)
// let myCreatedDate = new Date("2023-01-14"); // YYYY-MM-DD
// let myCreatedDate = new Date("01-14-2023")// MM-DD-YYYY (Widely used in India)
console.log(myCreatedDate.toLocaleDateString()); // 12/23/2023 (MM-DD-YYYY)

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //1733627437389
// console.log(myCreatedDate.getTime()); // we can get the time stamp of the stored date and time and can compare with the timestamps or dates easily
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate); // 2024-12-08T03:15:29.359Z
console.log(newDate.getMonth()+1); // Months start from zero (Jan - 0 , Feb - 1, March - 3 ,...)
console.log(newDate.getDay());// sunday - 0

// `Todays date is ${newDate.getDay()}`
newDate.toLocaleString('default',{
    weekday : "long",
});