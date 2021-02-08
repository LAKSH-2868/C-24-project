class Sand{
    constructor(x,y,width,height){
        var option = {
            'restitution':1.3, 
            'density':1,
            'friction':5
        }
        this.body = Bodies.circle(x,y,10,option);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("white")
        circle(0,0,this.radius)
        pop();
        } 
   }