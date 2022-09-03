# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
# There is an integer array nums sorted in ascending order (with distinct values).

# Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

# Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

# You must write an algorithm with O(log n) runtime complexity.
require "pry"

def search(nums, target)
  # with a binary search
  left, right = 0, nums.length - 1
  # pivot = 0
  p "#{nums}, #{target}"
  while left <= right
    mid = (right - left) / 2

    return mid if target == nums[mid]
    # # check both sides of mid to see if we are at the pivot point
    # sl = nums.slice(mid - 1, 3)
    # # if mid - 1 is greater than mid, then mid is the pivot
    # # if mid + 1 is less than mid, then mid is the pivot

    # check left side of nums sorted
    p nums[mid]
    p "#{nums[left]}, #{nums[right]}"
    # binding.pry
    if nums[left] <= nums[mid]
      if target > nums[mid] || target < nums[left]
        puts "left: left"
        left = mid + 1
      else
        puts "left: right"
        right = mid - 1
      end
      # check right side of sorted
    else
      if target < nums[mid] || target > nums[right]
        puts "right: right"
        right = mid - 1
      else
        puts "right: left"
        left = mid + 1
      end
    end
  end
  return -1
end

def search1(nums, target)
  found = nums.find_index { |x| x == target }
  found ? found : -1
end

search([4, 5, 6, 7, 0, 1, 2], 0)
# Output: 4

# search([4, 5, 6, 7, 0, 1, 2], 3)
# # Output: -1

# search([1], 0)
# # Output: -1
