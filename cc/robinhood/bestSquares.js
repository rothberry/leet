function bestSquares(m, k) {
  // calc sum of submatrices k
  // find max sum of submatrices
  // then sum all distinct values
  // create k matrix and input values loop through first row, then second...
  let start = 0
  let cache = {}
  let subMat = []

  while (start < 1) {
    for (let row = start; row < m.length + k; row++) {
      for (let col = start; col < m[row].length + k; col++) {
        let cell = m[row][col]
        subMat.push(cell)
        // console.log(subMat)
      }
    }
    let sum = subMat.reduce((acc, cur) => (cur += acc), 0)
    if (cache[sum]) {
      cache[sum].push(subMat)
    } else {
      cache[sum] = subMat
    }
    start++
  }
  console.log(cache)
  return cache
}

let m = [
  [1, 0, 1, 5, 6],
  [3, 3, 0, 3, 3],
  [2, 9, 2, 1, 2],
  [0, 2, 4, 2, 0],
]
let k = 2
console.log(bestSquares(m, k))

/**
 * Given a rectangular matrix m and an integer k, consider all the k × k contiguous square submatrices of m. Your task is the following:

Calculate the sum of all numbers within each k × k submatrix.
Determine the maximum of all these sums.
Find all the distinct numbers that appear in at least one of the k × k submatrices with a sum equal to the maximum. Each integer from these squares should be calculated exactly once. Return the sum of these distinct numbers.
Note: k × k contiguous square submatrix contains k2 cells and is built from intersection of k contiguous rows and k contiguous columns. See example for better understanding.

Example

For

m = [[1, 0, 1, 5, 6],
     [3, 3, 0, 3, 3],
     [2, 9, 2, 1, 2],
     [0, 2, 4, 2, 0]]
and k = 2, the output should be bestSquares(m, k) = 29.


 */