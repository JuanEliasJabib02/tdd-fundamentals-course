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



export function createRockPaperScissors(): RockPaperScissors {

  return {
    play(p1Move: Move, p2Move: Move): GameResult {

      if (p1Move === Move.Scissors && p2Move === Move.Scissors) {
        return GameResult.Tie
      }


      if (p1Move === Move.Scissors && p2Move === Move.Rock) {
        return GameResult.PlayersLoses
      }

      if (p1Move === Move.Scissors && p2Move === Move.Paper) {
        return GameResult.PlayerWins
      }

      if (p1Move === Move.Rock && p2Move === Move.Rock) {
        return GameResult.Tie
      }

      if (p1Move === Move.Rock && p2Move === Move.Paper) {
        return GameResult.PlayersLoses
      }

      if (p1Move === Move.Rock && p2Move === Move.Scissors) {
        return GameResult.PlayerWins
      }

      if (p1Move === Move.Rock && p2Move === Move.Scissors) {
        return GameResult.PlayerWins
      }
      if (p2Move === Move.Scissors) {
        return GameResult.PlayersLoses;
      }

      if (p2Move == Move.Paper) {
        return GameResult.Tie
      }
      return GameResult.PlayerWins
    }

  }
}