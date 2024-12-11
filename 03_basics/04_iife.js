// Immediately invoked function expressions (IIFE)

// IIFE is used to negate the problem of global scope pollution

(function chai(){
    // named iife
    console.log(`DB connection successful`);
})(); 
// If we dont give semicolon after the function end then 
// second function would not get execute bcz it does not sense the code termination


((name) =>{
    console.log(`DB connection second ${name}`);
})('hitesh')