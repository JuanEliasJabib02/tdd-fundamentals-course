
interface FizzBuzz {
  start(number: number): string
}


export function createFizzBuzz(): FizzBuzz {


  return {

    start(number): string {
      if (number % 3 === 0 && number % 5 === 0) return "fizz-buzz"
      else if (number % 3 === 0) return "fizz"
      else if (number % 5 === 0) return "buzz"
      else return `${number}`

    },
  }
}

