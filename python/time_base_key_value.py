""" 
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

 """

from ipdb import set_trace
from py_term_helpers import top_wrap


class TimeMap:

    def __init__(self):
        self.map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        # obj = {key: value, ts: timestamp}
        self.map[timestamp] = {key: value}

    def get(self, key: str, timestamp: int) -> str:
        # return self.map[key]
        pass


top_wrap('TESTING')

time_map = TimeMap()
time_map.set("foo", "bar", 1)
time_map.get("foo", 1)
time_map.get("foo", 3)
time_map.set("foo", "bar2", 4)
time_map.get("foo", 4)
time_map.get("foo", 5)

# [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
tm_2 = TimeMap()
tm_2.set("love", "high", 10)
tm_2.set("love", "low", 20)
print(tm_2.get("love", 5))
print(tm_2.get("love", 10))
set_trace()


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
