/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
  console.log(n)
  let i = 0
  while (4 ** i <= n) {
    if (4 ** i === n) {
      return true
    }
    i++
  }
  return false
  return 
}

const isPowerOfFour2 = n => {
  console.log(n.toString(4).split('').reduce((a,b) => parseInt(a) + parseInt(b)))
  return n.toString(4).split('').reduce((a,b) => parseInt(a) + parseInt(b)) == 1
}
console.log(isPowerOfFour2(64))
console.log(isPowerOfFour2(0))
console.log(isPowerOfFour2(1))
console.log(isPowerOfFour2(16))
console.log(isPowerOfFour2(567))
