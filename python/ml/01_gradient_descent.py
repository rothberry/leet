""" Gradient Descent

Your task is to minimize the function via Gradient Descent: f(x)=x2f(x)=x2.
Gradient Descent is an optimization technique widely used in machine learning for training models. It is crucial for minimizing the cost or loss function and finding the optimal parameters of a model.
For the above function the minimizer is clearly x = 0, but you must implement an iterative approximation algorithm, through gradient descent.

Input:

    iterations - the number of iterations to perform gradient descent. iterations >= 0.
    learning_rate - the learning rate for gradient descent. 1 > learning_rate > 0.
    init - the initial guess for the minimizer. init != 0.

Given the number of iterations to perform gradient descent, the learning rate, and an initial guess, return the value of x that globally minimizes this function.

Round your final result to 5 decimal places using Python's round() function.

! to find the minimum, take the derivative of the func, and set to 0
f(x) = x^2 => 2x^1 = 0

 """

from ipdb import set_trace
from py_term_helpers import *

def gradient_descent(iterations, learning_rate, init):
    
    for i in range(iterations):
        init = init - learning_rate * (init * 2)
        center_string_stars((i, init))

    return round(init, 5)


top_wrap('TESTING')
center_string_stars(gradient_descent(0, 0.01, 5))  # Expected output: 5
center_string_stars(gradient_descent(10, 0.01, 5))  # Expected output:  4.08536


""" 
Example 1:

Input: 
iterations = 0, learning_rate = 0.01, init = 5

Output:
5

Example 2:

Input: 
iterations = 10, learning_rate = 0.01, init = 5

Output:
4.08536
 """