


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
    
    @staticmethod
    def staticSolve(arr: list):
        n = len(arr)
        for i in range(n-1):
            for j in range(0, n-i-1):
                if arr[j] > arr[j + 1] :
                    arr[j] = arr[j + 1]
                    arr[j + 1] = arr[j]

        return arr


if __name__ == "__main__":

    sort = BubbleSort([1,5,6,1,2,0,0,9,69,39,212])

    print(sort.solve())

    print(BubbleSort.staticSolve([2,7,9,1,2]))
        
    
