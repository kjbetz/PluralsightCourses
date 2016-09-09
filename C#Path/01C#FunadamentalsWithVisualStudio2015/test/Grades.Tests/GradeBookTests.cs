using System;
using Xunit;
using Grades;

namespace Grades.Tests
{
    public class GradeBookTests
    {
        private void AddGrades(float[] grades)
        {
            grades[1] = 89.1f;
        }

        [Fact]
        public void ComputesHighestGrade() 
        {
            GradeBook book = new GradeBook();
            book.AddGrade(10);
            book.AddGrade(90);

            GradeStatistics result = book.ComputeStatistics();
            Assert.Equal(90, result.HighestGrade);
            // Assert.True(true);
        }

        [Fact]
        public void ComputeLowestGrade()
        {
            GradeBook book = new GradeBook();
            book.AddGrade(10);
            book.AddGrade(90);

            GradeStatistics result = book.ComputeStatistics();
            Assert.Equal(10, result.LowestGrade);
        }

        [Fact]
        public void ComputeAverage()
        {
            GradeBook book = new GradeBook();
            book.AddGrade(91);
            book.AddGrade(89.5f);
            book.AddGrade(75);

            GradeStatistics result = book.ComputeStatistics();
            Assert.Equal(85.17, result.AverageGrade, 2);
        }
    }
}
