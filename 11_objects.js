// singleton

// object literals

//Object.create


const mySym = Symbol("Key1")
const JsUser = {
    name: "Debasish",
    "Full name": "Debasish Aditya Narayan Pradhan", 
    [mySym]: "myKey" ,
    age: 19,
    location: "Banpur",
    email: "pradhandebasish5121@gmail.com",
    isLogged: false,
    lastLoginDay: ["Monday", "satarday"]
}
myArray = ["h", "i"]
// console.log(JsUser.name);
// console.log(JsUser["Full name"]);
// console.log(typeof JsUser[mySym]);
//console.log(JsUser);

JsUser.email = "pradhandebasish5121@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "2201020197@cgu-odisha.ac.in"
//console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");
}
JsUser.greetingTwo = function()
{
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());