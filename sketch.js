// Cria variável no escopo global
let backgroundImage;
let characterImage;
let enemyImage;

let scenario;
let character;
let enemy;

let backgroundSound;


const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]


// Faz um pré carregamento dos recursos que iremos utilizar no jogo
function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');

  backgroundSound = loadSound('sons/trilha_jogo.mp3');
}

// 
function setup() {
  createCanvas(500, 500); // windowWidth, windowHeight
  scenario = new Scenario(backgroundImage, 3);
  character = new Character(characterImage);
  enemy = new Enemy(matrizInimigo, enemyImage, width - 52, 52, 52, 104, 104);
  frameRate(40);
  // backgroundSound.loop();
}

// Desenha os conteúdos em tela
function draw() {
  // Ex.: circle(mouseX, mouseY, 200)
  
  scenario.show();
  scenario.move();
  
  character.show();
  enemy.show();
}

