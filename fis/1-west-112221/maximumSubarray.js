/**
 * @param {number[]} nums
 * @return {number}
 * ? Given an integer array nums,
 * ? find the contiguous subarray (containing at least one number)
 * ? which has the largest sum and return its sum.
 * !DONE
 */

const maxSubArrayBruteForce = (nums) => {
  // Check every single sum available, choose the max
  // Loop over the array twice
  // Push the sum of i to j into an output array
  // return the max of the output array
  let counter = 0;
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let localSum = nums.slice(i, j).reduce((prev, cur) => {
        counter++
        return prev + cur;
      }, 0);
      // console.log(localSum);
      output.push(localSum);
    }
  }
  console.log(output, nums.length, counter);
  return Math.max(...output);
};

const maxSubArray = (nums) => {
  // ? Outliers
  // * if length is 2 return sum of nums
  // * if length is 1 return nums[0]
  // * if length is 0 return false or something

  // * check max between current value and previous max + current value
  // * max(current, prev + current) => new value
  // * loop over length of array

  let startIdx = 0;
  const outputArr = [nums[startIdx]];
  let prevSum = nums[startIdx];

  for (let endIdx = 1; endIdx < nums.length; endIdx++) {
    const current = nums[endIdx];
    // console.log(current, prevSum, prevSum + current)
    prevSum = Math.max(current, prevSum + current);
    outputArr.push(prevSum);
  }
  console.log(outputArr)
  return Math.max(...outputArr);
};

const a1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const a2 = [1, -3, 2, 1, -1];
// * Output: 6z
// * Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArray(a1));
console.log(maxSubArray(a2));
// console.log(maxSubArrayBruteForce([1]));