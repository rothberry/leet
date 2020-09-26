/**
 * @param {array} arr
 * @returns {integer}
 * Have the function ArrayChallenge(arr) read the array of non-negative integers stored in arr
 * which will represent the heights of bars on a graph (where each bar width is 1),
 * and determine the largest area underneath the entire bar graph.
 * The array will always contain at least 1 element.
 */

function ArrayChallenge(arr) {
  // code goes here
  // start max area at the first height (x 1)
  let maxArea = arr[0]
  // start by double looping through arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // find min height of i to j
      let arrSlice = arr.slice(i, j + 1)
      let minHeight = Math.min(...arrSlice)
      let curMax = minHeight * arrSlice.length
      // console.log(arrSlice, arrSlice.length, minHeight, curMax)
      if (curMax > maxArea) {
        maxArea = curMax
        // console.log(maxArea)
      }
    }
  }

  return maxArea
}

// TESTING
// =============================
let arr = [6, 3, 1, 4, 12, 4]
console.log(ArrayChallenge(arr))
// Output: 12
arr = [5, 6, 7, 4, 1]
console.log(ArrayChallenge(arr))
// Output: 16
