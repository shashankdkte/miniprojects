function init(){
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  gamePlaying=true;

  //Dice disapper at start of game
  document.querySelector('.dice').style.display='None';


  //Setting all values to zero at start of game
  document.getElementById('score--0').textContent='0';
  document.getElementById('score--1').textContent='0';
  document.getElementById('current--0').textContent='0';
  document.getElementById('current--1').textContent='0';
  document.getElementById('name--0').textContent='Player 1'
  document.getElementById('name--1').textContent='Player 2'
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');

}

//Next Player Toggle
function nextPlayer(){
  activePlayer===0?activePlayer=1:activePlayer=0;
  roundScore=0;
  document.getElementById('current--0').textContent='0';
  document.getElementById('current--1').textContent='0';
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.dice').style.display='None';
}


//DECLARING THE VARIABLES
var scores,roundScore,activePlayer,dice,gamePlaying;
init();




//Dice appear on click and produce random values
document.querySelector('.btn--roll').addEventListener('click',function(){
if(gamePlaying){
  dice=Math.floor(Math.random()*6)+1;
  console.log(dice);
  document.querySelector('.dice').style.display='block';
  document.querySelector(".dice").src='dice-'+dice+'.png';
  //Update Current Score
  if(dice!==1){
    roundScore+=dice;
    document.querySelector('#current--'+activePlayer).textContent=roundScore;
  }
  else{
    nextPlayer();
  }
}
});

//Holding the values
document.querySelector('.btn--hold').addEventListener('click',function(){
// Adding value of current score to Scores
if (gamePlaying){
  scores[activePlayer]+=roundScore;
  //Updating the UI
  document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];

 var input=document.querySelector('.final-score').value;
 var winningScore;
 if(input){
   winningScore=input;
 }
 else {
   winningScore=100;
 }
  //Check if Player Won the game
if(scores[activePlayer]>=winningScore){
  document.querySelector('#name--'+activePlayer).textContent='Winner!'
  document.querySelector('.player--'+activePlayer).classList.add('player--winner');
  document.querySelector('.player--'+activePlayer).classList.remove('player--active');
  document.querySelector('.dice').style.display='None';
  gamePlaying=false;
}
else {
  nextPlayer();
}
}

})



//Start new Game
document.querySelector('.btn--new').addEventListener('click',init)
