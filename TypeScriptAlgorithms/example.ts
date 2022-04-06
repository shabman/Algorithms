import { sortIntegers } from "./sort";
import { sortStrings } from "./sort";

console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], true))
console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], false))

console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], true))
console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], false))