
var car,carImage,wall;
var speed, weight; 
var red_car,green_car,yellow_car;

function preload(){

  carImage = loadImage("car.png");
  red_car = loadImage("red_car.png");
  green_car = loadImage("green_car.png");
  yellow_car = loadImage("yellow_car.png");
}




function setup() {
  createCanvas(1600, 400);

	speed = Math.round(random(55,90));
	weight = Math.round(random(400,1500));

  car = createSprite(50, 200, 50,50);  
  car.addImage(carImage); 
  car.scale = 0.7;
	car.velocityX = speed;
  car.shapeColor=color(255);

  wall = createSprite(1400,200, 60, height/2)
  wall.shapeColor = "Orange";
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
	if(deformation > 180)
	{
    //car.shapeColor=color(255,0,0);
    car.addImage(red_car);
	}

	if(deformation < 180 && deformation > 100)
	{
    //car.shapeColor = color(230,230,0);
    car.addImage(yellow_car);
	}

	if(deformation < 100)
	{
    //car.shapeColor = color(0,255,0);
    car.addImage(green_car);
	}
  }  
  
  drawSprites();
 
}
