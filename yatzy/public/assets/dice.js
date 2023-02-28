class Dice {
  constructor() {
    this.value = null;
  }

  roll(randomGenerator) {
  this.value = randomGenerator(1, 6);
}

  static throw(numDices, randomGenerator) {
    const dices = [];
    for (let i = 0; i < numDices; i++) {
      const dice = new Dice();
      dice.roll(randomGenerator);
      dices.push(dice);
    }
    return dices;
  }
}

module.exports = Dice;
