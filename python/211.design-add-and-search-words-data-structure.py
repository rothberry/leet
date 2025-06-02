#
# @lc app=leetcode id=211 lang=python3
#
# [211] Design Add and Search Words Data Structure
#

from ipdb import set_trace
from py_term_helpers import *
# @lc code=start


class WordDictionary:
    def __init__(self):
        self.words = []

    def addWord(self, word: str) -> None:
        self.words.append(word)
        print(self.words)

    def search(self, word: str) -> bool:
        for w in self.words:
            if len(w) != len(word):
                continue
            i = 0
            while i < len(w):
                if w[i] == word[i] or word[i] == '.':
                    i += 1
                else:
                    break
            if i == len(w):
                print("TRUE")
                return True
        print("FALE")
        return False
# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
# @lc code=end


top_wrap('TESTING')
wordDictionary = WordDictionary()
wordDictionary.addWord("bad")
wordDictionary.addWord("dad")
wordDictionary.addWord("mad")
wordDictionary.search("pad")  # return False
wordDictionary.search("bad")  # return True
wordDictionary.search(".ad")  # return True
wordDictionary.search("b..")  # return True
