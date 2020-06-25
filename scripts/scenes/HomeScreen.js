class HomeScreen {
  constructor() {

  }

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage() {
    image(homeScreenImage, 0, 0, width, height);
  }

  _text() {
    textFont(homeScreenFont);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height/3);
    textSize(150);
    text('Hipsta', width/2, height/5 * 3);
  }

  _button() {
    manegerButton.positionY = height/7 * 5;
    manegerButton.draw();
  }
}