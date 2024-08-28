""" You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.
"""

from py_term_helpers import top_wrap, kv_print
from ipdb import set_trace
import heapq
from collections import OrderedDict


def last_stone_weight(stones) -> int:

    # flip stones so it functions as a max heap
    stones = [-s for s in stones]
    heapq.heapify(stones)

    while len(stones) > 1:
        y = heapq.heappop(stones)
        x = heapq.heappop(stones)

        if y < x:
            heapq.heappush(stones, y - x)

        kv_print(stones)
    return abs(stones[0])


top_wrap("TESTING")

stones1 = [2, 7, 4, 1, 8, 1]
# max => 7 ? 8 => 7 gone and new max is 8 - 7 = 1
# [2,4,1,1,1]
# max => 2 ? 4 => 2 gone and new max is 4 - 2 = 2
# [2,1,1,1]
# max => 1 ? 2 => 1 gone and new max is 2 - 1 = 1
# [1,1,1]
# max => 1 ? 1 => both gone
# [1]
# => 1
kv_print(last_stone_weight(stones1))

stones2 = [1]
stones3 = [1, 2, 3, 4, 5, 6]
stones4 = [1]
stones5 = [1]
