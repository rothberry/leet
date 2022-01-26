/**
 * @param {number[]} nums
 * @return {number[][]}
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (nums) => {
  // Return all triplets teh equate to 0
  let arr = []
  let obj = {}

  nums = nums.sort((a, b) => a - b) // sort asc
  console.log(nums)
  let i = 0,
  j = nums.length -1
  while (nums[i] !== 0 || nums[j] !== 0) {
    const lookingFor = -(nums[i] + nums[j])
    console.log(lookingFor)
    
    if (!obj[lookingFor]) {
      obj[lookingFor] = [nums[i], nums[j]]
    } else if (obj[lookingFor] === nums[i] ) {
      // arr.push([nums[i], ])
    } 
    // debugger
    if(lookingFor > 0) {
      i++
    } else {
      j--
    }
  }
  return arr
}

let nums = [-1, 0, 1, 2, -1, -4]
let answer = [
  [-1, -1, 2],
  [-1, 0, 1],
]
let output = threeSum(nums)
console.log("\n1:\n", output, " => ", answer, " => ", output === answer)
// nums = []
// answer = []

// nums = [0]
// answer = []
