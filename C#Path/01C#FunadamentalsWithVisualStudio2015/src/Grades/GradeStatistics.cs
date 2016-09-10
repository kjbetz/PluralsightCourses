namespace Grades
{
    public class GradeStatistics
    {
        public GradeStatistics ()
        {
          HighestGrade = 0;
          LowestGrade = float.MaxValue;
        }

        public string LetterGrade
        {
            get
            {
                string result;

                if(AverageGrade >= 90)
                {
                    result = "A";
                }
                else if(AverageGrade >= 80)
                {
                    result = "B";
                }
                else if(AverageGrade >= 70)
                {
                    result = "C";
                }
                else if(AverageGrade >= 60)
                {
                    result = "D";
                }
                else
                {
                    result = "F";
                }

                return result;
            }
        }

        public float AverageGrade;
        public float HighestGrade;
        public float LowestGrade;
    }
}
