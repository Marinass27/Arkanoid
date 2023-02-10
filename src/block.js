

class Block extends UnmovableElement {
  constructor (width, height, top, left, i, j) {
    super (width, height, top, left);
    this.i = i;
    this.j = j;
  }
  
 
  
  draw ( ) {
    this.sprite = document.querySelector(`.column${i}-${j}`)
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'
    this.sprite.style.top = this.top + 'px'
    this.sprite.style.left = this.left + 'px'
  }

  static delete (i, j) {
    const blockToRemove = document.querySelector(`.column${i}-${j}`);
    if (blockToRemove !== null) {
      blockToRemove.classList.add('deleted-block');
      setTimeout(function (){
        blockToRemove.parentNode.removeChild(blockToRemove);
      }, 600)
      
    }
  }
}