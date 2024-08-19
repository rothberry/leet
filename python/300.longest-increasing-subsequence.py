#
# @lc app=leetcode id=300 lang=python3
#
# [300] Longest Increasing Subsequence
#

# @lc code=start

from ipdb import set_trace
from py_term_helpers import top_wrap


# class Solution:
#     def lengthOfLIS(self, nums: List[int]) -> int:


def lengthOfLIS(nums):
    # ! Brute
    # iterate over the list, check for each seq value if it's >= the previous

    # print('i, x, j, y')
    longest = 0
    all_list = []
    for i, x in enumerate(nums):
        cur_longest = 1
        cur_list = [x]
        for _, y in enumerate(nums[i+1:]):
            if y >= x:
                cur_longest += 1
                cur_list.append(y)
                x = y
        print(cur_list, cur_longest)
        longest = max(longest, cur_longest)
        all_list.append(cur_list)
    print(longest)
    return longest


top_wrap('TESTING')
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])  # [2,5,7,101] => 4
lengthOfLIS([0, 1, 0, 3, 2, 3])


# @lc code=end
