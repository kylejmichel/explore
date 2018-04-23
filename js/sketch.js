var cirle;
var arrow;
var angle = 0;

function preload() {
  circle = loadImage("explore_o.png");
  arrow = loadImage("explore_arrow.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background('#F5F5F5');
  arrow.resize(50,50);
  circle.resize(200, 200);

}

function draw() {
    background('#F5F5F5');
    image(circle, windowWidth/2, windowHeight/2);
    push();
    translate(windowWidth/2, windowHeight/2);
    rotate(radians(frameCount));
    image(arrow, 0, 0);
    pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
