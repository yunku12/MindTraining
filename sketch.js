// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let repeller;

function setup() {
  createCanvas(640, 860);
  ps = new ParticleSystem(createVector(width / 2, 50));
  repeller = new Repeller(width / 2, height *0.6);
}

function draw() {
  background(255,10);
  ps.addParticle(mouseX, mouseY);

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.02);
  ps.applyForce(gravity);

  ps.applyRepeller(repeller);

  repeller.display();
  ps.run();

}
