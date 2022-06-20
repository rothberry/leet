#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#
require "pry"

def birthdayCakeCandles(candles)
  # Write your code here
  counter = 0
  current_max = 0
  candles.each do |c|
    # if c is greater than the current_max, then reset the counter
    if c > current_max
      p 'reset'
      current_max = c
      counter = 1
    # if c is the current_max, the increase the counter by 1
    elsif c == current_max
      p 'inc'
      counter += 1
    end
    # else continue
  end
  return counter
  # max = candles.max
  # return candles.filter{|c| c == max}.length

end

puts "TESTING"
candles = [4,4,1,3]
ans = 2
out = birthdayCakeCandles(candles)
puts "1"
p candles
p "#{out} #{ans}"

candles = [1,2,3,4,5,6,7,8,9,10]
ans = 1
out = birthdayCakeCandles(candles)
puts "2"
p candles
p "#{out} #{ans}"
