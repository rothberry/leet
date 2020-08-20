/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * Given two integers dividend and divisor,
 *
 * Return the quotient after dividing dividend by divisor.
 */
const divide = (dividend, divisor) => {
  // divide two integers without using '*', '/', or '%'
  // stretch cases
  // if dividend === divisor  return 1
  // if dividend < divisor    return 0
  // if divisor === 1 || -1   return dividend || -dividend

  let isPositive = true
  let output = 0

  if (dividend < 0) {
    dividend = Math.abs(dividend)
    isPositive = !isPositive
  }
  if (divisor < 0) {
    divisor = Math.abs(divisor)
    isPositive = !isPositive
  }
  if (divisor === 1) {
    output = dividend
  } else if (divisor === dividend) {
    output = 1
  } else {
    let i = 0
    while (i < dividend) {
      // console.log(i)
      if (i === 0) {
        i = divisor
      } else {
        output++
        i += divisor
      }
    }
  }
  if (isPositive) {
    return output
  } else {
    return -output
  }
}

let dividend = 10
let divisor = 3
let test = divide(dividend, divisor)
console.log(test, test == Math.trunc(dividend / divisor))
// 10/3 => 3.33333... => 3
dividend = 7
divisor = -3
test = divide(dividend, divisor)
console.log(test, test == Math.trunc(dividend / divisor))
// 7/-3 => -2.3333... => -2
dividend = 1
divisor = -1
test = divide(dividend, divisor)
console.log(test, test == Math.trunc(dividend / divisor))
dividend = 2147483647
divisor = 1
test = divide(dividend, divisor)
console.log(test, test == Math.trunc(dividend / divisor))
dividend = -2147483648
divisor = -1
test = divide(dividend, divisor)
console.log(test, test == Math.trunc(dividend / divisor))
