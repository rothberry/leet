/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * ? Given an array, rotate the array to the right by k steps, where k is non-negative.
 */
const rotate = (nums, k) => {
  // * Solution 1: Pop/Unshift
  // Loop for k times
  // for each loop, pop the last element, and add to the beginning

  // stretch: if k > nums.length, reduce k to to equivalent value within 0 => nums.length

  if (k > nums.length){
    k = k % nums.length
  }
  let i = 0
  while (i < k) {
    nums.unshift(nums.pop())
    i++
  }
  console.log(nums)
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [0, 1, 2, 3, 4, 5 ,6]
// to
// [3, 4, 5, 6, 0, 1, 2]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
rotate(a1, 3 + a1.length * 10)
// console.log(a1)
// rotate(a1, 4)
// Output: [5,6,7,1,2,3,4]
