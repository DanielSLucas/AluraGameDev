class Enemy extends MyAnimation {
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

    this.speed = 10
  }

  move() {
    this.positionX = this.positionX - this.speed;

    if( this.positionX < -this.characterWidth) {
      this.positionX = width;
    }
  }
}