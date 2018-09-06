import "phaser";

var config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: window.innerWidth,
	height: window.innerHeight,
	scene: {
		preload: preload,
		create: create
	}
};

var game = new Phaser.Game(config);
window.game = game;
var map;
var groundLayer;
function preload() {
	this.load.image("dirt", "assets/cannon/dirt.png");
	this.load.image("gold", "assets/cannon/gold.png");
	this.load.atlas(
		"cannon-simple",
		"assets/cannon-simple.png",
		"assets/cannon-simple.json"
	);
	this.load.image("tiles", "assets/cannon-simple.png");
	window.loadThing = this.load;
}

function create() {
	window.addThing = this.add;

	var logo = this.add.image(400, 150, "cannon-simple", "dirt");

	map = this.add.tilemap("world-map", 64, 64);
	//var tileset = map.addTilesetImage('tiles', undefined, undefined, undefined, undefined, 2);
	window.map = map;
	//map.addTilesetImage("cannon-simle", "dirt", 64, 64, 0, 0, 1);
	var tileset = map.addTilesetImage("tiles", null, 64, 64, 0, 0, 0);

	//map.setCollisionBetween(1, 12);

	groundLayer = map.createBlankDynamicLayer(
		"ground",
		tileset,
		0,
		0,
		100,
		100,
		64,
		64
	);
	window.groundLayer = groundLayer;
	// groundLayer.resizeWorld();

	//game.physics.startSystem(Phaser.Physics.ARCADE);

	this.tweens.add({
		targets: logo,
		y: 450,
		duration: 2000,
		ease: "Power3",
		yoyo: true,
		loop: -1
	});
	map.fill(0, 0, 0, 10, 10, true, "ground");
	map.fill(1, 1, 1, 8, 8, true, "ground");
	//map.putTileAt(1,1,0,true);
}
