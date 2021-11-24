import Phaser from './lib/phaser.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 512,
  height: 512,
  backgroundColor: '#333333',
  scene: [],
  scale: {
      zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: {y:0},
    }
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }
};

new Phaser.Game(config);

