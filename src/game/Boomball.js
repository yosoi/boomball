import configure from './utils/configure'
import Phaser from 'phaser'

export default function(id) {
  const config = configure(id);
  new Phaser.Game(config);
}
