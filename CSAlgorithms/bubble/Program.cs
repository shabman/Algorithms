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
