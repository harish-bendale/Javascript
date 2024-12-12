var c = 300 // var is function scoped 
let a = 200;

if(true){
    var c = 500;
    console.log(c); // 500
}
console.log(c); // 500
var b = 300;
function change(){
    var b = 500
    console.log(b); // 500
}
change();
console.log(b); //300

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // hitesh
    }
    //console.log(website); // cant access it 

     two()

}
 one();

 if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hitesh youtube
    }
    // console.log(website); // can't access it
}

// console.log(username); // can't access it

// Hoisting
console.log(addone(5)) // 6

function addone(num){
    return num + 1;
}



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// } // can't run it