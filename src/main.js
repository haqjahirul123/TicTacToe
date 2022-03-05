import {Game} from "./game.js"

var previousScoreX = window.localStorage.hasOwnProperty("scoreX")?localStorage.getItem("scoreX") : 0;
var previousScoreO = window.localStorage.hasOwnProperty("scoreO")?localStorage.getItem("scoreO") : 0;
   
var playerOneScoreCard =  document.getElementById('player-one-score')
var playerTwoScoreCard =document.getElementById('player-two-score')
var drawScoreCard = document.getElementById('draw-score')

    
 var game=new Game("X",previousScoreX,previousScoreO,0,playerOneScoreCard,  playerTwoScoreCard,drawScoreCard);
 
var number 
window.func=function(num){
          number=num
          game.fill(number)
}

window.reset=function(){
     game.reset()
}








