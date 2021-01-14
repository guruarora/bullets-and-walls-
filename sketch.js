var thickness,wall
var bullet,speed,wheight;


function setup() {
  createCanvas(1600,400);

     wall= createSprite(200, 200, thickness,hight/2);


      thickness=random(22,83);
      speed=random(223,321);
      wheight=random(30,52);

      }

function hasCollided(1bullet,1wall){

  bulletRightEdge+1bullet.x+1bullet.width;
  walleftEdge+1wall,x;
  if (bulletRightEdge=wallLeftEdge)
{
               return true
}
              return false;

}

if (hasCollided(bullet,wall))
  { bullet.velocityX=0;
    var damage = 0.5 * wheight*speed*speed/(thickness*thickness*thickness);


if(damage>10)
{
  wall.shapeColor=colour(255,0,0);
}

  
if(damage<10)
{
  wall.shapeColor=colour(0,255,0);
}
  }








  drawSprites();{
    
  }





