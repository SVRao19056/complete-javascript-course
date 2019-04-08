/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
'script strict'
let scores, roundScore , activePlayer , gamePlaying ,previousScores;
const getRandom = function(max) {
    return Math.floor(Math.random()* max)+1
}
init();


function init() {
scores =[0,0] ;
prevDiceRoll=0;
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var getGlobal = document.querySelector('#score-0').textContent;
//console.log('getGlobal ='+getGlobal);
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1'
document.getElementById('name-1').textContent = 'Player 2'
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click', function () {

    if(gamePlaying){
        //1. get random number
      
        let dice = getRandom(6);
        console.log('dice = ' + dice);
        //2. Display the result
        let diceDom = document.querySelector('.dice');
        diceDom.style.display ='block';
        diceDom.src = 'dice-' + dice + '.png';
        //3 update dice roll  when not = 1
        if (dice === previousScores)
        {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        if (dice !== 1 ){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();

        }
        prevDiceRoll = dice;
    }
} )

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
    //move current score to global score
    scores[activePlayer] += roundScore;
    //update the UI interface 
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
       //check player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    }
    else{
        nextPlayer();
    }
}
})

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer()
{
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore=0;
    prevDiceRoll = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}