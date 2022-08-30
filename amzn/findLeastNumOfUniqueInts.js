/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Given an array of integers arr and an integer k. 
 * Find the least number of unique integers after removing exactly k elements.

 
 */
var findLeastNumOfUniqueInts = function (arr, k) {
	// !
	// Make a object with maxes (or a heap)
	const heap = {}
	arr.forEach((ele) => {
		heap[ele] ? (heap[ele] += 1) : (heap[ele] = 1)
	})
	let heapish = Object.entries(heap).sort((a, b) => a[1] - b[1])
	console.log({ first: heapish })
	for (let i = 0; i < k; i++) {
		// decrease
		heapish[0][1] -= 1
		if (heapish[0][1] === 0) {
			// remove it
			heapish.shift()
		}
		console.log({ inside: heapish })
	}
	return heapish.length
}

let arr1 = [5, 5, 4],
	k1 = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
let arr2 = [4, 3, 1, 1, 3, 3, 2],
	k2 = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

console.clear()
console.log("\nTesting...\n")
console.log(findLeastNumOfUniqueInts(arr1, k1))
console.log(findLeastNumOfUniqueInts(arr2, k2))
