// Cria variável no escopo global
let backgroundImage;
let characterImage;
let enemyImage;

let scenario;
let character;
let enemy;

let backgroundSound;
let jumpSound;


const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrizPersonagem = [
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


// Faz um pré carregamento dos recursos que iremos utilizar no jogo
function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');

  backgroundSound = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
}

// 
function setup() {
  createCanvas(500, 500); // windowWidth, windowHeight

  scenario = new Scenario(backgroundImage, 3);
  character = new Character(matrizPersonagem, characterImage, 0, 110, 135, 220, 270);
  enemy = new Enemy(matrizInimigo, enemyImage, width - 52, 52, 52, 104, 104);

  frameRate(40);
  // backgroundSound.loop();
}

// Monitora se alguma tecla foi pressionada
function keyPressed() {
  if(key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}


// Desenha os conteúdos em tela
function draw() {
  // Ex.: circle(mouseX, mouseY, 200)
  
  scenario.show();
  scenario.move();
  
  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    console.log('Ai!')
    noLoop();
  }
}

