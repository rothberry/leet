/**
 * @param {number[]} stones
 * @return {number}
 * We have a collection of rocks, each rock has a positive integer weight.
 *
 * Each turn, we choose the two heaviest rocks and smash them together.
 * Suppose the stones have weights x and y with x <= y.
 * The result of this smash is:
 *
 * If x == y, both stones are totally destroyed;
 * If x != y, the stone of weight x is totally destroyed,
 * and the stone of weight y has new weight y-x.
 *
 * At the end, there is at most 1 stone left.
 * Return the weight of this stone (or 0 if there are no stones left.)
 * !DONE
 */
const numberSort = arr => {
  return arr.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    if (a == b) return -0
  })
}

const lastStoneWeight = stones => {
  while (stones.length > 1) {
    stones = numberSort(stones)
    // console.log(stones)
    let y = stones.pop()
    let x = stones.pop()
    x !== y ? stones.push(y - x) : null
    console.log("yx:  ", y - x)
  }
  if (stones.length === 1) {
    return stones[0]
  } else {
    return 0
  }
}

const lastStoneWeightRec = stones => {
  if (stones.length === 0) {
    return 0
  }
  if (stones.length === 1) {
    return stones[0]
  }
  let y = Math.max(...stones)
  stones.splice(stones.indexOf(y), 1)
  let x = Math.max(...stones)
  stones.splice(stones.indexOf(x), 1)
  if (x !== y) {
    stones.push(y - x)
  }
  return lastStoneWeightRec(stones)
}

console.log(lastStoneWeightRec([1, 4, 2, 45, 2, 42, 87, 6, 90, 1]))
console.log(lastStoneWeightRec([2, 7, 4, 1, 8, 1]))
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
