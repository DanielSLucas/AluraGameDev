class Character extends MyAnimation {
  constructor(
    matriz, 
    image, 
    positionX,
    variationY,
    characterWidth, 
    characterHeight, 
    spriteWidth, 
    spriteHeight,
  ) {
    super(
      matriz, 
      image, 
      positionX,
      variationY,
      characterWidth, 
      characterHeight, 
      spriteWidth, 
      spriteHeight,
    );

    this.variationY = variationY;
    this.startYPosition = height - this.characterHeight - this.variationY;
    this.positionY = this.startYPosition;

    this.jumpSpeed = 0;
    this.gravity = 6;
    this.jumpHeight = -50;
    this.jumps = 0
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight;
      this.jumps++;
    }

  }

  applyGravity() {
    this.positionY = this.positionY + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.positionY > this.startYPosition) {
      this.positionY = this.startYPosition;
      this.jumps = 0;
    }
  }

  isColliding(enemy) {

    // HITBOXES
    // noFill()
    // rect(this.positionX, this.positionY, this.characterWidth, this.characterHeight);
    // rect(enemy.positionX, enemy.positionY, enemy.characterWidth, enemy.characterHeight,)

    const precision = .7;

    const collision = collideRectRect(
      this.positionX, 
      this.positionY, 
      this.characterWidth * precision, 
      this.characterHeight * precision,
      enemy.positionX,
      enemy.positionY,
      enemy.characterWidth * precision, 
      enemy.characterHeight * precision,
    );

    return collision;
  }

}