""" 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 """

from py_term_helpers import TermHelper
from ipdb import set_trace


def threeSum(nums):
    # first brute force this bitch
    output = []
    cnt = 0

    if len(nums) >= 3:
        for i, x in enumerate(nums):
            for j, y in enumerate(nums[i+1:]):
                for k, z in enumerate(nums[j+1:]):
                    cnt += 1
                    sum = x + y + z
                    print(f'{i}: {x}, {j+1}: {y}, {k+2}: {z}, sum: {sum}')
                    if sum == 0 and i != j + 1 and i != k+2 and j != k+1:
                        # set_trace()
                        output.append([x, y, z])
    print(cnt)
    TermHelper.kv_print(output)
    return output


TermHelper.top_wrap("TESTING")
nums1 = [-1, 0, 1, 2, -1, -4]
nums2 = [0, 1, 1]
nums3 = [0, 0, 0]


# threeSum(nums1)
# threeSum(nums2)
threeSum(nums3)

# Output: [[-1,-1,2],[-1,0,1]]
# Explanation:
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.

# Output: []
# Explanation: The only possible triplet does not sum up to 0.

# Output: [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.
