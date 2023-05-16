import { createAgeCaclulator } from "./age-calculator";

describe("agecalculator", () => {

  test("given birthdate of 1979/02/15 and target date of 2000/03/21 should return 21", () => {
    //Arrange
    const birthDate = new Date("1979/02/15")
    const targetDate = new Date("2000/03/21")
    const expected = 21
    const sut = createAgeCaclulator();

    //act
    const actual = sut(birthDate, targetDate)

    //Assert

    expect(actual).toBe(expected)
  })

  test("given birthdate of 1950/01/31 and target date of 2001/03/21 should return 51", () => {
    //Arrange
    const birthDate = new Date("1950/01/31")
    const targetDate = new Date("2000/03/21")
    const expected = 51
    const sut = createAgeCaclulator();

    //act
    const actual = sut(birthDate, targetDate)

    //Assert

    expect(actual).toBe(expected)
  })

})