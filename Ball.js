class Ball {
constructor(x,y,radius){
var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.circle(x , y, radius,options);
World.add (world , this.body);
this.r = radius;
}
display()
{		var pos=this.body.position;		
push();
translate(pos.x, pos.y);

strokeWeight(3);
fill(255,0,255)
ellipseMode(RADIUS);
ellipse(0,0,this.r, this.r);
pop();		
}
}