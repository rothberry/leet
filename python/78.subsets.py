""" 
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.


Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]


1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.


 """

from py_term_helpers import *
from ipdb import set_trace


def subsets(nums):
    center_string_stars(str(nums))
    """ 
    ? first
    create starting output list of [[], solo lists of all nums[i]
    nums = [  1   2   3   ]
    starting output = [[], [1], [2], [3]]
    [[1], [1,2], [1,2,3]
    [2],  [2,3]
    [3]]

      """

    output = [[]]



top_wrap('TESTING')

subsets([1, 2, 3])
# subsets([0])
