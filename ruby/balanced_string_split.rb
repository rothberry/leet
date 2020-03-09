# @param {String} s
# @return {Integer}
# Balanced strings are those who have equal quantity of 'L' and 'R' characters.
# Given a balanced string s split it in the maximum amount of balanced strings.
# Return the maximum amount of splitted balanced strings.
require 'pry'

def balanced_string_split(s)
  output = 0
  ticker = 0
  s.chars.each do |x|
    case x
    when 'R'
      ticker+=1
    when 'L'
      ticker-=1
    end
    # p ticker
    if ticker == 0
      output+=1
    end
    # binding.pry
  end
  output
end

p balanced_string_split("RLRRLLRLRL")
# Output => 4
p balanced_string_split("RLLLLRRRLR")
# Output => 3
p balanced_string_split("LLLLRRRR")
# Output => 1