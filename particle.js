class Particle {
    constructor(x,y,radius) {
      var options = {
          restitution : 0.5
      }
      this.radius = radius
      this.body = Bodies.circle(x,y,this.radius,options);
      this.colour = color(random(0,250),random(0,250),random(0,250))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      elipseMode(RADIUS);
      elipse(pos.x, pos.y, this.radius, this.radius);
    }
  };