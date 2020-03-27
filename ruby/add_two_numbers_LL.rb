require 'pry'
# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
      @val = val
      @next = nil
  end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

def add_two_numbers(l1, l2)
  # Solve as if array
  # convert arr 
  l1_int = l2_int = i = 0
  while i < l1.length
    l1_int += 10**i * l1[i]
    l2_int += 10**i * l2[i]
    i+=1
  end
  binding.pry

end

p add_two_numbers([2,4,3],[5,6,4])