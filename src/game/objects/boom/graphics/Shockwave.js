export default function(scene, charge, point) {
  const circle = scene.add.circle(point.x, point.y, 10);
  circle.setStrokeStyle(2, 0x000000);
  scene.tweens.add({
    targets: circle,
    duration: 200,
    alpha: {from: 1, to: 0},
    radius: {from: 1, to: 500 * charge},
    onComplete: () => circle.destroy()
  });
}
