#
# @lc app=leetcode id=1882 lang=python3
#
# [1882] Process Tasks Using Servers
#

# @lc code=start
# class Solution:
#     def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
from ipdb import set_trace
from py_term_helpers import *


def assignTasks(servers, tasks):
    center_string_stars((servers, tasks))
    # servers[i] is the weight of that server
    # tasks[j] is the time needed
    # tasks assigned to the smallest server available
    i, n, = 0, len(servers)
    ans = [None] * len(tasks)
    
    for j, task in enumerate(tasks):
        print({"j": j, "task": task})
        # find smallest available server
        set_trace()

    return ans


top_wrap('TESTING')
s1, t1 = [3, 3, 2], [1, 2, 3, 2, 1, 2]
s2, t2 = [3, 3, 2], [1, 2, 3, 2, 1, 2]
s3, t3 = [3, 3, 2], [1, 2, 3, 2, 1, 2]
assignTasks(s1, t1)
# @lc code=end
