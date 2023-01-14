var CAR1,CAR1IMG
var CAR2,CAR2IMG
var CAR3,CAR3IMG
var CAR4,CAR4IMG
var CAR5,CAR5IMG
var CAR6,CAR6IMG
var ROAD,ROADIMG
var gameState = "play"
var gameover




function preload(){
    CAR1IMG = loadImage("CAR11-removebg-preview (1).png")
    CAR2IMG = loadImage("CAR_2-removebg-preview.png")
    CAR3IMG = loadImage("CAR_3-removebg-preview.png")
    CAR4IMG = loadImage("CAR_4-removebg-preview.png")
    CAR5IMG = loadImage("CAR_5-removebg-preview.png")
    CAR6IMG = loadImage("CAR_6-removebg-preview.png")
    ROADIMG = loadImage("path.png")
    gameoverIMG = loadImage("GAME_OVER-removebg-preview.png")
}

function setup() {
    createCanvas(1120,600)
    ROAD = createSprite(700,200,450,700);
    ROAD.addImage("ROAD",ROADIMG);
    ROAD.velocity.y = 4;
    
    CAR1 = createSprite(610,300,50,50);
    CAR1.addImage("CAR1",CAR1IMG)
    CAR1.scale = 0.2;

    CAR1.setCollider("rectangle",0,0);
    CAR1.debug = "false";

    

    
}

function draw() {

   
    
    if(ROAD.y > 400){
        ROAD.y = 300
    }

    if (keyDown("left_arrow")){
        CAR1.x = CAR1.x - 4
    }

    if (keyDown("right_arrow")){
        CAR1.x = CAR1.x + 4
    }

    if (keyDown("up_arrow")){
        CAR1.y = CAR1.y - 5
    }

    if (keyDown("down_arrow")){
        CAR1.y = CAR1.y + 5
    }

    if (keyDown("space")){
        CAR1.y = CAR1.y + 4
    }

    if (frameCount % 600 === 0){
      CAR2 = createSprite(700,50)
      CAR2.velocity.y = 4;
      CAR2.addImage("CAR2",CAR2IMG)
      CAR2.scale = 0.3;
     }

     if (frameCount % 222 === 0){
        CAR4 = createSprite(700,50)
        CAR4.velocity.y = 4;
        CAR4.addImage("CAR4",CAR4IMG)
        CAR4.scale = 0.5;
       }


     

     if (frameCount % 300 === 0){
          CAR5 = createSprite(600,70);
          CAR5.velocity.y = 4;
          CAR5.addImage("CAR5",CAR5IMG)
          CAR5.scale = 0.5;
     }  



     if (frameCount % 450 === 0){
        CAR6 = createSprite(800,70);
        CAR6.velocity.y = 4;
        CAR6.addImage("CAR6",CAR6IMG)
        CAR6.scale = 0.2;
   } 
if (CAR1.isTouching(CAR2)){
    CAR1.velocity = 0;
    gameState = "end"
}


if (CAR1.isTouching(CAR6)){
    CAR1.velocity = 0;
    gameState = "end"
}


if (CAR1.isTouching(CAR5)){
    CAR1.velocity = 0;
    gameState = "end"
}

if (CAR1.isTouching(CAR4)){
    CAR1.velocity = 0;
    gameState = "end"
}






if (gameState === "end"){
    gameover = createSprite(710,300,70,70)
    gameover.addImage("GAMEOVER",gameoverIMG);

}










 drawSprites()


}