# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
require 'pry'
def two_sum(nums, target)
  res = 0
  # binding.pry
  while (res != target)
    test_arr = nums.sample(2)
    p test_arr
    res = test_arr.reduce(:+)
    p res
  end
  # p nums.index(test_arr[0])   
  # p nums.rindex(test_arr[1])
  # idx_arr = [nums.index(test_arr[0]), nums.rindex(test_arr[1])]
end

# arr = [2,11,7,15]
# tar = 9
# arr = [3,3]
arr = [0,4,3,0]
tar = 0

p two_sum(arr, tar)