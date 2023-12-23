const sym = Symbol("Keys")
const obj = {
    name: "Debasish",
    age: 19,
    location: "Banpur",
    [sym]: "Keys"
}

obj.fun = function()
{
    let a = 10;
    let b = 20;
    console.log(a," + ",b," = ",a+b);
}

console.log(obj);