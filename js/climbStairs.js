/**
 * @param {number} n
 * @return {number}
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

const climbStairs = (n) => {
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

console.log("2\t", climbStairs(2)(2), "to be 2")
// 1,1    2
console.log("3\t", climbStairs(3)(3), "to be 3")
// 1,1,1  1,2   2,1
console.log("4\t", climbStairs(4)(4), "to be 5")
// 1,1,1,1  1,2,1   2,1,1   1,1,2   2,2
