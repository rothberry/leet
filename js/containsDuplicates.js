/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let i = 0
  let output = {}
  while (i < nums.length) {
    let cur = nums[i]
    if (output[cur]) {
      return true
    } else {
      output[cur] = 1
    }
    i++
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(containsDuplicate([]))
console.log(containsDuplicate([0]))
