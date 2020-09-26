/**
 * @param {array} strArr
 * @returns {boolean}
 * Array Challenge
 * Have the function ArrayChallenge(strArr) take the array of strings stored in strArr,
 * which will contain pairs of integers in the following format: (i1,i2),
 * where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1.
 * Your program should, in this case,
 * return the string true because a valid binary tree can be formed.
 * If a proper binary tree cannot be formed with the integer pairs,
 * then return the string false. All of the integers within the tree will be unique,
 * which means there can only be one node in the tree with the given integer value.
 */

function ArrayChallenge(strArr) {
  // code goes here
  // Binary tree means that parent cannot have more than two child nodes
  // let isBinarayTree = true
  let tree = {}
  for (let i = 0; i < strArr.length; i++) {
    // first parse str into child, parent respec
    let child = strArr[i].split(",")[0][1]
    let parent = strArr[i].split(",")[1][0]
    // console.log(child, parent)
    // tree => { parent: [children]}
    if (!tree[parent]) {
      tree[parent] = [child]
    } else {
      tree[parent].push(child)
    }
    if (tree[parent].length > 2) {
      return false
    }
    // console.log(tree)
  }
  return true
}

// TESTING
// ======================================================
let strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
console.log(ArrayChallenge(strArr))
// Output: true
strArr = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
console.log(ArrayChallenge(strArr))
// Output: false