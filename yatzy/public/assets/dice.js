class Dice {
  constructor() {
    this.value = null;
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }

  static throw(numDices) {
    const dices = [];
    for (let i = 0; i < numDices; i++) {
      const dice = new Dice();
      dice.roll();
      dices.push(dice);
    }
    return dices;
  }
}

module.exports = Dice;
