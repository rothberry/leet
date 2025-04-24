#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#

# @lc code=start
# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

from ipdb import set_trace
from py_term_helpers import *


def groupAnagrams(strs):
    center_string_stars(strs)
    # iterate over strs
    # output = {0: {e: 1, a: 1, t: 1}, }

    output = []

    for str in strs:
        letter_count = {}
        for letter in str:
            if letter_count.get(letter):
                letter_count[letter] += 1
            else:
                letter_count[letter] = 1
        print(letter_count)
        found = False
        for out in output:
            if letter_count == out[0]:
                out[1].append(str)
                found = True

        if not found:
            output.append((letter_count, [str]))

        # print(output)
        # set_trace()

        # output.append((letter_count, str))

    print(output)
    result = [o[1] for o in output]
    print(result)
    set_trace()


top_wrap('TESTING')
strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
# output: [["bat"],["nat","tan"],["ate","eat","tea"]]
strs2 = [""]
strs3 = ["a"]

groupAnagrams(strs1)


# @lc code=end
