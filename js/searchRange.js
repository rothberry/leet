/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers nums sorted in ascending order,
 * find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 *  Constraints:
 *  0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non decreasing array.
 * -10^9 <= target <= 10^9
 * !DONE
 */
var searchRange = function (nums, target) {
  let i = 0
  let cache = []
  let cur = nums[i]
  while (cur <= target) {
    cur = nums[i]
    if (cur === target) {
      cache.push(i)
    }
    i++
  }
  if (cache.length < 1) {
    return [-1, -1]
  } else {
    return [cache[0], cache[cache.length - 1]]
  }
}

// Example 1:
let nums = [5, 7, 7, 8, 8, 10]
let target = 8
console.log(searchRange(nums, target))
// Output: [3,4]

// Example 2:
nums = [5, 7, 7, 8, 8, 10]
target = 6
console.log(searchRange(nums, target))
// Output: [-1,-1]
