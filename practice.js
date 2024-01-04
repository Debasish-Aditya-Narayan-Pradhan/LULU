const promise = new Promise((resolve,reject) =>
{
   setTimeout(() =>
   {
    error = false;
    if(!error)
    {
    console.log("Hello");
    resolve();
    }
    else
    {
        reject('Error! Something went happened')
    }
   },1000)
})
.then(() =>
{
        console.log("Hello");
    
})
.catch((error) =>
{
    console.log(error);
})
.finally(() =>
{
    console.log("Promise either resolved or rejected");
})





