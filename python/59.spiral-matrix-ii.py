#
# @lc app=leetcode id=59 lang=python3
#
# [59] Spiral Matrix II
#

# @lc code=start
from py_term_helpers import top_wrap, center_string_stars
from ipdb import set_trace


def generateMatrix(num: int):
    center_string_stars(num)

    """
        ex:
        n = 3 =>  [ [1->2->3]
                    [8  9   4]
                    [7<-6<-5]]
        create empty matrix of n x n 
        have direction matrix in a sprial
        r -> d -> l -> u --> r...
        directions = [[0,1], [1, 0], [0, -1], [-1, 0]]
    """

    directions = ((0, 1), (1, 0), (0, -1), (-1, 0))
    mat = []
    for _ in range(num):
        mat.append(num * [None])
    lp(mat)
    mat[0][0] = 1
    cur_dir_idx = 0
    prev_point = (0, 0)
    for i in range(2, num**2 + 1):
        next_point = add_two_points(prev_point, directions[cur_dir_idx])

        if change_directions(next_point, num, mat):
            # move cur_dir_idx += 1
            print("CHANGIN")
            try:
                cur_dir_idx += 1
            except IndexError:
                print("ROTATE")
                cur_dir_idx = 0
            next_point = add_two_points(prev_point, directions[cur_dir_idx])
        center_string_stars((i, next_point))
        set_trace()
        mat[next_point[0]][next_point[1]] = i
        prev_point = next_point
        lp(mat)


def change_directions(point, num, mat):
    # if next_point[i or j] hit -1 or num or if not None
    set_trace()
    return point[0] < 0 or point[0] >= num or point[1] < 0 or point[1] >= num or mat[point[0]][point[1]] is not None


def add_two_points(p1, p2):
    return (p1[0] + p2[0], p1[1] + p2[1])


def lp(mat):
    for li in mat:
        print(li)


top_wrap('TESTING')

# generateMatrix(1)
# generateMatrix(2)
generateMatrix(3)
# generateMatrix(20)

# @lc code=end
