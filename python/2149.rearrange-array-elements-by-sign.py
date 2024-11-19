#
# @lc app=leetcode id=2149 lang=python3
#
# [2149] Rearrange Array Elements by Sign
#

# @lc code=start
# class Solution:
#     def rearrangeArray(self, nums: List[int]) -> List[int]:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars

def rearrangeArray(nums):
    center_string_stars(nums)
    # ? first
    #   split into pos/neg lists
    pos, neg, output = [], [], [None] * len(nums)
    i, js, k = 0, 1, 0
    while k < len(nums):
        print(pos, neg, i, js)
        if nums[k] > 0:
            print("POIS")
            output[i] = nums[k]
            i += 2
            print(output)
            # set_trace()

        else:
            print("MEG")
            output[js] = nums[k]
            js += 2
            print(output)
            # set_trace()
        # set_trace()

        k += 1
        
    print(output)
    return output
        

top_wrap('TESTING')
n1 = [3,1,-2,-5,2,-4]
rearrangeArray(n1)
rearrangeArray([-1,1])

        
# @lc code=end

