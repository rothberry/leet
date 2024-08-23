""" 

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 """

from ipdb import set_trace
from py_term_helpers import top_wrap, star_line


def subsetsWithDup(nums):
    # start with output set (so no dups) of always 1 empty list and the whole list
    # iterate:
    #   add each uniq element as it's own [uniq]
    output_set = set()
    # output = [[]]

    left = 0

    while left <= len(nums):
        right = left + 1
        while right <= len(nums):
            # slice = nums[left:right]
            # output.append(slice)
            slice_t = tuple(nums[left:right])
            output_set.add(slice_t)
            print(output_set)
            right += 1
            # set_trace()
        left += 1
    star_line()
    print(output_set)
    output = list(output_set)
    for i, x in enumerate(output):
        output[i] = list(x)
    output.append([])
    set_trace()
    return output


nums1 = [1, 2, 2]
# Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]


nums2 = [0]
# Output: [[], [0]]

nums3 = [1, 2, 2, 3, 3]
# [[],[1],[1,2],[1,2,2],[1,2,2,3],[1,2,2,3,3],[1,2,3],[1,2,3,3],[1,3],[1,3,3],[2],[2,2],[2,2,3],[2,2,3,3],[2,3],[2,3,3],[3],[3,3]]

top_wrap("TESTING")
subsetsWithDup(nums1)
# subsetsWithDup(nums2)
# subsetsWithDup(nums3)
