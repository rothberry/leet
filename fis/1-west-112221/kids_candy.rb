# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}

# There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

# Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

# Note that multiple kids can have the greatest number of candies.
require 'pry'

def kids_with_candies(candies, extraCandies)
  # at it's core, we are given:
  # array and an int
  # return an array of boolean's such that the boolean is whether or not add int the extra to the current makes it a max

  # 1: need to go through the candies arr
  # 2: for each element, we need to add the xtra and check if it's a max
  # 3: if it's a max value, then push true into output, else false

  # * RUBYY

  # max_candy = 0
  # candies.each do |candy|
  #   if candy > max_candy
  #     max_candy = candy
  #   end
  # end

  # max_candy = candies.sort.last

  # output = []
  # candies.each do |candy|
  #   with_extra = candy + extraCandies
  #   is_max = with_extra >= max_candy
  #   output << is_max
  # end
  # return output

  max_candy = candies.max
  return candies.map do |candy|
    candy + extraCandies >= max_candy
  end
  
end




candies = [2,3,5,1,3] 
extraCandies = 3
p kids_with_candies(candies, extraCandies)


def kids_with_candies2(candies, extra_candies)
  # First ruby way
  # max = candies.max
  # candies.map do |c|
  #   (c + extra_candies) >= max
  # end

  # Second, less ruby
  output = []
  i = 0
  while i < candies.length
    j = 0
    check = true
    while j < candies.length
      # p "#{i}, #{j}"
      with_extra = candies[i] + extra_candies
      test_candy = candies[j]
      p "#{with_extra} >= #{test_candy}"
      if with_extra < test_candy
        check = false
        break
      end
      j+=1
    end
    output << check
    i+=1
  end
  return output
  
end

