""" 
2. Question 2
Given an array of integers, the goal is to make all the elements in the array have equal values by applying some number of operations.

The rules of the operations are:
- To apply an operation, one needs to choose a prefix of the array and an integer x (x can be negative).
- In this operation, add xto each element inside this prefix.
- The cost of this operation is /x/ (Absolute value of x).

For example, if the array is [1, 4, 2, 1] and the prefix of length 2 and x = -3 are chosen, the array would now become [-2, 1, 2, 1] and the cost of this operation would be /x/ = 1-31 = 3.
The total cost is the sum of costs of each operation applied. Find the minimum total cost of making all the elements in the array have equal value.

Note: It is guaranteed that there always exists a series of operations by which all the elements in any array can be equal. These operations can be applied any number of times.
Example

Consider n=4 and arr = [1, 2, 1, 5). The array can be made equal using the following three operations:
Choose the prefix of length 2 and x = -1. Hence the array now becomes [0, 1, 1, 5). The cost of this operation is /x/ = 1-1=1 Choose the prefix of length 3 and x = 4. Hence the array now becomes [4, 5, 5. 51. The cost of this operation is /x/ = 14/ = 4 Choose the prefix of length 1 and x = 1, Hence the array now becomes [5, 5, 5. 5). The cost of this operation is /x/=/1/=1
Thus, the total cost = 1+4+1=6, which is the minimum possible.
"""
from py_term_helpers import top_wrap


def find_min_cost(arr) -> int:
    print(arr)
    cost = 0

    while len(arr) > 1:
        # find diff between first 2
        first = arr.pop(0)
        diff = arr[0] - first
        # print(abs(diff))
        cost += abs(diff)

    return cost


top_wrap("Q2")

arr1 = [1, 2, 3, 1, 2] # 5
arr2 = [1, 2, 1, 5] # 6
arr3 = [1, 4, 2, 1] 
