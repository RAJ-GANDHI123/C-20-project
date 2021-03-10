
var tom, tomImg;
var jerry, jerryImg;
var background1, backgroundImg;
var tom_walking, jerry_dancing, tom_stand, jerry_see;


function preload() {
   
  tomImg = loadImage("images/cat1.png");
  jerryImg = loadImage("images/mouse1.png");
  backgroundImg = loadImage("images/garden.png");
  
  tom_walking = loadAnimation("images/cat2.png","images/cat3.png")
  jerry_dancing = loadAnimation("images/mouse2.png","images/mouse3.png")
  tom_stand = loadImage("images/cat4.png");
  jerry_see = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(700,700);

    background1 = createSprite(200,350,20,20)
    background1.addImage(backgroundImg);
    
    tom = createSprite(550,600,10,10);
    tom.addImage(tomImg);
    tom.scale = 0.1;

    jerry = createSprite(150,580,10,10);
    jerry.addImage(jerryImg);
    jerry.scale = 0.1
}

function draw() {

    background(255);
    
    if (tom.isTouching(jerry)){
       tom.x = jerry.x + 60;
       tom.addAnimation('stand',tom_stand)
       tom.changeAnimation('stand');
       tom.velocityX = 0;
       jerry.addAnimation('see', jerry_see);
       jerry.changeAnimation('see');
    }
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

    tom.velocityX = -5;
    tom.addAnimation("walking", tom_walking);
    tom.changeAnimation("walking");
    jerry.addAnimation('dance',jerry_dancing);
    jerry.changeAnimation('dance');
    

  }


}
