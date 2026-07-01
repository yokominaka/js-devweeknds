let randomNumber= parseInt(Math.random()*100 + 1)
const submitButton= document.querySelector('#submitGuess')
const userInput= document.querySelector('#guessInput')
const guessSlot = document.querySelector('.previousGuesses')
const result= document.querySelector('.attempts')
const lowOrHigh= document.querySelector('.LowOrHi')
const startOver = document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess= []
let numGuess= 1

let playGame= true;
if(playGame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if (guess < 1){
        alert('please enter a number greater than 0')
    }else if (guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess=== randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} attempts`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Your guess is too low`)
    }else{
        displayMessage(`Your guess is too high`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++
    result.innerHTML = `${11- numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2> ${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame= false
    newGame()
}


function newGame(){
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e){
        randomNumber=parseInt(Math.random()*100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        result.innerHTML=`${11- numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHigh.innerHTML=''
        playGame=true
    })
}
