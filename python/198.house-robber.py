#
# @lc app=leetcode id=198 lang=python3
#
# [198] House Robber
#

# @lc code=start
# class Solution:
#     def rob(self, nums: List[int]) -> int:
from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def rob(nums):
    center_string_stars(str(nums))
    # almost kadane's theory by finding the max value of the houses robbed up until
    # need to hold onto the prev 2 maxes to test whether adding the current value increases

    mxes = [0, 0]

    for num in nums:
        cur_max = max(mxes[0] + num, mxes[1])
        mxes = [mxes[1], cur_max]
        print(mxes)
        # set_trace()
    return mxes[1]


top_wrap('TESTING')

n1 = [1, 2, 3, 1]
n2 = [2, 7, 9, 3, 1]

rob(n1)
rob(n2)
# @lc code=end
