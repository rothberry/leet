/**
 * @param {number} n
 * @return {boolean}
 * Write an algorithm to determine if a number n is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 */

var isHappy = function(n) {
  // first separate into digits
  // then sum of squares
  // loop until n = 1

  while (n > 1) {
    if (n === 1) return true
    // else if (n >= 10) {
    else {
      let digitsArr = digits(n)
      console.log("arr: \t \t", digitsArr, "\t", n)
      let sumOfSquares = digitsArr.reduce((acc, cur) => {
        console.log("sq: \t \t", Math.pow(cur, 2))
        return Math.pow(acc, 2) + Math.pow(cur, 2)
      })
      console.log("sumOfSquares: \t", sumOfSquares)
      n = sumOfSquares
    } 
  }
  return false
}

const digits = (num) => {
  let digitsArr = []
  while (num) {
    digitsArr.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  return digitsArr
}
console.log(isHappy(19))
console.log(isHappy(7))
// console.log(digits(19))
