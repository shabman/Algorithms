

class Sort:

    def __init__(self, arr: list, asc: bool) -> None:
        self.arr = arr
        self.asc = asc

    def solve(self) -> list:
        # Check if array contains strings or integers and sort accordingly
        types = isinstance(self.arr[0], str)
        if types:
            return self.sort_strings(self.arr)
        else:
            return self.sort_numbers(self.arr)

    def sort_strings(self, a: list) -> list:
        # Sort strings
        if self.asc:
            a.sort()
        else:
            a.sort(reverse=True)
        return self.arr

    def sort_numbers(self, a: list) -> list:
        # Sort numbers
        if self.asc:
            a.sort(key=int)
        else:
            a.sort(key=int, reverse=True)
        return arr

if __name__ == '__main__':
    arr = [1, 3, 54, 7, 8, 69]
    asc = True
    sort = Sort(arr, asc)
    print(sort.solve())

    arr = ["bob", "the", "builder", "is", "dumb"]
    asc = False
    sort = Sort(arr, asc)
    print(sort.solve())