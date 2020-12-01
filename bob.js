class Bob {

    constructor(x, y, radius) {

     var bob_option = {
         isStatic: false, 
         restitution: 1.2,
         friction:0.4,
         density:3
        }

      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, bob_option)
      World.add(world, this.body);

 }

    display() {

        var bobPos = this.body.position;

        push()
        translate(bobPos.x, bobPos.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        stroke("black")
        strokeWeight(3);
        fill("silver");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }














}