class Platform extends MovableElement {

  constructor (width, height, top, left){
    super (width, height, top, left, ".platform");
    this.direction = 0;
    this.speed = 5;
  }
    
  move() {
    if (
      (this.direction === -1 && this.left <= this.speed) ||
      (this.direction === 1 && this.left >= 600 - this.width - this.speed)
    )
      this.direction = 0;
    this.left += this.direction * this.speed;
    this.sprite.style.left = this.left + "px";
  };
    
  restartPosition() {
    super.restarPosition()
    this.speed = 5;
  }
}