/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  if (n === 1) {
    return "1"
  }
  let i = 1
  let output = "1"
  while (i < n) {
    let temp = ''
    let freq = 0
    let curVal = output[0]
    let pointer = 0

    while (pointer < output.length) {
      if (curVal !== output[pointer]) {
        temp += freq + curVal
        curVal = output[pointer]
        freq = 0
      }
      freq += 1
      pointer += 1
    }
    temp += freq + curVal
    output = temp
    i++
  }
  return output
}

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
// 1
console.log(countAndSay(4))
// 11211
console.log(countAndSay(5))
console.log(countAndSay(6))
// 312211
