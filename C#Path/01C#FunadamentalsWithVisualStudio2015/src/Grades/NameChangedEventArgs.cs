using System;

namespace Grades
{
    public class NameChangedEventArgs : EventArgs
    {
        public string ExistingName { get; set; }
        public string NewName { get; set; }
    }
}
