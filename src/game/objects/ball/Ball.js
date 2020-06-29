export default function(scene) {
  const ball = scene.add.circle(400, 300, 10, 0x000000);
  scene.physics.add.existing(ball);
  ball.body.bounce.x = 1;
  ball.body.bounce.y = 1;
  ball.body.collideWorldBounds = true;
  return ball;
}
