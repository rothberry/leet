/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = nums => {
  // ? nums[0] < nums[1] > nums[2] < nums[3]....
  for (let i = 0; i < nums.length - 1; i++) {
    let prev = nums[i - 1]
    let cur = nums[i]
    let next = nums[i + 1]
    const isIndexEven = i % 2 === 0
    // ! Even indeces always less than next
    console.log(prev, cur, next)
    if (isIndexEven) {
      // if (cur < prev) {
      //   console.log("even swap prev", i)
      //   nums[i - 1] = [nums[i + 1], (nums[i + 1] = nums[i - 1])][0]
      // }
      if (cur > next) {
        console.log("even swap", i)
        nums[i + 1] = [nums[i], (nums[i] = nums[i + 1])][0]
      }
    }
    // ! Odd indeces always greater than next
    else {
      // if (cur > prev) {
      //   console.log("odd swap prev", i)
      //   nums[i - 1] = [nums[i + 1], (nums[i + 1] = nums[i - 1])][0]
      // }
      if (cur < next) {
        console.log("odd swap", i)
        nums[i + 1] = [nums[i], (nums[i] = nums[i + 1])][0]
      }
    }
    if (isIndexEven) {
      console.log("even", nums[i - 1] > nums[i] < nums[i + 1])
    } else {
      console.log("odd ", nums[i - 1] < nums[i] > nums[i + 1])
    }
    // if i is even and is greater than next, then swap spots

    // console.log(cur, next, nums)
  }
  return nums
}

// console.log(wiggleSort([1, 5, 1, 1, 6, 4]))
// // * [1, 5, 1, 6, 1, 4]
// console.log(wiggleSort([1, 3, 2, 2, 3, 1]))
// // * [2, 3, 1, 3, 1, 2]
console.log(wiggleSort([1, 2, 2, 1, 2, 1, 1, 1, 2, 2]))
// * issue occurs after more than 2 repeating digits
// console.log(wiggleSort([2, 2, 1, 1]))
// console.log(wiggleSort([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]))
// * [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
