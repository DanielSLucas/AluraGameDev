class Game {
  constructor() {
    this.indexCurrentEnemy = 0;
    this.gameMap = cartucho.gameMap;
  }

  setup() {
    scenario = new Scenario(backgroundImage, 3);
    score = new Score();
    health = new Health(cartucho.config.maxHealth, cartucho.config.startHealth);

    character = new Character(matrizPersonagem, characterImage, 0, 30, 110, 135, 220, 270);
    const enemy = new Enemy(matrizInimigo, enemyImage, width - 52, 30, 52, 52, 104, 104, 10);
    const biggerEnemy = new Enemy(matrizInimigoGrande, biggerEnemyImage, width*2, 0, 200, 200, 400, 400, 15);
    const flyingEnemy = new Enemy(matrizInimigoVoador, flyingEnemyImage, width - 52, 200, 100, 75, 200, 150, 10)

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

    health.draw();

    score.show();
    score.addScore();
    
    character.show();
    character.applyGravity();

    const currentLine = this.gameMap[this.indexCurrentEnemy];
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.positionX < - enemy.characterWidth;
    
    enemy.speed = currentLine.speed; //parseInt(random(10, 30))

    enemy.show();
    enemy.move();
    
    if (visibleEnemy) {
      this.indexCurrentEnemy++;
      enemy.goBack();
      if (this.indexCurrentEnemy > this.gameMap.length - 1) {
        this.indexCurrentEnemy = 0;
      }
    }

    if (character.isColliding(enemy)) {
      health.loseHealth();
      character.becomeInvulnerable();
      if (health.currentHealth === 0) {
        image(gameOverImage, width/2 - 200, height/3);
        noLoop();
      }      
    }
  }
}