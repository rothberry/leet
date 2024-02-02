""" 
Max Subarray

 """

from py_term_helpers import top_wrap
from ipdb import set_trace


def max_subarray(nums):
    # * Kadane's
    # * As we loop throught the arr, we are defining the max sum at that
    # * Then when we move onto the next index, we just need to take the max of either the current element OR the prev max sum plus the

    # Create a starting sum of just the first
    # Create an output array of all the max sums
    # loop over length of
    # check max between current value and previous max + current
    # max(current, prev + current) => new
    # Return the max of the output array

    prev_sum = nums[0]
    output = [nums[0]]

    for i in range(1, len(nums)):
        prev_sum = max(nums[i], prev_sum + nums[i])
        if nums[i] > prev_sum + nums[i]:
            print("RESET")
        print(nums[i], prev_sum)
        output.append(prev_sum)

    print(output)
    print(max(output))


a1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
a2 = [1, -3, 2, 1, -1]
# [length, mini, maxi] = [10, -1000, 0]

# aRand = Array.from({ length }, () =>
# 	Math.floor(Math.random() * (max - min) + min)
# )

top_wrap('TESTING')
max_subarray(a1)
