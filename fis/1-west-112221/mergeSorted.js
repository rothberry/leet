/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	// * First try
	// remove the the zeros
	// combine both arrays
	// run it through .sort
	// O(log(n))...
    // nums1.splice(m, n)
    // nums1.push(...nums2)
    // nums1.sort((a,b) => a - b)

	// Need to modify nums1 directly
	// start with looping indeces for both nums1 and 2
	// loop until nums1.length
	// for each iteration
	// check if the the current index of nums2 is less than nums1
	// if so, splice it into nums1 and increase nums2 index
	// if not, increase the nums1 index

	m--
	n--
	let i = nums1.length - 1
	while (i >= 0) {
        console.log({nums1})
		if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
			nums1[i] = nums1[m]
			nums1[m] = nums2[n]
			m--
		} else if (n > -1) {
			nums1[i] = nums2[n--]
		}
		i--
	}
}



const merge2 = (nums1, nums2) => {
	/* 
		Modified version
		m = nums1.length
		n = nums2.length

		// ? New array
		create output array (of length n+m)
		i & j or counter of m & n respectfully
		loop n + m times (or over output array)
			if nums1[i] <= nums2[j]
				push nums1[i]
				increase i
			if nums1[i] > nums2[j]
				push nums2[j]
				increase j
		
		return output

		// ? In nums1 destructively
		nums1 will go from [1,2,3] to [1,2,2,3,5,6]

		i & j or counter of m & n respectfully
		loop n + m times
			if nums1[i] <= nums2[j]
				do nothing
				increase i
			if nums1[i] > nums2[j]
				insert nums2[j] before nums1[i]
				increase j
		return nums1

	*/
}


console.clear()
console.log("TESTING")
let nums1 = [1, 2, 3, 0, 0, 0],
m = 3,
nums2 = [2, 5, 6],
n = 3,
ans = [1, 2, 2, 3, 5, 6]
// merge(nums1, m, nums2, n)
// console.log(nums1)

console.log("TESTING 2...")
