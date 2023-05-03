import { GameResult, Move, createRockPaperScissors } from "./rock-paper-scissors";

/* 
The 3 laws of TDD
  1.your not allowed to write any production code unless it is to make a failing unit test pass
  2.your not allowed to write any moreof a unit test than is sufficient to fail; and compilation failures are failures
  3.Your not allowed to write any more
  
  RED-> GREEN -> REFLECT -> REFACTOR
  FAKE IT GREEN BAR PATTERN
 */
describe("rock-paper-scissors", () => {
  test("given player 1 move paper and opponent move rock should return player wins", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Paper, Move.Rock)

    //Assert
    expect(actual).toBe(GameResult.PlayerWins)
  })

  test("given player 1 move paper and opponent move scissors should return player loses", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Paper, Move.Scissors)

    //Assert
    expect(actual).toBe(GameResult.PlayersLoses)
  })

  test("given player 1 move paper and opponent move papper should return a tie", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Paper, Move.Paper)

    //Assert
    expect(actual).toBe(GameResult.Tie)
  })


  test("given player 1 move Rock and opponent move Scissors should return a tie", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Rock, Move.Scissors)

    //Assert
    expect(actual).toBe(GameResult.PlayerWins)
  })

  test("given player 1 move Rock and opponent move Scissors should return a tie", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Rock, Move.Scissors)

    //Assert
    expect(actual).toBe(GameResult.PlayerWins)
  })

  test("given player 1 move Rock and opponent move Paper should return a Player lose", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Rock, Move.Paper)

    //Assert
    expect(actual).toBe(GameResult.PlayersLoses)
  })

  test("given player 1 move Rock and opponent move Rock should return a tie", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Rock, Move.Rock)

    //Assert
    expect(actual).toBe(GameResult.Tie)
  })

  test("given player 1 move Scissors and opponent move Paper should return a player win", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Scissors, Move.Paper)

    //Assert
    expect(actual).toBe(GameResult.PlayerWins)
  })

  test("given player 1 move Scissors and opponent move Rock should return a player lose", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Scissors, Move.Rock)

    //Assert
    expect(actual).toBe(GameResult.PlayersLoses)
  })

  test("given player 1 move Scissors and opponent move Scissors should return a player a tie", () => {
    //Arrange
    const sut = createRockPaperScissors();

    //Act
    const actual = sut.play(Move.Scissors, Move.Scissors)

    //Assert
    expect(actual).toBe(GameResult.Tie)
  })

})