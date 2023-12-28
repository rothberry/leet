""" 
@param {number[]} nums
@param {number} target
@return {number}
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
 """

from os import system


def binary_search(nums, target):
    # for binary search,
    # first find the midpoint
    # check if target is above/below/equal
    # if above
    #   move begining idx to mid
    # if below
    #   move end idx to mid
    # if equal
    #   reurn mid idx
    # loop until find target OR begining and end idx cross
    i, j = 0, len(nums) - 1
    print(f'{nums}: {i}, {j}, {target}')

    while i <= j:
        mid = round((j + i)/2)
        print(f'{i}/{j}/{mid}/{nums[mid]}')
        # breakpoint()
        if i == mid or j == mid:
            print("NAH")
            return -1
        if target == nums[mid]:
            print("YAS")
            return mid
        elif target > nums[mid]:
            # print("ABOVE")
            i = mid
        elif target < nums[mid]:
            # print("BELOW")
            j = mid


nums1 = [-1, 0, 3, 5, 9, 12]
target1 = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

# nums2 = [-1, 0, 3, 5, 9, 12]
target2 = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1

system("clear")
print("\nTESTING..\n")

for x in range(-1, 12):
    print(binary_search(nums1, x))
