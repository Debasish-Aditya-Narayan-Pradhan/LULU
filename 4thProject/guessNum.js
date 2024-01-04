let randomNum = (parseInt(Math.random() * 100 + 1));
// console.log(randomNum);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHI = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess =[]
let numGuess = 1;

let playGame = true;
if(playGame)
{
    submit.addEventListener('click', (eve) =>
    {
        eve.preventDefault();
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess);
    })
}
function validateGuess(guess)
{
    // 
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }
    else if(guess < 1)
    {
        alert('Please enter a valid number more than 1')
    }
    else if(guess > 100)
    {
        alert('Please enter a valid number less than 100')
    }
    else
    {
         prevGuess.push(guess)
         if(numGuess === 11)
         {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
         }
         else 
         {
            displayGuess(guess)
            checkGuess(guess)
         }
    }

}

function checkGuess(guess)
{
    //
    if(guess === randomNum)
    {
          displayMessage(`You guessed it right`)
          endGame();
    }
    else if(guess < randomNum)
    {
        displayMessage('Number is Tooo low');
    }
    else if(guess > randomNum)
    {
        displayMessage('Number is Tooo high');
    }
}

function displayGuess(guess)
{
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML =`${11 - numGuess}`;
}

function displayMessage(mess)
{
    //
    lowOrHI.innerHTML = `<h2>${mess}</h2>`
}

function endGame()
{
   //
   userInput.value =''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML ='<h2 id = "newGame">Start New Game</h2>';
   startOver.appendChild(p)
   playGame = false;
   newGame();
}


function newGame()
{
  //
  const newGameButton = document.querySelector('#newGame')
  newGame.addEventListener('click',function(e)
  {
    randomNum = (parseInt(Math.random() * 100 + 1));
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11- numGuess}`
    userInput.setAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })

}