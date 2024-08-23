""" 

1. Question 1
Given a string word that consists of lowercase English letters. 
In one move, they can choose any index and let the character at that index be 'c'. 
Then, the first occurrence of 'c' to the left of i, and the first occurrence of 'c' to the right of /are deleted 
(Note: the operation can still be carried out even if either the left or right occurrence doesn't exist). 

For example, if word = "adabacaea", and if index 4 is chosen, the first occurrence of 'a' to the left and right of index 4 deleted, leaving word = "adbacea".

Find the minimum number of moves the students need to perform In order to get a word of minimal length.
Example
Consider word = "baabacaa",
The following moves are optimal.
1. Choose index 0. "baabacaa", then word = "baaacaa". Delete the 'b' to its right at index 3. There is no 'b' to its left so the operation is finished.
2. Now, choose index 2. "baaacaa", then word = "bacaa".
3. Now. choose index 3, "bacaa", then word = "bca".
The word cannot be reduced further. The answer is 3. 

"""


from collections import Counter
from py_term_helpers import top_wrap


def getMinimumMoves(word):
    # outliers
    # if word has all single letters, no operations => 0

    # create counterdict of the letters
    # disreggard all the counters of 1
    # create operations counter aka output
    # while the most common letter instances is more than 1
    #   reduce the most common count by 2
    #   increase counter output

    operations = 0
    letter_dict = Counter()
    # O(N)
    for letter in word:
        letter_dict[letter] += 1

    # print(word, letter_dict, letter_dict.most_common(1)[0][1])
    # O(N)
    while letter_dict.most_common(1)[0][1] > 1:
        operations += 1
        most_common = letter_dict.most_common(1)[0]
        # print(f'most: {most_common}')
        letter_dict[most_common[0]] -= 2

    # print(letter_dict)
    return operations


top_wrap('TESTING')

word1 = "cbaa"
word2 = "baabacaa"
word3 = "f"
