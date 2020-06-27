import getConfig from './getConfig'
import Phaser from 'phaser'

export default function(id="boomball") {
  this.id = id;
  const config = getConfig(id);
  const game = new Phaser.Game(config);
}
