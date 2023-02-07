const Dice = require("./dice");

class YatzyEngine {
  constructor() {
    this.dices = [];
    for (let i = 0; i < 5; i++) {
      this.dices.push(new Dice());
    }
    this.score = {
      ones: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      bonus: null,
      onePair: null,
      twoPairs: null,
      threeOfAKind: null,
      fourOfAKind: null,
      smallStraight: null,
      largeStraight: null,
      fullHouse: null,
      chance: null,
      yatzy: null
    };
  }

  rollDices() {
    for (const dice of this.dices) {
      dice.roll();
    }
  }

  calculateScore(game, scoreType) {
    switch (scoreType) {
      case "ones":
        return this.dices.filter(dice => dice.value === 1).reduce((a, b) => a + b.value, 0);
      case "twos":
        return this.dices.filter(dice => dice.value === 2).reduce((a, b) => a + b.value, 0);
      case "threes":
        return this.dices.filter(dice => dice.value === 3).reduce((a, b) => a + b.value, 0);
      case "fours":
        return this.dices.filter(dice => dice.value === 4).reduce((a, b) => a + b.value, 0);
      case "fives":
        return this.dices.filter(dice => dice.value === 5).reduce((a, b) => a + b.value, 0);
      case "sixes":
        return this.dices.filter(dice => dice.value === 6).reduce((a, b) => a + b.value, 0);
      default:
        return 0;
    }
  }

  updateGameScore(game) {
    this.score.ones = this.calculateScore(game, "ones");
    this.score.twos = this.calculateScore(game, "twos");
    this.score.threes = this.calculateScore(game, "threes");
    this.score.fours = this.calculateScore(game, "fours");
    this.score.fives = this.calculateScore(game, "fives");
    this.score.sixes = this.calculateScore(game, "sixes");

    const total =
      this.score.ones +
      this.score.twos +
      this.score.threes +
      this.score.fours +
      this.score.fives +
      this.score.sixes;

    if (total >= 63) {
      this.score.bonus = 50;
    }
  }
}
module.exports = YatzyEngine;
