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

// console.log(intToLetter([1,2,3,0]))
// console.log(numDecodings("12"))
// console.log(numDecodings("226"))
// console.log(numDecodings("2222"))


// ****************************************
function numDecodingsLeet(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i));  // last one digit
    if (a >= 1 && a <= 9) {
      console.log('sig')
      dp[i] += dp[i - 1];
    }

    const b = Number(s.slice(i - 2, i));  // last two digits
    if (b >= 10 && b <= 26) {
      console.log('pair')
      dp[i] += dp[i - 2];
    }
  }
  console.log(dp)
  return dp[s.length];
}
console.log(numDecodingsLeet('101'))
console.log(numDecodingsLeet('2223'))
console.log(numDecodingsLeet('110'))

// ****************************************
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
