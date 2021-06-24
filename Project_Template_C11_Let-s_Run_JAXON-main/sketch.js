var runner;
var running;
var edges;
var path;
var pathImage;
var invisibleleft;
var invisibleright;
function preload(){
 
  running=loadAnimation("runner-1.png","runner-2.png");
  pathImage = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  invisibleleft = createSprite(15,200,30,400);
  invisibleright = createSprite(385,200,30,400);
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  runner=createSprite(200,350,40,40);
  runner.addAnimation("running",running);
  runner.scale=0.05;
  path.scale=1.2
  path.velocityY=4
  invisibleleft.visible=false
  invisibleright.visible=false
}

function draw() {
  background('pink');
  runner.x=World.mouseX
  
  if(path.y>400){
    path.y=height/4
  }
 if(keyDown("left"))
  {
   runner.x=runner.x-10
 }
 if(keyDown("right"))
 {
  runner.x=runner.x+10
}
 runner.collide(invisibleleft)
 runner.collide(invisibleright)
  drawSprites();
}
