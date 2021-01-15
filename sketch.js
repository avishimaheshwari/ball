
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var ground,ball1;

function setup() {
	createCanvas(1600, 700);
     rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,200,1600,20);
	ball1=new Ball(200,200,10);
	dustbin=new Dustbin(400,690,200,20);
    dustbin1=new Dustbin(311.4,690,20,100);
	dustbin2=new Dustbin(500,690,20,100);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball1.dislay();
}
