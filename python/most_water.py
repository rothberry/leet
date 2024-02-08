""" 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 """

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print


def max_area(heights):
    # Two pointer
    # start with current max and right/left pointers
    # loop until the pointers cross
    # for each
    #   calc the area by:
    #       width = right - left
    #       height = min(height[right], height[left])
    #
    cur_max, l, r = 0, 0, len(heights) - 1
    while l < r:
        width = r - l
        height = min(heights[l], heights[r])
        cur_area = width * height
        cur_max = max(cur_area, cur_max)

        if heights[r] >= heights[l]:
            l += 1
        else:
            r -= 1
        kv_print((width, height, cur_area, cur_max))
    print(cur_max)
    return cur_max


top_wrap("MOST WATER")

height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
# Output: 49

height2 = [1, 1]
# Output: 1

max_area(height1)
max_area(height2)
