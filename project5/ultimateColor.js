// generate a random color

const randomColor = function()
{
    const hex = "0123456789ABCEDF"
    let color = '#'
    for(let i = 0; i < 6; i++)
    {
           color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let interValIdset;
const startChangingColor = function(){

     if(!interValIdset)
     {
        interValIdset = setInterval(changeBgcolor, 2000)
     }

     function changeBgcolor()
     {
    document.body.style.backgroundColor = randomColor();
     }
};
const stopChangingColor = function(){
        clearInterval(interValIdset)
        interValIdset = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
