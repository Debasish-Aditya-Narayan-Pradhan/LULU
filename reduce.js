const myNumbers = [1, 2, 3, 4]

// const myTotal = myNumbers.reduce(function (acc, curval)
// {
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval;
// },0)

// const myTotal = myNumbers.reduce((acc,curval) =>
// {
//      return acc + curval;
// },0)

// console.log(myTotal);

const shoppingCard = 
[
    {
        itemName: "JsCourse",
        price: 2999
    },
    {
        itemName: "PythonCourse",
        price: 299
    },
    {
        itemName: "JavaCourse",
        price: 4999
    },
    {
        itemName: "CppCourse",
        price: 1999
    }
]

const priceToPay = shoppingCard.reduce((acc,item) =>
{
     return acc + item.price
},0)

const lowPrice = shoppingCard.filter((item) => item.price < 3000)
//console.log(priceToPay);
console.log(lowPrice);