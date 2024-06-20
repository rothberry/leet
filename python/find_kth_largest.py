""" 
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 """

from ipdb import set_trace
from py_term_helpers import top_wrap
import heapq


def findKthLargest(nums, k):
    inv_nums = [-x for x in nums]
    heapq.heapify(inv_nums)
    output = inv_nums[0]
    for i in range(k):
        output = heapq.heappop(inv_nums)
        # print(inv_nums, output)
    # print('end', inv_nums)
    print(abs(output))
    return abs(output)


def findKthLargestSuperPython(nums, k):
    kth_output = heapq.nlargest(k, nums)
    print(kth_output, kth_output[-1])
    return kth_output[-1]


def removeKthLargestAndInsert(nums, k, val):
    min_nums = heapq.nsmallest(len(nums) - k, nums)
    print(min_nums)
    for i, x in enumerate(min_nums):
        print(x, val)
        if val > x:
            min_nums.insert(i + 1, val)
            break

    # heapq.heapify(min_nums)
    print(min_nums)


nums1 = [3, 2, 1, 5, 6, 4]
nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]

top_wrap("kthhhh")

# findKthLargest(nums1, 2)  # 5
# findKthLargest(nums2, 4)  # 4

removeKthLargestAndInsert(nums1, 2, 2)
