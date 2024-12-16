// for
for(let i = 0;i<= 10;i++){
    const element = i;
    if(element === 5){
        // console.log('5 number found');
    }
    // console.log(element);
}

//  console.log(element)

for(let i = 1;i<= 10;i++){
    // console.log(`Outer loop values : ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop values ${j} and inner loop value ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for(let index = 0;index < myArray.length;index++){
    const element = myArray[index];
    console.log(element);
}