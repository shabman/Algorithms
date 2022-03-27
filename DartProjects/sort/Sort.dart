

class Sort<T> {

  Sort(T[] array, bool ascending) {
    if (ascending) {
      sortAscending(array);
    } else {
      sortDescending(array);
    }
  }

  void sortAscending(T[] array) {
    for (int i = 0; i < array.length; i++) {
      for (int j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          T temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }

  void sortDescending(T[] array) {
    for (int i = 0; i < array.length; i++) {
      for (int j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
          T temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }

  void sort(T[] array, bool ascending) {
    if (ascending) {
      sortAscending(array);
    } else {
      sortDescending(array);
    }
  }
}