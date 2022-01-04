
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball
let floor	
let leftBin
let rightBin 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={

		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,10,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
	
	fill("red")
	let ground_options={

		isStatic : true
	}
	floor = new Ground (width/2,670,width,20,ground_options)
	rightBin = new Ground (1100,600,20,120)
	leftBin = new Ground (1300,600,20,120)
  

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);

ellipse(ball.position.x,ball.position.y,20)


floor.show()
leftBin.show()
rightBin.show()

  drawSprites();
 
}



