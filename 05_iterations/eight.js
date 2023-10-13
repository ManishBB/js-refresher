const array1 = [1, 2, 3, 4, 5]

// const initialValue = 0

// const myTotal = array1.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => {
//         console.log(accumulator);
//         return accumulator + currentValue
//     },
//     initialValue)

// console.log(sumWithInitial);

const myTotal = array1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 1999
    },
    {
        itemName: "RN Course",
        price: 1599
    },
    {
        itemName: "MERN Course",
        price: 4999
    },
]

const totalCost = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(totalCost);