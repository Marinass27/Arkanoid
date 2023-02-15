class MovableElement extends Element{
    constructor(width, height, top, left, sprite){
        super (width, height, top, left);
        this.sprite = document.querySelector(`${sprite}`)
        this.originalTop = top;
        this.originalLeft = left;
    }
    
    restartPosition(){
        this.top = this.originalTop;
        this.left = this.originalLeft;
        this.sprite.style.top = this.top + 'px'
        this.sprite.style.left = this.left + 'px'
    }
}