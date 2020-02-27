# @param {String} s
# @param {String} t
# @return {Boolean}
# * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
# ? Given a string s and a string t, check if s is subsequence of t.
require 'pry'

def is_subsequence(s, t)
  return true if s.empty?
  i = k = 0
  while i < s.length
    # print s[i], t[k]
    # puts ''

    if s[i] == t[k]
      i+=1
    elsif t[k] == nil
      return false
    end
    k+=1
    # binding.pry
  end
  # puts ''
  return true
end




# p is_subsequence('abc', 'ahbgdc')
# # Return true.
# p is_subsequence('axc', 'ahbgdc')
# # Return false.

# p is_subsequence( 
#   "pppsppuppppbsppppppppppppppppppppepppppppppppqpupppepppppppppppppppnpppppppcppppppppppppeppppppppppp", 
#   "gggggsggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
# )
