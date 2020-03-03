# @param {Integer[]} nums
# @return {Integer[][]}
# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
# Find all unique triplets in the array which gives the sum of zero.
require 'pry'
require_relative 'print_out.rb'

def three_sum(nums)
  # outliers if 3 zeroes
  # num_zeroes = nums.count(0)
  nums.sort!
  output = []
  # find zero or the closest to zero
  # zero_index = nums.find_index { |x| x == 0}
  # i = j = 1

  (1..nums.length - 2).step(1) do |m|
    i = m - 1
    j = m + 1
    while (i >= 0 && j < nums.length)  
      sum = nums[i] + nums[m] + nums[j]
      print_out([sum, i, m, j])
      if sum == 0
        output << [nums[i], nums[m], nums[j]]
        i = i - 1
      elsif sum > 0
        i = i - 1
      elsif sum < 0
        j = j + 1
      end
      # binding.pry
    end
  end

  return output.uniq
end

p three_sum([-1, 0, 1, 2, -1, -4])
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]