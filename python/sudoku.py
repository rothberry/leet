""" 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
"""

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print, star_line
from collections import defaultdict
from pprint import pp


def valid_sudoku(board):
    # need to check row/column/square for any duplicates
    # create dict for each
    # double iterate
    # for each element
    #   need to add to each dict and check for dups

    ROWS, COLS = len(board), len(board[0])
    row_check, col_check, sq_check = defaultdict(
        set), defaultdict(set), defaultdict(set)
    # row_check, col_check, sq_check = {}, {}, {}
    for i in range(ROWS):
        for j in range(COLS):
            cur_val = board[i][j]
            if cur_val is not ".":
                cur_square = (i // 3, j // 3)
                # kv_print((i, j, cur_val, cur_square))
                # check if cur_val is in any of the sets
                if (cur_val in row_check[i] or
                    cur_val in col_check[j] or
                        cur_val in sq_check[cur_square]):

                    pp(cur_val in row_check[i])
                    pp(cur_val in col_check[j])
                    pp(cur_val in sq_check[cur_square])
                    print(f"NAH => {(i, j, cur_val)}")
                    return False
                row_check[i].add(cur_val)
                col_check[j].add(cur_val)
                sq_check[cur_square].add(cur_val)
                # kv_print((row_check, col_check, sq_check))

    pp(row_check)
    pp(col_check)
    pp(sq_check)
    print("YA")
    return True


board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
# Output : true

board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
# Output: false
# Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

top_wrap("testing")
valid_sudoku(board1)
star_line()
valid_sudoku(board2)
