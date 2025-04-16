#
# @lc app=leetcode id=1277 lang=python3
#
# [1277] Count Square Submatrices with All Ones
#

# @lc code=start
# class Solution:
#     def countSquares(self, matrix: List[List[int]]) -> int:
from ipdb import set_trace
from py_term_helpers import *


def countSquares(matrix):
    for row in matrix:
        center_string_stars(row)

    rows, cols = len(matrix), len(matrix[0])
    cache = {}
    total = 0

    def dfs(r, c):
        print(f"row: {r}, col: {c}")
        if r == rows or c == cols or not matrix[r][c]:
            return 0

        if (r, c) not in cache:
            cache[(r, c)] = 1 + min(
                dfs(r, c + 1),
                dfs(r + 1, c),
                dfs(r+1, c+1)
            )
        return cache[(r, c)]

    for r in range(rows):
        for c in range(cols):
            print(total)
            total += dfs(r, c)

    print(total)
    return total


top_wrap('TESTING')
m1 = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
]
# Output: 15
m2 = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
]
# Output: 7
countSquares(m1)
# countSquares(m2)


# @lc code=end
