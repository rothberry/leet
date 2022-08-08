# @param {String} s ('(', ')', '{', '}', '[', ']')
# @return {Boolean}
require 'pry'

def is_valid(s)
  # split string into array 
  # create a stack (in our case an array that we will only be looking at the last value)
  # loop over array
  # if the current value is a opening, then add to stack
  # if closing
    # check if top of stack is the matching parentheses
    # if so, remove the top of the stack
    # if not, break and return false
  # if the stack is empty at the end, return true


  stack = []
  s.split("").each do |x|
    case x
    when '(', '{', '['
      stack << x
    when ')'
      return false if (stack.pop() != '(')
    when '}'
      return false if (stack.pop() != '{')
    when ']'
      return false if (stack.pop() != '[')
    end
    # p stack
  end
  return stack.empty?
end


def is_valid2(s)
  stack = []
  s.split("").each do |x|
    case x
    when '('
      stack << x
    when ')'
      return 1 if (stack.pop() != '(')
    end
    # p stack
  end
  if (stack.empty?)
    return 0
  else
    return 1
  end
end

p is_valid2('()')        # * == true
p is_valid2(')(')        # * == false
p is_valid2('((()((()')  # * == false
# p is_valid('()[]{}')    # * == true
# p is_valid('([)]')      # * == false
# p is_valid('(]')        # * == false
# p is_valid('')          # * == true