/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  // rob houses to max profit
  // can't rob two houses right next to each other
  // let evens = (odds = 0)
  // nums.forEach((house, idx) => {
  //   if (idx % 2 === 0) {
  //     evens += house
  //   } else {
  //     odds += house
  //   }
  // })
  // return Math.max(evens, odds)

  return nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [
    0,
    0,
  ])[1]
}

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 1, 1, 2]))
