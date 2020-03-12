/**
 * @param {number} N
 * @return {number}
 * Find the smallest prime palindrome greater than or equal to N.
 * Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1.
 * For example, 2,3,5,7,11 and 13 are primes.
 * Recall that a number is a palindrome if it reads the same from left to right as it does from right to left.
 * For example, 12321 is a palindrome.
 * 1 <= N <= 10^8
 * The answer is guaranteed to exist and be less than 2 * 10^8.
 */
var primePalindrome = function(N) {
  // test if prime =>
  // (N % 2 === 0 || N % 3 === 0) => false
  // let output = N
  while (true) {
    let primeCheck = N % 2 === 0 || N % 3 === 0 || N % 11 === 0
    if (!primeCheck) {
      let NString = N.toString().split("")
      let palindromeCheck = isPalindrome(NString)
      if (palindromeCheck) {
        return N
      }
    }
    N++
  }
  // test if palindrome
  // split into array, then recursively check first and last digit
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
// let x = ["1", "0", "1"]
// console.log(isPalindrome(x))

console.log(primePalindrome(6), 7)
// Output: 7
console.log(primePalindrome(8), 11)
// Output: 11
console.log(primePalindrome(13), 101)
// Output: 101
console.log(primePalindrome(120))
