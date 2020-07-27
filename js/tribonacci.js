/**
 * @param {number} n
 * @return {number}
 * The Tribonacci sequence Tn is defined as follows:
 * 0, 1, 1, 2, 4, 7, 13, 24, 44 ....
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */
const START = [0, 1, 1]
let calcRec = 0

const tribonacciRec = (n) => {
  calcRec++
  if (n < 3) {
    return START[n]
  } else {
    // console.log(n)
    return tribonacciRec(n - 1) + tribonacciRec(n - 2) + tribonacciRec(n - 3)
  }
}

let calcDP = 0
const tribonacciDP = (n) => {
  return trib(n, {})
}

const trib = (n, cache) => {
  calcDP++
  if (cache[n]) {
    return cache[n]
  } else {
    if (n < 3) {
      return START[n]
    } else {
      let result = trib(n - 1, cache) + trib(n - 2, cache) + trib(n - 3, cache)
      cache[n] = result
      return result
    }
  }
}
// ! OUTPUTS

let n = 4
console.log(`${n}:\t${tribonacciRec(n)}\tto be:\t4\tcalc: ${calcDP}`)
console.log(`${n}:\t${tribonacciDP(n)}\tto be:\t4\tcalc: ${calcRec}`)
n = 25
calcDP, calcRec = 0
console.log(`${n}:\t${tribonacciRec(n)}\tto be:\t4\tcalc: ${calcDP}`)
console.log(`${n}:\t${tribonacciDP(n)}\tto be:\t4\tcalc: ${calcRec}`)
