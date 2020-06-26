class Health {
  constructor(maxHealth, startHealth) {
    this.maxHealth = maxHealth;
    this.startHealth = startHealth;
    this.currentHealth = this.startHealth;

    this.healthWidth = 25;
    this.healthHeight = 25;

    this.startPositionX = 20;
    this.startPositionY = 20;
  }

  draw() {
    for(let i = 0; i < this.currentHealth; i++) {
      const margin = i * 10;
      const position = this.startPositionX * (1 + i);

      image(heartImage, position + margin, this.startPositionY, this.healthWidth, this.healthHeight);
    }
  }

  restoreHealth() {
    if (this.currentHealth < this.maxHealth) {
      this.health++;p
    }
  }

  loseHealth() {
    this.currentHealth--;
  }
}