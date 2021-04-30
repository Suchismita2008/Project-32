const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var lady1;
var bg = "Day_background.png";

function preload()
{
  getBackgroundImg();
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  lady1 = new Lady(300, 200, 20, 30);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);

  lady1.display();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "Day_background.png";
  }
  else{
      bg = "Night_background.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}