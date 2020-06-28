import getConfig from './getConfig'
import Phaser from 'phaser'

export default function(id) {
  const config = getConfig(id);
  new Phaser.Game(config);
}
