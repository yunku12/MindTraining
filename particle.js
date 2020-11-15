// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
    this.randomParticle = random(1,10);
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;

    this.velocity.limit(1);
  }

  // Method to display
  display() {
    stroke(5,105,255, this.lifespan);
    strokeWeight(2);
    fill(5,105,255, this.lifespan);
    ellipse(this.position.x, this.position.y, this.randomParticle, this.randomParticle );
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
