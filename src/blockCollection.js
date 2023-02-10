class BlockCollection extends UnmovableElement{
  constructor(width, height, rows, columns, left, top){


  super (width, height, top, left);
  this.blocks = []
  
  this.rows = rows
  this.columns = columns

  }

  

  this.draw = function () {
    this.sprite = document.querySelector(".blocks")
    this.sprite.style.top = this.top + "px";
    this.sprite.style.left = this.left + "px";
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
  }

  this.generateBlockCollection = function () {
    let stringResult = '';
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        stringResult += `<div class="col column${i}-${j}"></div>`;
        let blockToInsert =
          new Block(this.width / this.columns,
            this.height / this.rows,
            (this.height / this.rows) * i,
            (this.width / this.columns) * j,
            i,
            j
          )
        this.blocks.push(blockToInsert)
      }
    }
    return stringResult;
  }

  this.drawAllBlocks = function () {
    this.blocks.forEach(function (block) { block.draw() })
  }

  this.removeBlock = function (ballTop, ballLeft, ballWidth, ballHeight) {
    for (let i = 0; i < this.blocks.length; i++) {
      if (ballTop <= this.blocks[i].top + this.blocks[i].height + this.top // abajo
        && ballLeft + ballWidth >= this.blocks[i].left + this.left // izquierda
        && ballLeft <= this.blocks[i].left + this.blocks[i].width + this.left // derecha
        && ballTop + ballHeight >= this.blocks[i].top + this.top) // arriba
      { 
        game.addPoints();
        this.blocks[i].delete(this.blocks[i].i, this.blocks[i].j);
        if (this.blocks.length === 1){
          game.gameVictory();
        } 
        return this.blocks.splice(i, 1)[0]
      }
    }
  }

  this.restart = function () {
    this.blocks = [];
    blockHTML.innerHTML = blockCollectionInstance.generateBlockCollection();
    this.draw();
    this.drawAllBlocks();
  }
}