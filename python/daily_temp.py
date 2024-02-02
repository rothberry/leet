""" 
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, keep answer[i] == 0 instead.


 """

from ipdb import set_trace
from py_term_helpers import top_wrap, kv_print


def dailyTemperaturesBF(temperatures):
    # bf
    # create output arr of len temp
    # iterate over temps
    #   iter again until find a higher temp
    #     store the iterations into the output
    output = [0] * len(temperatures)

    for i in range(len(temperatures) + 1):
        for j in range(i + 1, len(temperatures)):
            x, y = temperatures[i], temperatures[j]
            print(f'{i},{j} => {x},{y}')
            if (y > x):
                # print(j - i)
                output[i] = (j - i)
                break
            # elif j == len(temperatures) - 1:
            #     output.append(0)
                # set_trace()

    print(output)
    return output
    # set_trace()


def dailyTemperatures(temperatures):
    output = [0] * len(temperatures)
    stack = []
    ctr = 0
    for i, temp in enumerate(temperatures):
        ctr += 1
        while stack and temperatures[stack[-1]] < temp:
            ctr += 1
            idx = stack.pop()
            output[idx] = i - idx
            # print(f'idx:{idx}/output:{output}')
        stack.append(i)
        kv_print(stack)
    kv_print((output, ctr))
    return output


top_wrap("TESTING")

t1 = [73, 74, 75, 71, 69, 72, 76, 73]
t2 = [30, 40, 50, 60]
t3 = [80, 79, 78]

dailyTemperatures(t1)
dailyTemperatures(t2)
dailyTemperatures(t3)

""" 
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]


 """
