/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
  console.log(n)
  let i = 0
  while (3 ** i <= n) {
    if (3 ** i === n) {
      return true
    }
    i++
  }
  return false
  return 
}

const isPowerOfThree2 = n => {
  console.log(n.toString(3).split('').reduce((a,b) => parseInt(a) + parseInt(b)))
  return n.toString(3).split('').reduce((a,b) => parseInt(a) + parseInt(b)) == 1
}
console.log(isPowerOfThree2(27))
console.log(isPowerOfThree2(0))
console.log(isPowerOfThree2(9))
console.log(isPowerOfThree2(45))
console.log(isPowerOfThree2(1))
console.log(isPowerOfThree2(114))
