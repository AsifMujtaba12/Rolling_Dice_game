let buttonElement=document.getElementById("button");
let playerADice=document.getElementById("playerADice");
let playerBDice=document.getElementById("playerBDice");
let playerAScoreElmt=document.getElementById("playerAScore");
let playerBScoreElmt=document.getElementById("playerBScore");

let playerAScore=0;
let playerBScore=0;
let currentPlayer = 1;

buttonElement.addEventListener("click",rollingDice);
function rollingDice(){ 
   let rolldice= Math.floor(Math.random()*6)+1;
   const diceFace = getDiceFace(rolldice);
   if(currentPlayer===1){
       playerADice.textContent=diceFace;
       playerAScore+=rolldice;
       playerAScoreElmt.textContent=playerAScore;
       winnerPlayer(playerAScore, 'player A')
       currentPlayer=2;

   }else if(currentPlayer===2){
       playerBDice.textContent=diceFace;
       playerBScore+=rolldice;
       playerBScoreElmt.textContent=playerBScore;
       winnerPlayer(playerBScore, 'player B');
       currentPlayer=1;
      }
      playerTurn();
       
}

      function winnerPlayer(score, player){
         if(score>=20){
            alert(` ${player} Wins! Scores - Player A: ${playerAScore}, Player B: ${playerBScore}`);

             playerAScore=0;
             playerBScore=0;
             playerAScoreElmt.textContent=playerAScore;
             playerBScoreElmt.textContent=playerBScore;
             currentPlayer=1;
         }else{
            playerTurn();

         }
 
      }
function getDiceFace(num) {
    const diceFaces = { 
      1: '⚀', 
      2: '⚁',
       3: '⚂', 
       4: '⚃', 
       5: '⚄',
      6: '⚅'
       }; 
       return diceFaces[num];
       }
       function playerTurn(){
         if(currentPlayer===1){
             document.getElementById('scoredivA').style.backgroundColor='#6366f1';
             document.getElementById('scoredivA').style.transform='scale(1.2)';
             document.getElementById('scoredivA').style.transition="background-color 0.3s ease, transform 0.3s ease";
             document.getElementById('scoredivB').style.backgroundColor = 'black';
             document.getElementById('scoredivB').style.transform = 'scale(1)'; 
            } else {
               document.getElementById('scoredivA').style.backgroundColor = 'black';
               document.getElementById('scoredivA').style.transform = 'scale(1)';
               document.getElementById('scoredivB').style.backgroundColor = '#6366f1'; 
             document.getElementById('scoredivB').style.transition="background-color 0.3s ease, transform 0.3s ease";

               document.getElementById('scoredivB').style.transform = 'scale(1.2)'; 
               }
       }
       playerTurn();