class Platform extends MovableElement {

constructor (width, height, top, left){
  super (width, height, top, left);
  this.sprite = document.querySelector(".platform");
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
    //super.restarPosition()
    this.top = 780;
    this.left = 250;
    this.sprite.style.top = this.top + 'px'
    this.sprite.style.left = this.left + 'px'
    this.speed = 5;
  }
}
