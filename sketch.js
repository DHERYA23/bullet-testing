var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1000,400);
  
  speed=random(63,81);
  weight=random(30,52);
  thickness=random(7,65);

  bullet=createSprite(15, 200, 30, 10);
  wall=createSprite(500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  wall.debug=true;

  if(hasCollied(wall,bullet)){
    bullet.velocityX=0;
    var damage =0.5* weight * speed * speed/ thickness * thickness * thickness;

    if(damage>200){
      wall.shapeColor=color(255,0,0);
    }



    if(damage<200){
      wall.shapeColor=color(0,255,0);
    }
    
  }
  drawSprites();
}

function hasCollied (wall,bullet){
  if(wall.x-bullet.x<(bullet.width+wall.width) && 
    bullet.x-wall.x<(wall.width+bullet.width) &&
    wall.y-bullet.y<(bullet.height+wall.height) &&
    bullet.y-wall.y<(wall.height+bullet.height)){
      return true;
    }

    else {
      return false;
    }
}

