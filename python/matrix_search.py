""" 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 """

from py_term_helpers import top_wrap, kv_print
from ipdb import set_trace


def matrix_search(mat, target):
    # bin search through rows
    #   if target in range(row):
    #     do binary search on row
    #       if found target => true else false

    # for row search check top/bot
    #   if target is greater than right most top
    #
    #   if target is less than left most bot

    # stretch
    ROWS, COLS = len(mat), len(mat[0])
    if target < mat[0][0] or target > mat[-1][-1]:
        print("Quick False")
        return False

    top, bot = 0, len(mat) - 1
    while top <= bot:
        row_idx = (top + bot) // 2
        if target > mat[row_idx][-1]:
            top = row_idx + 1
        elif target < mat[row_idx][0]:
            bot = row_idx - 1
        else:
            break

    row_idx = (top + bot) // 2 
    left, right = 0, len(mat[row_idx]) - 1
    cur_row = mat[row_idx]
    while left <= right:
        mid = (left + right) // 2
        print(cur_row[mid])
        if target > cur_row[mid]:
            print("moving left")
            left = mid + 1
        elif target < cur_row[mid]:
            print("moving right")
            right = mid - 1
        else:
            print("TRUE")
            return True
    print("Slow False")
    return False

top_wrap('TESTING')

matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
# target = 3
# Output: true

kv_print(matrix_search(matrix, 16))
matrix_search(matrix, 17)
matrix_search(matrix, 61)
