/**
 * @param {character[][]} board
 * @return {boolean}
 */
let board1 = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
// Output: true

let board2 = [
	["8", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", ".", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", ".", ".", "9", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

let board3 = [
	["8", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", ".", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "."],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", ".", "9", ".", ".", "5"],
	["1", "1", "1", "1", "8", "1", "1", "7", "9"],
]
// Output: false

const isValidSudoku = (board) => {
	// Test is each col is a valid sud
	// Test is each square is a valid sud

	// Test is each row is a valid sud
	try {
		let [rowSet, colSet, squareSet] = [{}, {}, {}]
		board.forEach((row, i) => {
			rowSet[[i]] = {}
			// console.log(row)
			row.forEach((ele, j) => {
				// console.log(ele)
				if (!colSet[[j]]) {
					colSet[[j]] = {}
				}
				squareKey = `${parseInt(i / 3)}.${parseInt(j / 3)}`
				if (!squareSet[squareKey]) {
					squareSet[squareKey] = {}
				}
				if (ele !== ".") {
					if (
						rowSet[[i]][ele] ||
						colSet[[j][ele]] ||
						squareSet[squareKey][ele]
					) {
						throw Error
					}
					if (!rowSet[[i]][ele]) {
						// console.log("setting row..")
						rowSet[[i]][ele] = 1
					}
					if (!colSet[[j]][ele]) {
						colSet[[j]][ele] = 2
					}
					if (!squareSet[squareKey][ele]) {
						squareSet[squareKey][ele] = 3
					}
				}
			})
		})
		console.log(rowSet, colSet, squareSet)
	} catch (e) {
		return "NAH BRUH"
	}

	return "THE SUDOKU WORKS!"
}

console.clear()
console.log("TESTING...")
console.log(isValidSudoku(board1))
console.log(isValidSudoku(board2))
// console.log(isValidSudoku(board3))
