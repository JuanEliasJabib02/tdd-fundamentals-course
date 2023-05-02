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