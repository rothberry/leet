# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
# ! You have to rotate the image in-place,
# ! which means you have to modify the input 2D matrix directly.
# ! DO NOT allocate another 2D matrix and do the rotation.
require "pry"

def print_mat(matrix)
  matrix.each { |r| p r }
end

def rotate(matrix)
  # n x n matrix
  # n = matrix.length
  l = 0
  r = matrix.length - 1

  while l < r
    i = 0
    while i <= r - 1
      t = l
      b = r

      temp = matrix[t][l + i]
      # for n = 3
      # p "[2,0] => [0,0]"
      matrix[t][l + i] = matrix[b - i][l]
      # print_mat(matrix)

      # p "[2,2] => [2,0]"
      matrix[b - i][l] = matrix[b][r - i]
      # print_mat(matrix)

      # p "[0,2] => [2,2]"
      matrix[b][r - i] = matrix[t + i][r]
      # print_mat(matrix)

      # p "[0,0] => [0,2]"
      matrix[t + i][r] = temp

      print_mat(matrix)
      binding.pry

      i += 1
    end
    r -= 1
    l += 1
  end
  print_mat(matrix)

  # move counter clockwise

  return "done"
end

matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Output: [[7,4,1],[8,5,2],[9,6,3]]

matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
# Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

puts "\nTESTING\n"
p rotate(matrix1)
# p rotate(matrix2)
