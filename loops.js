// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index ;
//     console.log(element);
     
// }

for(let i = 0; i < 10; i++)
{
    //console.log(`Outer loop value ${i}`);
    for(let j = 0; j < 10; j++)
    {
        // console.log(`Inner loop value ${j} and Outer loop ${i}`);
        //console.log(i + '*' + j + '=' + i * j);  
    }
}

myArray = ["flash", "batman", "superman", "Deadpool"]
for(let i = 0; i < myArray.length; i++ )
{
       // console.log(myArray[i]);
}

// break, continue

// for(let i = 1; i <= 20; i++)
// {
//     if(i == 5)
//     {
//         console.log("5 Detected");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
    
// }

// for(let i = 1; i <= 20; i++)
// {
//     if(i == 5)
//     {
//         console.log("5 Detected");
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
    
    
// }

let i = 1;

// while( i < 11)
// {
//     console.log(i);
//     i++;
// }

do
{
    // console.log("One time must execut");
    console.log(`Value of i is: ${i}`);
    i += 2;
} while(i < 11);