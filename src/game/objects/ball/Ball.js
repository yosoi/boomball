export default function(scene) {
  const radius = 10;
  const ball = scene.add.circle(
    scene.sys.game.canvas.width / 2,
    scene.sys.game.canvas.height / 2,
    radius,
    0x000000
  );
  scene.matter.add.gameObject(ball);
  console.log(ball);

  ball.setCircle(radius);
  ball.setIgnoreGravity(true);
  ball.setBounce(1);
  return ball;
}
