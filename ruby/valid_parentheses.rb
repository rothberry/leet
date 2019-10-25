# @param {String} s
# @return {Boolean}
require 'pry'
CHECK_PAR = ['(', ')', '{', '}', '[', ']']


def is_valid(s)
  # valid if open branches must be closed by the same type of brackets
  # valid if open branches must be closed in the correct order
  # ? if s.length is odd, then skip and return 'false'
  
  check1 = true
  check2 = true
  check3 = true
  s1 = s.split("")
  
  s1.each_with_index do |x, i|    
    binding.pry
    if s1[i] == '('
      test_i = i+1
      while s1[test_i]
        s1[test_i] == ')'

      end
      if 
      end

    end
    # ? if s1[i] == '(', return 'true' if 
    # ? s1[i+1] OR s1[i+3] == ')'
    
  end

  final_check = ((check1 == check2) == check3 )
end

x1 = '()'
x2 = '()[]{}'
x3 = '(]'
x4 = '([}]'
x5 = '{[]}'

p is_valid(x1)
# p is_valid(x2)
# p is_valid(x3)
# p is_valid(x4)
# p is_valid(x5)
