export class Game {
   

    constructor(sign,xScore, yScore, dScore,playerOneScoreCard, playerTwoScoreCard, drawScoreCard, getDiv,fillDiv) {
        this.sign=sign
        this.xScore=xScore
        this.yScore=yScore
        this.dScore=dScore
        this.playerOneScoreCard=playerOneScoreCard
        this.playerTwoScoreCard=playerTwoScoreCard
        this.drawScoreCard=drawScoreCard 
        this.getDiv=getDiv 
        this.fillDiv=fillDiv  
    }

  
 
 fill(number){

     var box=document.getElementById("div"+number)
    //var box=this.fillDiv("div"+number)
    // var innerTex= this.fillDiv (number)
    //  console.log(innerTex)

     if( box.innerText=="" && box.innerText!=null && box.innerText!=undefined){
        box.innerHTML=this.sign
        this.checkPlayer()
        playerTurn.innerHTML="Now "+this.sign+" 's Turn"
    }

   
    if(this.winnerSelectX()){

       
         document.getElementById('result').innerHTML="X"+"  "+"Congrats!! YOU ARE WINNER"   
            
            var abc=++this.xScore
            localStorage.setItem("scoreX", abc)
            this.playerOneScoreCard.innerHTML =localStorage.getItem("scoreX")
             this.clearCell()
            }
    else{
        if(this.winnerSelectY())
        {
            document.getElementById('result').innerHTML="O"+"  "+"Congrats!! YOU ARE WINNER"
            window.localStorage.setItem("scoreO", JSON.stringify(++this.yScore))
            this.playerTwoScoreCard.innerHTML = window.localStorage.getItem("scoreO");
            this.clearCell()
        }
    }

    
        if(this.draw()){
           
            document.getElementById('result').innerHTML="It's DRAW. Try one more?"       
            window.localStorage.setItem("drawXO", JSON.stringify(++this.dScore))
            this.drawScoreCard.innerHTML = window.localStorage.getItem("drawXO");
            this.clearCell()
        }

    
}

     checkPlayer(){
        if(this.sign=="X"){
            this.sign="O"
        }
        else{
            this.sign="X"
        }
    }   
    
     getData(div){
         
        return this.getDiv(div)
       
        //  return document.getElementById(div).innerHTML;    
    }
    
     winnerSelectConX(a,b,c){
        if (this.getData(a)=="X"
        && this.getData(b)=="X"
        && this.getData(c)=="X"
        && (this.getData(a)==this.getData(b))
        && (this.getData(b)==this.getData(c))
       
        )
        {
        return true
       
        }       
    
    }
    
     winnerSelectX(){
        if(
            this.winnerSelectConX("div1","div2","div3")||
            this.winnerSelectConX("div2","div4","div5")||
            this.winnerSelectConX("div7","div8","div9")||
            this.winnerSelectConX("div1","div4","div7")||
            this.winnerSelectConX("div2","div5","div8")||
            this.winnerSelectConX("div3","div6","div9")||
            this.winnerSelectConX("div1","div5","div9")||
            this.winnerSelectConX("div3","div5","div7")                 
        )
        {  
            return true
        }

       
    }
    
    
     winnerSelectConY(a,b,c){
        if (this.getData(a)=="O"
        && this.getData(b)=="O"
        && this.getData(c)=="O"
        && (this.getData(a)==this.getData(b))
        && (this.getData(b)==this.getData(c))
       )
        {
            return true
           
        }  
       
    
      }
    
       winnerSelectY(){
        if(
            this.winnerSelectConY("div1","div2","div3")||
            this.winnerSelectConY("div2","div4","div5")||
            this.winnerSelectConY("div7","div8","div9")||
            this.winnerSelectConY("div1","div4","div7")||
            this.winnerSelectConY("div2","div5","div8")||
            this.winnerSelectConY("div3","div6","div9")||
            this.winnerSelectConY("div1","div5","div9")||
            this.winnerSelectConY("div3","div5","div7")                 
        )
        { 
            return true
        }  
    }
    
     draw(){
        if (this.getData("div1")!=""
        && this.getData("div2")!=""
        && this.getData("div3")!=""
        && this.getData("div4")!=""
        && this.getData("div5")!=""
        && this.getData("div6")!=""
        && this.getData("div7")!=""
        && this.getData("div8")!=""
        && this.winnerSelectY()!=true
        && this.winnerSelectX()!=true
        )
        return true
    }
    
    reset(max){
        for(let i=1;i<=max;i++){
            document.getElementById('div'+i).innerText=""
        }
        document.getElementById('result').innerText="" 
        
    }
  

    clearCell(){
        for(let i=1;i<=9;i++){
            document.getElementById('div'+i).innerText=""
        }
    
    }

}






