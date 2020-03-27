# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
require 'pry'
def add_two_numbers(l1, l2)
  l1_int = l2_int = i = 0

  # create int out of arrays
  while i < l1.length
    l1_int += 10**i * l1[i]
    l2_int += 10**i * l2[i]
    i+=1
  end

  # add new ints together
  sum = l1_int + l2_int
  res = sum.to_s.split("")
  length_of_res = res.length + 1
  result = []
  j = 1
  while j < length_of_res
    pushed = res[-j].to_i
    result.push(pushed)
    j += 1
  end

  result

end

l1 = [2,4,3]
l2 = [5,6,4]
# 342 + 465 = 708 => 807 => [8,0,7] 
#! Was a LinkedList Node not an array, thus is BS

p add_two_numbers(l1, l2)