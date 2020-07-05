import Net from "./Net";

export default function (scene, x, height, onScoredUpon, startTop = true) {
  scene.add.rectangle(x, 300, 1, height, 0xdddddd);
  const net = new Net(scene, x, onScoredUpon);
  const start = startTop ? 200 : 400;
  const stop = startTop ? 400 : 200;
  scene.tweens.add({
    targets: net,
    duration: 10000,
    y: { from: start, to: stop },
    ease: "Linear",
    repeat: -1,
    yoyo: true,
  });
}
