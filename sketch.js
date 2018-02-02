var bugs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  for (var i = 0; i < 1000; i++) {
    bug = new Jitter();
    bugs.push(bug);
  }
}

function draw() {
  background(125, 100);
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 60);
  this.speed = 1;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);
  this.col = [this.r,this.g,this.b,this.a];

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(...this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
