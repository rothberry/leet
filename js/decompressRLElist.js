/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  // nums between 2,100
  // nums.length is even
  // first, divide nums into pairs
  // then, loop over array and make new array of [freq, val]
  let outputArr = []
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i]
    const val = nums[i + 1]
    // console.log("freq ", freq, "val ", val)
    const freqArr = new Array(freq).fill(val)
    outputArr.push(freqArr)
  }
  return outputArr.flat()
}

console.log(decompressRLElist([1, 2, 3, 4]))
console.log(decompressRLElist([1, 1, 2, 3]))

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Input: nums = [1,1,2,3]
// Output: [1,3,3]
