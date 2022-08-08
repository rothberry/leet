/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function (numRows) {
	// * Create an output array
	// * for each level of n, create a subarray of starting and ending with 1
	// * if it's an interior of the triangle, the value is from the previous level at i plus i - 1
	// * if it's the edge of the triangle push 1
	// * check if current digit creation is the first or last
	// * find previous row, and push into subarray the sum of the j-1 + j
	// * push in the created subarray to output

	// * ex:
	/*
	 *          1             n = 1
	 *        1   1           n = 2
	 *      1  1+1  1         n = 3
	 *    1  1+2  2+1 1       n = 4
	 *  1  1+3 3+3 3+1 1      n = 5
	 *  n = n
	 *  1 ...row(n=n-1)[idx] + row(n=n-1)[idx-1]... 1
	 */

	

	// cache = {1: [[1]], 2: }

	let i = 0
	// let output = [[1], [1,1]]
  	// if (numRows < 3 )  return output[numRows - 1]
	let output = new Array(numRows)
	// let output = new Array()
	while (i < numRows) {
		// * create subarray
		// let curRow = []
    	let curRow = new Array(i)
		let j = 0
		while (j <= i) {
			if (j === 0 || j === i) {
				// curRow.push(1)
        		curRow[j] = 1
			} else {
				const prevRow = output[i - 1]
				// curRow.push(prevRow[j - 1] + prevRow[j])
				curRow[j] = (prevRow[j - 1] + prevRow[j])
			}
			j++
		}
		// output.push(curRow)
		output[i] = (curRow)
		i++
	}
	return output
}

const generate2 = (numRows) => {
	let output = []
	for (let i = 0; i <= numRows; i++) {
		let curRow = []
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				curRow.push(1)
			} else {
				curRow.push(output[i - 1][j - 1] + output[i - 1][j])
			}
		}
		output.push(curRow)
	}
	return output //[numRows]
}
console.clear()
let n = 1, m = 5
while (n <= m) {
  console.log({ [n]: generate1(n) })
  n++
}
// console.log(generate1(30))
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
