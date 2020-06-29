export default function(scene) {
  const ball = scene.add.circle(
    scene.sys.game.canvas.width / 2,
    scene.sys.game.canvas.height / 2,
    10,
    0x000000
  );
  scene.matter.add.gameObject(ball);
  ball.setBounce(1);
  ball.setCircle();
  ball.setFriction(0.005);
  ball.setIgnoreGravity(true)
  return ball;
}
