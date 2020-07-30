/**
 * @param {number[]} nums
 * @return {number}
 * !DONE
 * TODO refactor
 */
var findUnsortedSubarray = function (nums) {
  // 1
  // Start by creating a sorted array,
  // then loop through the array and tally each sequential time the values are different

  const sorted = new Array(...nums).sort((a, b) => a - b)
  let start = nums.length - 1
  let end = 0
  for (let i = 0; i < nums.length; i++) {
    const numEle = nums[i]
    const sortEle = sorted[i]
    if (numEle !== sortEle) {
      start = Math.min(start, i)
      end = Math.max(end, i)
    }
  }
  if (end <= start) return 0
  return end - start + 1
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
