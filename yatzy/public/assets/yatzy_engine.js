const Dice = require("./dice");

class YatzyEngine {
  constructor() {
    this.dices = [];
    for (let i = 0; i < 5; i++) {
      this.dices.push(new Dice());
    }
  }

  rollDices() {
    for (const dice of this.dices) {
      dice.roll();
    }
  }
}

module.exports = YatzyEngine;