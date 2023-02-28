function calculateTurnScore(game, scoreType) {
  let score = 0;

  switch(scoreType) {
    case 'ones':
    case 'twos':
    case 'threes':
    case 'fours':
    case 'fives':
    case 'sixes':
      for (let i = 0; i < game.dice.length; i++) {
        if (game.dice[i] === scoreType) {
          score += scoreType;
        }
      }
      break;
    case 'pair':
      score = calculatePairScore(game);
      break;
    // Ajoutez d'autres types de score ici
  }

  return score;
}

function calculatePairScore(game) {
  let score = 0;
  let count = {};

  for (let i = 0; i < game.dice.length; i++) {
    if (count[game.dice[i]]) {
      count[game.dice[i]]++;
    } else {
      count[game.dice[i]] = 1;
    }
  }

  for (let i = 6; i >= 1; i--) {
    if (count[i] >= 2) {
      score = i * 2;
      break;
    }
  }

  return score;
}

function updateGameScore(game) {
  let totalScore = 0;
  let upperSectionScore = 0;
  let lowerSectionScore = 0;

  for (let scoreType in game.scores) {
    if (game.scores[scoreType] !== null) {
      totalScore += game.scores[scoreType];
      if (scoreType === 'ones' || scoreType === 'twos' || scoreType === 'threes' || scoreType === 'fours' || scoreType === 'fives' || scoreType === 'sixes') {
        upperSectionScore += game.scores[scoreType];
      } else {
        lowerSectionScore += game.scores[scoreType];
      }
    }
  }

  if (upperSectionScore >= 63) {
    totalScore += 50;
  }

  game.scores.totalScore = totalScore;
  game.scores.upperSectionScore = upperSectionScore;
  game.scores.lowerSectionScore = lowerSectionScore;
}

