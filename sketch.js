var rocket , rocketImg;
var star , starImg ,starGroup;
var asetored , asetoredImg , asetoredGroup ;
var sky , skyImg;
var gameState ="play"
function preload(){
rocketImg= loadImage ("rocket.jpg");
skyImg= loadImage ("sky.jpg");
starImg= loadImage ("star.jpg");
asetoredImg= loadImage ("asetored.jpg");
var starcollection = 0;
}

function setup() {
createCanvas(600,600);

sky = createSprite(600,600);
sky.addImage("sky",skyImg)
sky.scale=0.3;
sky.velocityY= 1

rocket= createSprite(200,200,50,50);
rocket.scale =0.1;
rocket.addImage("rocket", rocketImg);
starcollection = 0
asetoredGroup = new Group()
starGroup = new Group()
}

function draw() {
 
background("white")
drawSprites()

if(sky.y > 300){
sky.y = 100
}

if(gameState==="play"){

if(keyDown("left")){
    rocket.x =rocket.x -3;
}


if(keyDown("right")){
    rocket.x =rocket.x +3;
}


if(keyDown("space")){
    rocket.velocityY = -10;
}

rocket.velocityY = rocket.velocityY +0.8;

spawnstar();

if(starGroup.isTouching(rocket)){
star.destroy()
starcollection=starcollection+100;
}

if(asetoredGroup.isTouching(rocket)){
rocket.destroy()
gameState = "end"
}
}

if(gameState === "end"){
stroke("yellow");
fill("yellow");
textSize(30);
text("GameOver",230,250)
asetored .destroy()
star.destroy()
}
}

function spawnstar(){
if(frameCount % 240 === 0){
 star = createSprite(400,500);
 asetored = createSprite(300,100);



star.x=Math.round(random(120,400))
asetored.x=star.x
star.addImage(starImg);
asetored.addImage(asetoredImg);
star.velocityY = 1;
asetored.velocityY = 1;
asetored.scale = 0.2;
star.scale = 0.1;

rocket.depth = star.depth;
rocket.depth =1;

star.lifetime = 800;
asetored.lifetime = 800;
starGroup.add(star) ;
asetored.debug = true;
asetoredGroup.add(asetored);
}
}