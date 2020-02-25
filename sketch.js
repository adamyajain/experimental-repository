const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;

var engine, world;
var box1;
var bgimage;
function preload(){
    bgimage = loadImage("Sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1250,900,70,70);
    box2 = new Box(1500,900,70,70);
    rect1 = new Ground(1000,980,2000,100);
    pig1 = new Pig(1375,900);
    log1 = new Log(1375,850,320,PI/2);

    box3 = new Box(1250,825,70,70);
    box4 = new Box(1500,825,70,70);
    pig2 = new Pig(1375,825);
    log2 = new Log(1375,725,320,PI/2);

    box5 = new Box(1375,700,70,70);

    log3 = new Log(1325,700,135,PI/3);
    log4 = new Log(1425,700,135,-PI/3);
    
    bird1 = new Bird(400,400);

    log5 = new Log(500,400,70,PI/2);

    chain1 = new Chain(bird1.body,log5.body);
}

function draw(){
    background(bgimage);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    rect1.display();

    bird1.display();
    log5.display();
    chain1.display();
}