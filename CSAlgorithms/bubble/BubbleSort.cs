
namespace CSAlgorithms.bubble
{
    public class BubbleSort
    {
        private int[] Arr { get; }

        public BubbleSort(int[] Arr) => this.Arr = Arr;

        public int[] Solve()
        {
            int n = Arr.Length;
            int[] output = (int[]) Arr.Clone();
            int temp;

            for (int i = 0; i < n - 1; i++)
            {
                for (int k = 0; k < n - i -1; k++)
                {
                    if (output[k] > output[k + 1])
                    {
                        temp = output[k];
                        output[k] = output[k + 1];
                        output[k + 1] = temp;
                    }
                }
            }
            return output;
        }
    }

}
