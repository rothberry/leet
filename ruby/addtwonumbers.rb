# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
require 'pry'
def add_two_numbers(l1, l2)
  l1_int = 0
  l2_int = 0
  i_1 = 1
  i_2 = 1
  # create int out of arrays
  for x in l1 do
    y = x * i_1
    i_1 *= 10
    l1_int += y
  end

  for x in l2 do
    y = x * i_2
    i_2 *= 10
    l2_int += y
  end
  # add new ints together
  sum = l1_int + l2_int
  res = sum.to_s.split("")
  length_of_res = res.length + 1
  result = []
  i = 1
  while i < length_of_res
    pushed = res[-i].to_i
    result.push(pushed)
    i += 1
  end

  result

end

l1 = [2,4,3]
l2 = [5,6,4]
# 342 + 465 = 708 => 807 => [8,0,7] 
#! Was a LinkedList Node not an array, thus is BS

p add_two_numbers(l1, l2)