class Roof {
    constructor(x, y, width, height) {
        var roof_option = {isStatic: true};

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x, y, width, height, roof_option);
        World.add(world, this.body);
    }

    display(){
     var roofPos = this.body.position;
     rectMode(CENTER);
     stroke("black");
     strokeWeight(2);
     fill("black");
     rect(roofPos.x, roofPos.y, this.width, this.height);
    }

}