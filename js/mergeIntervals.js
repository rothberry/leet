/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 *
 * ! ASSUME SORTED BY START ASCENDING
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0])
	let i = 0
	while (i < intervals.length - 1) {
		let [cur, next] = intervals.slice(i, i + 2)
		console.log("\n", { cur, next }, "\n")

		// check if next[0] is in range of cur
		// console.log({ first: next[0], isBetween: isBetween(next[0], cur) })
		// console.log({ sec: next[1], isBetween: isBetween(next[1], cur) })

		if (isBetween(next[0], cur)) {
			if (!isBetween(next[1], cur)) {
				// completely remove the next node
				// i does not increase
				intervals[i] = [cur[0], next[1]]
			}
			intervals.splice(i + 1, 1)
			// remove the next node and replace the end of cur with the end of next
		} else {
			i++
		}
	}
	return intervals
}

const isBetween = (x, range) => {
	return x >= range[0] && x <= range[1]
}

let intervals1 = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

let intervals2 = [
	[1, 4],
	[2, 3],
]

let intervals3 = [
	[1, 4],
	[4, 5],
]

let intervals4 = [
	[1, 4],
	[0, 4],
]

console.clear()

console.log(merge(intervals1))
console.log(merge(intervals2))
console.log(merge(intervals3))
console.log(merge(intervals4))
