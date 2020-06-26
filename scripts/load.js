// Faz um pré carregamento dos recursos que iremos utilizar no jogo
function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png');
  homeScreenImage = loadImage('imagens/cenario/telaInicial.png');
  homeScreenFont = loadFont('imagens/assets/fonteTelaInicial.otf');

  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  biggerEnemyImage = loadImage('imagens/inimigos/troll.png');
  flyingEnemyImage = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  gameOverImage = loadImage('imagens/assets/game-over.png');
  heartImage = loadImage('imagens/assets/coracao.png');

  cartucho = loadJSON('cartucho/Cartucho.json');

  backgroundSound = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
}