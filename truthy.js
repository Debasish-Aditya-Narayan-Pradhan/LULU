const userEmail = []

if(userEmail)
{
   // console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptObj = {}

// if(Object.keys(emptObj).length === 0)
// {
//      console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefiend

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// var1 = undefined ?? 15

val1 = null ?? 20 ?? 10
//console.log(val1);

// Terniary Opetator

// condition ? true : false
 
const iceTeaPrice = 70;
 (iceTeaPrice > 80) ? console.log("Mor e than 80") : console.log("Less than 80");

//console.log(realvalue);
//iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");;