function preload() {
	world_start = loadSound("world_start.wav");
	mariodie = loadSound("mariodie.wav");
	kick =loadSound("kick.wav");
	coinsound = loadSound("coin.wav");
	jump = loadSound("jump.wav");
	gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);

    instializeInSetup(mario);

    canvas.parent("canvas");

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("console");

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose', gotPoses);
}
 
function gotPoses(results){
	if(results.length > 0){
      noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
}

function modelLoaded(){
console.log("!ModelLoaded!")
}

function draw() {
	game()
}