
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chain1, ball1,ball2,ball3,ball4,ball5,roof,chain2,chain3,chain4,chain5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof = new Roof(400,100,200,10);
      ball1 = new Ball(400,130,20);
      chain1 = new Chain(ball1.body,{x:400,y:100});
      ball2 = new Ball(380,130,20);
      ball3 = new Ball(360,130,20);
      ball4 = new Ball(420,130,20);
      ball5 = new Ball(440,130,20);
      chain2 = new Chain(ball2.body,{x:360,y:100});
      chain3 = new Chain(ball3.body,{x:340,y:100});
      chain4 = new Chain(ball4.body,{x:440,y:100});
      chain5 = new Chain(ball5.body,{x:460,y:100});
     
     
     
      Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
 chain1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 chain5.display();
 chain4.display();
 chain3.display();
 chain2.display();

  drawSprites();
 
}



