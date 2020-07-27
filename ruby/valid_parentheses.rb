# @param {String} s ('(', ')', '{', '}', '[', ']')
# @return {Boolean}
require 'pry'

def is_valid(s)
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