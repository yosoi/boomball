export default function(scene, onBounce) {
  const radius = 10;
  const ball = scene.add.circle(
    scene.sys.game.canvas.width / 2,
    scene.sys.game.canvas.height / 2,
    radius,
    0x000000
  );
  scene.matter.add.gameObject(ball);
  ball.setCircle(radius);
  ball.setIgnoreGravity(true);
  ball.setBounce(1);
  ball.setOnCollide(onBounce);
  return ball;
}
