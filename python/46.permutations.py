#
# @lc app=leetcode id=46 lang=python3
#
# [46] Permutations
# Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
#

# @lc code=start
# class Solution:
#     def permute(self, nums: List[int]) -> List[List[int]]:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def permuteBRUTE(nums):
    center_string_stars(str(nums))

    # first bruite

    output = []
    i = 0
    while i < len(nums):
        switch_lst = [*nums[0:-2], nums[-1], nums[-2]]
        output.append(nums)
        output.append(switch_lst)

        set_trace()
        nums = [nums[-1], *nums[0:-1]]
        print(nums)
        i += 1
    print(output)
    return


def permute(nums):
    # start with empty permutation outpuot
    # iterate over nums
    # for each
    #   add the cur value into every 'space' in the previous perm_outputs

    center_string_stars(str(nums))
    output = [[]]

    for x in nums:
        new_perms = []
        for perm in output:
            for i in range(len(perm) + 1):
                p_copy = perm.copy()
                p_copy.insert(i, x)
                new_perms.append(p_copy)
        # set_trace()
        output = new_perms
        print(output)
    print(len(output))
    print(output)


top_wrap('TESTING')
n0 = [1, 2, 3]
permute(n0)


# @lc code=end
