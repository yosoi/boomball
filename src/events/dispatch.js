export default function(name, player) {
  const event = new CustomEvent(name, {player: player});
  window.dispatchEvent(event);
}
