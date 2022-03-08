/**
 * @param {number} num
 * @return {number}
 * Given an integer num, return the number of steps to reduce it to zero.
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 */

const numberOfSteps = (num) => {
  // Goal: Continue to decrease num by half or 1 until 0

  // Start off with a counter of 0
  // Loop until num == 0
  // inside:
  // if the current num is odd then minus 1
  // if the current num is even then divide by 2
  // increase counter

  let count = 0

  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = num - 1
    }
    count++
  }

  return count
}


// let countRec = 0
const numStepsRecur = (num, count = 0) => {
  console.log(num, count)
  if (num === 0) {
    return count
  }

  count++
  if (num % 2 == 0) {
    return numStepsRecur(num / 2, count)
  } else {
    return numStepsRecur(num - 1, count)
  }
}

console.clear()
console.log("TESTING")
let num = 14
// console.log(numberOfSteps(num))
console.log(numStepsRecur(num))
