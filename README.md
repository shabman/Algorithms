# Algorithms I've made so far:
- Sort (Java, C#, Python, TypeScript by Intervinn)
- Bubble Sort (Java, C#, TypeScript & Python by Intervinn)

# Sort

- Sorts a String or Integer either ascending or descending order.

Demo (Java)

```java
package me.shab.mains;

import me.shab.sort.Sort;

public class Main {
	
	public static void main(String[] args) throws Exception {
		Sort<String> sorter = new Sort<>(new String[] {"bob", "the", "builder", "is", "dumb"}, false);
		String[] res = sorter.solve();
		for (String word : res) {
			System.out.println(word);
		}
		
		Sort<Integer> sorter2 = new Sort<>(new Integer[] {1, 3, 54, 7, 8, 69}, false);
		Integer[] res2 = sorter2.solve();
		for (int num : res2) {
			System.out.println(num);
		}
	}
}
```

Demo (C#)

```cs
using System;

namespace CSAlgorithms.sort
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Sort<string> sorter = new Sort<string>(new string[] { "bob", "the", "builder", " is ", "dumb" }, false);
            string[] res = sorter.Solve();

            foreach (string word in res)
            {
                Console.WriteLine(word);
            }

            Sort<int> sorter2 = new Sort<int>(new int[] { 1, 3, 54, 7, 8, 69 }, false);
            int[] res2 = sorter2.Solve();

            foreach (int num in res2)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

Demo (Python)

```py
if __name__ == '__main__':
    arr = [1, 3, 54, 7, 8, 69]
    asc = True
    sort = Sort(arr, asc)
    print(sort.solve())

    arr = ["bob", "the", "builder", "is", "dumb"]
    asc = False
    sort = Sort(arr, asc)
    print(sort.solve())
```

Demo (TypeScript)
```ts

import { sortIntegers } from "./sort";
import { sortStrings } from "./sort";

console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], true))
console.log(sortIntegers([1,5,7,8,3,5,9,6,7,126,33], false))

console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], true))
console.log(sortStrings(["bob", "the", "builder", "is", "dumb"], false))
```

# Bubble Sort

- A sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

Demo (Java)

```java
package me.shab.bubble;

public class Main {
	
	public static void main(String[] args) {
		BubbleSort sort = new BubbleSort(new int[] {64, 34, 25, 12, 22, 11, 90});
		int[] res = sort.solve();
		
		for (int i = 0; i < res.length; ++i) {
			System.out.println(res[i]);
		}
	}
}
```

Demo (C#)

```cs
using System;

namespace CSAlgorithms.bubble
{
    public class MainClass
    {
        public static void Main(string[] args)
        {
            BubbleSort bubble = new BubbleSort(new int[] { 64, 34, 25, 12, 22, 11, 90 });
            int[] res = bubble.Solve();

            foreach (int num in res)
            {
                Console.WriteLine(num);
            }
        }
    }
}
```

Demo (TypeScript)

```ts
import { bubbleSortIntegers } from "./bubblesort"

console.log(bubbleSortIntegers([ 64, 34, 25, 12, 22, 11, 90 ]))
```
Demo (Python)

```py

from bubblesort import BubbleSort

if __name__ == "__main__":
    sort = BubbleSort([1,5,7,1,2,5,0,2,15,73,25,212,69])

    print(sort.solve())

```