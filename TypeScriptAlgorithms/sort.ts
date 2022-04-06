export function sortIntegers(array: Array<number>, asc: boolean) {
    let temp: number
    for (let i: number = 0; i<array.length; i++) {
        for (let k: number = i+1; k < array.length;k++) {
            if (array[i] > array[k] && asc) {
                temp = array[i]
                array[i] = array[k]
                array[k] = temp
            } else if (array[i] > array[k] && !asc) {
                temp = array[i]
                array[i] = array[k]
                array[k] = temp
            }
        }
    }
    return array
}

export function sortStrings(array: Array<string>, asc: boolean) {
    let temp: string
    for (let i: number = 0; i < array.length; i++) {
        for (let k: number = i + 1; k < array.length; k++) {
            if (array[i].localeCompare(array[k]) > 0 && asc ) {
                temp = array[i]
                array[i] = array[k]
                array[k] = temp
            } else if (array[i].localeCompare(array[k]) < 0 && !asc) {
                temp = array[i]
                array[i] = array[k]
                array[k] = temp
            }
        }
    }
    return array
}





