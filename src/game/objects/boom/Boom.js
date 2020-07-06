import ChargeIndicator from './effects/ChargeIndicator'
import Phaser from 'phaser'
import Shockwave from './effects/Shockwave'

export default function(scene, onArmed, onCharging, onFired) {
  const chargeIndicator = new ChargeIndicator(scene);
  let charge = 0;
  let point = undefined;
  let timer = undefined;

  this.arm = function(x, y) {
    point = new Phaser.Math.Vector2(x, y);
    onArmed(point);
    chargeIndicator.set(charge, point);
    timer = scene.time.addEvent({
      callback: () => {
        charge += 0.2;
        onCharging(charge, point);
        chargeIndicator.set(charge, point);
      },
      callbackScope: scene,
      delay: 200,
      repeat: 4
    });
  };

  this.fire = function() {
    new Shockwave(scene, charge, point);
    onFired(charge, point);
    timer.remove();
    charge = 0;
    chargeIndicator.set(charge, point);
  };
}
