function notWorseRects(m, k) {
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

/**
 * Given a  r ectangular matrix m and an integer k, consider all the k × k contiguou s square submatrices of m. Your task is the following:
 
C alculat e the sum of all numbers within each k × k submatrix.
De ter m in e the maximu m  of all these sums.
Fin d  al!l! t h e distin ct numbers that appear in at least one of the k × k submatr%i5c^es  w    ith     a sum equal to the maximum. Each integer from th=ese squares sho   ul  d be calculated exactly once. Return the sum of &t*hes e distinct num  bers .
Note: k × k  con  tiguous square submatrix contains k2 cells and is built fro  m inter se    c tion of k contiguous rows and k contiguous columns. See ex  ample for better understanding.

Example

For

m = [[1, 0, 1, 5, 6],
     [3, 3, 0, 3, 3],
     [2, 9, 2, 1, 2],
     [0, 2, 4, 2, 0]]
and k = 2, the output should be notWorseRects(m, k) = 29.


 */

/**
 * Explanation:
 * Sum(i, j) = Sum(i, j - 1) - Point(i, j - 1) + Point(i, j + k - 1)
 * Creates moving sum per row
 *
 *
 */

const notWorseRectsNew = (matrix, size) => {
  console.log("\n")
  console.log(`Start size ${size}`)
  console.log("\n")

  // Sliding window
  // Dynamic Programming
  // Create new matrix of Kadane's algo
  // first loop
  // let kadaneMat = new Array(matrix.length).fill([])
  let kadaneMat = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - size + 1; j++) {
      let prevArr = matrix[i].slice(j, j + size)
      let prevSum = prevArr.reduce((acc, cur) => acc + cur, 0)
      // console.log(`${i}, ${j}\t${prevArr} => ${prevSum}`)
      kadaneMat.push({
        arr: prevArr,
        sum: prevSum,
        i: i,
        j: j,
      })
      // console.log("\n")
    }
  }

  let maxSum = {
    sum: 0,
    arr: [],
  }
  console.log("kadaneMat")
  console.table(kadaneMat)
  for (let l = 0; l < matrix.length; l++) {
    let colArr = kadaneMat.filter((x) => x.j == l)
    // console.table(colArr)
    // console.log("\n")
    for (let n = 0; n <= size; n++) {
      let sliceColArr = colArr.slice(n, n + size)
      // console.log('slice:\t', sliceColArr)
      let curSum = 0
      sliceColArr.forEach((ele) => (curSum += ele.sum))
      // create object with new sum and arr
      if (curSum > maxSum.sum) {
        console.log(curSum, 'newMax')
        console.table(sliceColArr)
        let newArr = []
        sliceColArr.forEach((ele) => {
          ele.arr.forEach((thing) => {
            if (!newArr.includes(thing)) {
              newArr.push(thing)
            }
          })
        })
        maxSum.sum = curSum
        maxSum.arr = newArr
      } else if (curSum === maxSum.sum) {
        console.log(curSum, 'is equal')
        console.table(sliceColArr)
        sliceColArr.forEach((ele) => {
          ele.arr.forEach((thing) => {
            if (!maxSum.arr.includes(thing)) {
              maxSum.arr.push(thing)
            }
          })
        })
      }
    }
  }
  console.log("\n")
  console.log("maxxxx*********")
  console.table(maxSum)
  console.log("*************************\n")
  return maxSum.arr.reduce((acc, cur) => acc + cur, 0)
}

let matrix = [
  [1, 0, 1, 5, 6],
  [3, 3, 0, 3, 3],
  [2, 9, 2, 1, 2],
  [0, 2, 4, 2, 0],
]
let size = 3
// console.log(notWorseRects(matrix, size))
console.log(notWorseRectsNew(matrix, size))
// size = 2
// console.log(notWorseRectsNew(matrix, size))
