import Ball from '../objects/ball/Ball'
import Boom from '../objects/boom/Boom'
import Phaser from 'phaser'
import Pointer from '../utils/Pointer'

export default function() {
  // init physics
  this.matter.world.setBounds();

  // create the ball
  const ball = new Ball(this, (collisionData) => {
    // onBounce
    console.log("bounce", collisionData);
  });

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
