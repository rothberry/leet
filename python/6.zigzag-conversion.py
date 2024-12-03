#
# @lc app=leetcode id=6 lang=python3
#
# [6] Zigzag Conversion
#

# @lc code=start
# class Solution:
#     def convert(self, s: str, numRows: int) -> str:
from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def convert(s, numRows):
    center_string_stars((s, numRows))

    # ? first
    # create list of lists lenght numRows
    # loop over s
    # create zigzag counter at 0
    # for each loop
    #   append to current counter-index
    #   increase or decrese counter
    # return flattened string
    output = []
    for _ in range(numRows):
        output.append([])
    zig = 0
    direction = 1

    for char in s:
        output[zig].append(char)
        # set_trace()
        if (0 > zig + direction) or (zig + direction >= numRows):
            direction = -direction
        zig += direction
        # print(output, f'{direction}{zig}')

    out_string = ""
    for xs in output:
        for x in xs:
            out_string += x
    set_trace()


top_wrap('TESTING')
convert("PAYPALISHIRING", 3)


# @lc code=end
