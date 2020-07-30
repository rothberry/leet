/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * !UNFINISHED
 */

var merge = function (nums1, m, nums2, n) {
  // const adjNums1 = nums1.slice(0, m)
  // const adjNums2 = nums2.slice(0, n)
  let output = []
  let totalLength = m + n - 1
  let i = n - 1
  let j = m - 1
  while (totalLength >= 0) {
    // if (adjNums1[i] <= adjNums2[j]) {
    if (nums1[i] > nums2[j]) {
      // output.push(adjNums1[i])
      nums1.splice(i, 0, nums2[j])
      console.log("num ", i, nums1)
      if (j <= m) {
        j++
      }
    } else {
      // output.push(adjNums2[j])
      if (i <= n) {
        i++
      }
    }
  }
  // need to return nums1

  return nums1
  // return output.filter((x) => x !== undefined)
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 6))
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2))
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

// const solution = N => {
//   let arr = []

//   while (N > 0) {
//     let digit = N % 10
//     arr.push(digit)
//     N /= 10
//   }
//   return arr
// }

// console.log(solution(256))

// return the smallest ele of the given A
function solution(A) {
  var ans = A[0]
  for (i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i]
    }
  }
  return ans
}

// console.log(solution([-1, 1, -2, 2]))
// console.log(solution([1,2,3,5,235,125,52,125,125,1,1,-123]))
// console.log(solution([-1]))
// console.log(solution([99]))


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // create array of all possible outputs
  // let outputArr = []
  let arr = []
  // separate N into array
  while (N > 0) {
      let digit = N % 10
      // console.log(digit)
      arr.push(digit)
      N = parseInt(N / 10)
  }
  
  return arr.unshift(5)
  
}

console.log(solution(268))