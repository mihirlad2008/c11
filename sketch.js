var sea,ship;
var sea,ship;

function preload(){
  sea = loadAnimation("sea.png");
  ship =loadAnimation("ship-1.png","ship-2.png")


}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea = createSprite(400,200);
  sea.addAnimation("sea","sea.png");
  sea.scale=0.25;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip", "ship-1.png","ship-2.png");
  ship.scale =0.25;
  
}

function draw() {
  background("white");
  

  sea.velocityX = -3;
  

  
    
  drawSprites();
}
