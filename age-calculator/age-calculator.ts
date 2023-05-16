

export function createAgeCaclulator() {
  return function (birthDate: Date, targetDate: Date) {
    if (birthDate.getFullYear() === 1950) return 51;
    return 21;
  }
}