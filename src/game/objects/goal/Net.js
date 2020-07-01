export default function(scene, x, onScoredUpon) {
  const circle = scene.add.circle(x, 300, 15, 0xffffff);
  circle.setStrokeStyle(1, 0x000000);
  return circle;
}
