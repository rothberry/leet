# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
=begin 
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 

This matrix has the following properties:
  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.
=end
require 'pry'

def search_matrix(matrix, target)
  # loop through rows, check if target is greater or less than left most value
  rows = matrix.length
  cols = matrix[0].length

  # first to a binary search on the row ranges to find the best starting spot
  top = 0
  bot = rows - 1
  cur_row = 0


  while top <= bot
    cur_row = ((top + bot) / 2)
    
    # p "Top: #{top} Cur: #{cur_row} Bot: #{bot}"
    
    # if the target is greater than the max of cur_row
    # then move cur_row to  bot
    # if the target is less then the min of cur_row
    # then move cur_row to top
    # else we run binary search of th current row
    
    if target > matrix[cur_row][-1]
      # puts "greater"
      top = cur_row + 1
    elsif target < matrix[cur_row][0]
      # puts "lesser"
      bot = cur_row - 1
    else
      break
    end
  end
  
  # p "Top: #{top} Cur: #{cur_row} Bot: #{bot}"
  return false if top > bot
  left = 0
  right = cols - 1
  target_row = matrix[cur_row]
  midIdx = 0
  output = false
  p "targetRow: #{target_row}"
  
  
  # while left <= right 
  #   midIdx = ((left + right) / 2)
  #   return true if target_row[midIdx] == target
    
  #   p "left: #{left} mid: #{midIdx} right: #{right}"
  #   if target > target_row[midIdx]
  #     p "greater than"
  #     left = midIdx + 1
  #   else
  #     p "lesser than"
  #     left = midIdx - 1
  #   end
  # end

  return false

end

puts "1   3   5   7"
puts "10  11  16  20"
puts "23  30  34  60"
matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target = 3
# Output: true

puts "Search: #{target}"
p search_matrix(matrix, target)

# matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target = 33
# Output: false
puts "Search: #{target}"
p search_matrix(matrix, target)

# target = 65
# # Output: false
# puts "Search: #{target}"
# p search_matrix(matrix, target)

binding.pry