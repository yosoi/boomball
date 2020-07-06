import create from "./scenes/create";
import Phaser from "phaser";
import preload from "./scenes/preload";
import update from "./scenes/update";

export default function (id) {
  return {
    backgroundColor: "#FCFCFC",
    physics: {
      default: "matter",
      matter: {
        enableSleeping: true,
      },
    },
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      height: 600,
      mode: Phaser.Scale.FIT,
      parent: id,
      width: 800,
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
    type: Phaser.AUTO,
  };
}
