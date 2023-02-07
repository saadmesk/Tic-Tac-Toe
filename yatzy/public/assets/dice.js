class Dice {
    constructor() {
      this.value = null;
    }
  
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1;
    }
  }
  
  module.exports = Dice;