export enum Move {
  Paper,
  Rock,
  Scissors,
}

export enum GameResult {
  PlayerWins,
  PlayersLoses,
  Tie
}
interface RockPaperScissors {
  play(p1Move: Move, p2Move: Move): GameResult

}

interface Scenarios {
  p1Move: Move,
  p2Move: Move,
  gameResult: GameResult,
}



export function createRockPaperScissors(): RockPaperScissors {

  const scenarios: Scenarios[] = [
    {
      p1Move: Move.Scissors,
      p2Move: Move.Scissors,
      gameResult: GameResult.Tie
    },
    {
      p1Move: Move.Scissors,
      p2Move: Move.Rock,
      gameResult: GameResult.PlayersLoses
    },
    {
      p1Move: Move.Scissors,
      p2Move: Move.Paper,
      gameResult: GameResult.PlayerWins
    },
    {
      p1Move: Move.Rock,
      p2Move: Move.Rock,
      gameResult: GameResult.Tie
    },
    {
      p1Move: Move.Rock,
      p2Move: Move.Paper,
      gameResult: GameResult.PlayersLoses
    },
    {
      p1Move: Move.Rock,
      p2Move: Move.Scissors,
      gameResult: GameResult.PlayerWins
    },
    {
      p1Move: Move.Paper,
      p2Move: Move.Rock,
      gameResult: GameResult.PlayerWins
    },
    {
      p1Move: Move.Paper,
      p2Move: Move.Scissors,
      gameResult: GameResult.PlayersLoses
    },
    {
      p1Move: Move.Paper,
      p2Move: Move.Paper,
      gameResult: GameResult.Tie
    },

  ]

  return {
    play(p1Move: Move, p2Move: Move): GameResult {

      const result = scenarios.find(scenario => scenario.p1Move === p1Move && scenario.p2Move === p2Move)

      if (result) {
        return result.gameResult
      } else {
        return GameResult.Tie
      }


    }

  }
}