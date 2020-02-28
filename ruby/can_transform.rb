# @param {String} start
# @param {String} end
# @return {Boolean}
# ? In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", 
# ? a move consists of either replacing one occurrence of "XL" with "LX", or 
# ? replacing one occurrence of "RX" with "XR". 
# ? Given the starting string start and the ending string end, 
# ? return True if and only if there exists a sequence of moves to transform one string to the other.
# len(start) == len(end)
require 'pry'
L = 'L'
R = 'R'
X = 'X'
# XL => LX
# XR => RX

def can_transform(s, e)
  i = j= 0
  sArr = s.chars
  eArr = e.chars
  
  while (i < s.length && j < s.length)
    while s[i] == "X"
      i+=1
    end
    while e[j] == "X"
      j+=1
    end
    if (
      (s[i] != e[j]) ||
      (s[i] == "R" && i > j) ||
      (s[i] == "L" && i < j)
    )
      return false
    end
    # binding.pry
    i+=1
    j+=1
  end
  return true

  # while i < s.length - 1
  #   start_slice = sArr.slice(i, 2)
  #   end_slice =   eArr.slice(i, 2)
  #   # binding.pry
  #   print 's: ', start_slice, '     e: ', end_slice 
  #   puts ''
  #   if ( end_slice == ["X", "R"] )
  #     if (start_slice == end_slice.reverse)
  #       swap_and_replace(start_slice, sArr, i)
  #     end
  #   elsif ( end_slice == ["X", "L"] )
  #     if (start_slice == end_slice.reverse)
  #       swap_and_replace(start_slice, sArr, i)
  #     end
  #   elsif ( end_slice == ["R", "X"] )
  #     if (start_slice == end_slice.reverse)
  #       swap_and_replace(start_slice, sArr, i)
  #     end
  #   elsif ( end_slice == ["L", "X"] )
  #     if (start_slice == end_slice.reverse)
  #       swap_and_replace(start_slice, sArr, i)
  #     end  
  #   end
  #   i+=1
  # end
  # p 'end'
  # p eArr
  # p 'start'
  # p s.chars
  # p sArr
  # sArr == eArr
end

# def swap_and_replace(arr, tar, cur)
#   temp = arr[0]
#   arr[0] = arr[1]
#   arr[1] = temp
#   tar[cur] = arr[0]
#   tar[cur+1] = arr[1]
#   tar
# end

# p can_transform("RXXLRXRXL", "XRLXXRRLX")
p can_transform("XXXXXLXXXX", "LXXXXXXXXX")