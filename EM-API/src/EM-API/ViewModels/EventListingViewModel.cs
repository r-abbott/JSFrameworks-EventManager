using System;

namespace EM_API.ViewModels
{
    public class EventListingViewModel
    {
        public int Id { get; }
        public string Name { get; }
        public string Date { get; }
        public string Time { get; }
        public string Price { get; }

        public EventListingViewModel(int id, string name, DateTime date, decimal price)
        {
            Id = id;
            Name = name;
            Price = price > 0.0m ? $"${price}" : "Free";
            Date = date.Date();
            Time = date.Time();
        }
    }
}
