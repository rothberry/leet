# @param {String} s
# @return {Integer}
# Given a string s which represents an expression, evaluate this expression and return its value.
# The integer division should truncate toward zero.
# You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
# Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
require "pry"

def ops
  %w(+ - / *)
end

def calculate(s)
  s = s.split(" ").join("")

  # right now assume 0 thru 9, no double digits
  binding.pry

  # arr = []
  # s.split("").each_with_index do |x, i|
  #   # if x is a number, then check if the next idx is also a num
  # end

end

puts "TESTING\n\n"
s1 = "3+2*2"
# Output: 7

s2 = " 3/2 "
# Output: 1

s3 = " 3+5 / 2 "
# Output: 15

p calculate(s1)
