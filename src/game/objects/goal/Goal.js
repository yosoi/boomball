import Net from './Net'
import Phaser from 'phaser'

export default function(scene, x, height, onScoredUpon, startTop = true) {
  scene.add.rectangle(x, 300, 1, height, 0xDDDDDD);
  const net = new Net(scene, x, onScoredUpon);
  const start = startTop ? 150 : 450;
  const stop = startTop ? 450 : 150;
  scene.tweens.add({
    targets: net,
    duration: 10000,
    y: {from: start, to: stop},
    ease: "Linear",
    repeat: -1,
    yoyo: true
  })
}
