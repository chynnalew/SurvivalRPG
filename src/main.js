import MainScene from './scenes/MainScene.js';
import Phaser from './lib/phaser.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 350,
  height: 350,
  backgroundColor: '#000000',
  scene: [MainScene],
  scale: {
      zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      //debug: true,
      gravity: {y:0},
    }
  }
};

new Phaser.Game(config);

