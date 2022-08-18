# @param {Integer[][]} points
# @param {Integer} k
# @return {Integer[][]}
# Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

# You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
require "pry"
def k_closest(points, k)

  points.sort_by do |point|
    # binding.pry
    Math.sqrt(point[0].abs() ** 2 + point[1].abs() **2)
  end.slice(0,k)

  # Can also heap sort with minHeap in python and kind of here..
  
end

puts "TESTING..."

points = [[1, 3], [-2, 2]]
k = 1
out = [[-2, 2]]
# Explanation:
# The distance between (1, 3) and the origin is sqrt(10).
# The distance between (-2, 2) and the origin is sqrt(8).
# Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
# We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

p points, k
puts "RETURN"
p k_closest(points, k)

points = [[3, 3], [5, -1], [-2, 4]]
k = 2
out = [[3, 3], [-2, 4]]
# Explanation: The answer [[-2,4],[3,3]] would also be accepted.
p points, k
puts "RETURN"
p k_closest(points, k)
