//array

const myArray =[0, 1, 2, 3, 4, 5]
const muHeors = ["shaktiman", "naagraj"]

const myArray2 = new Array(7,8,9)

console.log(myArray[1]);

//Array methods
// myArray.push(8)
// myArray.push(10)
// myArray.pop()
// console.log(myArray);

myArray.unshift(5)
myArray.shift()
//  console.log(myArray);
//  console.log(myArray.includes(9));
//  console.log(myArray.indexOf(9));

//  const arr = myArray.join()
//  console.log(myArray);
//  console.log(arr);

//slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

console.log("A", myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("B", myArray);
