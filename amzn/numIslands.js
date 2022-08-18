/**
 * @param {character[][]} grid
 * @return {number}
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */
const numIslands = (grid) => {
	// BREADTH FIRST SEARCH
	// let [rows, cols] = [grid.length, grid[0].length]
	let visited = []
	let islands = 0

  // const bfs = (i,j) => {
  //   queue = 
  // }

	for (let i = 0; i < grid.length; i++) {
		const r = grid[i]
		for (let j = 0; j < r.length; j++) {
			const current = r[j]
			if (current === "1") {
				console.log(i, j)
			}
		}
	}
}

let grid1 = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"],
]
let output1 = 1

let grid2 = [
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"],
]
let output2 = 3

numIslands(grid1)
// numIslands(grid2)
