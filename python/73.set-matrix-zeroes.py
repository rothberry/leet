#
# @lc app=leetcode id=73 lang=python3
#
# [73] Set Matrix Zeroes
#

# @lc code=start
# class Solution:
#     def setZeroes(self, matrix: List[List[int]]) -> None:
from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def setZeroes(matrix) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    for row in matrix:
        center_string_stars(str(row))

    # first
    # find all zero coords
    #

    zero_coords = []
    row_len, col_len = len(matrix[0]), len(matrix)
    i = 0
    while i < len(matrix):
        # print(matrix[i])
        j = 0
        while j < len(matrix[i]):
            # print(i, j, matrix[i][j])

            if matrix[i][j] == 0:
                zero_coords.append((i, j))

            j += 1

        i += 1

    for coord in zero_coords:
        # change all in row to zeroes

        print('row')
        for i in range(row_len):
            print(coord[0], i)
            matrix[coord[0]][i] = 0
        # change all in col to zeroes
        print('col')
        for j in range(col_len):
            print(j, coord[1], matrix[j][coord[1]])
            matrix[j][coord[1]] = 0

    # set_trace()
    print(matrix)
    return


top_wrap('TESTING')

m1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
a1 = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
m2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
a2 = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
# setZeroes(m1)
setZeroes(m2)

# @lc code=end
