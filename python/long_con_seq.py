""" 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time. 

 """

from ipdb import set_trace
from py_term_helpers import TermHelper


def longestConsecutiveSort(nums) -> int:
    # first
    # create a counter dict?
    # iterate over nums
    #   maybe sort on the fly and keep counter
    #   for each,

    if not nums:
        return 0

    nums = set(sorted(nums))
    nums = sorted(nums)
    maxes = [1]
    max_idx = 0
    print(nums)
    for i, x in enumerate(nums[1:]):
        diff = x - nums[i]
        print(x, diff)
        if diff == 1 or diff == 0:
            maxes[max_idx] += 1
        else:
            maxes.append(1)
            max_idx += 1
    print(maxes)
    return max(maxes)


def longestConsecutive(nums):
    seen = set(nums)
    longest = 0

    for n in seen:
        print("lf", n - 1)
        if (n - 1) not in seen:
            print("start")
            length = 1
            while (n + length) in seen:
                print("inc", n + length)
                length += 1
            longest = max(length, longest)
    return longest


TermHelper.top_wrap("TEST")


nums1 = [100, 4, 200, 1, 1, 3, 2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
# Output: 9

longestConsecutive(nums1)
# longestConsecutive(nums2)
# longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
