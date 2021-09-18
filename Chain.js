class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 120
        }
      
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
  

    display(){
      
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
            pop();
        }
    }
}
    