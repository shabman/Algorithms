using System;

namespace CSAlgorithms
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
