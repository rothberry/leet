/**
 * @param {string} s
 * @return {string}
 * Given a string s, return the longest palindromic substring in s.
 */
const longestPalindrome = (s) => {
  
}

const isPalindrome = arr => {
  // console.log(arr)
  if (arr.length === 1 || (arr.length === 2 && arr[0] === arr[1])) {
    return true
  }
  if (arr[0] === arr[arr.length - 1]) {
    return isPalindrome(arr.slice(1, arr.length - 1))
  } else {
    return false
  }
}

// * TESTING
let s = "babad",
output = "bab"
console.log("1:\t", s, output, s == output)

// s = "cbbd",
// output = "bb"
// console.log("2:\t", s, output, s == output)

// s = "a",
// output = "a"
// console.log("3:\t", s, output, s == output)

// s = "ac",
// output = "ac"
// console.log("4:\t", s, output, s == output)

