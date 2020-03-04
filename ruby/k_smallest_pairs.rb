# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer[][]}
require 'pry'
require_relative 'print_out'

def k_smallest_pairs(nums1, nums2, k)
  # find the first k pairs with the smallest sums
  count = n1_idx = n2_idx = 0
  n = nums1.length
  m = nums2.length
  k = ([n * m, k]).min
  output = []
  while count < k
    n1_current = nums1[n1_idx]
    n2_current = nums2[n2_idx]
    if (!n1_current || !n2_current)
      break
    else
      output << [nums1[n1_idx], nums2[n2_idx]]
      # n2_next = !nums2[n2_idx + 1] ? n1_current : nums2[n2_idx + 1]
      if !nums1[n1_idx + 1]
        n1_next = n1_current 
      else
        n1_next = nums1[n1_idx + 1]
      end
      if !nums2[n2_idx + 1] 
        n2_next = n2_current 
      else
        n2_next = nums2[n2_idx + 1]
      end

      print_out([n1_idx, n2_idx, count+1])
      # binding.pry

      # compare the next index of each array
      if (!!n1_next || !n2_next || n1_next <= n2_next)
        if n1_idx < n - 1
          n1_idx+=1
        end
      elsif (!!n2_next || !n1_next || n1_next > n2_next)
        if n2_idx < m - 1
          n2_idx+=1
        end
      end
    end
    count+=1
  end
  print 'out: '
  output
end

p k_smallest_pairs([1,1,2], [1,2,3], 10)
# Output: [1,1], [1,1], [1,2]

# p k_smallest_pairs([1,7,11], [2,4,6], 3)
# # Output: [[1,2],[1,4],[1,6]] 

# p k_smallest_pairs([1,1,2], [1,2,3], 2)
# # Output: [1,1],[1,1]
