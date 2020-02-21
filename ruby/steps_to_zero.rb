# @param {Integer} num
# @return {Integer}
require 'pry'
# ? Given a non-negative integer num, 
# ? return the number of steps to reduce it to zero. 
# ? If the current number is even, 
# ? you have to divide it by 2, 
# ? otherwise, you have to subtract 1 from it.

def number_of_steps (num)
    # ? If even, divide by 2
    # ? If odd, subtract 1 then divide by 2
    counter = 0
    while (num != 0)
      if num % 2 == 0
        num = num / 2 
      else
        num = (num-1) / 2
        counter+=1
      end
      break if num == 0
      counter+=1
    end
    counter
end

p number_of_steps(14)
p number_of_steps(8)
p number_of_steps(123)