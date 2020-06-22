// Cria variável no escopo global
let backgroundImage;
let characterImage;
let scenario;
let backgroundSound;
let character;


// Faz um pré carregamento dos recursos que iremos utilizar no jogo
function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  backgroundSound = loadSound('sons/trilha_jogo.mp3');
}

// 
function setup() {
  createCanvas(500, 500); // windowWidth, windowHeight
  scenario = new Scenario(backgroundImage, 3);
  character = new Character(characterImage);
  frameRate(40);
  // backgroundSound.loop();
}

// Desenha os conteúdos em tela
function draw() {
  // Ex.: circle(mouseX, mouseY, 200)
  
  scenario.show();
  scenario.move();
  
  character.show();
}

