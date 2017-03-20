using System;

namespace EM_API.ViewModels
{
    public static class ViewModelDateTimeExtensions
    {
        public static string Date(this DateTime date)
        {
            return date.ToString("MMM d yyyy");
        }

        public static string Time(this DateTime date)
        {
            return date.ToString("h:mm");
        }

        
    }
}
