package me.shab.bubble;

public class BubbleSort {
	
	private final int[] arr;
	
	public BubbleSort(int arr[]) {
		this.arr = arr;
	}
	
	public int[] solve() {
		int n = this.arr.length;
		int[] output = this.arr.clone();		
		for (int i = 0; i < n-1; i++) {
			for (int j = 0; j < n-i-1; j++) {
				if (output[j] > output[j+1]) {
                    int temp = output[j];
                    output[j] = output[j+1];
                    output[j+1] = temp;
				}	
			}
		}
		return output;
	}
	
	public int[] getArray() {
		return this.arr;
	}
}
