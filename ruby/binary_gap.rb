# @param {Integer} n
# @return {Integer}

require 'pry'

def binary_gap(n)
    
end

p binary_gap(22)
# output: 2
# 22 in binary is 0b10110.
# In the binary representation of 22, there are three ones, 
# and two consecutive pairs of 1's.
# The first consecutive pair of 1's have distance 2.
# The second consecutive pair of 1's have distance 1.
# The answer is the largest of these two distances, which is 2.
