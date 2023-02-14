class Ball extends MovableElement{
  constructor (width, height, top, left, speedX = -2, speedY= -1){
    super (width, height, top, left, ".ball");
    this.speedX = speedX;
    this.speedY = speedY;
  }
  
  
  collidesWithSomething() {
    return this.collidesWithPlatform
      || this.collidesWithLateralWalls
      || this.collidesWithTopWall
      || this.collidesWithBlocks
      || this.collidesWithBottom
  }

  collidesWithPlatform() { // el top ball + hight ball != top de platform*/
    if (this.top + this.height >= platform.top
      && this.left <= platform.left + platform.width
      && this.left + this.width >= platform.left) {
      this.speedY *= (-1);
      this.top -= 2;
      boing1.play();
    }
  }

  collidesWithLateralWalls() {
    if (this.left + this.width > 600 || this.left < 0) {
      boing2.play();
      this.speedX *= (-1);
    }
    
  }

  collidesWithTopWall() {
    if (this.top <= 0) {
      boing2.play();
      this.speedY *= (-1);
    }
  }
  collidesWithBlocks() {
    if (this.top <= blockCollectionInstance.top + (blockCollectionInstance.top / blockCollectionInstance.rows) + blockCollectionInstance.height // abajo
      && this.left + this.width >= blockCollectionInstance.left // izquierda
      && this.left <= blockCollectionInstance.left + blockCollectionInstance.width // derecha
      && this.top + this.height >= blockCollectionInstance.top) // arriba 
    {
      
      let blockRemoved = blockCollectionInstance.removeBlock(this.top, this.left, this.width, this.height)
      if(blockRemoved !== undefined){
        if(Math.random() < 0.5) this.speedX *= (-1)
        else this.speedY *= (-1)
        platform.speed *= (1.0025)
        blockCollisionAudio.play()
        
      }
    }
  }
  collidesWithBottom() {
    if (this.top + this.height > 800) {
      game.loseLife()
    }
  }

  move() {
    if (!this.collidesWithPlatform() && !this.collidesWithLateralWalls() && !this.collidesWithTopWall() && !this.collidesWithBlocks() && !this.collidesWithBottom()) {

      
      this.left += this.speedX;
      this.sprite.style.left = this.left + "px";
      this.top += this.speedY;
      this.sprite.style.top = this.top + "px";
    }
  }
  restartPosition() {
    super.restartPosition();
    this.speedX = -2;
    this.speedY = -1;
  }
}