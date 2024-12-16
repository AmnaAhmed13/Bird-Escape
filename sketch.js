//global variables
var bird,birdImage, wall1, wall2, wall3, wall4, wall5, wall6;
 function preload(){
  birdImage = loadImage("bird.png");
 }

function setup(){
  createCanvas (400,400);
  wall1 = createSprite(100, 0, 20,200);
  wall1.shapeColor= ("blue");
  wall2 = createSprite(230, 0, 20,300);
  wall2.shapeColor= ("blue");
  wall3 = createSprite(350, 0, 20,250);
  wall3.shapeColor= ("blue");
  wall4 = createSprite(100, 300, 20,200);
  wall4.shapeColor= ("blue");
  wall5 = createSprite(230, 350, 20,100);
  wall5.shapeColor= ("blue");
  wall5 = createSprite(350, 350, 20,175);
  wall5.shapeColor= ("blue");

  bird = createSprite(20, 170);
  bird.addImage("bird",birdImage);
  bird.scale= 0.15;
}

function draw() {
  background("cyan");
  
  //moving bird
   if(keyDown("right")){
    bird.x = bird.x + 2;
  }
  if(keyDown("left")){
    bird.x = bird.x - 2;
  }
  if (keyDown("up")){
    bird.y= bird.y - 2;
  }
  if (keyDown("down")){
    bird.y= bird.y + 2;
  }
  
  //game restarts
  if (bird.isTouching(wall1)||
  bird.isTouching(wall2)||
  bird.isTouching(wall3)||
  bird.isTouching(wall4)||
  bird.isTouching(wall5))
  {
    bird.x= 20;
    bird.y= 170;
  }
  
  drawSprites();
}
 