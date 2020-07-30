/**
 * @param {character[][]} grid
 * @return {number}
 * Given a 2d grid map of '1's (land) and '0's (water),
 * count the number of islands.
 * An island is surrounded by water
 * and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * Only 0 if whole grid is '0'
 */

const numIslands = (grid) => {
  // const [height, width] = [grid[0].length, grid[0].length]
  let count = 0
  const height = grid.length 
  const width = grid[0].length || height
  let islands = 0
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // console.log(`\t\tRow:\t${row}\tColumn:\t${col}`)
      if (grid[row][col] === "0") continue

      islands++
      dfs(row, col)
    }
  }
  console.log(count)
  return islands

  function dfs(row, col) {
    count++
    if (row < 0 || col < 0 || row === height || col === width) {
      console.log('first')
      return
    }
    if (grid[row][col] === "0") {
      console.log('second')
      return
    }

    // console.log(`Row:\t${row}\tColumn:\t${col}`)
    grid[row][col] = "0"
    dfs(row - 1, col)
    dfs(row + 1, col)
    dfs(row, col - 1)
    dfs(row, col + 1)
  }
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]
console.log('Output:\t', numIslands(grid), "\tto be:\t1")
// grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]
// console.log(numIslands(grid), "\tOutput:\t3")
// grid = [
//   ["1", "0", "0", "0", "0"],
//   ["0", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]
// console.log(numIslands(grid), "\tOutput:\t4")
