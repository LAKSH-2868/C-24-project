
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,ground,stone,rubber,s1,s2,s3,s4,s5,s6,s7,s8,iron,leftG,rightG;

function preload(){
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(200,100,100,100);
	rubber = new Rubber(1400,100,75);
	s1 = new Sand(300,650,10);
	s2 = new Sand(400,650,10);
	s3 = new Sand(500,650,10);
	s4 = new Sand(600,650,10);
	s5 = new Sand(700,650,10);
	s6 = new Sand(800,650,10);
	s7 = new Sand(900,650,10);
	s8 = new Sand(1000,500,10);
	ground = new Ground(750,700,1500,20);
	leftG = new Ground(-20,350,20,800);
	rightG = new Ground(1520,350,20,800);
	iron = new Iron(1200,100,75,75);
	hammer = new Hammer(300,300,100,30);

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine); 
  stone.display();
  rubber.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  ground.display();
  rightG.display();
  leftG.display();
  iron.display();
  hammer.display();
}



