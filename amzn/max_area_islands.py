""" 
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
 """

from os import system


def maxAreaOfIsland(grid):
    islands = dict()
    seen = set()
    m, n = len(grid), len(grid[0])
    i, j = 0, 0
    print(m, n)
    # iterate through matrix
    # one we find a 1, start searching for adjacent 1's
    # create dict for all found land

    for i in range(m):
        for j in range(n):
            val = grid[i][j]
            if val == 1:
                print(f'i:{i}, j:{j}, val:{val}')
                # seen.add(f'{i},{j}')
                # dct = {"area": 1, "idx": [i, j]}
                # breakpoint()
                check_adj(grid, [i, j])
                islands[f'{i},{j}'] = 1


def check_adj(grid, idx):
    #             north     west    south   east
    directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    lst = []
    for x in directions:
        lst.append(add_idx(idx, x))

    # nor_coord = grid_coord(grid, nor) if -1 not in nor else None
    for y in lst:
        if -1 not in y:
            val = grid_coord(grid, y)
            print(y, val)
            if val == 1:
                # add to seen?
                # and keep extending every direction 
                  # 0 0 1
                  # 0 0 1 1
                print('idjk')

        else:
            print('nah')

    # nor_coord = grid_coord(grid, nor) if -1 not in nor else None
    breakpoint()


def add_idx(i1, i2):
    return [i1[0] + i2[0], i1[1] + i2[1]]


def grid_coord(grid, idx):
    return grid[idx[0]][idx[1]]


g1 = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]
# Output: 6
# Explanation: The answer is not 11, because the island must be connected 4-directionally.

g2 = [[0, 0, 0, 0, 0, 0, 0, 0]]
# Output: 0

system("clear")
print("\nOUTPUT\n")

maxAreaOfIsland(g1)
