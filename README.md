# Algorithms

# Algorithms I've made so far:
- Sort

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

Demo (Dart)

```dart

void main() {
  var sort = new Sort<int>(new List<int>.from([1, 2, 3, 4, 5]), true);
  sort.sort(new List<int>.from([1, 2, 3, 4, 5]), true);

  sort = new Sort<int>(new List<int>.from([1, 2, 3, 4, 5]), false);
  sort.sort(new List<int>.from([1, 2, 3, 4, 5]), false);

  sort = new Sort<String>(new List<String>.from(["a", "b", "c", "d", "e"]), true);
  sort.sort(new List<String>.from(["a", "b", "c", "d", "e"]), true);

  sort = new Sort<String>(new List<String>.from(["a", "b", "c", "d", "e"]), false);
  sort.sort(new List<String>.from(["a", "b", "c", "d", "e"]), false);
}
```
