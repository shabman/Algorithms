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
