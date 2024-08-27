""" 
  In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

  Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

  Given the integer array position and the integer m. Return the required force.
"""
from ipdb import set_trace
from py_term_helpers import top_wrap


def maxDistance(position, m):
    """ first brute
      - sort position list
      - place 2 balls first and last
      - place remaining balls in len(position) / m
    """    
    set_trace()
    # This was the wrong problem 😂
    return


# position_1 = [1, 2, 3, 4, 7]
position_1 = [7, 4, 3, 2, 1]
m_1 = 3
# Output: 3
# Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs[3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.


position_2 = [5, 4, 3, 2, 1, 1000000000]
m_2 = 2
# Output: 999999999
# Explanation: We can use baskets 1 and 1000000000.


top_wrap("BALLS")
# maxDistance(position_1, m_1)
maxDistance(position_2, 3)

set_trace()
