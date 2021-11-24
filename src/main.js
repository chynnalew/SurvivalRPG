import MainScene from './scenes/MainScene.js';
import Phaser from './lib/phaser.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 512,
  height: 512,
  backgroundColor: '#333333',
  scene: [MainScene],
  scale: {
      zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: {y:0},
    }
  }
};

new Phaser.Game(config);

