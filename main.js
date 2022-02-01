let sign="Jahir"
let button= document.getElementById('resetBtn')
let playerTurn= document.getElementById('playerTurn')

function playerInput(val){
    console.log(val)
     sign2=val
    console.log(sign2)
   
    //var sign2= document.getElementById("select").value;
    document.getElementById("demo").innerText = "You selected: " + sign2;
        //alert("The input value has changed. The new value is: " + val);
      
}

console.log(playerInput())

function fill(number){
    let box=document.getElementById("div"+number)
    console.log(box)

    if(box.innerText==""){
        box.innerHTML=sign
        checkPlayer()
        playerTurn.innerHTML="Now "+sign+" 's Turn"
    }

   
    if(winner()){
        document.getElementById('result').innerHTML="Congrats!! YOU ARE WINNER"
      
    }
    else{
        if(draw()){
            document.getElementById('result').innerHTML="It's DRAW. Try one more?"
        }
    }
}

function checkPlayer(){
    if(sign=="Jahirul"){
        sign=sign2
    }
    else{
        sign="Jahirul"
    }
}

function getData(div){
   
        return document.getElementById(div).innerHTML;
    
  
}

function winner(){
    if(
    checkCondiion("div1","div2","div3")||
    checkCondiion("div2","div4","div5")||
    checkCondiion("div7","div8","div9")||
    checkCondiion("div1","div4","div7")||
    checkCondiion("div2","div5","div8")||
    checkCondiion("div3","div6","div9")||
    checkCondiion("div1","div5","div9")||
    checkCondiion("div3","div5","div7")                 
    )
    {return true}
   
}
//console.log(winner())
function checkCondiion(a,b,c){
    if (getData(a)!=""
    && getData(b)!=""
    && getData(c)!=""
    && (getData(a)==getData(b))
    && (getData(b)==getData(c))
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

function reset(){
    for(i=1;i<=9;i++){
        document.getElementById('div'+i).innerText=""
    }
    document.getElementById('result').innerText=""
    document.getElementById('select').value=""
    document.getElementById('demo').innerText=""
}
