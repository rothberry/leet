def reverse_string(str)
  arr = []
  i = str.length
  while i >= 0
    arr << str[i]
    i-=1
  end
  return arr.join("")
end


p reverse_string("abcd")
p reverse_string("a")