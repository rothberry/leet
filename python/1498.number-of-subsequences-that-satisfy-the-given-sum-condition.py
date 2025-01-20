#
# @lc app=leetcode id=1498 lang=python3
#
# [1498] Number of Subsequences That Satisfy the Given Sum Condition
#

# @lc code=start
# class Solution:
#     def numSubseq(self, nums: List[int], target: int) -> int:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def numSubseq(nums, target):
    center_string_stars((nums, target))
    nums = sorted(nums)  # dumb, now nlogn
    output = 0

    # outliers
    if nums[0] * 2 > target:
        return 10 ** 9 + 7

    # first
    # after sorted
    # check first/last of array
    #   if min + max <= target, output +1
    #   else nah

    left, right = 0, len(nums) - 1

    while left < right:
        cur_sum = nums[left] + nums[right]

        print(f'{nums[left]} + {nums[right]} => sum:{cur_sum}, tar:{target}')
        if cur_sum > target:
            print("gre8")
            right -= 1
        else:
            print("less")

        set_trace()

    print(output)


top_wrap('TESTING')
numSubseq([3, 5, 6, 7], 9)
numSubseq([3, 3, 6, 8], 10)


# @lc code=end
