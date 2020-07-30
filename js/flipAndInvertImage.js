/**
 * @param {number[][]} A
 * @return {number[][]}
 * Given a binary matrix A, 
 * we want to flip the image horizontally, then invert it, 
 * and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.  
 * For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * To invert an image means that each 0 is replaced by 1, and each 1 
 * is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 * !DONE
 * TODO refactor
 */
var flipAndInvertImage = function(A) {
  let output = []
  A.forEach(arr => {
    let newArr = []
    arr.reverse().forEach(ele => {
      ele === 0 ? newArr.push(1) : newArr.push(0)
    })
    output.push(newArr)
  })
  return output
}

console.table(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
)
console.table([
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
])

console.table(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
  ])
)
console.table([
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0]
])
