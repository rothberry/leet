/**
 * @param {number[]} A
 * @return {number}
 * A.length >=3
 * There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 */
var peakIndexInMountainArray = function (A) {
  let peakVal = 0
  let peakIdx = 0
  for (let i = 0; i < A.length; i++) {
    const point = A[i];
    if (point >= peakVal) {
      peakVal = point
      peakIdx = i
    }
  }
  return peakIdx
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))