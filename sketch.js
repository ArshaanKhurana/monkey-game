var gameState = "PLAY";
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20); 
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;

ground = createSprite(400,350,900,10);
console.log(ground.x);
  
var survivalTime = 0;
  
FoodGroup=new Group();
}


function draw() {
 background("white");
 
if(gameState="PLAY"){
   ground.x=ground.width/2;
   ground.velocityX=-10;  
  
 if(keyDown("space")) {
    monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  
  spawnBananas();
  spawnObstacles()
   }
  
  
  
  
  
  
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount%80===0){
    banana = createSprite(80,200);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=80;
    banana.velocityX=-7;
    
    banana.y=Math.round(random(120,200));
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%150===0){
    obstacle = createSprite(80,325);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.lifetime=80;
    obstacle.velocityX=-3;
    obstacle.x=Math.round(random(120,200));
    
 }

}




