const addTwoNumber = (a, b) =>
{
       console.log(a+" + "+ b +" = "+ (a+b));
}

addTwoNumber(3,4)

const name = "Debasish Prahan";
// for(const i of name)
// {
//     if(i == " ")
//     {
//         break;
//     }
//     console.log(i);
// }
// for(const i in name)
// {
//     // if(i == " ")
//     // {
//     //     break;
//     // }
//     console.log(name[i]);
// }
obj = {
    name: "Debasish",
    title: "Pradhan"
}
// for(const i in obj)
// {
//     // if(i == " ")
//     // {
//     //     break;
//     // }
//     console.log(i);

// }

const map = new Map;
map.set("IN","91");
map.set("USA","11");
map.set("UK","33");

// console.log(map.delete("UK"));
// console.log(map.values());

// for(const [i,j] of map)
// {
//     console.log(i+" :- "+j);
// }

const myArray = [1, 2, 3, 4, 5]

const myObj = 
[
    {
        name: "Debasish"
    },
    {
        name: "Pritam"
    },
    {
        name: "Bikash"
    },
    {
        name: "Kunu"
    }

]
// myArray.forEach(function(i)
// {
//     console.log(i);
// })
let myNewArr;
myObj.forEach((i) =>
{
    
    // myNewArr = myNewArr.concat(Array.from(i.name))
     //console.log(Array.from(i.name));

})

console.log(myNewArr);