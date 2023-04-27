
export function sayBye() {
  return {
    bye: function () {
      return "bye"
    },
    goodbyePerson: function (name: string) {
      return `goodbye ${name}`
    }
  }
}