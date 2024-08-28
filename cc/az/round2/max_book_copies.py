#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'maximumBookCopies' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY portalUpdate as parameter.
#

def maximumBookCopies(portalUpdate):
    # Write your code here
    # portalUpdate contains a int of each book where the value is the id, the polarity is whether to add/subtract
    #  if int is > 0 then add to inventory
    #  if int is < 0 then subtract
    
    # len(portalUpdate) => len(return list)
    # create a dict
    # on each loop
    #   if NOT in dict
    #       add to dict with key of id (or the val) and val of 1
    #   if current_val in dict
    #       if positive => add to val
    #       if negative => subtract to val
    
    inv = dict()
    output = []
    # print(portalUpdate)
    # print(len(portalUpdate))
    for i, book in enumerate(portalUpdate):
        # print(book)
        ab_book = abs(book)
        if inv.get(ab_book):
            if book > 0:
                inv[ab_book] = inv[ab_book] + 1
            else:
                inv[ab_book] = inv[ab_book] - 1
        else:
            inv[ab_book] = 1
        # print(f'inv {inv}')
        # could increase effiency by adding a max heap instead of the regular dict
        output.append(max(inv.values()))
    # print(f'output {output}')
    return output
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    portalUpdate_count = int(input().strip())

    portalUpdate = []

    for _ in range(portalUpdate_count):
        portalUpdate_item = int(input().strip())
        portalUpdate.append(portalUpdate_item)

    result = maximumBookCopies(portalUpdate)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
