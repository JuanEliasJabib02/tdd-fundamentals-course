import { createFizzBuzz } from "./create-fizz-buzz";

//Fizz-buzz Scenarios




describe("fizz-buzz", () => {

  describe("fizz", () => {

    test.each([
      { input: 3 },
      { input: 6 },
      { input: 9 }])
      ("given $input should return fizz", ({ input }) => {

        //Arrange
        const expected = "fizz"
        const sut = createFizzBuzz();

        //act

        const actual = sut.start(input)

        //Assert
        expect(actual).toBe(expected)
      })




  })

  describe("buzz", () => {

    test.each([
      { input: 5 },
      { input: 10 },
      { input: 20 }])
      ("given $input should return Buzz", ({ input }) => {

        //Arrange
        const expected = "buzz"
        const sut = createFizzBuzz();

        //act

        const actual = sut.start(input)

        //Assert
        expect(actual).toBe(expected)
      })




  })

  describe("fizz-buzz", () => {

    test.each([
      { input: 15 },
      { input: 30 },
      { input: 75 },
    ])
      ("given $input should return fizz-buzz", ({ input }) => {

        //Arrange
        const expected = "fizz-buzz"
        const sut = createFizzBuzz();

        //act

        const actual = sut.start(input)

        //Assert
        expect(actual).toBe(expected)
      })




  })

  describe("return the same input", () => {

    test.each([
      { input: 1 },
      { input: 2 },
      { input: 4 },
      { input: 16 },
      { input: 77 },
    ])
      ("given $input should return $input", ({ input }) => {

        //Arrange
        const expected = input.toString()
        const sut = createFizzBuzz();

        //act

        const actual = sut.start(input)

        //Assert
        expect(actual).toBe(expected)
      })




  })

})