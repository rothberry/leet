""" Linear Regression (Forward)
Your must implement get_model_prediction() which returns a prediction value for each dataset value, and get_error() which calculates the error for given prediction data.


Inputs - get_error:

    model_prediction - the model's prediction for each training example. len(model_prediction) = n.
    ground_truth - the correct answer for each example. len(ground_truth) = n.
 """

import numpy as np
from numpy.typing import NDArray
from ipdb import set_trace
from py_term_helpers import *

# Helpful functions:
# https://numpy.org/doc/stable/reference/generated/numpy.matmul.html
# https://numpy.org/doc/stable/reference/generated/numpy.mean.html
# https://numpy.org/doc/stable/reference/generated/numpy.square.html
    
class LinReg:
    # Inputs - get_model_prediction:
    # X - the dataset to be used by the model to predict the output. len(X) = n, and len(X[i]) = 3 for 0 <= i < n.
    # weights - the current w1w1​, w2w2​, and w3w3​ weights for the model. len(weights) = 3.

    def get_model_prediction(self, X: NDArray[np.float64], weights: NDArray[np.float64]) -> NDArray[np.float64]:
        # X is an Nx3 NumPy array
        # weights is a 3x1 NumPy array
        pred = np.matmul(X, weights) 
        return np.round(pred, 5)

    # Inputs - get_error:
    # model_prediction - the model's prediction for each training example. len(model_prediction) = n.
    # ground_truth - the correct answer for each example. len(ground_truth) = n.

    def get_error(self, model_prediction: NDArray[np.float64], ground_truth: NDArray[np.float64]) -> float:
        # model_prediction is an Nx1 NumPy array
        # ground_truth is an Nx1 NumPy array
        error = np.mean(np.square(model_prediction - ground_truth))
        return round(error, 5)