var r = 0;
var g = 200;
var b = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(r, g, b);
  b = map(mouseX, 0, 400, 0, 255);
  r = map(mouseY, 0, 400, 0, 255);

  //cursor
  noFill();
  stroke(b, r, g);
  strokeWeight(10)
  ellipse(mouseX, mouseY,r)
  noCursor();

}
