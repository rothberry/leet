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

  const outputArr = [nums[0]]
  let prevSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]
    // console.log(current, prevSum, prevSum + current)
    prevSum = Math.max(current, prevSum + current)
    outputArr.push(prevSum)
  }
  for (let j = 0; j < outputArr.length; j++) {
    let c = outputArr[j]
    // console.log(c, maxSum)
    if (c > maxSum) {
      maxSum = c
    }
  }
  // console.log(outputArr)
  // console.log(maxSum)
  return maxSum
}

const a1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// * Output: 6
// * Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArray(a1))
