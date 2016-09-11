using System;
using System.Collections.Generic;
using System.IO;

namespace Grades
{
    public class GradeBook
    {
        public GradeBook ()
        {
            _name = "Empty";
            grades = new List<float>();          
        }

        public void AddGrade(float grade)
        {
            grades.Add(grade);
        }

        public void WriteGrades(TextWriter destination)
        {
            for (int i = 0; i < grades.Count; i++)
            {
                destination.WriteLine(grades[i]);
            }
        }

        public GradeStatistics ComputeStatistics()
        {
            GradeStatistics stats = new GradeStatistics();

            float sum = 0;
            
            foreach(float grade in grades)
            {
                stats.HighestGrade = Math.Max(grade, stats.HighestGrade);
                stats.LowestGrade = Math.Min(grade, stats.LowestGrade);
                sum += grade;
            }

            stats.AverageGrade = sum / grades.Count;

            return stats;
        }

        public string Name 
        { 
            get
            {
                return _name;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name can not be null or empty");
                }
                
                if(_name != value)
                {
                    NameChangedEventArgs args = new NameChangedEventArgs();
                    args.ExistingName = _name;
                    args.NewName = value;

                    NameChanged(this, args);
                }

                _name = value;
            }
        }

        public event NameChangedDelegate NameChanged;

        private string _name;
        private List<float> grades;
    }
}
