import 'dart:collection';
import 'sort.dart';

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
