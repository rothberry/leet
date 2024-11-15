#
# @lc app=leetcode id=402 lang=python3
#
# [402] Remove K Digits
#

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars
from heapq import heapify

# @lc code=start
# class Solution:
# def removeKdigits(self, num: str, k: int) -> str:


def removeKdigits(num: str, k: int) -> str:
    center_string_stars((num, k))
    # brute?
    # get the largest digits and remove the first k of them, then iteratedown

    i = 0
    cur_min = int(num)
    cur_min_idx = []
    while i < k:
        # find the smallet number for each removal
        j = 0
        print("j, cur_val, cur_min")
        while j < len(num):
            li = list(num)
            li.pop(j)
            try: 
                cur_val = int("".join(li))
            except: 
                pass    
            if cur_val < cur_min:
                center_string_stars("LESS")
                cur_min = cur_val
                cur_min_idx.append(j)
            print(j, cur_val, cur_min)
            j += 1
        set_trace()
        num = "".join(str(cur_min))
        i += 1
    print(cur_min, cur_min_idx)



top_wrap('TESTING')
# removeKdigits('10', 2)
# removeKdigits('1432219', 3)
removeKdigits('10001', 4)

# @lc code=end
