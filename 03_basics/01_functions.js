function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log(result);

function loginUserMessage(username="Lorem") {
    if(!username){
        console.log("Please Enter a username!");
        return
    }
    return `${username} just logged in...`
}

// console.log(loginUserMessage("Manish"))
// console.log(loginUserMessage("Manish"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800, 1000))

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Manish",
    price: 1200
})

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue([200,400,600]))