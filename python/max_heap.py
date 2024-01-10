import heapq
from ipdb import set_trace
from py_term_helpers import TermHelper
import random

TermHelper.top_wrap("Test")

li = [5, 4, 2, 5, 6, 7]
he = heapq.heapify(li)

hp = []
for i in range(10):
    x = random.randint(0, 10)
    heapq.heappush(hp, x)
    TermHelper.kv_print(x)
    TermHelper.kv_print(hp)

heapq.heapify(hp)
print(hp)
set_trace()
