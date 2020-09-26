/**
 * @param {Array} arr
 * @returns {string}
 * Array Challenge
 * Have the function ArrayChallenge(arr) take the array of integers stored in arr which will always contain an even amount of integers,
 * and determine how they can be split into two even sets of integers each so that both sets add up to the same number.
 * If this is impossible return -1.
 * If it's possible to split the array into two sets,
 * then return a string representation of the first set followed by the second set with each integer separated by a comma and both sets sorted in ascending order.
 * The set that goes first is the set with the smallest first integer.
 */

function ArrayChallenge(arr) {
  // code goes here

  // first find target sum => sum / 2
  // if is odd, then return -1
  const sum = arr.reduce((acc, cur) => (acc += cur), 0)
  // console.log(sum)
  if (sum % 2 !== 0) {
    return -1
  } else {
    // sort arr desc
    const target = sum / 2
    const desc = (a, b) => b - a
    let sorted = arr.sort(desc)
    // console.log(sorted)
    // loop through arr
    let leftTarget = target - sorted[0]
    let rightTarget = target - sorted[1]
    let leftArr = [sorted[0]]
    let rightArr = [sorted[1]]

    for (let i = 2; i < sorted.length; i++) {
      // since sorted desc, first place max into left arr and second most into right arr
      let ele = sorted[i]
      // if insert ele in max of left vs right target
      if (leftTarget >= rightTarget) {
        leftTarget -= ele
        leftArr.unshift(ele)
      } else if (leftTarget < rightTarget) {
        rightTarget -= ele
        rightArr.unshift(ele)
      }
      // console.log(leftArr, rightArr)
    }
    // check if leftarr.length === arr.length / 2
    const isEqualLength = leftArr.length === arr.length / 2
    // check if left & right targets are 0
    const isEqualTarget = leftTarget === 0 && rightTarget === 0
    // console.log('tar: ', isEqualTarget, 'length: ', isEqualLength)
    if (isEqualLength && isEqualTarget) {
      // stringify leftArr, rightArr
      return leftArr.toString() + "," + rightArr.toString()
    } else {
      return -1
    }
  }
}

// TESTING
// ==================================
let arr = [1, 2, 3, 4]
console.log(ArrayChallenge(arr))
// Output:  '1,11,20,35,8,16,21,22'
arr = [16, 22, 35, 8, 20, 1, 21, 11]
console.log(ArrayChallenge(arr))
// Output:  '1,4,2,3'
arr = [1, 2, 1, 5]
console.log(ArrayChallenge(arr))
// Output:  -1


