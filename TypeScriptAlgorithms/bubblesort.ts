export function bubbleSortIntegers(array: Array<number>) {

    let temp: number
    const n: number = array.length
    for (let i: number = 0; i < n - 1; i++) {
        for (let j: number = 0; j < (n - i - 1); j++ ) {
            if (array[j] > array[j+1]) {
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }

    return array

}