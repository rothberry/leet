# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
# find three integers in nums such that the sum is closest to target. 
# Return the sum of the three integers. 
# You may assume that each input would have exactly one solution.

require 'pry'

def three_sum_closest(nums, target)
  if nums.length < 3
    false
  elsif nums.length == 3
    nums.reduce(:+)
  else
    arr_length = nums.length
    result_arr = []
    i = 0
    spread = 1
    while arr_length - i > 3
      while !!nums[i+1+spread]
        start = 1
        while !!nums[i+start+spread]
          nums_i = nums[i]
          nums_start = nums[i+start]
          nums_spread = nums[i+start+spread]
          arr = [nums_i, nums_start, nums_spread]
          sum = arr.reduce(:+)
          result_arr.push(sum)
          start+=1
        end        
        spread+=1
      end
      i+=1
    end
    p result_arr
    if result_arr.include?(target)
      target
    else
      result = result_arr.min_by do |x| 
          y = x.abs - target
          y.abs
        end
      if result < 0
        result = 0
      else
        result
      end
    end
  end
end



# one = [-1, 2, 1, -4]
# target_one = 1
# p 'one'
# p three_sum_closest(one, target_one)
# # The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
two = [0,2,1,-3]
target_two = 1
p 'two'
p three_sum_closest(two, target_two)
three = [1,1,1,0]
target_three = -100
p 'three'
p three_sum_closest(three, target_three)
