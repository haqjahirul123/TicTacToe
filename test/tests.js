import { Game } from "../src/game.js"

//  const chai = window.chai;
 const assert = chai.assert;

 /* TEST - Winner() */
 describe("Test game class", function () {
  const input1 = new Game("x", "circle");
  
 describe("Check if player won or not and match draw or not", function () {
  const input2= new Game("x", "circle");
  input2.currentPlayer = input1.playerOne;

    it("Winning combination1 - test", function () {
      const winningCombination = ["x","x","x",null,"circle",null,"circle",null,null,];
      assert.isTrue(input2.checkWin(winningCombination));
    });

    it("Winning combination2 - test", function () {
      const winningCombination = [null,null,"circle","x","x","x","circle",null,null,];
      assert.isTrue(input2.checkWin(winningCombination));
    });

    it("Winning combination3 - test", function () {
      const winningCombination = [null,"circle",null,"circle",null,null,"x","x","x"];
      assert.isTrue(input2.checkWin(winningCombination));
    });



    it("Not winning combination - test", function () {
      const notwinning = ["x",null,"x",null,"circle",null,"circle",null,"x",];
      assert.isFalse(input2.checkWin(notwinning));
    });

    it("Match is a draw", function () {
      const matchDraw = ["x","x","circle","circle","circle", "x","x","circle","x",];
      assert.isTrue(input2.isDraw(matchDraw));
    });

    it("Match is not a draw", function () {
      const matchNotDraw = [null, null, null, null, null, null, null, null, null];
      assert.isFalse(input2.isDraw(matchNotDraw));
    });
});
});

