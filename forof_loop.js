// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
const obj = { name: "Debasish",
              phonenumber: "7752018875"
}

for(const iterator of arr)
{
       // console.log(iterator);
}
const greetings = "Hello World"
for(const iterator of greetings)
{
       // console.log(iterator);
}

// Maps

const map = new Map;
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

// console.log(map);
// console.log(map.get('IN'));

// for(const key of map)
// {
//     console.log(key);
// }
for(const [key, value] of map)
{
    //console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
     'game2': 'spiderman'
}

// for(const [key, value] of myObject)
// {
//     console.log(key, ':-', value);
// }

for(const key in map)
{
    console.log(key);
}