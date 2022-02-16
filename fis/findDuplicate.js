// Timmy has a basket of biscuits all weighting i pounds..
// Find where the first 2 biscuits match weights

// * Given:
// an array of numbers
// * Solution:
// return the index of the first duplicate

const findDup = (nums) => {
  // I want to search through the nums for the first duplicate
  // Create a var to hold onto the values we've seen already
  // Loop through nums
  // check if we have seen the current iteration before
  // if we have, then return the index of the current iteration
  // if not, add to obj
  // if no duplicates return -1

  let i = 0
  let output = {}
  while (i < nums.length) {
    let cur = nums[i]
    console.log(i + 1)
    if (output[cur]) {
      return cur
    } else {
      output[cur] = "anything"
    }
    i++
  }
  return -1
}

console.log("answer:", findDup([1, 2, 3, 1]))
console.log("answer:", findDup([1, 2, 3, 3, 3, 2, 1]))
console.log("answer:", findDup([1, 3, 3, 4, 3, 2, 4, 2, 4, 4]))
// console.log(findDup([]))
// console.log(findDup([0]))
