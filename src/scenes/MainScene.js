import Phaser from '../lib/phaser.js';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.spritesheet('playerFront', '../assets/player/front.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('playerBack', '../assets/player/back.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('playerRight', '../assets/player/right.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('playerLeft', '../assets/player/left.png', { frameHeight: 32, frameWidth: 32})
  }
    
  create() {
    this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, this.game.renderer.width / 2, this.game.renderer.height / 2, 'playerFront', 0);
    this.add.existing(this.player);

    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      up2: Phaser.Input.Keyboard.KeyCodes.UP,
      down2: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left2: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right2: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    })

    this.anims.create({
      key: 'walkDown',
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('playerFront',{frames:[0,1,2,3]})
    });
    this.anims.create({
      key: 'walkUp',
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('playerBack',{frames:[0,1,2,3]})
    });
    this.anims.create({
      key: 'walkRight',
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('playerRight',{frames:[0,1,2,3]})
    });
    this.anims.create({
      key: 'walkLeft',
      frameRate: 10,
      repeat: -1,
      frames: this.anims.generateFrameNumbers('playerLeft',{frames:[0,1,2,3]})
    })
  }

  update() {
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();

    if (this.inputKeys.left.isDown || this.inputKeys.left2.isDown) {
      this.player.anims.play('walkLeft', true);
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown || this.inputKeys.right2.isDown) {
      this.player.anims.play('walkRight', true);
      playerVelocity.x = 1;
    }
    if (this.inputKeys.up.isDown || this.inputKeys.up2.isDown) {
      this.player.anims.play('walkUp', true);
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown || this.inputKeys.down2.isDown) {
      this.player.anims.play('walkDown', true);
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.player.setVelocity(playerVelocity.x, playerVelocity.y)
  }
}