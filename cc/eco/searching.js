/**
 * @param {Array} strArr 
 * @returns {Integer}
 * Searching Challenge
 * Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, 
 * which will be a 2D matrix of 0 and 1's, 
 * and determine how many holes, or contiguous regions of 0's, exist in the matrix. 
 * A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right. 
 * For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:
      1 0 1 1 1
      1 0 1 0 1
      1 1 1 0 1
      1 1 1 1 1
 */

function SearchingChallenge(strArr) {
  // code goes here

  // find all the zeros and hold their coordinates
  let idxArr = []
  for (let row = 0; row < strArr.length; row++) {
    let rowArr = strArr[row].split("")
    for (let col = 0; col < rowArr.length; col++) {
      // console.log(rowArr[col])
      if (rowArr[col] == 0) {
        idxArr.push([row, col])
      }
    }
  }

  // console.log(idxArr)
  let numHoles = 1
  if (idxArr.length < 2) {
    numHoles = idxArr.length
  } else {
    for (let i = 1; i < idxArr.length; i++) {
      let currentNode = idxArr[i]
      let isConnectedHole = false
      for (let j = 0; j < i; j++) {
        let prevNode = idxArr[j]
        // console.log('cur: ', currentNode, 'prev: ', prevNode, 'num;', numHoles)
        // check it's attached to a previous hole
        if (idxCheck(currentNode, prevNode)) {
          isConnectedHole = true
          break
        }
      }
      if (!isConnectedHole) {
        numHoles++
      }
    }
  }
  return numHoles
}

// Checks two coordinates to see if they are next to each other
const idxCheck = (coordOne, coordTwo) => {
  const [x1, x2] = coordOne
  const [y1, y2] = coordTwo
  return (
    (x1 == x2 || x1 == x2 + 1 || x1 == x2 - 1) &&
    (y1 == y2 || y1 == y2 + 1 || y1 == y2 - 1)
  )
}

// TESTING
// =========================================
let strArr = ["01111", "01101", "00011", "11110"]
console.log(SearchingChallenge(strArr))
// Output: 3
strArr = ["1011", "0010"]
console.log(SearchingChallenge(strArr))
// Output: 2
