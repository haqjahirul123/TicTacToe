import { Game } from "../src/game.js"

const chai = window.chai
 const expect = chai.expect

//  var previousScoreX = window.localStorage.hasOwnProperty("scoreX")?localStorage.getItem("scoreX") : 0;
// var previousScoreO = window.localStorage.hasOwnProperty("scoreO")?localStorage.getItem("scoreO") : 0;
   
// var playerOneScoreCard =  document.getElementById('player-one-score')
// var playerTwoScoreCard =document.getElementById('player-two-score')
// var drawScoreCard = document.getElementById('draw-score')
    
//  var game=new Game("X",previousScoreX,previousScoreO,0,playerOneScoreCard,  playerTwoScoreCard,drawScoreCard);

//game.reset()
var game=new Game()
var boolResult=game.winnerSelectConX("div1","div2","div3")

 function winCheck(a,b,c){
  // var b=a
  if(!undefined && !null){
    if((a==b) && (b==c) && (c=a)){
      return true
  
    }
    

  }

}

console.log(winCheck("X","X","X"))

describe('reset value', () => {
  it(' Check refresh all field', () => {
        // expect(winCheck("div1","div2","div3")).to.deep.equal(true)
        expect(winCheck()).to.deep.equal(boolResult)
        //expect( Ovalue()!=NaN).to.deep.equal(false)
        //expect(o_Winner).to.deep.equal(parseInt(2))
      
   
  })
})



// function Xvalue(){
  
//   var x_Winner=parseInt(localStorage.getItem("scoreX"))
//   // if(x_Winner!=NaN)
//   return x_Winner
// }

// function Ovalue(){
//   var o_Winner=parseInt(localStorage.getItem("scoreO"))
//   //if(o_Winner!=NaN)
//   return o_Winner
// }
// console.log( Xvalue())
// console.log( Ovalue())


// describe('winnerO', () => {
//   it(' Check "O"player winning value store at LocalStroage', () => {
//         expect( Ovalue()!=NaN).to.deep.equal(true)
//         //expect( Ovalue()!=NaN).to.deep.equal(false)
//         //expect(o_Winner).to.deep.equal(parseInt(2))
      
   
//   })
// })

// describe('winnerX', () => {
//   it(' Check "X"player winning value store at LocalStroage', () => {
//         expect( Xvalue()!=NaN).to.deep.equal(true)
//         //expect( Xvalue()!=NaN).to.deep.equal(false)
//         // expect(x_Winner).to.deep.equal(parseInt(1))
   
//   })
// })

// var result=game.winnerSelectConY("div1","div4","div7")
// if(result==undefined){
//   console.log(result)
// }
// //console.log(result)
// var result1=game.xScore
// console.log(result1)
// var result2=game.playerTwoScoreCard.innerHTML
// console.log(result2)