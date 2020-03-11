/**
 * @param {number[]} A
 * @return {number}
 * Given an array of integers A,
 * find the sum of min(B),
 * where B ranges over every (contiguous) subarray of A.
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 * 1 <= A.length <= 30000
 * 1 <= A[i] <= 30000
 */

var sumSubarrayMins = function(A) {
  let sumArr = []
  let i = 1
  // initial length of B subarrays
  // first get sum of A
  // or split into length of i + 1
  while (i <= A.length) {
    let j = 0
    if (i !== A.length) {
      while (j + i <= A.length) {
        let B = A.slice(j, j + i)
        // console.log(j, j + i, B)
        sumArr.push(B.sort((a, b) => a - b)[0])
        j++
      }
    } else {
      sumArr.push(A.sort((a, b) => a - b)[0])
    }
    i++
  }
  console.log("output:")
  console.log(sumArr)
  return sumArr.reduce((a, b) => a + b)
}

console.log(sumSubarrayMins([3, 1, 2, 4]))
console.log(sumSubarrayMins([33, 45, 9]))
/**
 * Output: 17
 * Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.
 */
