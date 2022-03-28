# Algorithms

# Algorithms I've made so far:
- Sort (Java)
- Bubble Sort (Java)

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
