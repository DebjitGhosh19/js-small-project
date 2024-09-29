let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber);



const submit=document.getElementById('submit');
const userinput=document.getElementById('input');
const Previousguesses=document.querySelector('.guesses');
const Remaining=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrhi')
const StartOver=document.querySelector('.resultParas')



// Create a Paragraph
const p=document.createElement('p');

let arr=[];
let numOfGuess=1;
let playGame=true;
if (playGame) {
  submit.addEventListener("click",function (event) {
    event.preventDefault();
    const guess=parseInt(userinput.value);
   
    
    validateUserInput(guess)
  })
}

function validateUserInput(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number")
  } else if (guess<1) {
    alert("Please enter a number between 1 to 100");
  }
  else if(guess>100) {
    alert("Please enter a number between 1 to 100");
  }
  else{
    arr.push(guess);
    if (numOfGuess===10) {
      displayClean(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame();
    }
    else{
      displayClean(guess)
      CompareValue(guess)
    }
 
  }
}
function CompareValue(guess) {
  if (guess===randomNumber) {
    displayMessage('You guess it right');
    endGame();
  } else if(guess<randomNumber){
    displayMessage('Number is too low ');
  }
  else if(guess>randomNumber){
    displayMessage('Number is too high ');
  }
}
// CleanUp Method
function displayClean(guess) {
  userinput.value='';
  Previousguesses.innerHTML+=`${guess} `;
  Remaining.innerHTML=`${10-numOfGuess}`
  numOfGuess++;
  
}
function displayMessage(message) {
  lowOrhi.innerHTML=`${message}`
}
function endGame() {
  userinput.value='';
  // Attribute set 
  userinput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  p.style.border='2px solid white'
  p.style.cursor='pointer';
  p.style.width='200px'
p.style.background="Green"
p.style.margin="0 auto"
  // paragraph ta k div a add kore dilam 
  StartOver.appendChild(p);
  playGame=false;

  newGame()
}
function newGame() {
 const newGameBtn= document.querySelector('#newGame');
 newGameBtn.addEventListener("click",function (event) {
  randomNumber=parseInt(Math.random()*100+1);
  arr=[];
  numOfGuess=1;
  Previousguesses.innerHTML=''
  Remaining.innerHTML=`${10}`
  userinput.removeAttribute('disabled');
 console.log(StartOver.removeChild(p));

  playGame=true;
 })
}




