#
# @lc app=leetcode id=787 lang=python3
#
# [787] Cheapest Flights Within K Stops
#

# @lc code=start
# class Solution:
#     def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars


def findCheapestPrice(n, flights, src, dst, k):
    center_string_stars(flights)
    center_string_stars((src, dst, k))

    # set_trace()
    # first
    # need to get from src to dst in k stops
    #
    # convert flights to hash for better search?
    # {src: (dst, price)}
    dict_flights = dict()
    for fl in flights:
        if dict_flights.get(fl[0]):
            dict_flights[fl[0]].append(fl[1:])
        else:
            dict_flights[fl[0]] = [fl[1:]]

    total_price = 0

    while k > 0:

        connections = dict_flights[src]

        if k != 0:
            # if k != 0, need to go go forward, but NOT dst
            # move to cheapest that is NOT dst
            cheapest = [1000, 100000]
            for co in connections:
                if co[1] < cheapest[1]:
                    cheapest = co
            set_trace()
            src = cheapest[0]
            total_price += cheapest[1]

        else:
            # if k == 0, need to go to dst
            # move to dst no mater the cheapest
            # final_price = [for co in connections]
            # price += final_price
            pass
        set_trace()
        k -= 1

    return


top_wrap('TESTING')

n = 3
flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
src = 0
dst = 2
k = 1
# Output: 200
findCheapestPrice(n, flights, src, dst, k)
# findCheapestPrice(n, flights, src, dst, k=0)

# @lc code=end
