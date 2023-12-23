//const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email :"pradhandebasish5121@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname: "Debasish",
            lastname: "Pradhan"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
    }
]
console.log(users[0].id);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));