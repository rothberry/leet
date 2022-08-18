/* 
  * @param {number[]} a
  * @return {number}
  ! In the HEAP/STACK/QUEUE Section of CodeSignal
  Given an array a composed of distinct elements, 
  find the next larger element for each element of the array, 
  i.e. the first element to the right that is greater than this element, in the order in which they appear in the array, and return the results as a new array of the same length. 
  If an element does not have a larger element to its right, put -1 in the appropriate cell of the result array.

*/

const nextLargest = (a) => {
	// ? First
  // ! PASSES EVERYTHING OTHER THAN THE WEIRD STUFF....
	// map over array
	// for each iter
	// if it's the first value
	// just add 1
	// if it's anything other than the LAST value
	// if currentValue+1 >= prevValue in output
  
	if (a.length === 1) return [-1]
	a.forEach((x, i) => {
		if (i === 0) {
			console.log("first")
			a[i] = x + 1
		} else if (i > 0 && i < a.length - 1) {
			let prevValue = a[i - 1]
			x += 1
			console.log({ x, prevValue })
			if (x >= prevValue) a[i] = x
			else a[i] = prevValue
		} else {
			console.log("last")
			a[i] = -1
		}
		console.log(a)
	})
	return a
}

// let a1 = [6, 7, 3, 8]
// the output should be
// solution(a) = [7, 8, 8, -1].
/* 
6+1 => 7
7+1 => 8
3+1 => 4, but needs to be greater than or equal to the prev, therefore 8
8+1 => 9, but since it's the last value, then it's -1
*/

// In this array, the next larger element for 6 is 7, for 7 is 8, for 3 is 8 (7 is not a valid option since elements from a can only be compared to elements to their right), and for 8 there is no such element, so we put -1 in the last cell.

console.log("TESTING...")
let a1 = [6, 7, 3, 8]
let a2 = [1, 2, 3, 4]
let a3 = [4, 3, 2, 1]
let a4 = [4, 2]

console.log("1")
console.log(nextLargest(a1))
// console.log("2")
// console.log(nextLargest(a2))
// console.log("3")
// console.log(nextLargest(a3))
console.log("4")
console.log(nextLargest(a4))
