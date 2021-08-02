const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = []
var divisions = []
var plinko = []
var divisionH = 300

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = newGround(400,790,800,20)
  for (var k = 0; k <=width; k = k + 80) 
  { divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); }
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

ground.display();

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
Particle.push(new Particle(random(width/2-30,width/2+30),10,10));
score++;

}

for (var i = 0; i < divisions.length; i++) {
     
  divisions[i].display();
  
}











  drawSprites();

}