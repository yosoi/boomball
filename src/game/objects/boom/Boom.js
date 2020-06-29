import Phaser from 'phaser'

export default function(scene, onArmed, onCharging, onFired) {
  let charge = 0;
  let point = undefined;
  let timer = undefined;
  this.arm = function(x, y) {
    point = new Phaser.Geom.Point(
      x / scene.sys.game.canvas.width,
      y / scene.sys.game.canvas.height
    );
    onArmed(point);
    timer = scene.time.addEvent({
      callback: () => {
        charge += 0.2;
        onCharging(charge, point);
      },
      callbackScope: scene,
      delay: 200,
      repeat: 4
    });
  };
  this.fire = function() {
    onFired(charge, point);
    timer.remove();
    charge = 0;
  };
}
