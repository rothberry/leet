/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function (numRows) {
  let n = 0
  let output = new Array()
  while (n < numRows) {
    let curRow = []
    let j = 0
    while (j <= n) {
      if (j === 0 || j === n) {
        curRow.push(1)
      } else {
        const prevRow = output[n - 1]
        curRow.push(prevRow[j - 1] + prevRow[j])
      }
      j++
    }
    output.push(curRow)
    n++
  }
  return output
}

const generate2 = (numRows) => {
  let output = []
  for (let i = 0; i <= numRows; i++) {
    let curRow = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curRow.push(1)
      } else {
        curRow.push(output[i - 1][j - 1] + output[i - 1][j])
      }
    }
    output.push(curRow)
  }
  return output[numRows]
}

// console.log(generate1(1))
// console.log(generate1(2))
// console.log(generate1(3))
console.log(generate2(3))
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
