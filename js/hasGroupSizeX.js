/**
 * @param {number[]} deck
 * @return {boolean}
 * !DONE
 */

const gcd = (a, b) => {
  // console.log("a; ", a, "b: ", b)
  return b === 0 ? a : gcd(b, a % b)
}
var hasGroupsSizeX = function(deck) {
  // first check if deck is odd or nil
  if (deck.length <= 1) return false
  let object = new Object()
  // let object = new Array()

  deck.forEach(card => {
    if (!!object[card]) {
      object[card] += 1
    } else {
      object[card] = 1
    }
  })

  // return true if all values are equal
  let values = Object.values(object)
  return values.reduce(gcd) > 1
  // for (let i = 1; i < values.length; i++) {
  //   let prev = values[i - 1]
  //   let val = values[i]

  //   console.log(prev === val)
  //   if (prev !== val) {
  //     return "nah"
  //   }
  // }
  // return "yah"
}

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
// Output: true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
// Output: false
console.log(hasGroupsSizeX([1]))
// Output: false
console.log(hasGroupsSizeX([1, 1]))
// Output: true
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]))
// Output: true
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2]))
