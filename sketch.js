var sea,ship;
var seaImg;
var shipImg;

function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);

   sea = createSprite(300,260,600,100);
sea.addImage(seaImg);
ship = createSprite(300,250,75,80);
  ship.addAnimation("shiping",shipImg);
  ship.scale = 0.3;
  sea.scale = 0.6;
}

function draw() {
  background("blue");
sea.velocityX = -5;
if(sea.x<0){
  sea.x=width/2;
}



  drawSprites()
}
