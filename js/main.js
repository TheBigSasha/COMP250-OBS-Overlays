

let particles = [];

let fontSize = 12;

function setup() {
  var cnv = createCanvas(innerWidth, innerHeight);
  textFont('monospace');
  textSize(fontSize);

  // colorMode(RGB, 255, 255, 255, 255);
  colorMode(RGB, 1, 100, 100, 100);

  background(0);
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  if (particles.length < width / height * 100) {
    let p = new Particle();
    particles.push(p);
  }

  // fill(0, 255, 0);
  particles.forEach(p => {
    p.draw();
    p.update();
  });
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

class Particle {
  constructor() {
    this.pos = createVector(0, 0);
    this.speed = 1;
    this.depth = 0;
    this.reset();
  }

  reset() {
    this.pos.set(
      floor(random(width) / fontSize) * fontSize,
      -36);

    this.speed = random(0.375, 1.1);
    // this.depth = random(64, 255);
  }

  update() {
    if (this.pos.y > height) {
      this.reset();
    }
    this.pos.y += this.speed * fontSize;
  }

  draw() {
    let point = round(random(0x3041, 0x3094));
    let char = String.fromCodePoint(point);
    fill(0, 100, 0, map(this.speed, 0.375, 1.1, 40, 100));
    text(char, this.pos.x, floor(this.pos.y / fontSize) * fontSize);
  }}
