'use strict';


let secretNumber = Math.trunc( Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
  
  
const guess = Number(document.querySelector('.guess').value); 


if(!guess) {

    //where is no input
      displayMessage('⛔No Number');

  //when player wins
}else if(guess === secretNumber){
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉Correct number');
      
      document.querySelector('body').style.backgroundColor = "#60b347"
      document.querySelector('.number').style.width = '30rem'

      //highscore
      if(score > highscore){
        highscore = score;
          document.querySelector('.highscore').textContent = highscore;
      }

  //when guess is wrong
}else if(guess !== secretNumber){
      
    if(score > 1){
            displayMessage( guess > secretNumber ? '👍Too High' : '👎Too Low');
            score --;
            document.querySelector('.score').textContent = score;
    }else{
            displayMessage('you lost the game !');
            document.querySelector('.score').textContent = 0;
            
    }
       
  }     
  
})

document.querySelector('.again').addEventListener('click',function(){

    score = 20;
    secretNumber = Math.trunc( Math.random() * 20) + 1;
    displayMessage("Start guessing..");
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'

    document.querySelector('.guess').value = " "
    document.querySelector('.guess').focus()
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = '15rem'
   

})