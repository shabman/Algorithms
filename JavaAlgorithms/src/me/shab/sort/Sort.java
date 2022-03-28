package me.shab.sort;

public class Sort<T> {

	private final T[] sort;

	private final boolean asc;
	
	public Sort(T[] sort, boolean asc) {
		this.sort = sort;
		this.asc = asc;
	}
	
	@SuppressWarnings("unchecked")
	public T[] solve() throws Exception {
		String type = this.sort.getClass().getSimpleName().split("\\[")[0];
		T[] output = this.sort.clone();
		if (type.equalsIgnoreCase("String")) {
			String temp;
			for (int i = 0; i < output.length; i++) {
				for (int k = i + 1; k < output.length; k++) {
					if ((String.valueOf(output[i])).compareTo(String.valueOf(output[k])) > 0 && this.asc) {
						temp = (String) output[i];
						output[i] = output[k];
						output[k] = (T) temp;
					} else if ((String.valueOf(output[i])).compareTo(String.valueOf(output[k])) < 0 && !this.asc) {
						temp = (String) output[i];
						output[i] = output[k];
						output[k] = (T) temp;
					}
				}
			}
		} else if (type.equalsIgnoreCase("Integer")) {
			int temp;
			for (int i = 0; i < output.length; i++) {
				for (int k = i + 1; k < output.length; k++) {
					if ((int) output[i] >  (int) output[k] && this.asc) {
						temp = (int) output[i];
						output[i] = output[k];
						output[k] = (T) Integer.valueOf(temp);
					} else if ((int) output[i] < (int) output[k] && !this.asc) {
						temp = (int) output[i];
						output[i] = output[k];
						output[k] = (T) Integer.valueOf(temp);
					}
				}
			}
		}
		return output;
	}
	
	public T[] getSort() {
		return this.sort;
	}
	
	public boolean isAscending() {
		return this.asc;
	}
}
