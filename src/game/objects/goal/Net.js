import Shockwave from './effects/Shockwave'

export default function(scene, x, onScoredUpon) {
  const circle = scene.add.circle(x, 300, 15, 0xffffff);
  scene.matter.add.gameObject(circle);
  circle.setStrokeStyle(1, 0x000000);
  circle.setSensor(true);
  circle.setOnCollide(() => {
    new Shockwave(scene, circle.x, circle.y);
    onScoredUpon();
  });
  return circle;
}
