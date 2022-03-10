


 import { Game } from "../src/game.js"

//mport "../src/main.js"

 const chai = window.chai;
 const assert = chai.assert;

 /* TEST - Winner() */
 describe("Test game class", function () {
  const input1 = new Game("x", "circle");
  
 describe("Check if player won or not", function () {
  const input2= new Game("x", "circle");
  input2.currentPlayer = input1.playerOne;

  it("Winning combination - test", function () {
    const winningCombination = ["x","x","x",null,"circle",null,"circle",null,null,];
    assert.isTrue(input2.checkWin(winningCombination));
  });

  it("Not winning combination - test", function () {
    const notwinning = ["x",null,"x",null,"circle",null,"circle",null,"x",];
    assert.isFalse(input2.checkWin(notwinning));
  });
});
});

