class Game {
  constructor(){
    this.gameStatus = -1;
    this.timerId;
    this.score = 0;
    this.record = 0; 
    this.lives = 3;
  }
  

  startGame = function () {
    document.addEventListener('keydown', function (event) {
      
      if (event.key === 'ArrowRight') {
        platform.direction = 1
      }
  
      if (event.key === 'ArrowLeft') {
        platform.direction = -1
      }
      
    })
    this.timerId = setInterval(this.gameEngine,7 )
  };

  gameOver = function () {
    clearInterval(this.timerId);
    document.querySelector('.game-over').style.display = 'block'
    var finalText = document.querySelectorAll(".game-over .invisible-text");
    if (this.isNewRecord()) this.record = this.score
    this.updatePanel();
    gameOverAudio.play()

    setTimeout(function(){
      game.gameStatus = -1
      game.restart();
    }, 2500)

  };

  gameVictory = function () {
    clearInterval(this.timerId)
    
    document.querySelector('.victory').style.display = 'block'
    var finalText = document.querySelectorAll(".victory .invisible-text");
    finalText.forEach(e => e.style.display = 'inline')
    this.gameStatus = 0;
    if(this.isNewRecord()) this.record = this.score
    this.updatePanel();
    victoryAudio.play();
    setTimeout(function(){
      game.gameStatus = -1
      game.restart();
    }, 2500)
    
  };

  gameEngine = function () {
    platform.move()
    ball.move()
  }

  restart = function (){
    ball.restartPosition();
    platform.restartPosition();
    blockCollectionInstance.restart();
  }

  restartSituation = function () {
    ball.restartPosition();
    platform.restartPosition();
  }

  loseLife = function (){
    if(this.lives === 0){
      this.gameStatus = 0;
      this.gameOver();
    } 
    else {
      clearInterval(this.timerId)
      this.restartSituation()
      var loseLifeText = document.querySelector(".life-lost");
      loseLifeText.style.display = 'block';
      this.lives--
      this.gameStatus = -1
      livesHTML.innerText = this.lives
      loseLifeAudio.play();
    }
  }

  addPoints = function () {
    this.score += 10;
    scoreHTML.innerText = this.score;
  }

  updatePanel = function() {
    this.lives = 3;
    this.score = 0;
    scoreHTML.innerText = this.score;
    recordTextsHTML.forEach(e => e.innerText = this.record);
    livesHTML.innerText = this.lives;
  }

  isNewRecord = function (){
    return this.score > this.record;
  }
}