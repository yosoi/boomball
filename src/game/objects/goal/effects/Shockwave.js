export default function(scene, x, y) {
  const camera = scene.cameras.main;
  camera.flash();
  camera.shake();
  // stop time and then bring it back to normal speed
  const circle = scene.add.circle(x, y, 1, 0xF9C80E);
  circle.setDepth(-1);
  scene.tweens.add({
    targets: circle,
    duration: 200,
    ease: "Bounce",
    alpha: {from: 1, to: 0},
    radius: {from: 1, to: 500},
    onComplete: () => circle.destroy()
  })
  // set circle underneath everything else
  // set gradient fill
  // animate gradient
  // destroy circle on animation finished
}
