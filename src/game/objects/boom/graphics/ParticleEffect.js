export default function(scene) {
  this.play = function(point) {
    console.log("play particle effect", point);
  };
  this.stop = function() {
    console.log("stop particle effect");
  };
}
