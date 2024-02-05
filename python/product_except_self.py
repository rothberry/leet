""" 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. 
 """

from ipdb import set_trace
from py_term_helpers import top_wrap


def product_except_self(nums):
    # base case (no zeroes)
    # get product of all
    # iterate through
    #   for each divide product by current_val
    #     add to output array
    # Outliers:
    #   if 1 zero,
    #     everything will be zero other than that index, and it will be the full val
    #   if more than 1 zero:
    #     everything will be zero no matter what
    zero_idx = -1
    output = [0] * len(nums)
    total_product = None
    for i, x in enumerate(nums):
        if x == 0:
            # set_trace()
            if zero_idx >= 0:
                return output
            else:
                zero_idx = i
        elif total_product is None:
            total_product = x
        else:
            total_product *= x
    print(total_product)

    if zero_idx >= 0:
        output[zero_idx] = total_product
    else:
        for i, x in enumerate(nums):
            output[i] = total_product // x
    return output


top_wrap("Prod no self")
nums1 = [1, 2, 3, 4]
# Output: [24,12,8,6]
# Example 2:
nums2 = [-1, 1, 0, -3, 3]
# Output: [0,0,9,0,0]
print(
    product_except_self(nums1),
    product_except_self(nums2),
    product_except_self([0, 0]),
)
