class MyAnimation {
  constructor(
    matriz, 
    image, 
    positionX,
    characterWidth, 
    characterHeight, 
    spriteWidth, 
    spriteHeight
  ) {
    this.matriz = matriz;
    this.image = image;
    this.positionX = positionX;
    this.positionY = height - this.characterHeight;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    
    this.currentFrame = 0;
  }

  show() {
    image(
      this.image, 
      this.positionX, 
      this.positionY, 
      this.characterWidth, 
      this.characterHeight, 
      this.matriz[this.currentFrame][0], 
      this.matriz[this.currentFrame][1], 
      this.spriteWidth, 
      this.spriteHeight
    );

    this.animate();
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0
    }
  }
}