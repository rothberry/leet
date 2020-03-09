# @param {Integer} n
# @return {Integer}

require 'pry'

def binary_gap(n)
  bin = n.to_s(2)
  output = []
  ticker = 0
  bin.chars.each do |x|
    if x == '1'
      output << ticker
      ticker = 1
    else
      ticker +=1
    end
    p ticker

  end
  print n, "  ", bin, "  output: ", output, "  ", output.max
  puts ''
  output.max
end

p binary_gap(22)  == 2
# output: 2
p binary_gap(5)   == 2
p binary_gap(6)   == 1
p binary_gap(8)   == 0
# 22 in binary is 0b10110.
# In the binary representation of 22, there are three ones, 
# and two consecutive pairs of 1's.
# The first consecutive pair of 1's have distance 2.
# The second consecutive pair of 1's have distance 1.
# The answer is the largest of these two distances, which is 2.
