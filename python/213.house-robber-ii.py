#
# @lc app=leetcode id=213 lang=python3
#
# [213] House Robber II
#

# @lc code=start
# class Solution:
#     def rob(self, nums: List[int]) -> int:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def rob2(nums):
    center_string_stars(str(nums))

    def rob1(nums):
        mxes = [0, 0]
        for num in nums:
            cur_max = max(mxes[0] + num, mxes[1])
            mxes = [mxes[1], cur_max]
        return mxes[1]

    # mxes1 = [0, 0]
    # for num in nums[:-1]:
    #     cur_max = max(mxes1[0] + num, mxes1[1])
    #     mxes1 = [mxes1[1], cur_max]
    #     print(mxes1)

    # mxes2 = [0, 0]
    # for num in nums[1:]:
    #     cur_max = max(mxes2[0] + num, mxes2[1])
    #     mxes2 = [mxes2[1], cur_max]
    #     print(mxes2)

    # set_trace()
    # print(mxes1, mxes2, max(mxes1[1], mxes2[1]))
    print(nums[0], rob1(nums[1:]), rob1(nums[:-1]))
    print(max(nums[0], rob1(nums[1:]), rob1(nums[:-1])))
    return max(nums[0], rob1(nums[1:]), rob1(nums[:-1]))


top_wrap('TESTING')
n1 = [5, 3, 2]
n2 = [1, 2, 3, 1]
n3 = [1, 2, 3]

rob2(n1)
rob2(n2)
rob2(n3)

# @lc code=end
