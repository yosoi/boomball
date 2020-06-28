export default function(name, fn) {
  window.removeEventListener(name, fn);
}
