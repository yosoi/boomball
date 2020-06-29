import Ball from '../objects/ball/Ball'
import Boom from '../objects/boom/Boom'
import Pointer from '../utils/Pointer'

export default function() {
  // init physics
  this.matter.world.setBounds(5, 5, 790, 590);

  // create the ball
  const ball = new Ball(this);

  // create a "boom" for player 1
  const p1Boom = new Boom(
    this,
    // onArmed
    (point) => {
      console.log("armed", point);
    },
    // onCharging
    (charge, point) => {
      console.log("charging", charge, point);
    },
    // onFired
    (charge, point) => {
      console.log(point, ball);
      // const forceVector = undefined;
      // ball.applyForceFrom(point, forceVector);
      console.log("fire", charge, point);
    }
  );

  // handle input
  const pointer = new Pointer(
    this,
    // onPointerDown
    (pointer) => p1Boom.arm(pointer.x, pointer.y),
    // onPointerUp
    (pointer) => p1Boom.fire()
  );
}
