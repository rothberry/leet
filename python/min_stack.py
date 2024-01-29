""" 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.


 """
from ipdb import set_trace
from py_term_helpers import TermHelper
# import py_term_helpers.TermHelper.top_wrap

TermHelper.top_wrap('TESTING')


class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]


# ["MinStack","push","push","push","getMin","pop","top","getMin"]
ops = [[], [-2], [0], [-3], [], [], [], []]

# [null,null,null,null,-3,null,0,-2]

kv_print = TermHelper.kv_print
# Explanation
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-4)
minStack.push(-3)
minStack.push(-4)
kv_print(minStack.stack)
kv_print(minStack.min_stack)

kv_print(minStack.getMin())
minStack.pop()
kv_print(minStack.top())
kv_print(minStack.getMin())
