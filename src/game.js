export class Game {

    constructor(playerOneString, playerTwoString) {
      this.playerOne = playerOneString;
      this.playerTwo = playerTwoString;
      this.scoreOne = 0;
      this.scoreTwo = 0;
      this.playerTurn;
      this.currentPlayer;
  
      //winning conditions array
      this.win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    }
  
    // Player turns selection
    getNextPlayer() {
      this.playerTurn = !this.playerTurn;
      this.currentPlayer = this.playerTurn ? this.playerOne : this.playerTwo;
  
      return this.currentPlayer;
    }
  
    //Update Game score in Localstroage
    updateScore(currentPlayer) {
      if (currentPlayer == this.playerOne) {
        this.scoreOne++;
        localStorage.setItem("playerOneScore", this.scoreOne);
        return this.scoreOne;
      } else {
        this.scoreTwo++;
        localStorage.setItem("playerTwoScore", this.scoreTwo);
        return this.scoreTwo;
      }
    }
  
  // Winning Logic check
    checkWin(playerCells) {
      for (let combination of this.win) {
        let sum = 0;
        for (let index of combination) {
          if (playerCells[index] === this.currentPlayer) {
            sum++;
          }
        }
        if (sum === 3) {
          return true;
        }
      }
      return false;
    }
  
      // draw Logic check if every cell is null
    isDraw(playerCells) {
      if (playerCells.includes(null)) {
        return false;
      } else {
        return true;
      }
    }
  }
  