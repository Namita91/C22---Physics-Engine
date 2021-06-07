//Namespacing of the physics engine modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ground_options;
var ball, ball_options;

function setup() {
  createCanvas(400,400);

  //creating physics engine
  myEngine = Engine.create();
  //naming the world created by the engine
  myWorld = myEngine.world;

  //passing options to make a static rectangular body
  ground_options = {
    isStatic : true
  }

  //creating ground physics body and adding it to the world
  // the body thus created is only in computer's memory
  //it has to be rendered on canvas otherwise
  ground = Bodies.rectangle(200,390,400,10, ground_options);
  World.add(myWorld, ground);

  //bouncing effect to the ball by modifying the restitution - degree of bounciness
  ball_options = {
    restitution : 0.8
  }

  //creating circular physics engine body
  ball = Bodies.circle(200,100,30, ball_options);
  World.add(myWorld, ball);

}

function draw() {
  background(0);
  
  //regularly update the physics engine
  Engine.update(myEngine);

  //rendering the physics body - ground, by giving this rect the position of ground
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);

  //rendering circular body by circle or ellipse command
  //ellipse would take both horizontal and vertical DIAMETER
  //make it take the values entered as radius and not diameter
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  /*

  Both these rectangles do not follow the rules of physics and are not objects.

  //this will create a rectangle whose top-left corner as 200,200.
  fill("red");
  rect(200,200,50,50);

  //this will create a rectangle which has 200,200 as it's center.
  fill("yellow");
  rectMode(CENTER);
  rect(200,200,50,50);

  */

}