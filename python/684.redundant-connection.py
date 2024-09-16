#
# @lc app=leetcode id=684 lang=python3
#
# [684] Redundant Connection
#

# @lc code=start
# class Solution:
#     def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:

from ipdb import set_trace
from py_term_helpers import top_wrap, center_string_stars, star_line


def findRedundantConnection(edges):
    center_string_stars(str(edges))
    # iterate over edges
    # for each ...
    n = len(edges)
    hash = {}
    shet = set()
    bad_nodes = []

    for edge in edges:
        # shet_len = len(shet)
        # print(f'{edge}/{shet}')
        print(f'{edge}/{hash}')
        set_trace()

        if hash.get(edge[0]) and hash.get(edge[1]):
            print("BADDD")
            bad_nodes.append(edge)

        for node in edge:
            if hash.get(node):
                hash[node] += 1
            else:
                hash[node] = 1

        star_line()
    print(hash, bad_nodes)

    return bad_nodes[0]


top_wrap('TESTING')

edges1 = [[1, 2], [1, 3], [2, 3]]
# Output: [2,3]
edges2 = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
# Output: [1,4]
edges3 = [[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]]

# findRedundantConnection(edges1)
findRedundantConnection(edges2)


# @lc code=end
