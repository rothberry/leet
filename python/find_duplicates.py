""" 
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Constraints
  - 1 <= n <= 105
  - nums.length == n + 1
  - 1 <= nums[i] <= n
  - All the integers in nums appear only once except for precisely one integer which appears two or more times.

"""
from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print


def findDuplicate(nums) -> int:
    # without modifying array
    # O(1) space

    slow, fast = 0, 0
    kv_print(nums)
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        kv_print((slow, fast, nums[fast]))
        if slow == fast:
            return nums[slow]


top_wrap("TESTING")

nums1 = [1, 3, 4, 2, 2]
# Output: 2

nums2 = [3, 1, 3, 4, 2]
# Output: 3
print(
    findDuplicate(nums1),
    findDuplicate(nums2),
    findDuplicate([1, 2, 3, 4, 5, 6, 7, 1]),
)
