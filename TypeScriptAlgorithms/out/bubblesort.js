"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSortIntegers = void 0;
function bubbleSortIntegers(array) {
    let temp;
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < (n - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
exports.bubbleSortIntegers = bubbleSortIntegers;
