export default function(name, player) {
  const event = new CustomEvent(name, {detail: player});
  window.dispatchEvent(event);
}
