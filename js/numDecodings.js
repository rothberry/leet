/**
 * @param {string} s
 * @return {number}
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 */

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

var numDecodings = function (s) {
  // first count length of arr as 1
  // ['1', '2'] & ['12']
  // [A,B] & [L] => 2
  // ['2', '2', '6'] & ['2', '26'] & ['22','6']
  // [B,B,F] & [B,Z] & [V,F] => 3
  let output = {}
  let strArr = s.split("")
  let i = 0
  while (i < 10) {
    // first time through
    if (letterCheck(strArr)) {
      output[strArr] = 1
    }

    // if (output[])
    i++
  }
  return output
}

const letterCheck = (arr) => {
  let i = 0
  while (i < arr.length) {
    let cur = parseInt(arr[i])
    if (cur < 1 || cur > 26) {
      return false
    }
    i++
  }
  return true
}

const intToLetter = nums => {
  let letters = []
  nums.forEach(ele => {
    if (letterCheck(ele)) {
      letters.push(LETTERS[ele - 1])
    } else {
      return undefined
    }
  })
  return letters.join("")
}

console.log(intToLetter([1,2,3,0]))
console.log(numDecodings("12"))
// console.log(numDecodings("226"))
// console.log(numDecodings("2222"))

/**
 * 
 l = 4
 l = [0, 1, 2, 3] false
 l = [01, 2, 3]   true
 l = [0, 12, 3]   false
 l = [0, 1, 23]   false
 l = [01, 23]     true
  => 2

 l = 6
 l = [2, 2, 2, 2, 2, 2]
 l = [22, 2, 2, 2, 2]
 l = [2, 22, 2, 2, 2]
 l = [2, 2, 22, 2, 2]
 l = [2, 2, 2, 22, 2]
 l = [2, 2, 2, 2, 22]
 l = [22, 22, 2, 2]
 l = [22, 2, 22, 2]
 l = [22, 2, 2, 22]
 l = [22, 22, 22]

 l = 8
 l = [1, 2, 3, 4, 5, 6, 7, 8]
 l = [12, 3, 4, 5, 6, 7, 8]
 l = [1, 23, 4, 5, 6, 7, 8]
 l = [1, 2, 34, 5, 6, 7, 8]
 l = [1, 2, 3, 45, 6, 7, 8]
 l = [1, 2, 3, 4, 56, 7, 8]
 l = [1, 2, 3, 4, 5, 67, 8]
 l = [1, 2, 3, 4, 5, 6, 78]
 l = [12, 34, 5, 6, 7, 8]
 l = [12, 3, 45, 6, 7, 8]
 l = [12, 3, 4, 56, 7, 8]
 l = [12, 3, 4, 5, 67, 8]
 l = [12, 3, 4, 5, 6, 78]
 l = [12, 34, 56, 7, 8]
 l = [12, 34, 5, 67, 8]
 l = [12, 34, 5, 6, 78]
 l = [1, 2, 3, 4, 5, 6, 7, 8]
 
 */
