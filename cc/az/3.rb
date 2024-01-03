#!/bin/ruby

require 'json'
require 'stringio'



#
# Complete the 'routePairs' function below.
#
# The function is expected to return a 2D_INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER maxTravelDist
#  2. 2D_INTEGER_ARRAY forwardRouteList
#  3. 2D_INTEGER_ARRAY returnRouteList
#

def routePairs(maxTravelDist, forwardRouteList, returnRouteList)
  # Write your code here
  # logging for my visibility
  p maxTravelDist
  p forwardRouteList  # first int is an id, second is a traveldist required
  p returnRouteList   # first int is an id, second is a traveldist required
  
  # First
  # check all the pairs 
  current_optimal = 0
  output = []
  forwardRouteList.each do |forward|
      returnRouteList.each do |ret|
          cur_travel = forward[1] + ret[1]
          p "#{cur_travel} => #{current_optimal}"
          # conditions
          # cur_travel is less than curr_opt OR greater than the max
          #   continue
          # cur_travel greater than current_opt AND less than OR equal to the max
          #   set current_opt to cur_travel, and reset output to 
          # cur_travel is equal to opt
          #   push ids into output array
          if cur_travel > current_optimal && cur_travel <= maxTravelDist
              p "updating"
              current_optimal = cur_travel
              output = [[forward[0], ret[0]]]
          elsif cur_travel == current_optimal
              p "adding"
              output.push([forward[0], ret[0]])
          end
      end
  end
  
  p output
  return output
  # return a list of pairs of IDS (forward, return) that optimizes the given aircraft
end

=begin 


=end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')