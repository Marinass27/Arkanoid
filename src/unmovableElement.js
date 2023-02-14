class UnmovableElement extends Element{
    constructor(width, height, top, left){
        super (width, height, top, left);
    }

    draw(){
        this.sprite.style.top = this.top + "px";
        this.sprite.style.left = this.left + "px";
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
    }
}