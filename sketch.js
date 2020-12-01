
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var R1, R2, R3, R4, R5;
var roof;


function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300, 400, 70);
  bob2 = new Bob(370, 400, 70);
  bob3 = new Bob(440, 400, 70);
  bob4 = new Bob(510, 400, 70);
  bob5 = new Bob(580, 400, 70);

  roof1 = new Roof(400, 100, 400, 30);

  R1 = new Rope(bob1.body, roof1.body, -60*2, 0);
  R2 = new Rope(bob2.body, roof1.body, -30*2, 0);
  R3 = new Rope(bob3.body, roof1.body, -0*2, 0);
  R4 = new Rope(bob4.body, roof1.body, 30*2, 0);
  R5 = new Rope(bob5.body, roof1.body, 60*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");
  
  keyPressed();
  drawSprites();

 roof1.display();
 
 R1.display();
 R2.display();
 R3.display();
 R4.display();
 R5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


