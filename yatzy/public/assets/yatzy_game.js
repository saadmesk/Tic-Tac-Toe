const YatzyEngine = require("./yatzy_engine");

class YatzyGame {
  constructor() {
    this.engine = new YatzyEngine();
  }

  start() {
    this.engine.rollDices();
    console.log("Dices:", this.engine.dices.map((dice) => dice.value));
  }
}

const game = new YatzyGame();
game.start();