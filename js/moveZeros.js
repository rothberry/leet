/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// ? Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const { performance } = require("perf_hooks")
const moveZeroes = (nums) => {
  return nums.sort((next, cur) => {
    if (cur === 0) return -1
  })
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([-1, 0, -23232, 90, 0, 1]))
console.log(moveZeroes([0, 0, 0, 0, 0, 1]))
console.log(moveZeroes([1, 2, 3, 4]))
console.log(moveZeroes([]))
