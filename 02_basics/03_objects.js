//singleton
//Object.create

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Manish",
    "full name" : "Manish",
    [mySym]: "myKey1",
    age: 23,
    location: "Pune",
    email: "mbb7224@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mbb@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mbb@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JS User")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
