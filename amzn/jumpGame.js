/**
 * @param {number[]} nums
 * @return {number}
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 */

const isJump = (nums) => {
	// GREEDY
	// Start from the END and keep moving the end until you
	let idx = nums.length - 2
	let endIdx = nums.length - 1
  // let result = false
	while (idx >= 0) {
		// check if the current idx can reach the end,
		// if so, move end idx
		let dist = endIdx - idx
		console.log({ idx, endIdx, dist, ele: nums[idx], comp: nums[idx] >= dist })
		if (nums[idx] >= dist) {
			endIdx = idx
		}
		idx -= 1
	}
  return endIdx === 0
}

var jump2 = function (nums) {
	// ! First brute force
	// get all possible jumps
	// return the minimum
	// // Starts with the maximum jumps which would be the length minus one
	// if there's a 0, that stops the jump
	let logArr = []

	// while
}

let nums1 = [2, 3, 1, 1, 4]
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

let nums2 = [2, 3, 0, 1, 4]
let nums3 = [3, 2, 1, 0, 4]
// Output: 2

console.clear()
console.log("\nTESTING...\n")
console.log(jump2(nums1)) // 2
// console.log(jump(nums3)) // FALSE


// console.log(isJump(nums1)) // TRUE
// console.log(isJump(nums3)) // FALSE
// console.log(jump(nums2))
