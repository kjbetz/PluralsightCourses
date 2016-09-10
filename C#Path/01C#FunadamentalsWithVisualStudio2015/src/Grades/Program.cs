using System;

namespace Grades
{
    public class Program
    {
        public static void Main(string[] args)
        {
            GradeBook book = new GradeBook();

            book.NameChanged += new NameChangedDelegate(OnNameChanged);
            book.NameChanged += new NameChangedDelegate(OnNameChanged2);

            book.Name = "Scott's Grade Book";
            book.Name = "Grade Book";

            book.AddGrade(91);
            book.AddGrade(89.5f);
            book.AddGrade(75);

            GradeStatistics stats = book.ComputeStatistics();
            Console.WriteLine(book.Name);
            WriteResult("Average", stats.AverageGrade);
            WriteResult("Highest", (int)stats.HighestGrade);
            WriteResult("Lowest", stats.LowestGrade);
        }

        static void OnNameChanged(string existingName, string newName)
        {
            Console.WriteLine($"Grade book changing name from { existingName } to { newName }");
        }

        static void OnNameChanged2(string existingName, string newName)
        {
            Console.WriteLine($"****");
        }

        static void WriteResult(string description, int result)
        {
            Console.WriteLine($"{description}: {result}");
        }

        static void WriteResult(string description, float result)
        {
            Console.WriteLine($"{description}: {result:F2}");
        }
    }
}
