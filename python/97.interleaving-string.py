""" 
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
substrings
 respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

 """

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def isInterleave(s1: str, s2: str, s3: str) -> bool:

    center_string_stars(str((s1, s2, s3)))

    # first
    # iteration len(s3) times
    # for each
    #   detrermine if the current chr at s1 or s2 needs to be added to the output
    #   if s1, increment that counter
    #   if s2, increment that counter
    #   if none? then break and return false
    if len(s1) + len(s2) != len(s3):
        return False

    i, j, k = 0, 0, 0

    while k < len(s3):
        # set_trace()
        cur_chr = s3[k]
        try:
            print(f'cur:"{cur_chr}" =? s1:"{s1[i]}" || s2:"{s2[j]}"')
            if s1[i] == cur_chr:
                i += 1
                print(f'in s1, "{s1[i:]}"')
            elif s2[j] == cur_chr:
                j += 1
                print(f'in s2, "{s2[j:]}"')
            else:
                print("nahdah")
                return False
        except IndexError:
            print('out range')
        k += 1

    print("YAH")
    return True


top_wrap('TESTING')

# isInterleave("aabcc", "dbbca", "aadbbcbcac")
# true?
# isInterleave("aabcc", "dbbca", "aadbbbaccc")
# False?
isInterleave('a', '', 'c')

