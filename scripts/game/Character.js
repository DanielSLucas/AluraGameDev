class Character {
  constructor(image) {
    this.image = image;
    this.matriz = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
    ];
    this.currentFrame = 0;
  }

  show() {
    // image | coords (x,y) | dimensions (w,h) | coords in the image | display dimensions
    image(this.image, 0, height - 135, 110, 135, this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], 220, 270);

    this.animate();
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0
    }
  }
}