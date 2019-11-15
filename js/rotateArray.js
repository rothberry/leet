/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * ? Given an array, rotate the array to the right by k steps, where k is non-negative.
 */
const rotate = (nums, k) => {
  // * Solution 1: Pop/Unshift
  let count = 0
  const numsLength = nums.length - 1
  let endVal = nums[numsLength]
  while (count < k) {
    nums.unshift(endVal)
    nums.pop()
    endVal = nums[numsLength]
    count++
  }
  console.log(nums)
  return nums
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [0, 1, 2, 3, 4, 5 ,6]
// to
// [3, 4, 5, 6, 0, 1, 2]
const k1 = 3
const a2 = [-1, -100, 3, 99]
const k2 = 2
rotate(a1, k1)
// rotate2(a2, k2)
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
