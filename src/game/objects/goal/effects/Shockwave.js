export default function(scene, x, y) {
  // Camera effects
  const camera = scene.cameras.main;
  camera.flash();
  camera.shake();

  // pulse effect
  const circle = scene.add.circle(x, y, 1, 0xF9C80E);
  circle.setDepth(-1);
  scene.tweens.add({
    targets: circle,
    duration: 1000,
    ease: "Cubic",
    alpha: {from: 1, to: 0},
    radius: {from: 1, to: 2000},
    onComplete: () => circle.destroy()
  })
}
