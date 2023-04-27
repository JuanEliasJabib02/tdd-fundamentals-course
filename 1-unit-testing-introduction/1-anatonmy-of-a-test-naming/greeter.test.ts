import { greeter } from "./greeter"

/* The describe() function is used in Jest to group related test cases together. It helps organize tests into logical groups, making it easier to understand and run them. */
describe("greeter", () => {

  /* Name of the function , describe the function, output function */
  test("helloWorld given default should return Hello World", () => {
    const sut = greeter()
    const expected = "hello world" // Expected is the result what we expect output to be
    /* Sut is the acronimus of system under test  */

    const actual = sut.helloWorld();
    /* Actual is the output of the function */


    expect(actual).toBe(expected)
  })
})