/**
 * @param {number[][]} triangle
 * @return {number}
 * Given a triangle, find the minimum path sum from top to bottom. 
 * Each step you may move to adjacent numbers on the row below.
 * For example, given the following triangle

    [
         [2],
        [3,4],
       [6,5,7],
      [4,1,8,3]
    ]
    The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

    Note:
    Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 */
var minimumTotal = function (triangle) {
  // need to store value and idx
  let prevIdx = 0
  let output = []
  for (let row = 0; row < triangle.length; row++) {
    const rowArr = triangle[row]
    if (row === 0) {
      // if first row, store value and idx 0
      // var output = rowArr[0]
      output.push(rowArr[0])
    } else {
      let left = rowArr[prevIdx]
      let right = rowArr[prevIdx + 1]
      let minVal = Math.min(left, right)
      minVal === right ? prevIdx++ : null
      // output += minVal
      output.push(minVal)
      console.log(left, right, prevIdx)
    }
    console.log("Row: ", row, "output: ", output)
  }
  // return output
  return output.reduce((a, b) => a + b, 0)
}

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))
