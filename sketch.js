var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4; 
  ground.x = ground.width/2;
  console.log(ground.x);
  
obstaclesGroup = new Group(); 
FoodGroup = new Group();
}


function draw() {
  background(255);
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }

monkey.velocityY = monkey.velocityY + 0.8;  
  
  monkey.collide(ground);
   
  spawnBananas();
  spawnObstacles();
    drawSprites();
  
  stroke("white");
  textSize(20); 
  fill("white");
  text("Score:"+score,500,50);  
  
    
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime,100,50);
 
  

}

function spawnObstacles(){
  if(World.frameCount%300===0){
    stone=createSprite(400,315,20,20);
    stone.addAnimation("moving", ObstacleImage);
    stone.velocityX = -8;
    stone.setLifetime=400;
    stone.scale = 0.2;
    
   obstaclesGroup.add(stone);
  }
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
     monkey.depth = banana.depth + 1;
    banana.addImage(bananaImage);  
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
   FoodGroup.add(banana);
  }
}




