#
# @lc app=leetcode id=416 lang=python3
#
# [416] Partition Equal Subset Sum
#

# @lc code=start
# class Solution:
#     def canPartition(self, nums: List[int]) -> bool:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def canPartition(nums):
    center_string_stars(str(nums))

    # first
    # get sum of nums
    # if odd => FALSE
    # if even
    #   get target sum => sum / 2
    # sort desc?
    # iterate
    #

    target = sum(nums)

    if target % 2 != 0:
        print("OOD")
        return False

    target /= 2
    sum_l, sum_r = target, target

    nums = sorted(nums, reverse=True)

    print(f'STARTING\nleft:{sum_l}/right:{sum_r}')
    for x in nums:
        if x > (sum_l or sum_r):
            print("NAH")
            return False

        # subtract from the bigger sum
        # this can be diff
        if sum_r > sum_l:
            sum_r -= x
        else:
            sum_l -= x
        print(f'left:{sum_l}/right:{sum_r}')
        # set_trace()

    print("SI SEñor")
    return True


top_wrap('TESTING')
# nums1 = [1, 5, 11, 5]
# canPartition(nums1)
# nums2 = [1, 2, 3, 5]
# canPartition(nums2)
# nums3 = [2, 2, 2, 2, 2]
# canPartition(nums3)
nums4 = [3, 3, 3, 4, 5]
canPartition(nums4)


# @lc code=end
