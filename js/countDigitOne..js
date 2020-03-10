/**
 * @param {number} n
 * @return {number}
 * Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.
 */
var countDigitOne = function(n) {
  let count = 0
  for (let m = 1; m <= n; m *= 10) {
    let a = n / m
    let b = n % m
    let c = ((a + 8) / 10) * m
    let d = a % 10 == 1 ? b + 1 : 0
    console.log(m, a, b, c, d, c + d)
    count += c + d
  }

  // let i = n
  // let count = 0
  // while (i > 0) {
  //   i.toString()
  //     .split("")
  //     .forEach(x => {
  //       x === "1" ? count++ : null
  //       console.log(x)
  //     })
  //   i--
  // }
  return count
}

console.log(countDigitOne(13))
console.log(countDigitOne(121))
// console.log(countDigitOne(824883294))
// Input: 13
// Output: 6
// Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
