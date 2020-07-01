export default function(scene) {
  let circle = undefined;
  this.set = function(charge, point) {
    const targetRadius = 15 * charge;
    if (circle === undefined) {
      circle = scene.add.circle(
        point.x,
        point.y,
        targetRadius,
        0xF9C80E
      );
    } else {
      circle.setPosition(point.x, point.y);
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
