import Phaser from '../lib/phaser.js';
import Player from '../js/Player.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    Player.preload(this);
  }
    
  create() {
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

  
    // this.anims.create({
    //   key: 'walkDown',
    //   frameRate: 10,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers('playerFront',{frames:[0,1,2,3]})
    // });
    // this.anims.create({
    //   key: 'walkUp',
    //   frameRate: 10,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers('playerBack',{frames:[0,1,2,3]})
    // });
    // this.anims.create({
    //   key: 'walkRight',
    //   frameRate: 10,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers('playerRight',{frames:[0,1,2,3]})
    // });
    // this.anims.create({
    //   key: 'walkLeft',
    //   frameRate: 10,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers('playerLeft',{frames:[0,1,2,3]})
    // })
  }

  update() {
    this.player.update();
  }
}