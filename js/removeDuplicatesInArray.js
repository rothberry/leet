/**
 * @param {number[]} nums
 * @return {number}
 * ! Do not create another array
 */
const removeDuplicates = nums => {
  // Needs to be destuctive
  // * start by comparing the 1st and 2nd element, if they are equal, then remove the 1st.
  let i = 0
  while (i < nums.length) {
    let cur = nums[i]
    let next = nums[i + 1]
    if (cur === next) {
      nums.splice(i, 1)
      // console.log(nums)
      // console.log(cur, next)
    } else {
      i++
    }
  }
  return nums
}

const arr1 = [1, 1, 2]
// * => return 2
// * => [1,2]
const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// * => return 5
// * => [0,1,2,3,4]
const arr3 = [0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6]

console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))
