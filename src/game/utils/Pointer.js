export default function(scene, onPointerDown, onPointerUp) {
  scene.input.on('pointerdown', (pointer) => {
    onPointerDown(pointer);
  });
  scene.input.on('pointerup', (pointer) => {
    onPointerUp(pointer);
  });
}
