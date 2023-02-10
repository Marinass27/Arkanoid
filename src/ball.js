

class Ball extends MovableElement{
  constructor (width, height, top, left, speedX = -2, speedY= -1){
    super (width, height, top, left);
    this.sprite = document.querySelector('.ball')
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
      //this.sprite.style.boxShadow = '-5px 5px rgba(116, 197, 215, 0.5), -8px 8px rgba(134, 201, 215,0.4), -10px 10px rgba(150, 206, 217, 0.3)'
      this.speedY *= (-1);
      this.top -= 1;
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
    this.top = 600
    this.left = 288 
    this.sprite.style.top = this.top + 'px'
    this.sprite.style.left = this.left + 'px'
    this.speedX = -2;
    this.speedY = -1;
  }
}