export default function(scene, onArmed, onCharging, onFired) {
  let charge = 0;
  let timer = undefined;
  this.arm = function(x, y) {
    onArmed();
    timer = scene.time.addEvent({
      callback: () => {
        charge += 0.2;
        onCharging(charge);
      },
      callbackScope: scene,
      delay: 200,
      repeat: 4
    });
  };
  this.fire = function() {
    onFired(charge);
    timer.remove();
    charge = 0;
  };
}
