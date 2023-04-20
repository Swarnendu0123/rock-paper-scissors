const computorChoiceDisplay=document.getElementById('computor-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoice
let computorChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputorChoice();
    getResult();
}));


function generateComputorChoice() {
    const randomNumber=Math.floor(Math.random()*3)
    console.log(randomNumber);
    if(randomNumber==0){
        computorChoice ='rock'
    }
    else if (randomNumber==1) {
        computorChoice ='paper'
    } 
    else if(randomNumber==2) {
        computorChoice='scissors'
    }
    computorChoiceDisplay.innerHTML = computorChoice
}

function getResult() {
    if(computorChoice==userChoice){
       result='Its a draw'
    }
    else if(computorChoice=='rock'){
        if(userChoice=='paper'){
            result='You Won!' 
        }
        else{
            result='You Lost! Try again'
        }
    }
    else if(computorChoice=='paper'){
        if(userChoice=='scissors'){
            result='You Won!' 
        }
        else{
            result='You Lost! Try again'
        }
    }
    else if(computorChoice=='scissors'){
        if(userChoice=='rock'){
            result='You Won!' 
        }
        else{
            result='You Lost! Try again'
        }
    }
    resultDisplay.innerHTML=result
}