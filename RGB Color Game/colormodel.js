var numSquares=6;
var colors=generateRandom(numSquares);
var squares=document.querySelectorAll(".square");
 var pickedColor=pick();
 var colorDisplay=document.getElementById("colorDisplay");
 var messageDisplay=document.querySelector("#Message");
 var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
 colorDisplay.textContent =pickedColor;

var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
    messageDisplay.textContent=null;
    resetButton.textContent="New Colors";
    h1.style.background="steelblue";
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares=3;
    colors=generateRandom(numSquares);
    pickedColor=pick();
    colorDisplay.textContent=pickedColor;
        for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.background="none";
        }

    }
});

hardbtn.addEventListener("click",function(){
    messageDisplay.textContent=null;
    resetButton.textContent="New Colors";
    h1.style.background="steelblue";
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares=6;
    colors=generateRandom(numSquares);
    pickedColor=pick();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        }
});
    

resetButton.addEventListener("click",function(){
    colors=generateRandom(numSquares);
    pickedColor=pick();
    colorDisplay.textContent=pickedColor;
        for(var j=0;j<squares.length;j++){
            squares[j].style.background=colors[j];
        }
        h1.style.background="steelblue";
        resetButton.textContent="New Colors";
        messageDisplay.textContent=null;
});

for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
     squares[i].addEventListener("click",function(){
        var clickedColor= this.style.background;
         if(clickedColor===pickedColor){
              messageDisplay.textContent=" Correct !";
              resetButton.textContent="Play Again!";
              changeAll(clickedColor);
              h1.style.background=clickedColor;

         }
         else{
             this.style.background="#232323";
            messageDisplay.textContent=" Try Again !";
         }
     });
}
function changeAll(color){
      for(var i=0;i<numSquares;i++){
          squares[i].style.background=color;
      }
}
function pick(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandom(num){
    var arr=[]
    for(var i=0;i<num;i++){
       arr.push(randomColors());
    }
     return arr;
}
function randomColors(){
   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);
   var x="rgb(" + r +", "+ g +", " + b +")";
   return x;

}
