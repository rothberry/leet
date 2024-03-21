""" 
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the ƒstep with index 1.

Return the minimum cost to reach the top of the floor.

Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999
 """

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print


def min_cost_climbing(cost):
    # dp
    # can go top down or bottom up
    # top down:
    #   add zero to the end of list
    #   [10, 15, 20] 0
    # iterate backwards
    #   start from the end and calc min cost
    #       => [20] -> 0 => 20
    #       => [15] -? +20 +0 => [15]
    #       => [10] -? +15 +20 => [25] -? +20 + 0 => [25]
    #   return min of new cost list
    cost.append(0)

    for i in range(len(cost) - 3, -1, -1):
        print(cost[i], i, cost[i + 1: i + 2])
        cost[i] += min(cost[i + 1], cost[i + 2])
        print(f"new {cost}")

    return min(cost[0], cost[1])


def min_cost_climbing_2(cost):

    n = len(cost)
    for i in range(2, n):
        print(cost[i], i, cost[i - 1: i - 2])
        cost[i] += min(cost[i - 1], cost[i - 2])
        print("new", cost)
    return min(cost[n - 1], cost[n - 2])


top_wrap("TESTING")

c1 = [10, 15, 20]
# kv_print(min_cost_climbing(c1))
kv_print(min_cost_climbing_2(c1))
# Explanation: You will start at index 1.
# - Pay 15 and climb two steps to reach the top.
# The total cost is 15.


c2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
# kv_print(min_cost_climbing(c2))
kv_print(min_cost_climbing_2(c2))
# will start at index 0.
# - Pay 1 and climb two steps to reach index 2.
# - Pay 1 and climb two steps to reach index 4.
# - Pay 1 and climb two steps to reach index 6.
# - Pay 1 and climb one step to reach index 7.
# - Pay 1 and climb two steps to reach index 9.
# - Pay 1 and climb one step to reach the top.
# The total cost is 6.

c3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# kv_print(min_cost_climbing(c3))
kv_print(min_cost_climbing_2(c3))
