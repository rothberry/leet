""" 
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
 """

from os import system


class Solution():
    def __init__(self, grid):
        self.grid = grid
        self.rows, self.cols = len(grid), len(grid[0])
        self.visited = set()

    def maxAreaOfIsland(self):
        islands = dict()
        area = 0
        i, j = 0, 0
        # iterate through matrix
        # one we find a 1, start searching for adjacent 1's
        # create dict for all found land

        for i in range(self.rows):
            for j in range(self.cols):
                val = self.grid[i][j]
                if val == 1 and (i,j) not in self.visited:
                    print(f'i:{i}, j:{j}, val:{val}')
                    # seen.add(f'{i},{j}')
                    # dct = {"area": 1, "idx": [i, j]}
                    # breakpoint()
                    # self.check_adj([i, j])
                    current_area = self.dfs(i, j)
                    area = max(area, current_area)
                    islands[f'{i},{j}'] = current_area
        self.print_grid()
        print(area, islands)
        return area

    def dfs(self, r, c):
        # exit recurcsive if
        #   r or c is negative
        #   r or c is the length of rows or cols
        #   current node is a 0 (not an island)
        #   we've seen this node already
        if (r < 0 or r == self.rows or c < 0 or c == self.cols or self.grid[r][c] == 0 or (r, c) in self.visited):
            print('...break dfs...')
            return 0

        self.visited.add((r, c))
        print(self.visited)

        return (1 + self.dfs(r + 1, c)
                + self.dfs(r - 1, c)
                + self.dfs(r, c + 1)
                + self.dfs(r, c - 1))

    def check_adj(self, idx):
        #             north     west    south   east
        directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]
        lst = []
        for x in directions:
            lst.append(self.add_idx(idx, x))

        # nor_coord = grid_coord(grid, nor) if -1 not in nor else None
        for y in lst:
            if -1 not in y:
                val = self.grid_coord(y)
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

    @staticmethod
    def add_idx(i1, i2):
        return [i1[0] + i2[0], i1[1] + i2[1]]

    def grid_coord(self, idx):
        return self.grid[idx[0]][idx[1]]
    
    def print_grid(self):
        for row in self.grid:
            print(row)


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
print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
print("\nOUTPUT\n")

first_grid = Solution(g1)
first_grid.maxAreaOfIsland()
print("----------------------------------")
