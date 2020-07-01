export default function(scene) {
  scene.add.rectangle(400, 300, 1, 600, 0xEA3546);
  const circle = scene.add.circle(400, 300, 100);
  circle.setStrokeStyle(1, 0xF86624);
  const border = scene.add.rectangle(400, 300, 800, 600);
  border.setStrokeStyle(1, 0x333232);
}
