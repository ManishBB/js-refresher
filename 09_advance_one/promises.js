 const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
 })

 promiseOne.then(function(){
    console.log('Promise consumed');
 })

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email:"chai@example.com"})    
    }, 1000);
})

promise3.then((user)=>{
    console.log(user);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Manish", password:
        123})
        } else {
            reject('Error: Something went wrong!')
        }
    }, 1000);
})

promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("The promise is either resolved or rejected!"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password:
        123})
        } else {
            reject('Error: Something went wrong!')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))