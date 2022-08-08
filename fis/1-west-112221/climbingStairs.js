/**
 * @param {number} n
 * @return {number}
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

const climbStairs = (n) => {
  // check for a pattern
  // if n(1) => 1
  // 1
  // if n(2) => 2
  // 11
  // 2
  // if n(3) => 3
  // 111
  // 21
  // 12
  // if n(4) => 5
  // 1111
  // 211
  // 121
  // 112
  // 22  
  // if n(5) => 8
  // 11111
  // 2111
  // 1211
  // 1121
  // 221
  // 1112
  // 212
  // 122
  // if n(6) => 13
  // 111111
  // 21111
  // 12111
  // 11211
  // 11121
  // 2211
  // 2121
  // 1221
  // 11112
  // 2112
  // 1212
  // 1122
  // 222

  // hmmmm..... a pattern shows itself!
  // instead of solving for all combinations, we can just use the pattern to determine what the outpput of n will be
  // ouputs = 1, 2, 3, 5, 8, 13...]
  // for n = 3
  // output = ouput[n=1] + output[n=2]
  // for n = 4
  // output = ouput[n=2] + output[n=3] ...
  // for n
  // output = output[n-2] + output[n-1]

  // psuedo
  // start with an initial output array of [1,2] for returns of 1 and 2
  // if n > 2
  // loop up to n
  // for each iteration
  // push into output array
  // prev_output + double_previous_output

  // return the last output from array

  let outputs = [1, 2]
  if (n < 3) {
    return outputs[n - 1]
  }
  for (let i = 2; i < n; i++) {
    outputs.push(outputs[i - 2] + outputs[i - 1])
  }
  return outputs[n - 1]
}


console.log("TESTING")
console.log("2", climbStairs(2))
console.log("3", climbStairs(3))
console.log("4", climbStairs(4))
console.log("5", climbStairs(5))
console.log("6", climbStairs(6))
console.log("45", climbStairs(45))

const climbStairsDP = (n) => {
  // return recur(n, [])
  let cache = []
  return function resolve(n) {
    if (cache[n]) {
      return cache[n]
    }
    if (n <= 3) {
      if (n < 0) {
        return 0
      }
      return n
    }
    let result = resolve(n - 1) + resolve(n - 2)
    cache[n] = result
    return result
  }
}

const recur = (n, cache) => {
  // console.log(cache)
  if (cache[n]) {
    return cache[n]
  }
  if (n === 1) {
    if (n < 0) return 0
    return 1
  }
  let result = recur(n - 1, cache) + recur(n - 2, cache)
  cache[n] = result
  return result
}

// console.log("2\t", climbStairsDP(2)(2), "to be 2")
// 1,1    2
// console.log("3\t", climbStairsDP(3)(3), "to be 3")
// 1,1,1  1,2   2,1
// console.log("4\t", climbStairsDP(4)(4), "to be 5")
// 1,1,1,1  1,2,1   2,1,1   1,1,2   2,2
