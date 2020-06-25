class Game {
  constructor() {
    this.indexCurrentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(backgroundImage, 3);
    score = new Score();

    character = new Character(matrizPersonagem, characterImage, 0, 30, 110, 135, 220, 270);
    const enemy = new Enemy(matrizInimigo, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const biggerEnemy = new Enemy(matrizInimigoGrande, biggerEnemyImage, width*2, 0, 200, 200, 400, 400, 15, 100);
    const flyingEnemy = new Enemy(matrizInimigoVoador, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10, 100)

    enemies.push(enemy);
    enemies.push(biggerEnemy);
    enemies.push(flyingEnemy);

  }

  keyPressed() {
    if(key === 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
  }

  draw() {
    scenario.show();
    scenario.move();

    score.show();
    score.addScore();
    
    character.show();
    character.applyGravity();

    const enemy = enemies[this.indexCurrentEnemy];
    const visibleEnemy = enemy.positionX < - enemy.characterWidth;
    
    enemy.show();
    enemy.move();
    
    if (visibleEnemy) {
      this.indexCurrentEnemy++;
      if (this.indexCurrentEnemy > 2) {
        this.indexCurrentEnemy = 0;
      }
      enemy.speed = parseInt(random(10, 30));
    }

    if (character.isColliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      noLoop();
    }
  }
}