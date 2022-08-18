/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

const search = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		const x = nums[i]
		console.log({ x })
		if (x === target) return i
		// can only add this because of sort by asc, so if x is greater than the target, we missed
		else if (x > target) return -1
	}
	return -1
}

const searchBST = (nums, target) => {
	/* 
    First find  the midpoint
    Loop starting from the midpoint
  */

	let l = 0,
		r = nums.length - 1
	while (l < r) {
		let mid = Math.trunc((r + l) / 2)
		console.log({ l, r, mid, val: nums[mid] })
		if ((l || r) === mid) {
			return -1
		}
		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] > target) {
			r = mid
		} else if (nums[mid] < target) {
			l = mid
		}
	}
}

let nums1 = [-1, 0, 3, 5, 9, 12],
	target1 = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

let nums2 = [-1, 0, 3, 5, 9, 12],
	target2 = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

console.log("TESTING..")
console.log(searchBST(nums1, target1))
console.log(searchBST(nums2, target2))
