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
    this.positionX = width;
  }

  move() {
    this.positionX = this.positionX - this.speed;

    // if( this.positionX < -this.characterWidth) {
    //   this.positionX = width;
    // }
  }

  goBack() {
    this.positionX = width;
  }
}