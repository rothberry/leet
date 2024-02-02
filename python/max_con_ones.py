# Given a binary array nums, return the maximum number of consecutive 1's in the array.

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print

def findMaxConsecutiveOnes(nums):
    # set_trace()
    # iter over array
    # create a counter and current max
    # for each
    #   if it's a 1
    #     inc counter by 1
    #     max is the max of the current max and the new counter
    #   else
    #     reset counter
    c, c_max = 0, 0
    for x in nums:
        if x == 1:
            c += 1
            c_max = max(c_max, c)
        else:
            c = 0
    return c_max


nums1 = [1, 1, 0, 1, 1, 1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

nums2 = [1, 0, 1, 1, 0, 1]
# Output: 2

top_wrap("TEST")
print(findMaxConsecutiveOnes(nums1))
print(findMaxConsecutiveOnes(nums2))
kv_print(nums1)
