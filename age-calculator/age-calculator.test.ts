import { createAgeCaclulator } from "./age-calculator";

describe("agecalculator", () => {


  test.each([
    { birthDate: "1979/02/15", targetDate: "2000/03/21", expected: 21 },
    { birthDate: "1950/01/31", targetDate: "2001/03/21", expected: 51 },
  ])("given $birthDate and targetDate of $targetDate should be $expected",
    ({ birthDate, targetDate, expected }) => {

      //Arrange
      const sut = createAgeCaclulator();

      //act
      const actual = sut(new Date(birthDate), new Date(targetDate))

      //Assert

      expect(actual).toBe(expected)

    })

})