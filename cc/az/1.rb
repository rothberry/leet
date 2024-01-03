#!/bin/ruby

require "json"
require "stringio"

#
# Complete the 'deliveryPlan' function below.
#
# The function is expected to return a 2D_INTEGER_ARRAY.
# The function accepts following parameters:
#  1. 2D_INTEGER_ARRAY allLocations
#  2. INTEGER numDeliveries
#

def deliveryPlan(allLocations, numDeliveries)
  # Write your code here
  # truck starts at 0,0
  # find numDel that are closest, moving the origin to the last picked location
  # p allLocations
  # Only would need a current_origin pointer if the origin moved each time
  # current_origin = [0,0]

  # Going to use an array with [x,y,dist] and sort for the heap because there is not a builtin heap datastructure in ruby
  location_heap = []
  allLocations.each do |coord|
    x, y = coord[0], coord[1]
    dist = Math.sqrt(((x) ** 2) + (y) ** 2)
    location_heap.push([x, y, dist])
  end
  # p "before sort"
  # p location_heap

  # Sorts our heap into a maxHeap
  location_heap.sort_by! { |l| l[2] }
  # p "after sort"
  # p location_heap
  return location_heap.slice(0, numDeliveries).map { |c| c.slice(0, 2) }
end


=begin 
For this problem, I started of by drawing a graph of x and y coordinates knowing that our goal is to find the numDeliveries amount of points closest to the origin [0,0]. 
From here, I wanted to create a minimum heap that would keep track of the coordinates as well as their respective distance from the origin.

There is no built-in min or max heap data structure for Ruby, so I used an array that, for each point, would hold onto the [x, y, dist_from_origin[ as it's individual elements

After the heap was created, I ran it through Ruby's .sort_by method that would sort by the distance or the second index of each point element

Lastly, for the return, I just needed to slice up to numDeliveries from that array and remove the distance component

The run time complexity for this solution would be dependent on the .sort_by ruby method which natively uses the quicksort method which is O(n log(n)). ​​​​​​​

To optimize this solution, utilizing a minimum heap while creating the heap would reduce the time complexity down to O(n) because we would simply be iterating over the array once, then performing the slice on the minimum heap.

=end

fptr = File.open(ENV["OUTPUT_PATH"], "w")

allLocations_rows = gets.strip.to_i
allLocations_columns = gets.strip.to_i

allLocations = Array.new(allLocations_rows)

allLocations_rows.times do |i|
  allLocations[i] = gets.rstrip.split.map(&:to_i)
end

numDeliveries = gets.strip.to_i

result = deliveryPlan allLocations, numDeliveries

fptr.write result.map { |x| x.join " " }.join "\n"
fptr.write "\n"

fptr.close()
