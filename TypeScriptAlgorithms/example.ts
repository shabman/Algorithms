import { sortIntegers } from "./sort";
import { sortStrings } from "./sort";
import { bubbleSortIntegers } from "./bubblesort"

console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], true))
console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], false))

console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], true))
console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], false))

console.log(bubbleSortIntegers([ 64, 34, 25, 12, 22, 11, 90 ]))