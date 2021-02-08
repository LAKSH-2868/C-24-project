class Rubber{
    constructor(x,y,width,height){
        var option={
            'restitution':1,
            'friction':5,
            'density':1
        }
        this.body= Bodies.circle(x,y,75,option);
        this.radius= 75;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("green");
        circle(0,0,this.radius);
        pop();
    }
}