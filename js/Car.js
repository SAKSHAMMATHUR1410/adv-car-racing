class Car {
    constructor(x,y){
    var options = {
    restitution : 0.5,
    density : 0.8,
    friction : 0.8
    }
    this.car = Bodies.rectangle(x,y,30,50,options)
    this.width = 30;
    this.height = 50;
    World.add(world,this.car);
    this.image = loadImage("images/car.png")
    }
    display(){
    var angle = this.car.angle;
    var pos = this.car.position;
     push();
     rotate(angle);
     translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop();
    
    }
}