//var c = 300

let a = 300
if(true)
{
     let a = 10
    const b = 20
    console.log("INNER: ", a);

}


// console.log(a);
// console.log(b);
//console.log(a);

function one()
{
    const username = "Debasish"

    function two()
    {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    two();
}

one();

if(true)
{
    const username = "Debasish"
    if(username === "Debasish")
    {
        const website = " Youtube"

        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addone(5));
function addone(num)
{
     return num + 1;
}

addTwo(2);
const addTwo = function(num)
{
    return num + 2
}

