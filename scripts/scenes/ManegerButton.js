class ManagerButton {
  constructor(text, positionX, positionY) {
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass('botao-tela-inicial');
  }

  draw() {
    this.button.position(this.positionX, this.positionY);
    this.button.center('horizontal');
  }

  _changeScene() {
    this.button.remove();
    currentScene = 'game';
  }
}