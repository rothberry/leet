#
# @lc app=leetcode id=516 lang=python3
#
# [516] Longest Palindromic Subsequence
#

# @lc code=start
# class Solution:
#     def longestPalindromeSubseq(self, s: str) -> int:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def longestPalindromeSubseq(string):
    center_string_stars(string)
    # ? first
    # normal palindrome 2 pointer w/ option to move inward?
    le, ri = 0, len(string) - 1
    counter = 0

    while le < ri:
        left, right = string[le], string[ri]
        left_in, right_in = string[le + 1], string[ri - 1]

        print(left, left_in, right_in, right)
        print(string[le:ri + 1], counter)
        if left == right:
            print('outside')
            counter += 2
            # le += 1
            # ri -= 1
        elif left_in == right:
            print('left_in')
            counter += 2
            le += 1
        elif left == right_in:
            print('right_in')
            counter += 2
            ri -= 1
        le += 1
        ri -= 1

        # set_trace()
    print(f'counter {counter}')


top_wrap('TESTING')
longestPalindromeSubseq("bbbab")
longestPalindromeSubseq("aaahhffff")
longestPalindromeSubseq("abdcd")
longestPalindromeSubseq("cbbd")
longestPalindromeSubseq("a")


# @lc code=end
