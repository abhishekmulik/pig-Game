var scores,roundScore,activePlayer,dice,gamePlaying,lastDice;

init();

// dice=Math.floor(Math.random()*6)+1;

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
            //Random number
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    //2 Display the result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
    document.getElementById('dice-1').src='dice-'+dice1+'.png';
    document.getElementById('dice-2').src='dice-'+dice2+'.png';  
    if (dice!==1 && dice2!== 1){
        //add score
        roundScore+=dice1+dice2;
        document.querySelector('#current--'+activePlayer).textContent=roundScore;
    }else{ 
        //next player
        nextPlayer();}
    }
    });
    //3 update the round score If the rolled number was not 1
    // if (dice===6 && lastDice===6){
    //     //player looses turn
    //     scores[activePlayer]=0;
    //     document.querySelector('#score--'+activePlayer).textContent=0;
    //     nextPlayer();   

    // }
    // else if (dice!==1){
    //     //add score
    //     roundScore+=dice;
    //     document.querySelector('#current--'+activePlayer).textContent=roundScore;
    // }else{ 
    //     //next player
    //     nextPlayer();
        
    //     // document.querySelector('.player--0').classList.remove('player--active');
    //     // document.querySelector('.player--1').classList.add('player--active');

    //     document.querySelector('.dice').style.display='none';
    // }
    // lastDice=dice;
    // }


document.querySelector('.btn--hold').addEventListener('click',function()
{ if (gamePlaying){
    //add current score to global
    scores[activePlayer]+=roundScore; 

    //update UI 
    document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];
    
    var input=document.querySelector('.final-score').value;
    var winninngScore
    //undefined,0,nul or "" are coerced to false
    if (input){
        winninngScore=input;
    }else{
        winninngScore=100;
    }
    //check if player won the game 
    if (scores[activePlayer]>=winninngScore){
        document.querySelector('#name--'+activePlayer).textContent="WINNER!!!";
        document.querySelector('.dice-1').style.display='none';
        document.querySelector('.dice-2').style.display='none';
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        gamePlaying=false;
    }else{
        nextPlayer();
    }
}
    
})

function nextPlayer(){
    activePlayer===0 ? activePlayer=1: activePlayer=0;
        roundScore=0;
        document.getElementById('current--0').textContent='0';
        document.getElementById('current--1').textContent='0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('.dice-1').style.display='none';
        document.querySelector('.dice-2').style.display='none'; 
}
document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('#name--0').textContent='Player 1'; 
    document.querySelector('#name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active'); 
    document.querySelector('.player--0').classList.add('player--active');

}



