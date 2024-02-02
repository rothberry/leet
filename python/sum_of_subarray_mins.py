""" 
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

"""


from py_term_helpers import top_wrap
from ipdb import set_trace


def sum_min_subarray(nums):
    # create subarray
    # iterate of subarrays array
    #   sum mins of each
    subs = []

    for i in range(len(nums)+1):
        for j in range(i+1, len(nums)+1):
            print(f"{i},{j}: {nums[i:j]}")
            subs.append(nums[i:j])
    
    total = 0
    for x in subs:
        total += min(x)
    
    print(total)
    return total



top_wrap("TESTING")

arr = [3, 1, 2, 4]
sum_min_subarray(arr)


"""
Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444
"""
