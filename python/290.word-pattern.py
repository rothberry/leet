#
# @lc app=leetcode id=290 lang=python3
#
# [290] Word Pattern
#

# @lc code=start
# class Solution:
#     def wordPattern(self, pattern: str, s: str) -> bool:
from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def wordPattern(pattern, s):
    center_string_stars((pattern, s))
    # first
    # create dict for key of pattern and value of s
    # loop until the pattern breaks or loop ends
    if len(pattern) != len(s.split(" ")):
        return False

    words = dict()

    for i, word in enumerate(s.split(" ")):
        key = pattern[i]
        cur_word = words.get(key)
        if not cur_word:
            if word in words.values():
                return False
            words[key] = word
        else:
            set_trace()
            if cur_word != word:
                return False
    return True


top_wrap('TESTING')
# print(wordPattern("abba", "dog cat cat dog"))
print(wordPattern("abba", "dog dog dog dog"))
print(wordPattern("abba", "dog cat cat fish"))
print(wordPattern("aaaa", "dog cat cat fish"))
# @lc code=end
