class Character extends MyAnimation {
  constructor(
    matriz, 
    image, 
    positionX,
    characterWidth, 
    characterHeight, 
    spriteWidth, 
    spriteHeight,
  ) {
    super(
      matriz, 
      image, 
      positionX,
      characterWidth, 
      characterHeight, 
      spriteWidth, 
      spriteHeight,
    );

    this.startYPosition = height - this.characterHeight;
    this.positionY = this.startYPosition;

    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpSpeed = - 30;
  }

  applyGravity() {
    this.positionY = this.positionY + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.positionY > this.startYPosition) {
      this.positionY = this.startYPosition;
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