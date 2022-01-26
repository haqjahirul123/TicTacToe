let sign="X"

function fill(number){
    let box=document.getElementById("div"+number)
    console.log(box)

    if(box.innerText==""){
        box.innerHTML=sign
        checkPlayer()
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

// function viewResult(){
//     if(winner()){
//         alert(" win")
//     }
//     else{
//         alert("not win")
//     }

// }
// console.log(viewResult())


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

