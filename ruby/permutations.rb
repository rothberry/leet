# @param {Integer[]} nums
# @return {Integer[][]}
require "pry"

def permute(nums)
  output = Array.new(factorial(nums.length))#.fill([])
  
  output.map do |x|
    # create the num perm here
    nums  
  end

end

def factorial(n)
  if n == 1
    return 1
  end
  total = n
  while n > 1
    total = total * (n - 1)
    n -= 1
  end
  total
end

def create_nums(n)
  i = 0
  output = []
  while i <= n
    output << i
    i += 1
  end
  return output
end

puts "TESTING"
p permute(create_nums(2))
binding.pry
