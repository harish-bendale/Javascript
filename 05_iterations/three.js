// for of
// ["" , "" , ""]
// [{}, {} , {}]
const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num); // 1 2 3 4 5
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Char at each line is ${greet}`); // H e l l o  w o r l d
}

// Maps
const map = new Map();
map.set('IN', 'India');
map.set('USA', ' United States Of America');
map.set('Fr','France');
map.set('IN','India');
console.log(map);//Map(3) {
            //     'IN' => 'India',
            //     'USA' => ' United States Of America',
            //     'Fr' => 'France'
            //   }

for(const [key,value] of map){
    console.log(`${key} :- ${value}`); //  IN :- India
                                        // USA :-  United States Of America
                                        // Fr :- France
}

const myObjects = {
    game1 : "NFS",
    game2 : "spiderman"
}

// for(const [key,value]of myObjects){
//     // console.log(`${key} and ${value}`);
// }

// for of loop does not works top iterate the Object