/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].


 */

const shuffle2 = (nums, n) => {
  // SUEDOOOOO
  let shuffledArr = []
  for (let i = 0; i < n; i++) { // O(n) || O(m/2)
    shuffledArr.push(i)    
    shuffledArr.push(i + n)
  }
  return shuffledArr
}

// // TESTING
// console.clear()
// console.log("TESTING")
// console.log("First")
// let nums = [2, 5, 1, 3, 4, 7]
// let n = 3
// shuffle2(nums, n)

// nums = [1, 2, 3, 4, 4, 3, 2, 1]
// n = 4
// shuffle2(nums, n)

// nums = [1, 1, 2, 2]
// n = 2
// shuffle2(nums, n)

const shuffle = function (nums, n) {
  const firstHalf = nums.slice(0, n)
  const otherHalf = nums.slice(n)

  console.log(firstHalf, otherHalf)
  // nums.length => m
  let output = []
  for (let i = 0; i < 2 * n; i++) { // O(m)
    if (i % 2 === 0) {
      output.push(firstHalf[i / 2])
    } else {
      output.push(otherHalf[parseInt(i / 2)])
    }
  }
  console.log(output)
  return output
}

// TESTING
console.clear()
console.log("TESTING")
let nums = [2, 5, 1, 3, 4, 7]
let n = 3
shuffle(nums, n)

nums = [1, 2, 3, 4, 4, 3, 2, 1]
n = 4
shuffle(nums, n)

nums = [1, 1, 2, 2]
n = 2
shuffle(nums, n)
