
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");


const box = 32;

const map = new Image();
map.src = "img/map.png";

let dead = new Audio();
dead.src = "audio/roblox.mp3";
let startgame = new Audio();
startgame.src ="audio/start.mp3"
let snake = [];

snake[0] = {
  x : 32,
  y : 320
};

let d;

let leftmove = -1;
let rightmove = -1;

function leftClick(){
   if(d =="RIGHT" && d != "UP"){
    leftmove = 1;
    d = "UP";
    up.play();
  }
  else if(d == "UP"){
    leftmove = 2
    d = "LEFT";
    left.play();
  }
  else if(d =="LEFT" ){
    leftmove = 3
    d = "DOWN";
    down.play();
  }
  else if(d =="DOWN" ){
    leftmove = 4
    d = "RIGHT";
    right.play();
  }
}

function rightClick(){
  if(d =="UP" && d != "RIGHT"){
   rightmove = 1;
   d = "RIGHT";
   right.play();
 }
 else if(d == "RIGHT"){
   rightmove = 2
   d = "DOWN";
   down.play();
 }
 else if(d =="DOWN" ){
   rightmove = 3
   d = "LEFT";
   left.play();
 }
 else if(d =="LEFT" ){
   rightmove = 4
   d = "UP";
   up.play();
 }
}


function overlap(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

  d = "RIGHT"
  let onOff = 0
  function startStop(){
    if(onOff == 0){
      onOff = 1;
      startgame.play();
    }
    else if(onOff ==1){
      onOff = 0;
    }
  }
function drawGame(){

    ctx.drawImage(map,0,0);
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "blue" : "red";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    if(onOff == 1){

    let currentX = snake[0].x;
    let currentY = snake[0].y;

    //update Direction
    if( d == "LEFT" ){
      currentX = currentX - box;
    }
    if( d == "UP" ){
     currentY =  currentY - box;
   }
    if( d == "RIGHT" ){
      currentX = currentX + box;
    }
    if( d == "DOWN" ){
      currentY = currentY + box;
    }

    let newHead = {
        x : currentX,
        y : currentY
    }
    if(currentX < box || currentX > 17 * box || currentY < 3*box || currentY > 17*box || overlap(newHead,snake)){
        clearInterval(game);
        dead.play()
    }

    snake.unshift(newHead);
  }
    ctx.fillStyle = "blue";
    ctx.font = "50px Changa one";
    ctx.fillText("CS 319 Snake Game",100,55);
}

let game = setInterval(drawGame,600);
