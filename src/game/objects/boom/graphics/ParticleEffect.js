export default function(scene) {
  // initialize particle system
  this.play = function(point) {
    // move particle system to point
    // play particle system
    console.log("play particle effect", point);
  };
  this.stop = function() {
    // stop particle system
    console.log("stop particle effect");
  };
}
