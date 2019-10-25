# @param {String} s
# @return {Integer}
# within 1-3999
require 'pry'
def int_to_roman(num)
    countdown = num.to_s.length
    result = []
    while countdown > 0
      divisible = 10 ** ( countdown - 1 )
      testNum = num % 10 ** countdown - num % divisible
      testTimes = testNum / divisible
      binding.pry
      p testNum
      case testNum
      when 1000, 2000, 3000
        testTimes.times { |i| result.push("M")}
      when 900
        result.push("CM")
        countdown-=1
      when 500
        result.push("D")
      when 400
        result.push("DM")
        countdown-=1
      when 100, 200, 300
        testTimes.times { |i| result.push("C")}
      when 90
        result.push("XC")
        countdown-=1
      when 50
        result.push("L")
      when 40
        result.push("XL")
        countdown-=1
      when 10, 20, 30
        testTimes.times { |i| result.push("X")}
      when 9
        result.push("IX")
        countdown-=1
      when 4
        result.push("IV")
        countdown-=1
      when 5
        result.push("V")
      when 1, 2, 3
        testTimes.times { |i| result.push("I")}
      end
      countdown-=1
    end
    result.join
end

one = 3
two = 4
three = 9
four = 58
five = 1994
six = 78

# p 'one'
# p int_to_roman(one) # * III
# p 'two'
# p int_to_roman(two) # * IV
# p int_to_roman(three) # * IX
# p 'four'
# p int_to_roman(four) # * LVIII
# p 'five'
# p int_to_roman(five) # * MCMXCIV
p 'six'
p int_to_roman(six) # * LXXVIII
