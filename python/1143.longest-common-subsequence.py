#
# @lc app=leetcode id=1143 lang=python3
#
# [1143] Longest Common Subsequence
#

# @lc code=start
# class Solution:
#     def longestCommonSubcsequence(self, text1: str, text2: str) -> int:


from ipdb import set_trace
from py_term_helpers import top_wrap


def longestCommonSubcsequence(text1, text2):

    # ?first
    # determine shorter v longer str
    # iterate over longer
    #   iterate over shorter
    #       check

    long, short = text1, text2
    if len(text1) < len(text2):
        long = text2
        short = text1

    count, i = 0, 0
    print(f'long {long}, short {short}')
    while i < len(short):
        j = 1
        while j < len(long):
            print(short[i], long[j])
            # cur_i, cur_j = short[i], long[j]
            if short[i] == long[j]:
                print("hit")
                count += 1
                break
            j += 1
        i += 1
    print(count)
    return


top_wrap('TESTING')
"""
text1 = "abcdef"
text2 = "ace"
# Explanation: The longest2 common subsequence is "ace" and its length is 3.
longestCommonSubcsequence(text1, text2)

text1 = "abc"
text2 = "abc"
longestCommonSubcsequence(text1, text2)
# Explanation: The longest common subsequence is "abc" and its length is 3.

text1 = "abc"
text2 = "def"
longestCommonSubcsequence(text1, text2)
# 0
"""

text1 = "ezupkr"
text2 = "ubmrapg"
longestCommonSubcsequence(text1, text2)
# 2?

# @lc code=end
