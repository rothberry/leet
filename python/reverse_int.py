""" 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^(31 - 1)], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


 """

from ipdb import set_trace
from py_term_helpers import top_wrap

MAX = 2 ** 31
MIN = - 2 ** 31


def reverse_int(num):
    if num == 0 or num not in range(MIN, MAX):
        return 0

    total = 0
    is_positive = num >= 0
    num = abs(num)

    print(f"total\tnum")
    print(f"{total}\t{num}")
    while num != 0:
        total = total * 10 + num % 10
        num = (num - num % 10) // 10
        print(f"{total}\t{num}")

    return total if is_positive else -total


top_wrap("REV INT")
# reverse_int(2 ** 40)
print(

    reverse_int(123),
    reverse_int(-123),
    reverse_int(120),
    reverse_int(-120),
)


# x = 123
# Output: 321

# Input: x = -123
# Output: -321

# Input: x = 120
# Output: 21
