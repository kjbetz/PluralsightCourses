using System;
using System.Collections.Generic;

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
                if (!String.IsNullOrEmpty(value))
                {
                    if(_name != value)
                    {
                        NameChanged(_name, value);
                    }

                    _name = value;
                }
            }
        }

        public NameChangedDelegate NameChanged;

        private string _name;
        private List<float> grades;
    }
}
