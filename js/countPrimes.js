/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // check if n is prime
  if (n < 3) return 0
  let j = n
  let output = []
  while (j > 1) {
    let check = primeCheck(j)
    if (check) {
      // counter++
      output.push(check)
    }
    j--
  }
  return output
}

const primeCheck = (m) => {
  // return boolean

  let i = 2
  while (i < m) {
    // console.log(`${i}\t${m}`)
    if (m % i === 0) {
      return false
    }
    i++
  }
  return true
}

// console.log(primeCheck(10))
// console.log(primeCheck(7))
console.log(countPrimes(10))
console.log(countPrimes(3))
console.log(countPrimes(2))
console.log(countPrimes(1))
