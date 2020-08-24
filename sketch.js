
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,bin1, ground; 

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)

	paper = new Paper(70,650);
	bin1 = new Bin(700,650,100,10);
	bin2 = new Bin(600,650,10,100);
	bin3 = new Bin(800,65010,100);


	//Create the Bodies Here.


	Engine.run(engine);        
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
}
function keyPressed(){
	if(keyDown === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}

