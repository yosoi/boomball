import Phaser from "phaser";

export default function (scene, body, charge, point) {
  const bodyPosition = new Phaser.Math.Vector2(body.x, body.y);
  const direction = bodyPosition.subtract(point);
  direction.normalize();
  scene.matter.applyForceFromPosition(
    body,
    point,
    0.05 * charge,
    direction.angle()
  );
}
