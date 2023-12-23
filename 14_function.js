
function MyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

// MyName()

// function addTwoNumbers(number1, number2)
// {
//             console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2)
{
            return number1 + number2;
}


const result = addTwoNumbers(7,9);

//console.log(result);

function loginUserMessage(username = "Sam")
{
    if(!username)
    {
             console.log("Please enter a user name!");
             return
    }
    return `${username} just logged in`
}


let name = loginUserMessage("Debasish");

// console.log(name);
// console.log(loginUserMessage());

function calculateCartPrice(vlau1, valu2, ...num1) //rest operator
{
        return num1
}

console.log(calculateCartPrice(200,400, 500, 2000, 3000));

const user = 
{
    username: "Debasish",
    prices: 129
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username: "Swaroop",
    price: 899
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[0];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([0, 2, 3, 5, 6]));