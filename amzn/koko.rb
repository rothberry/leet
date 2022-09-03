# @param {Integer[]} piles
# @param {Integer} h
# @return {Integer}

# Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
# The guards have gone and will come back in h hours.

# Koko can decide her bananas-per-hour eating speed of k.
# Each hour, she chooses some pile of bananas and eats k bananas from that pile.
# If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

# Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

# Return the minimum integer k such that she can eat all the bananas within h hours.
require "pry"

def min_eating_speed(piles, h)
  # ! brute force
  # check every value of k starting at the max
  # then return the first time that she eats all the bananas
  l, r = 0, max_k
  res = piles.max
  k_range = (1..res).to_a
  while l < r
    mid_idx = (l + r) / 2
    k = k_range[mid_idx]
    puts "K:\t#{k}"
    # Now we check how many babanananas koko can eat with this k
    sum_hours = 0
    piles.each do |pile|
      # p sum_hours
      sum_hours += (pile / k).ceil
    end
    puts "Sum:\t#{sum_hours}"
    if sum_hours <= h
      # shift right pointer to k - 1
      r = k - 1
    elsif sum_hours > h
      l = k + 1
    end
  end
  return k
  # binary search on the k range array
end

piles1 = [3, 6, 7, 11]
h1 = 8
#
# Output: 4

piles2 = [30, 11, 23, 4, 20]
h2 = 5
# Output: 30

piles3 = [30, 11, 23, 4, 20]
h3 = 6
# Output: 23

p min_eating_speed(piles1, h1)
