# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

require "pry"
# require_relative "print_out"

=begin

  def two_sum(nums (arr), target: int) end
  Find where sum of 2 elements equal the target and
  output or return => arr of indicies [index1, index2]

  Where to start?
  Check all the sums for the target value, and save the indexs

  Loop through the array twice
  2 + 7 => 9, [0,1]
  2 + 11 => 13, [0,2]...
  2 + 15
  7 + 11
  7 + 15
  11 + 15


  
  
=end

def two_sum_first(nums, target)
  sum_arr = []
  nums.each_with_index do |num1, idx1|
    idx2 = idx1 + 1
    while idx2 < nums.length
      num2 = nums[idx2]
      # p "#{num1}: #{idx1}"
      # p "#{num2}: #{idx2}"
      # create our sum
      sum = num1 + num2
      sum_arr.push({ sum: sum, idx: [idx1, idx2] })
      pp sum_arr
      idx2 += 1
    end
  end
  output = sum_arr.find do |s|
    s[:sum] == target
  end
  return output[:idx]
end

# with a hash
def two_sum_second(nums, target)
  # 2 + 7 = 9
  # if we take the target minus the current value, we get the number that we are LOOKING for to match the two sum
  # x = 2 => 9 - 2 = looking for 7
  # x = 7 => found the 7! Return both indeces

  # create an empty hash for the output data
  # Loop through the arr and use the target and the current element to find the matching pair for the sum
  # check if the diff is already a key in the hash
  # if so, return that index, and the current index
  # if not, we add the diff to a new key, with a value of the current index
  #
  output = {}
  nums.each_with_index do |num, idx|
    diff = target - num
    if output[num]
      return [output[num], idx]
    end
    output[diff] = idx
    pp output
  end
end

p two_sum_second([2, 7, 11, 15], 9)
p two_sum_second([2, 7, 11, 15, 20], 9)
p two_sum_second([3, 2, 4], 6)
p two_sum_second([3, 3], 6)

# ? Brute Force
def two_sum(nums, target)
  i = 0
  while i < nums.length
    j = i + 1
    while j < nums.length
      sum = nums[i] + nums[j]
      diff = sum - target
      if diff == 0
        return [i, j]
      end
      j += 1
    end
    i += 1
  end
end

# ? Creating a hash (dynamic programming)
def two_sum2(nums, target)
  hash = {}
  nums.each_with_index do |n, i|
    if hash[target - n]
      return [hash[target - n], i]
    end
    hash[n] = i
  end
  return -1
end

# p two_sum2([2,7,11,15], 26)
# p two_sum2([3,2,4], 6)
# p two_sum2([0,0], 1)
