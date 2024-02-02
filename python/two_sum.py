from py_term_helpers import top_wrap, kv_print, center_string_stars
from ipdb import set_trace


def twoSum(nums, target):
    checked = dict()
    for i, x in enumerate(nums):
        try:
            return [checked[target - x], i]
        except KeyError:
            checked[x] = i
    kv_print(checked)
    return -1


top_wrap("Testing")

nums = [2, 7, 11, 15]

print(twoSum(nums, 9))
kv_print(twoSum(nums, 26))
print(twoSum(nums, 27))

set_trace()
center_string_stars("done", "-")
