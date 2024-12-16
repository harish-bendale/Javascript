// for in loop prints the index in array , it prints the key in objects
// for of loop is used to directly prints the array elements

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`); // js shortcut is for javascript
                                                            // cpp shortcut is for C++
                                                            // rb shortcut is for ruby
                                                            // swift shortcut is for swift by apple
}

const programming = ['js','rb','py','java','cpp'];

for(const key in programming){
    console.log(key); // 0 1 2 3 4
    // It prints index of the array element not the element itself
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// We cann't iterate over the map using for in loop , it would not print anything neither key , value nor index