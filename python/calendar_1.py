""" 
You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

Implement the MyCalendar class:

MyCalendar() Initializes the calendar object.
boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
 

 """
from ipdb import set_trace
from py_term_helpers import TermHelper


class MyCalendar:

    def __init__(self):
        # can import SortedList() for dates to keep order
        self.dates = []

    def book(self, start: int, end: int) -> bool:
        for date_range in self.dates:
            check_range = range(date_range[0], date_range[1]+1)
            if start in check_range or end in check_range:
                print("NAH")
                return False
        self.dates.append([start, end])
        print("YAH")
        return True
        # set_trace()


# Example 1:

# Input
# ["MyCalendar", "book", "book", "book"]
# [[], [10, 20], [15, 25], [20, 30]]
# Output
# [null, true, false, true]

TermHelper.top_wrap("TESTING")
# Explanation
cal1 = MyCalendar()
cal1.book(10, 20)
cal1.book(15, 25)
cal1.book(20, 30)
print(cal1.dates)
TermHelper.star_line()
cal2_dates = [[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]
cal2 = MyCalendar()
for d in cal2_dates:
    cal2.book(d[0], d[1])
    print(cal2.dates)


# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)
