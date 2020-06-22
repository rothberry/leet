/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  // create empty board arr
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i]
    // Even   => A's turn or "X"
    // Odd    => B's turn or "O"
    const row = currentMove[0]
    const column = currentMove[1]
    console.log("afyashfksaf", currentMove)
    console.log(row, column)
    if (i % 2 !== 1) {
      board[row][column] = 'X'
    } else {
      board[row][column] = 'O'
    }
    // Break if completed a win
  }
  return board
}

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2]
  ])
)

// ;[
//   [0, 0], [0, 1], [0, 2],
//   [1, 0], [1, 1], [1, 2],
//   [2, 0], [2, 1], [2, 2],
// ]
