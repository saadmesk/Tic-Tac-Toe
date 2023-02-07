const YatzyEngine = require("./yatzy_engine");

class YatzyGame {
  constructor() {
    this.engine = new YatzyEngine();
    this.turn = 0;
    this.dices = [];
    this.keep = [];
  }

  start() {
    this.engine.rollDices();
    this.dices = this.engine.dices.map((dice) => dice.value);
    this.keep = Array(5).fill(false);
    console.log("Turn:", this.turn);
    console.log("Dices:", this.dices);
    console.log("Keep:", this.keep);
  }

  roll() {
    this.turn++;
    for (let i = 0; i < 5; i++) {
      if (!this.keep[i]) {
        this.engine.dices[i].roll();
        this.dices[i] = this.engine.dices[i].value;
      }
    }
    console.log("Turn:", this.turn);
    console.log("Dices:", this.dices);
    console.log("Keep:", this.keep);
  }

  toggleKeep(index) {
    this.keep[index] = !this.keep[index];
    console.log("Turn:", this.turn);
    console.log("Dices:", this.dices);
    console.log("Keep:", this.keep);
  }
}

const game = new YatzyGame();
game.start();
