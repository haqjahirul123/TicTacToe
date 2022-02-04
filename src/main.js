//let document = (typeof document === "undefined") ? {} : document;

//var button= document.getElementById('resetBtn')
//ar playerTurn= document.getElementById('playerTurn')


// function playerInput(val){
//     //console.log(val)
  
//          sign2=val
//         console.log(sign2)
    
//       if(val==undefined){
//         document.getElementById("demo").innerText = "You selected: " + "";
//       }

//       else{
//         document.getElementById("demo").innerText = "You selected: " + sign2;

//       }  
       
// }
// console.log(sign2)
// console.log(playerInput())

  
var sign="X"
var xScore=0
var yScore=0
var dScore=0
var playerOneScoreCard = document.getElementById('player-one-score');
var playerTwoScoreCard = document.getElementById('player-two-score');
var drawScoreCard = document.getElementById('draw-score');

   



function fill(number){
    let box=document.getElementById("div"+number)
    console.log(box)

    if(box.innerText==""){
        box.innerHTML=sign
        checkPlayer()
        playerTurn.innerHTML="Now "+sign+" 's Turn"
    }

   
    if(winnerSelectX()){
       
        // document.getElementById('result').innerHTML="X"+"  "+"Congrats!! YOU ARE WINNER"
        // playerOneScoreCard.innerHTML = ++xScore;

        document.getElementById('result').innerHTML="X"+"  "+"Congrats!! YOU ARE WINNER"   
        localStorage.setItem("scoreX",++xScore)
        playerOneScoreCard.innerHTML =localStorage.getItem("scoreX")      
        
    }
    else{
        if(winnerSelectY())
        {
            document.getElementById('result').innerHTML="O"+"  "+"Congrats!! YOU ARE WINNER"
            localStorage.setItem("scoreO", Number(++yScore))
            playerTwoScoreCard.innerHTML = parseInt(localStorage.getItem("scoreO"));
           
        }
    }

    
        if(draw()){
           
            document.getElementById('result').innerHTML="It's DRAW. Try one more?"       
            // localStorage.setItem("drawXO", Number(++dScore))
            // drawScoreCard.innerHTML = localStorage.getItem("drawXO");
    }

    function checkPlayer(){
        if(sign=="X"){
            sign="O"
        }
        else{
            sign="X"
        }
    }   
    
    function getData(div){
       
        return document.getElementById(div).innerHTML;
        
      
    }
    
    function winnerSelectConX(a,b,c){
        if (getData(a)=="X"
        && getData(b)=="X"
        && getData(c)=="X"
        && (getData(a)==getData(b))
        && (getData(b)==getData(c))
       
        )
        {
        return true
           
        }  
    
    }
    
    function winnerSelectX(){
        if(
            winnerSelectConX("div1","div2","div3")||
            winnerSelectConX("div2","div4","div5")||
            winnerSelectConX("div7","div8","div9")||
            winnerSelectConX("div1","div4","div7")||
            winnerSelectConX("div2","div5","div8")||
            winnerSelectConX("div3","div6","div9")||
            winnerSelectConX("div1","div5","div9")||
            winnerSelectConX("div3","div5","div7")                 
        )
        {
            return true
        }
    }
    
    
    function winnerSelectConY(a,b,c){
        if (getData(a)=="O"
        && getData(b)=="O"
        && getData(c)=="O"
        && (getData(a)==getData(b))
        && (getData(b)==getData(c))
       )
        {
            return true
           
        }  
    
      }
    
      function winnerSelectY(){
        if(
            winnerSelectConY("div1","div2","div3")||
            winnerSelectConY("div2","div4","div5")||
            winnerSelectConY("div7","div8","div9")||
            winnerSelectConY("div1","div4","div7")||
            winnerSelectConY("div2","div5","div8")||
            winnerSelectConY("div3","div6","div9")||
            winnerSelectConY("div1","div5","div9")||
            winnerSelectConY("div3","div5","div7")                 
        )
        {
            return true
        }
        
       
    }
    
    
    
    function draw(){
        if (getData("div1")!=""
        && getData("div2")!=""
        && getData("div3")!=""
        && getData("div4")!=""
        && getData("div5")!=""
        && getData("div6")!=""
        && getData("div7")!=""
        && getData("div8")!=""
        )
        return true
    }
    

  }

  function reset(){
    for(i=1;i<=9;i++){
        document.getElementById('div'+i).innerText=""
    }
    document.getElementById('result').innerText=""
    

}
  //fill()







//exports.modules= {winner}
// module.exports = {
//     winner
//     };




