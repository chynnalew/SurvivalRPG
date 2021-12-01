import Phaser from '../lib/phaser.js';

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.animations();
    this.scene.add.existing(this);
  }

  static preload(scene) {
    scene.load.spritesheet('playerFront', '../assets/player/front.png', { frameHeight: 32, frameWidth: 32 });
    scene.load.spritesheet('playerBack', '../assets/player/back.png', { frameHeight: 32, frameWidth: 32 });
    scene.load.spritesheet('playerRight', '../assets/player/right.png', { frameHeight: 32, frameWidth: 32 });
    scene.load.spritesheet('playerLeft', '../assets/player/left.png', { frameHeight: 32, frameWidth: 32})
  }

  animations() {
    this.anims.create({
      key: 'walkDown',
      frameRate: 10,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('playerFront',{frames:[1,2,3,0]})
    });
    this.anims.create({
      key: 'walkUp',
      frameRate: 10,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('playerBack',{frames:[1,2,3,0]})
    });
    this.anims.create({
      key: 'walkRight',
      frameRate: 10,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('playerRight',{frames:[1,2,3,0]})
    });
    this.anims.create({
      key: 'walkLeft',
      frameRate: 10,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('playerLeft',{frames:[0,1,2,3]})
    })
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();

    if (this.inputKeys.left.isDown || this.inputKeys.left2.isDown) {
      this.anims.play('walkLeft', true);
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown || this.inputKeys.right2.isDown) {
      this.anims.play('walkRight', true);
      playerVelocity.x = 1;
    }
    if (this.inputKeys.up.isDown || this.inputKeys.up2.isDown) {
      this.anims.play('walkUp', true);
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown || this.inputKeys.down2.isDown) {
      this.anims.play('walkDown', true);
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
  }
}