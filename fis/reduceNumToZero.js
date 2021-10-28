/**
 * @param {number} num
 * @return {number}
 */

const numberOfSteps = (num) => {
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
    // console.log(count)
    // return
  }

  count++
  if (num % 2 == 0) {
    numStepsRecur(num / 2, count)
  } else {
    numStepsRecur(num - 1, count)
  }
  return count
}

console.clear()
console.log("TESTING")
let num = 14
// console.log(numberOfSteps(num))
console.log(numStepsRecur(num))
