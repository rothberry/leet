""" 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 


 """

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print


def checkInclusion(s1: str, s2: str) -> bool:
    # get smaller of two strs
    short, long = s1, s2
    if len(s1) > len(s2):
        short, long = s2, s1
    window = len(short)
    # sliding window of subsstring len(smaller)
    # set_trace()
    short = "".join(sorted(short))
    # kv_print(short)
    # kv_print(long)
    for i, x in enumerate(long):
        sub_str = "".join(sorted(long[i:i+window]))
        if sub_str == short:
            return True

    return False


def checkInclusionleet(s1: str, s2: str) -> bool:
    # s1 always into s2
    s1 = "".join(sorted(s1))
    for i, x in enumerate(s2):
        sub_str = "".join(sorted(s2[i:i+len(s1)]))
        if sub_str == s1:
            return True
    return False


top_wrap('TESTING')

s1 = "ab"
s2 = "eidbaooo"
# Output: true
# Explanation: s2 contains one permutation of s1 ("ba").
print(checkInclusion(s1, s2))

s2_2 = "eidboaoo"
print(checkInclusion(s1, s2_2))

print(checkInclusion("ab", "a"))

# Output: false
# checkInclusion(s1, s2_2)
