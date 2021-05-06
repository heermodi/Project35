var dog,happydog;
var database;
var foodS,foodStock

function preload()
{
	dogImg = loadImage("images/dogImg.png")
  dogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(50,180,20,50)
  dog.addImage(dogImg.png,dogImg1.png)
  foodStock=database.ref('food');
  foodStock.on("value" ,readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
 writeStock(foodS);
dog.addImg(dogHappy)
}

  drawSprites();
  //add styles here
  textSize23
  fill ()
  stroke()
}



