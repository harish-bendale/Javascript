// reducer -> used to sum up the array or object value

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     return acc+currval;
// },0);
// console.log(myTotal); // 6

// working =>
//     acc = 0
//     acc= acc + currval = 0 + 1(myNums element)
//     acc= acc + currval = 1 + 2(myNums element)
//     acc= acc + currval = 3 + 3(myNums element)
//     acc = 6 (final answer); 

// const myTotal = myNums.reduce((acc,currval)=> (acc+currval));
// console.log(myTotal); // 6

const myTotal = myNums.reduce((acc,currval)=> acc+currval,0);
console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName : "py course",
        price : 5000
    },
    {
        itemName : "c++ course",
        price : 5000
    },
    {
        itemName : "java course",
        price : 5000
    }
];

const totalPrice = shoppingCart.reduce((acc,currval)=> acc+currval.price,0);
console.log(totalPrice); // 15000