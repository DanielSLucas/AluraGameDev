// Cria variável no escopo global
let backgroundImage;
let characterImage;
let enemyImage;
let biggerEnemyImage;
let flyingEnemyImage;
let gameOverImage;

let scenario;
let character;
let score;

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

const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const enemies = [];
// Faz um pré carregamento dos recursos que iremos utilizar no jogo
function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  biggerEnemyImage = loadImage('imagens/inimigos/troll.png');
  flyingEnemyImage = loadImage('imagens/inimigos/gotinha-voadora.png');
  gameOverImage = loadImage('imagens/assets/game-over.png');

  backgroundSound = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
}

// 
function setup() {
  createCanvas(500, 500); // windowWidth, windowHeight

  scenario = new Scenario(backgroundImage, 3);
  score = new Score();

  character = new Character(matrizPersonagem, characterImage, 0, 30, 110, 135, 220, 270);
  const enemy = new Enemy(matrizInimigo, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 200);
  const biggerEnemy = new Enemy(matrizInimigoGrande, biggerEnemyImage, width*2, 0, 200, 200, 400, 400, 10, 2500);
  const flyingEnemy = new Enemy(matrizInimigoVoador, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10, 1500)

  enemies.push(enemy);
  enemies.push(biggerEnemy);
  enemies.push(flyingEnemy);

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

  score.show();
  score.addScore();
  
  character.show();
  character.applyGravity();

  enemies.forEach( singleEnemy => {
    singleEnemy.show();
    singleEnemy.move();
    
    if (character.isColliding(singleEnemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      noLoop();
    }
  });


  
}

