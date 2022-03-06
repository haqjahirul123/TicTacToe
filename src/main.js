import {Game} from "./game.js"

var previousScoreX = window.localStorage.hasOwnProperty("scoreX")?localStorage.getItem("scoreX") : 0;
var previousScoreO = window.localStorage.hasOwnProperty("scoreO")?localStorage.getItem("scoreO") : 0;
var drawScore=window.localStorage.hasOwnProperty('drawXO')?localStorage.getItem('drawXO'):0
   
var playerOneScoreCard =  document.getElementById('player-one-score')
var playerTwoScoreCard =document.getElementById('player-two-score')
var drawScoreCard = document.getElementById('draw-score')

    
var game=new Game("X",previousScoreX,previousScoreO,drawScore,playerOneScoreCard,  playerTwoScoreCard,drawScoreCard);
 
var num1 
window.func=function(num){
          num1=num
          game.fill(num1)
}

var max
window.reset=function(num){
     max=num
     game.reset(max)
}








