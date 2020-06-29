import ChargeIndicator from './graphics/ChargeIndicator'
import ParticleEffect from './graphics/ParticleEffect'
import Phaser from 'phaser'
import Shockwave from './graphics/Shockwave'

export default function(scene, onArmed, onCharging, onFired) {
  const chargeIndicator = new ChargeIndicator(scene);
  const particleEffect = new ParticleEffect(scene);

  let charge = 0;
  let point = undefined;
  let timer = undefined;

  this.arm = function(x, y) {
    point = new Phaser.Math.Vector2(x, y);
    onArmed(point);
    particleEffect.play(point);
    chargeIndicator.set(charge);
    timer = scene.time.addEvent({
      callback: () => {
        charge += 0.2;
        onCharging(charge, point);
        chargeIndicator.set(charge);
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
    chargeIndicator.set(charge);
    particleEffect.stop();
    new Shockwave(scene, charge, point);
  };
}
