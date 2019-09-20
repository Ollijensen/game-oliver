let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');


let maze = [
    [-1,0,0,0,0,1,0,0,0,4],
    [1,1,1,1,0,1,0,1,1,1],
    [0,0,0,0,0,0,0,1,0,0],
    [0,1,1,1,1,1,1,1,0,1],
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,0],
    [0,1,1,1,0,1,0,0,0,0],
    [0,1,0,0,0,1,0,1,1,1],
    [0,1,1,1,1,1,0,1,3,3],
    [0,0,0,0,5,1,0,0,3,3]
];

let x = 0;
let y = 0;
let player = -1;
let tileSize = 50;
let finish = 3;
let wall = 1;
let lane = 0;
let portal = 4;
let portal2 = 5;
let playerPosition;
let coin = 6;

let move = new Audio();
move.src = "move.wav";

let fail = new Audio();
fail.src = "fail.wav";

let win = new Audio();
win.src = "win.wav";

let portalSound = new Audio();
portalSound.src = "portal.wav";

let robot = new Image();
robot.src = "robot.png";

// let die = setTimeout(location.reload(), 10000);

function grid (){

for(y = 0; y < maze.length; y++){

for(x = 0; x < maze[y].length; x++){
    
    if(maze[y][x] == -1){
        playerPosition = {x , y};
    console.log(player.y + " " + player.x);
    
    ctx.fillStyle = "red";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);
    

} else if(maze[y][x]== wall) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);

} else if(maze[y][x]== lane) {
    ctx.fillStyle = "black";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);


} else if(maze[y][x]== finish) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);

} else if(maze[y][x]== portal) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);

} else if(maze[y][x]== portal2) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);

}   else if(maze[y][x]== coin) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x * tileSize, y * tileSize,tileSize,tileSize);

}
}
}
}

window.addEventListener('keydown', function(event){

    console.log(event);

    switch (event.keyCode) {
        
        case 37: //venstre
        
        if (maze[playerPosition.y][playerPosition.x - 1] == 0) {

            maze[playerPosition.y][playerPosition.x - 1] = -1; //player nye position
            maze[playerPosition.y][playerPosition.x] = 0; // player gamle position
            move.play();

        }   else if (maze[playerPosition.y][playerPosition.x - 1] == 3)  {
            win.play();

        }   else {
            fail.play();
            fail.onended = function () {
                window.location.reload()
            }
        }
            grid(); 
    
            break;
        
        case 38: //op
        if (maze[playerPosition.y - 1][playerPosition.x] == 0) {

            maze[playerPosition.y - 1][playerPosition.x] = -1; //player nye position
            maze[playerPosition.y][playerPosition.x] = 0; // player gamle position
            move.play();
        }   else if (maze[playerPosition.y - 1][playerPosition.x] == 3)  {
            win.play();

        }   else {
            fail.play();
            fail.onended = function () {
                window.location.reload()
            }
        }
            grid();

       
            break;
        
        case 39: //højre
        if (maze[playerPosition.y][playerPosition.x + 1] == 0) {

            maze[playerPosition.y][playerPosition.x + 1] = -1; //player nye position
            maze[playerPosition.y][playerPosition.x] = 0; // player gamle position
            move.play();

        }   else if (maze[playerPosition.y][playerPosition.x + 1] == 4) { //portal
            maze[playerPosition.y + 9][playerPosition.x - 5] = -1; 
            maze[playerPosition.y][playerPosition.x] = 0;  
            portalSound.play(); 

        }   else if (maze[playerPosition.y][playerPosition.x + 1] == 5) { //portal
            maze[playerPosition.y - 9][playerPosition.x + 5] = -1; 
            maze[playerPosition.y][playerPosition.x] = 0; 
            portalSound.play();  
             
        }   else if (maze[playerPosition.y][playerPosition.x + 1] == 3)  {
            win.play();

        }   else {
            fail.play();
            fail.onended = function () {
                window.location.reload()
            }
        }
        
            grid();

            break;
    
        case 40: //ned
       
        if (maze[playerPosition.y + 1][playerPosition.x] == 0) {

            maze[playerPosition.y + 1][playerPosition.x] = -1; //player nye position
            maze[playerPosition.y][playerPosition.x] = 0; // player gamle position
            move.play();
        }   else if (maze[playerPosition.y + 1][playerPosition.x] == 3) {
              win.play();

        }   else {
            fail.play();
            fail.onended = function () {
                window.location.reload()
            }
        }
            grid();

            break;
        
        
    }
})

    
grid();



/*
 console.log("x er = " + x + " og y er = " + y);


for(let i = 0; i<=13;i++){
    if(i == 5){
    ctx.fillStyle = "black";
    ctx.fillRect(i*25,0,25,25);
    } else if (i == 8) {
        ctx.fillStyle = "black";
        ctx.fillRect(i*25,0,25,25);
    } else if (i == 13) {
    ctx.fillStyle = "black";
    ctx.fillRect(i*25,0,25,25);
}    else {
    ctx.fillStyle = "blue";
    ctx.fillRect(i*25,0,25,25);
}
}
*/

/*
let arrayCanvas = [1, 0, 0, -1, 2, 0, 2, 0, 0, 1]

console.log (arrayCanvas[1]);

for (let i = 0; i < arrayCanvas.length; i++) {

    if(arrayCanvas[i] == -1){
        ctx.fillStyle = "black";
        ctx.fillRect(i*50,0,50,50);
    } else if(arrayCanvas[i] == 0){
        ctx.fillStyle = "blue";
        ctx.fillRect(i*50,0,50,50);
    } else if(arrayCanvas[i] == 2){
        ctx.fillStyle = "red";
        ctx.fillRect(i*50,0,50,50);
    } else if(arrayCanvas[i] == 1){
        ctx.fillStyle = "yellow";
        ctx.fillRect(i*50,0,50,50);
    }
}
*/

