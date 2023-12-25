// Immideiately Invokded Function Expression

// (function chai()
// {
//     // names IIFE
//     console.log(`DB CONNECTED`);
// }) ();

// (  (name) =>  {
//     console.log(`DB CONNECTED 2 ${ name}`);
// }) ("Debasish") 


// (function addTwoNumber(a, b)
// {
//     console.log(a + b);
// }) (5, 7) ;

// ((a, b, c) => 
// {
//     console.log(a + b + c);
// }) (1, 2, 3);

// function chai()
// {
//     const name = "Debasish"
//     console.log(this.name);
// }

// chai();

// const chai = function()
// {
//     const name = "Debasish"
//     console.log(this.name);
// }
// chai();

// const num = 10;
//  const chai = () =>
// {
//     const name = "Debasish"
//     console.log(this.num);
// }
// chai();

const num = 10;
 const chai = () =>
{
    const name = "Debasish"
    console.log(name);
}
chai()