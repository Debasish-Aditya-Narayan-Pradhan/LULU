//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23,5,3)
//console.log(myCreatedDate.toLocaleString());

let newDate = new Date("2023-01-14")
//console.log(newDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let date = new Date();
console.log(date);
console.log(date.getMonth() + 1);
console.log(date.getDay());

date.toLocaleString('default',
{
    weekday: "long",
    
})