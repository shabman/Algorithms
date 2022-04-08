
class BubbleSort():

    def __init__(self, arr: list) -> None:
        self.arr = arr

        if not isinstance(self.arr, list):
            raise TypeError("Given parameter must be a list!")
        if not isinstance(self.arr[1], int):
            raise TypeError("Items in lust must be integers!")

    
    def solve(self) -> list:

        n = len(self.arr)
        for i in range(n-1):
            for j in range(0, n-i-1):
                if self.arr[j] > self.arr[j + 1]:
                    self.arr[j] = self.arr[j+1]
                    self.arr[j + 1] = self.arr[j]

        return self.arr
    
