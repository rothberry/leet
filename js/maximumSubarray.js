/**
 * @param {number[]} nums
 * @return {number}
 * ? Given an integer array nums,
 * ? find the contiguous subarray (containing at least one number)
 * ? which has the largest sum and return its sum.
 * !DONE
 */

const maxSubArray = (nums) => {
  // ? Outliers
  // * if length is 2 return sum of nums
  // * if length is 1 return nums[0]
  // * if length is 0 return false or something

  // * check max between current value and previous max - current value
  // * max(current, prev - current) => new value
  // * loop over length of array

  let startIdx = 0
  const outputArr = [nums[startIdx]]
  let prevSum = nums[startIdx]
  
  for (let endIdx = 1; endIdx < nums.length; endIdx++) {
    const current = nums[endIdx]
    // console.log(current, prevSum, prevSum + current)
    prevSum = Math.max(current, prevSum + current)
    outputArr.push(prevSum)
  }
  return Math.max(...outputArr)
}

const maxSubArrayDP = nums => {
  // Kadane's Algorithm
  
  
}

const a1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const a2 = [1, -3, 2, 1, -1]
// * Output: 6z
// * Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArrayDP(a1))
console.log(maxSubArrayDP(a2))
