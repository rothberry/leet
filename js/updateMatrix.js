/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Given a matrix consists of 0 and 1,
 * find the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 *
 */

const updateMatrix = (matrix) => {
  const numRows = matrix.length
  const numCol = matrix[0].length

  const dirArr = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  
  let newMatrix = new Array(numRows).fill(new Array(numCol).fill(0))
  let cache = {}
  // console.table(newMatrix)
  for (let i = 0; i < numRows; i++) {
    const row = matrix[i]
    for (let j = 0; j < numCol; j++) {
      const curCell = matrix[i][j]
      console.log(`${i}\t${j}\tcurCell\t${curCell}`)
      if (curCell !== 0) {
        // traverse to nearest zero and set newMatrix[i][j] to to counter
        // matrix[i - 1][j]
        // matrix[i + 1][j]
        // matrix[i][j - 1]
        // matrix[i][j + 1]
        console.log("asfljgasfjksgh")
        newMatrix[i][j] = 1
      }
    }
  }

  return newMatrix
}

let matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]

let result = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]
console.table(updateMatrix(matrix))
// console.table(result)
// console.log("\n")
// matrix = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ]
// result = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 2, 1],
// ]
// console.table(updateMatrix(matrix))
// console.table(result)
