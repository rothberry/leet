/**
 * @param {number[]} nums
 * @return {number}
 * ! Do not create another array
 */
const removeDuplicatesTwo = nums => {
  // Needs to be destuctive
  // * start by comparing the 1st and 2nd element, if they are equal, then remove the 1st.
  let i = 0
  while (i < nums.length) {
    let cur = nums[i]
    let next = nums[i + 2]
    if (cur === next) {
      nums.splice(i, 1)
      // console.log(nums)
      // console.log(cur, next)
    } else {
      i++
    }
  }
  console.log(nums.length)
  return nums
}

const arr1 = [1, 1, 1, 2, 2, 3]
// * => return 5
// * => [1,1,2,2,3]
const arr2 = [0,0,1,1,1,1,2,3,3]
// * => return 7
// * => [0,0,1,1,2,3]
// const arr3 = [0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6]
// * => return 14
// * => [0,0,1,1,2,2,3,3,4,4,5,5,6,6]

// console.log(removeDuplicatesTwo(arr1))
// console.log(removeDuplicatesTwo(arr2))
// console.log(removeDuplicatesTwo(arr3))

const arr = [4,1,2,3,5,1,2]
const cmp = (a,b) => {return a - b}
console.log(arr)
arr.sort(cmp)
console.log(arr)