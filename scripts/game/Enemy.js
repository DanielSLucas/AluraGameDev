class Enemy extends MyAnimation {
  constructor(
    matriz, 
    image, 
    positionX,
    variationY,
    characterWidth, 
    characterHeight, 
    spriteWidth, 
    spriteHeight,
    speed,
    delay,
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

    this.speed = speed;
    this.delay = delay;
    this.positionX = width + this.delay;
  }

  move() {
    this.positionX = this.positionX - this.speed;

    if( this.positionX < -this.characterWidth - this.delay) {
      this.positionX = width;
    }
  }
}