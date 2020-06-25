// 
function setup() {
  createCanvas(windowWidth, windowHeight); // windowWidth, windowHeight

  game = new Game();
  game.setup();

  homeScreen = new HomeScreen();

  manegerButton = new ManagerButton('Iniciar', width/2, height/2);

  frameRate(40);
  backgroundSound.loop();

  scenes = {
    game,
    homeScreen,
  }

}

// Monitora se alguma tecla foi pressionada
function keyPressed() {
  game.keyPressed();
}


// Desenha os conteúdos em tela
function draw() {
  // Ex.: circle(mouseX, mouseY, 200)

  scenes[currentScene].draw();
}

