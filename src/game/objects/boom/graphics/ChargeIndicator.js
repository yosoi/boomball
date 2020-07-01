export default function(scene) {
  let circle = undefined;
  this.set = function(charge, point) {
    if (circle === undefined) {
      // create circle at point in scene
    } else {
      // move circle to point
    }
    // tween circle radius according to charge
    console.log("set charge indicator", charge);
  };
}
