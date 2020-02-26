# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}

require 'pry'

def find_median_sorted_arrays(nums1, nums2)
  total = nums1.length + nums2.length
  arr = []
  i = j = k = 0
  # * Merge the arrays
  while i < total
    if nums1[j] == nil
      arr << nums2[k]
      k+=1
    elsif (nums2[k] == nil || nums1[j] < nums2[k])
      arr << nums1[j]
      j+=1
    else
      arr << nums2[k]
      k+=1
    end
      i+=1
  end

  while arr.length > 2
    arr = arr.slice(1, arr.length-2)
  end

  if arr.length > 1 
    return (arr[0] + arr[1])/2.0
  else
    return arr[0].to_f
  end
end


p find_median_sorted_arrays([1,3], [2]) # * == 2.0
p find_median_sorted_arrays([1,2], [3,4]) # * == 2.5
p find_median_sorted_arrays([1,2,4,6,7], [2,4,5,8]) # * == 4.0
p find_median_sorted_arrays([1,3], []) # * == 2.0
# The median is (2 + 3)/2 = 2.5
