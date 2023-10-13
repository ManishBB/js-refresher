const coding = ["JS", "Ruby", "Java", "Python", "CPP"]

// coding.forEach( function (val){
//     console.log(val);
// })


// coding.forEach( val => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// })

myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} has an extention of file is ${item.languageFileName}`);
});