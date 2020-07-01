import Background from '../objects/background/Background'
import Ball from '../objects/ball/Ball'
import Boom from '../objects/boom/Boom'
import Goal from '../objects/goal/Goal'
import Phaser from 'phaser'
import Pointer from '../utils/Pointer'

export default function() {
  // init physics
  this.matter.world.setBounds();

  // create background
  new Background(this);

  // create the ball
  const ball = new Ball(this, (collisionData) => {
    // onBounce
    console.log("bounce", collisionData);
  });

  // create the goals
  const p1Goal = new Goal(
    this,
    600,
    300,
    // onP2Scored
    () => {
      console.log("p2 scored");
    }
  );

  const p2Goal = new Goal(
    this,
    200,
    300,
    // onP1Scored
    () => {
      console.log("p1 scored");
    }
  )

  // create a "boom" for player 1
  const p1Boom = new Boom(
    this,
    // onArmed
    (point) => {},
    // onCharging
    (charge, point) => {},
    // onFired
    (charge, point) => {
      const ballPosition = new Phaser.Math.Vector2(ball.x, ball.y);
      const direction = ballPosition.subtract(point);
      direction.normalize();
      this.matter.applyForceFromPosition(
        ball,
        point,
        0.05 * charge,
        direction.angle()
      );
    }
  );

  // handle input
  new Pointer(
    this,
    // onPointerDown
    (pointer) => p1Boom.arm(pointer.x, pointer.y),
    // onPointerUp
    (pointer) => p1Boom.fire()
  );
}
