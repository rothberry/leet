#
# @lc app=leetcode id=853 lang=python3
#
# [853] Car Fleet
#

# @lc code=start
# class Solution:
#     def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def carFleet(target, position, speed):
    center_string_stars(f'{target} / {position} / {speed}')

    # ? first
    # create output/fleet list
    # iterate len(position or speed)
    # for each
    #   check what the sum of position/speed is

    fleets = set()

    for i in range(len(position)):
        pos, sp = position[i], speed[i]
        meetup = pos + sp
        fleets.add(meetup)
        print(fleets)
        set_trace()
    print(len(fleets))
    return


top_wrap('TESTING')
# t1 = 12
# p1 = [10, 8, 0, 5, 3]
# s1 = [2, 4, 1, 1, 3]
# carFleet(t1, p1, s1)

t2 = 100
p2 = [0, 2, 4]
s2 = [4, 2, 1]
carFleet(t2, p2, s2)


# @lc code=end
