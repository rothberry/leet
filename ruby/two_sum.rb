# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
require 'pry'

def two_sum(nums, target)
  i = 0
  while i < nums.length
    j = i + 1
    while j < nums.length
      sum = nums[i] + nums[j]
      diff = sum - target
      # print i, '  ', j, '   ', nums[i], '  ', nums[j], '   ', diff
      # puts ''
      # binding.pry
      if diff == 0
        return [i, j]
      end
      j+=1
    end
    i+=1
  end
end

def two_sum2(nums, target)
  hash = {}
  nums.each_with_index do |n, i|
    # p hash[target - n]
    p hash
    if hash[target - n]
      return hash[target - n], i
    end
    hash[n] = i
  end
end

p two_sum2([2,7,11,15], 26)
p two_sum2([3,2,4], 6)
