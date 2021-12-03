import Phaser from '../lib/phaser.js';
import Player from '../js/Player.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    Player.preload(this);
    this.load.image('tiles', '../../assets/backgrounds/practicetileset-topdown.png');
    this.load.tilemapTiledJSON('map', '../../assets/backgrounds/practicetileset-topdown.json');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileSet = map.addTilesetImage('practicetileset-topdown', 'tiles', 32, 32, 0, 0);
    const background = map.createLayer('Tile Layer 1', tileSet, 0, 0);
    const layer1 = map.createLayer('Tile Layer 2', tileSet, 0, 0)
    //background.setCollisionByProperty({ collide:true });
    //this.matter.world.convertTilemapLayer(background);


    this.player = new Player({ scene: this, x: this.game.renderer.width / 2, y: this.game.renderer.height / 2, texture: 'playerFront', frame: 0 });

    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      up2: Phaser.Input.Keyboard.KeyCodes.UP,
      down2: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left2: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right2: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    })
  }

  update() {
    this.player.update();
  }
}