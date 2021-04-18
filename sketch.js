var mr, fr

function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 50);
  fr.shapeColor = "blue"

  mr = createSprite(400,300,50,50);
  mr.shapeColor = "green"
}

function draw() {
  background("black");
  
  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < mr.height/2 +fr.height/2 && fr.y - mr.y < fr.height/2 + mr.height/2){
    mr.shapeColor="orange";
    fr.shapeColor="yellow";
  }

  else{
    mr.shapeColor = "blue";
    fr.shapeColor = "green"
  }
  drawSprites();
}