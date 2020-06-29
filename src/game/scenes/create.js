import Ball from '../objects/ball/Ball'
import Boom from '../objects/boom/Boom'
import Pointer from '../utils/Pointer'

export default function() {
  // create the ball
  const ball = new Ball(this);

  // create a "boom" for player 1
  const p1Boom = new Boom(
    this,
    // onArmed
    () => {console.log("armed");},
    // onCharging
    (charge) => {console.log("charging: " + charge);},
    // onFired
    (charge) => {console.log("fire: " + charge);}
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
