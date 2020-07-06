import applyForce from "../objects/ball/applyForce";
import Background from "../objects/background/Background";
import Ball from "../objects/ball/Ball";
import Boom from "../objects/boom/Boom";
import Events from "../../events/Events";
import Goal from "../objects/goal/Goal";
import Network from "../network/Network";
import Pointer from "../input/Pointer";

export default function () {
  // init physics
  this.matter.world.setBounds();

  // init events
  const events = new Events();

  // create background
  new Background(this);

  // create p1 goal
  new Goal(
    this,
    100,
    200,
    // onP2Scored
    () => {
      events.score("p2");
    },
    false
  );

  // create p2 goal
  new Goal(
    this,
    700,
    200,
    // onP1Scored
    () => {
      network.score();
      events.score("p1");
    }
  );

  // create the ball
  const ball = new Ball(this, (collisionData) => {
    // onBounce
    // console.log("bounce", collisionData);
  });

  const p2Boom = new Boom(
    this,
    // onArmed
    (x, y) => {},
    // onCharging
    () => {},
    // onFired
    (charge, point) => applyForce(this, ball, charge, point)
  );

  // init network
  const network = new Network(
    // onArm
    (x, y) => p2Boom.arm(x, y),
    // onCountdown
    () => console.log("start countdown"),
    // onClose
    (e) => console.log("disconnected", e),
    // onError
    (e) => console.log("connection error", e),
    // onFire
    (charge, x, y) => p2Boom.fire(),
    // onGhost
    () => console.log("your opponent left"),
    // onInvite
    (matchId) => console.log("you're invited to a match", matchId),
    // onKick
    () => console.log("you got kicked"),
    // onLose
    () => console.log("you lost"),
    // onMaximum
    (e) => console.log("too many tries", e),
    // onOpen
    (e) => console.log("connected", e),
    // onReconnect
    (e) => console.log("reconnected", e),
    // onStart
    () => console.log("start game"),
    // onWin
    () => console.log("you won")
  );

  // create a "boom" for player 1
  const p1Boom = new Boom(
    this,
    // onArmed
    (point) => network.arm(point.x, point.y),
    // onCharging
    (charge, point) => {},
    // onFired
    (charge, point) => {
      network.fire(charge, point.x, point.y);
      applyForce(this, ball, charge, point);
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
