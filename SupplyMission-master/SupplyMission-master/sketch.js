var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box,box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(box/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box=createSprite(360,655 ,200,10);
	box1=createSprite(255,610,10,100);
	box2=createSprite(455,610,10,100);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  var packpos=packageBody.position;

  packageSprite.x=packpos.x ;
  packageSprite.y= packpos.y ;
 
//packageSprite.collide(ground);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
  if(keyCode === RIGHT_ARROW){
	
	var options1={
	x:20,
	y:0


	}
	helicopterSprite.x = helicopterSprite.x+20;
    Matter.Body.translate(packageBody,options1);

}
  if(keyCode === LEFT_ARROW){
	
   
	var options={
		x:-20,
		y:0
		
		
		}	
	helicopterSprite.x = helicopterSprite.x-20;
	Matter.Body.translate(packageBody,options);

}
}




