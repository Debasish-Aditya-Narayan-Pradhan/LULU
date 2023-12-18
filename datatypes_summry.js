// primitive datatypes
//7 types : String , Number , Boolean , null , undefined , symbol  , BigInt

const score = 100;
const scoreValue = 100.3

const isLogged = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const another =Symbol('123')
console.log(id === another)

const bigNumber = 232323432634656n;

// Reference (Non primitive)

//Array , objects, Functions

// const heros =["shaktiman","naagraj","doga"];
// let myObj={
//     name: "Debasish",
//     age: 19,
// }

// const myFunction =function()
// {
//     console.log("Hello world");
// }

// console.log(typeof bigNumber) 
// console.log(heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive), Heap (Non-Primitive)

// let myYoutubename = "DebasishPradhan"

// let anotherName = myYoutubename
// anotherName = "luluPradhan"

// console.log(myYoutubename);
// console.log(anotherName);


// let user ={
//     email: "user@google.com",
//     upi: "upi@user1"
// }

// let user2 = user;


// user2.email = "pradhan@gmail.com"

// console.log(user.email);
// console.log(user2.email);

let myInformation = 
{
    Name: "Debasish Pradhan",
    Age: "19",
    Gender: "Male",
    Email: "Pradhandebasish5121@gmail.com"
};

console.table([myInformation.Name,myInformation.Age,myInformation.Gender,myInformation.Email]);
console.log(myInformation[0]);