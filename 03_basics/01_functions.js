function add(number1,number2){
    return number1+number2;
}
console.log(add(3,5));

function loginUserMessage(username = "sam"){
    if(!username){
        console.log('Please enter a username');
        return ;
    }
    return `${username} just logged`;
}
console.log(loginUserMessage('hitesh')); // hitesh just logged
console.log(loginUserMessage()); // sam just logged

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000)); // [500,2000]

// Passing object as a parameter in the function
const user ={
    username : "hitesh",
    prices : 199
}
function handleObject(anyobject){
    console.log((`Username is ${anyobject.username} and prices is ${anyobject.prices}`));
}

handleObject({
    username : "sam",
    pricess : 399
});

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(new Array(100,200,300)));