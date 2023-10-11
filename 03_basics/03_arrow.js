const user = {
    username: "Manish",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Jinnu"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Manish"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Manish"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Manish"})

console.log(addTwo(2,3));

const myArray = [2, 5, 3, 7, 8]

myArray.forEach((a) => console.log(a+1))

console.log(myArray);