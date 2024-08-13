#
# @lc app=leetcode id=289 lang=python3
#
# [289] Game of Life
#
# https://leetcode.com/problems/game-of-life/description/
#
# algorithms
# Medium (69.79%)
# Likes:    6363
# Dislikes: 575
# Total Accepted:    492.2K
# Total Submissions: 705.2K
# Testcase Example:  '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]'
#
# According to Wikipedia's article: "The Game of Life, also known simply as
# Life, is a cellular automaton devised by the British mathematician John
# Horton Conway in 1970."
#
# The board is made up of an m x n grid of cells, where each cell has an
# initial state: live (represented by a 1) or dead (represented by a 0). Each
# cell interacts with its eight neighbors (horizontal, vertical, diagonal)
# using the following four rules (taken from the above Wikipedia
# article):
#
#
# Any live cell with fewer than two live neighbors dies as if caused by
# under-population.
# Any live cell with two or three live neighbors lives on to the next
# generation.
# Any live cell with more than three live neighbors dies, as if by
# over-population.
# Any dead cell with exactly three live neighbors becomes a live cell, as if by
# reproduction.
#
#
# The next state is created by applying the above rules simultaneously to every
# cell in the current state, where births and deaths occur simultaneously.
# Given the current state of the m x n grid board, return the next state.
#
#
#
# Constraints:
#
#
# m == board.length
# n == board[i].length
# 1 <= m, n <= 25
# board[i][j] is 0 or 1.
#
#
#
# Follow up:
#
#
# Could you solve it in-place? Remember that the board needs to be updated
# simultaneously: You cannot update some cells first and then use their updated
# values to update other cells.
# In this question, we represent the board using a 2D array. In principle, the
# board is infinite, which would cause problems when the active area encroaches
# upon the border of the array (i.e., live cells reach the border). How would
# you address these problems?
#
#
#

# @lc code=start

from py_term_helpers import top_wrap, star_line
from ipdb import set_trace


def gameOfLife(board):
    """
    Do not return anything, modify board in-place instead.
    """
    # first with new matrix
    # mat = board[:]
    # print(board[0][0])
    # mat[0][0] = 2
    # print(board[0][0])
    print(f'first => {board}')
    for i in range(len(board)):
        for j in range(len(board[i])):
            # ? need a way to mark change, but not change until end
            # for each cell,
            # check the quat of dudes adjacent to the cell
            # if cell == 1
            #   if neighbors are 2 or 3 => stays as 1
            #   else goes to 0
            # if cell == 0
            #   if neighbors is 3 => to 1
            #   else stays as 0

            count = count_neighbors(board, i, j)
            print(i, j, board[i][j], count)
            if board[i][j] == 0:
                # print("deadge")
                if count == 3:
                    print('he aliv')
                    # print(i, j, board[i][j], count)
                    board[i][j] -= 1
            elif board[i][j] == 1:
                # print("alivge")
                if count < 2 or count > 3:
                    print('\'e dead')
                    # print(i, j, board[i][j], count)
                    board[i][j] += 1
    print(f'sec => {board}')

    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] > 1:
                board[i][j] = 0
            elif board[i][j] < 0:
                board[i][j] = 1

    print(f'last => {board}')

    return board


def count_neighbors(board, i, j):
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1),
                  (1, 1), (1, -1), (-1, 1), (-1, -1)]
    count = 0
    check_list = []
    for x in directions:
        cur_i, cur_j = i + x[0], j + x[1]
        try:
            if cur_i >= 0 and cur_j >= 0:
                cur_cell = board[cur_i][cur_j]
                check_list.append(((cur_i, cur_j), cur_cell))
                if cur_cell >= 1:
                    count += 1
        except IndexError:
            pass
    # print(check_list)
    return count


top_wrap("TESTING")


board1 = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
out1 = [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]


board2 = [[1, 1], [1, 0]]
out2 = [[1, 1], [1, 1]]

print(gameOfLife(board1) == out1)
star_line()
print(gameOfLife(board2) == out2)
