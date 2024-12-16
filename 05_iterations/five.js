// for each does not returns value 
// filter returns the value

const coding = ["js","ruby","java","python","cpp"];

// for eaach loop

// 1)
coding.forEach( function(val){
    console.log(val);
})
// 2)
coding.forEach((val)=>{
    console.log(val);
})

// 3)
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

// 4)
coding.forEach((item,index,arr)=>{
    console.log(item, " ", index , " ", arr);// js   0   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                            // ruby   1   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                            // java   2   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                            // python   3   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                            // cpp   4   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})

// 5)
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach((item)=>{
    console.log(item.languageName);
})