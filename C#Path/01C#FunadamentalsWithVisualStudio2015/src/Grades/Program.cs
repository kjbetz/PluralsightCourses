namespace Grades
{
    public class Program
    {
        public static void Main(string[] args)
        {
            GradeBook book = new GradeBook();
            book.AddGrade(91);
            book.AddGrade(89.5f);
            book.AddGrade(75);

            GradeStatistics stats = book.ComputeStatistics();

            System.Console.WriteLine(stats.AverageGrade);
            System.Console.WriteLine(stats.HighestGrade);
            System.Console.WriteLine(stats.LowestGrade);
        }
    }
}
