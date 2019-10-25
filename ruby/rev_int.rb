# Given a 32-bit signed integer, reverse digits of an integer.
require 'pry'
def reverse(x)
  if x > (2**31 - 1) || x < -2**31 
    res = 0
  else
    i = 10
    counter = 0
    arr = []
    xx = x.abs
    test = xx
    prev_test = 0
    # x % 10 = 1st digit
    # x % 10**2  - 1st digit = 2nd digit
    # x % 10**3  - 2nd digit = 3rd digit
    # x % 10**n  - nth-1 digit = nth digit
    while test != prev_test || counter < 4
      test = xx % i**(counter + 1)
      prev_test = xx % i ** (counter)
      digit = (test - prev_test) / (i**(counter))
      arr.push(digit)
      counter+=1
      # binding.pry
    end
    p arr
    res = arr.join.to_i / 10
  end
  if x != x.abs
    res = -res
  else
    res
  end
end

x1 = 123
x2 = -123
x3 = 120
x4 = 2**32

# p reverse(x1)     #* 321
# p reverse(x2)   #* -321
p reverse(x3)   #* 21
# p reverse(x4)   #* 0