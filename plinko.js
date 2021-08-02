class Particle {
    constructor(x,y) {
      var options = {
          isstatic = true
      }
      this.radius = 10
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white")
      elipseMode(RADIUS);
      elipse(pos.x, pos.y, this.radius, this.radius);
    }
  };