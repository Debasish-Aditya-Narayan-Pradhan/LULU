const div = document.querySelector('div')
const button = document.querySelectorAll('button')
console.log(div);
console.log(button);



const randomColor = function()
{
   const hexaNum = "0123456789ABCDEF";
   let hex ="#";
     for(let i = 0; i < 6; i++)
     {
      hex += hexaNum[Math.floor(Math.random() * 16)];
     }
  
     return hex;
     
}

let interval;

const startChangingColor = function()
{
      interval = setInterval(changeBg,2000);

      function changeBg()
      {
         div.style.backgroundColor = randomColor();
      }
}

const stopChangingColor = function()
{
   clearInterval(interval);
}

button.forEach((e) =>
{
   
   e.addEventListener('click',() =>
   {
      if(e.innerHTML === 'Start')
      {
         startChangingColor();
      }
      else if(e.innerHTML === 'Stop')
      {
         stopChangingColor();
      }
   })

})

// const setTime = setTimeout(function()
// {
//    console.log("hello");
// },1000)

// clearTimeout(setTime) 