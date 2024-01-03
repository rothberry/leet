from os import get_terminal_size, system
from ipdb import set_trace


class TermHelper():
    term_size = get_terminal_size().columns

    @classmethod
    def top_wrap(cls, string, char="*"):
        system("clear")
        cls.term_wrap(string, char)

    @classmethod
    def term_wrap(cls, string, char="*"):
        cls.star_line(char)
        cls.center_string_stars(string, char)
        cls.star_line(char)

    @classmethod
    def star_line(cls, char="*"):
        print(char * cls.term_size)

    @classmethod
    def center_string_stars(cls, string, char="*"):
        half_size = (cls.term_size - len(string) - 2) / 2
        half_stars = char * int(half_size)
        print(f"{half_stars} {string} {half_stars}")

    @classmethod
    def kv_print(cls, obj):
        import inspect
        import re

        frame = inspect.currentframe()
        try:
            context = inspect.getframeinfo(frame.f_back).code_context
            caller_lines = ''.join([line.strip() for line in context])
            m = re.search(r'dict_print\s*\((.+?)\)$', caller_lines)
            if m:
                key = m.group(1)
                print(f'{key} => {obj}')
        finally:
            del frame
