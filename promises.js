const promiseOne = new Promise(function(resolve,reject)
{
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function()
    {
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function()
{
    console.log("Promise consumed");
});

new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function()
{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
         resolve({username: "Debasish", email: "pradhandebasish5121@gmail.com"})
    },1000)
})

promiseThree.then(function(user)
{
     console.log(user);
})

const primiseFour = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        let error = true;
        if(!error)
        {
            resolve({username: "Debasish", password:"lulu@2004"});
        }
        else
        {
            reject('ERROR Something went wrong!')
        }
    },1000)
})

 primiseFour
 .then((user) =>
{
    console.log(user);
    return user.username;
})
.then((username) =>
{
  console.log(username);
})
.catch((error) =>
{
    console.log(error);
}).finally(() => console.log("The primise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error = true;
        if(!error)
        {
            resolve({username: "Debasish", password:"lulu@2004"});
        }
        else
        {
            reject('ERROR Something went wrong!')
        }
    },1000)
})

async function consumePromiseFive()
{
    try{
    const response =  await promiseFive;
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers()
// {
//     try{
//    const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await reponse.json();
//     console.log(data);
//     }
//     catch(error)
//     {
//         console.log("E: ",error);
//     }
// }

//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>
{
        return response.json()
})
.then((data) =>
{
   console.log(data);
})
.catch((error) =>
{
    console.log(error);
})

