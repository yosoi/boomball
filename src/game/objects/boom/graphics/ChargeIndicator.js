export default function(scene) {
  let circle = undefined;
  this.set = function(charge, point) {
    const targetRadius = 15 * charge;
    if (circle === undefined) {
      circle = scene.add.circle(
        point.x,
        point.y,
        targetRadius,
        0x000000
      );
    } else {
      circle.x = point.x;
      circle.y = point.y;
      const currentRadius = circle.radius;
      scene.tweens.add({
        targets: circle,
        duration: 500,
        ease: 'Elastic',
        radius: {from: currentRadius, to: targetRadius}
      });
    }
  };
}
