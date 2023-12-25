const user = {
    username: "Debasish",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"

// user.welcomeMessage()

//console.log(this);

// function chai()
// {
//     let username = "Debasish"
//     console.log(this.username);
// }

// chai();

// const chai = function ()
// {
//     let username = "Debasish"
//     console.log(this.username);
// }
//chai()

// const chai =  () =>
// {
//     let username = "Debasish"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => 
// {
//     return num1 + num2
// }
// let value = addTwo(3,4)

// console.log(value);

// const addTwo = (num1, num2) =>  (num1 + num2)

// let value = addTwo(3,4)

// console.log(value);

const addTwo = (num1, num2) =>  ({username: "Debasish"})

console.log(addTwo(1,4));

const myArray = [2, 3, 4, 5, 6]

// myArray.forEach( () => () )
