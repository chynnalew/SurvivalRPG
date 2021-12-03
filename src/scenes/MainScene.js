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
    //add background tileset
    const map = this.make.tilemap({ key: 'map' });
    const tileSet = map.addTilesetImage('practicetileset-topdown', 'tiles', 32, 32, 0, 0);
    const background = map.createLayer('Tile Layer 1', tileSet, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileSet, 0, 0)
    //add collision to walls
    background.setCollision([0, 1, 2, 3, 4, 5, 6, 7, 8,16, 17, 18, 19, 20, 21, 22, 23, 33, 34, 35, 36, 38, 39, 49, 50, 51, 52, 53, 54, 55, 56, 64, 65, 80,82]);
    layer2.setCollision([25, 26, 41, 57, 59, 60, 61])
    this.matter.world.convertTilemapLayer(background);
    this.matter.world.convertTilemapLayer(layer2);
    //add player
    this.player = new Player({ scene: this, x: this.game.renderer.width / 2, y: this.game.renderer.height / 2, texture: 'playerFront', frame: 0 });
    //set controls
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      up2: Phaser.Input.Keyboard.KeyCodes.UP,
      down2: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left2: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right2: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });
    //add camera
    this.cameras.main.setBounds(0, 0, this.displayWidth, this.displayHeight);
    this.cameras.main.startFollow(this.player)
  }

  update() {
    this.player.update();
  }
}