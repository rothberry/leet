require 'pry'
def length_of_longest_string(s)
  i = 0
  start_idx = 0
  end_idx = 1
  res_count = 0 
  str_arr = s.split("")

  while i < str_arr.length 
    res_arr = str_arr.slice(start_idx, end_idx)
    p res_arr
    doesInclude = res_arr.include?(str_arr[end_idx])
    if doesInclude
      start_idx+=1
      if res_count < res_arr.length
        res_count = res_arr.length
      end
      binding.pry
    else
      end_idx+=1
    end
    i+=1
  end
  res_count
end

strOne = 'abcabcbb'
strTwo = 'bbbbb'
strThree = 'pwwkew'
strFour = 'dvdf'

p length_of_longest_string(strOne)
# p length_of_longest_string(strTwo)
# p length_of_longest_string(strThree)
# p length_of_longest_string(strFour)
