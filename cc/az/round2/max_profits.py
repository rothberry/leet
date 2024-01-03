#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'countMaximumProfitableGroups' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts INTEGER_ARRAY stockPrice as parameter.
#

# def countMaximumProfitableGroupsKadane(stockPrice):
#     print(f'stockPrice {stockPrice}')
#     # could use kadanes algo for getting the max subarray at each element and check if the that max is equal to the first/last of that subarray
    
    
def countMaximumProfitableGroups(stockPrice):
    # Write your code here
    # print(f'stockPrice {stockPrice}')
    print(f'length {len(stockPrice)}')
    # will need to get the subarrays such that each subarray is profitable
    # need to check if the first or last month is greater than the max
    # which means each single subarray is true and every 2 element sub array is true
    # 3/1/3/5 =>    4
    # 31/13/35 =>   3
    #       f l m 
    # (313) 3 3 3 => true +1
    # (135) 1 5 5 => true +1
    # (3135)3 5 5 => true +1
    
    profits = len(stockPrice) + len(stockPrice) - 1
    
    # loop and check subarrays
    start_idx = 0
    cur_len = 3 # start with length of subarry at 3 because 1 and 2 are accounted for in profits
    
    while (start_idx + cur_len) <= len(stockPrice):
        slice_stocks = stockPrice[start_idx:start_idx + cur_len]
        # print(slice_stocks)
        first, last, cur_max = slice_stocks[0], slice_stocks[-1], max(slice_stocks)
        # print(f'{first} => {last} => {cur_max}')
        if first == cur_max or last == cur_max:
            profits += 1
        
        start_idx += 1
        if start_idx + cur_len > len(stockPrice):
            start_idx = 0
            cur_len += 1
    
    # print(profits)
    # works until the length of stockPrices reaches 5000 in test 6
    return profits
    
    
    
    
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    stockPrice_count = int(input().strip())

    stockPrice = []

    for _ in range(stockPrice_count):
        stockPrice_item = int(input().strip())
        stockPrice.append(stockPrice_item)

    result = countMaximumProfitableGroups(stockPrice)

    fptr.write(str(result) + '\n')

    fptr.close()
