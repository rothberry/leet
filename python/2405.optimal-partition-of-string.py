#
# @lc app=leetcode id=2405 lang=python3
#
# [2405] Optimal Partition of String
#

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars

# @lc code=start
# class Solution:
#     def partitionString(self, s: str) -> int:


def partitionString(string: str) -> int:
    center_string_stars(string)
    output = []
    cur_str = ""
    for char in string:
        print(f'char:{char} / cur:{cur_str}')
        # set_trace()
        if char not in cur_str:
            cur_str += char
        else:
            output.append(cur_str)
            cur_str = char
        print(output)
    if cur_str:
        output.append(cur_str)
    print(output, len(output))


top_wrap('TESTING')
partitionString('abacaba')  # => 4
partitionString('ssssss')  # => 4

# @lc code=end
