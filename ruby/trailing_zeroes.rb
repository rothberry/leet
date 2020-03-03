# @param {Integer} n
# @return {Integer}
# Given an integer n, return the number of trailing zeroes in n!.
require 'pry'

def trailing_zeroes(n)
  # fact = (1..n).inject(:*) || 1
  # fact_arr_reverse = fact.to_s.chars.map(&:to_i).reverse
  # count = 0
  # while count < fact_arr_reverse.length
  #   if fact_arr_reverse[count] == 0
  #     count+=1
  #   else
  #     break
  #   end
  # end
  # return count

  count = 0
  i = 1
  while (5**i <= n)
    count += n/(5**i)
    i+=1
  end
  return count
end


p trailing_zeroes(3)
# 3! = 6, 0
p trailing_zeroes(9000)
# 5! = 120, 0