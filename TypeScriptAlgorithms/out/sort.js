"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStrings = exports.sortIntegers = void 0;
function sortIntegers(array, asc) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] > array[k] && asc) {
                temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
            else if (array[i] > array[k] && !asc) {
                temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
        }
    }
    return array;
}
exports.sortIntegers = sortIntegers;
function sortStrings(array, asc) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i].localeCompare(array[k]) > 0 && asc) {
                temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
            else if (array[i].localeCompare(array[k]) < 0 && !asc) {
                temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
        }
    }
    return array;
}
exports.sortStrings = sortStrings;
