/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // * Solution
    // create an obj
    // Loop over nums
    // for each iteration, check if that nums key exists
    // if so, increase the value by 1
    // if not, add it to key and value of 1
    // after the loop, return the max 2 values keys

    let obj = {}
    nums.forEach(num => {
        if (!!obj[num]) {
            obj[num]+=1
        } else {
            obj[num] = 1
        }
    })
    console.log(obj)
    
}

let nums = [1, 1, 1, 2, 2, 3],
	k = 2
ans = [1, 2]
console.log(topKFrequent(nums, k), ans)

nums = [1]
k = 1
ans = [1]
console.log(topKFrequent(nums, k), ans)
