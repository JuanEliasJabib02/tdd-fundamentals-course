/* The four phases o fthe unit test 


 1-[Setup]-The "arrange or setup" phase in unit testing, also known as the "setup" phase, prepares the test environment by setting up any required dependencies or resources that the code being tested relies on. The goal is to ensure that the test code can be executed in a controlled and predictable environment, so that any issues in the code being tested can be diagnosed accurately. 
 
 2-[Execution]-The "execution" phase in unit testing, also known as the "act" section, is where the actual code being tested is executed with the specific inputs or parameters for that test. The purpose of this phase is to perform the specific action or behavior that the test is intended to verify. For example, this might involve calling a function or method with a set of input parameters and recording the resulting output or side effects. The goal is to simulate the real-world use of the code being tested in a controlled and predictable environment, so that any issues or bugs in the code can be detected and diagnosed accurately.

 3-[Assert]-Assertion: In this phase, the result of the code execution is checked against the expected result. This is typically done using an assertion function, such as Jest's expect().

*/


import { sayBye } from "./say-bye";


/* Function to test */
describe("sayBye", () => {
  /* We can divide the test by groups and that is the structure */

  /* First group method bye */
  describe("bye", () => {
    it("should return bye", () => {
      //Setup
      const expected = "bye"
      const sut = sayBye()

      //Execution
      const actual = sut.bye();

      //Assert
      expect(actual).toBe(expected)
    })
  })

  /* Second group, the method goodbye */

  describe("goodbyePerson", () => {
    it("should return a goodbye + name ", () => {
      //Setup
      const expected = "goodbye juan"
      const sut = sayBye()
      //Execution
      const actual = sut.goodbyePerson("juan");

      //Assert
      expect(actual).toBe(expected)
    })
  })

})