const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine , world;
var watermelon1,watermelon2,watermelon3,watermelon4,watermelon5,ground;
var friend1,friend2,friend3,friend4,gun1,gun2,gun3,gun4,me;
var backgroundimg,platform,slingshot;

var gameState = "onSling";

function preload () {
gettime();
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  watermelon1 = new Melon(700,320,70,70);
  watermelon2 = new Melon(920,320,70,70);
  watermelon3 = new Melon(700,240,70,70);
  watermelon4 = new Melon(920,240,70,70);
  watermelon5 = new Melon(810,160,70,70);
 ground = new Ground(600,390,1200,20);
 friend1 = new Friend(810,350,50,50);
 friend2 = new Friend(810,220,50,50);
 friend3 = new Friend(610,220,50,50);
 friend4 = new Friend(1110,220,50,50);

 gun1= new Gun(810,260,300,PI/2);
 gun2 = new Gun(810,180,300,PI/2);
 gun3= new Gun(760,120,150,PI/7);
 gun4 = new Gun(870,120,150,-PI/7);
 me = new Me(100,100);
 platform = new Ground(150,305,300,170);
 slingshot = new Slingshot(me.body,{x:200,y:50});
}

function draw() {
  if (backgroundimg)
  background(backgroundimg);
  Engine.update(engine);

 watermelon1.display();
 watermelon2.display();
 watermelon3.display();
 watermelon4.display();
 watermelon5.display();
  ground.display();
  friend1.display();
  friend2.display();
  friend3.display();
  friend4.display();
  gun1.display();
  gun2.display();
  gun3.display();
  gun4.display();
  me.display();
  platform.display();
  slingshot.display();


}

function mouseDragged () {

Matter.Body.setPosition(me.body,{x:mouseX,y:mouseY});

}

function mouseReleased (){


slingshot.fly();
gameState = "launched";


}

function keyPressed(){

if (keyCode === 32){

me.trajectory = [];
Matter.Body.setPosition(me.body,{x:200,y:50});
slingshot.attach(me.body);
}



}



async function gettime () {

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var jsonresponse = await response.json();
  console.log (jsonresponse);

  var dateTime = jsonresponse.datetime;
  console.log(dateTime);

  var hour = dateTime.slice(11,13);

  if (hour>=06&hour<=19) { 

    bg = "sprites/bg.png";
    }else{

      bg = "sprites/bg2.jpg";



    }

    backgroundimg = loadImage(bg);




}
