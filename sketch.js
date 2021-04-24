
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}
var particles = []
var plinkos = []
var walls = []
var wallHeight = 300
function setup() {


	createCanvas(480, 800);
	//line(480, 0, 480, 800)

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(480 / 2, 792.5, 480, 15)
	for (var k = 0; k <= width; k = k + 80) {
		walls.push(new Wall(k, height - wallHeight / 2, 10, wallHeight))
	}
	for (var j = 40; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 75, 10, 10))
	}
	for (var j = 15; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 175, 10, 10))
	}
	for (var j = 40; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 275, 10, 10))
	}
	for (var j = 15; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 375, 10, 10))
	}

	//Create the Bodies Here.
	

	Engine.run(engine);

}


function draw() {
	if (frameCount % 60 === 0) {
		particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10))
	}
	//rectMode(CENTER);
	background(0);
	fill("white")
	ground.display();
	for (var k = 0; k < walls.length; k++) {
		walls[k].display();

	}
	for (var j = 0; j < plinkos.length; j++) {
		plinkos[j].display();
	}
	for (var a = 0; a < particles.length; a++) {
		particles[a].display();
	}

	drawSprites();

}



