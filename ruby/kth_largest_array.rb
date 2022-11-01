# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
# Given an integer array nums and an integer k, return the kth largest element in the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct element.

# You must solve it in O(n) time complexity.
require "pry"


def find_kth_largest(nums, k)
  # maxArr = Array.new(k).fill(0)
  # nums.each do |x|
  #   # conditions
  #   # if maxArr is empty
  #   #   fill back slot
  #   # if maxArr has empty slots
  #   #   fill in 
  #   binding.pry
  # end

  
end

nums1 = [3, 2, 1, 5, 6, 4]
k1 = 2
# Output: 5

nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
k2 = 4
# Output: 4

p find_kth_largest(nums1, k1)
# p find_kth_largest(nums2, k2)
