using System;
using System.Collections.Generic;

namespace EM_API.ViewModels
{
    public class EventDetailsViewModel
    {
        public int Id { get; }
        public string Name { get; }
        public string Description { get; }
        public string Date { get; }
        public string Time { get; }
        public string Price { get; }
        public IEnumerable<string> AdditionalInformation { get; }

        public EventDetailsViewModel(int id, string name, string description, DateTime date, decimal price, IEnumerable<string> additionalInformation)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price > 0.0m ? $"${price}" : "Free";
            Date = date.Date();
            Time = date.Time();
            AdditionalInformation = additionalInformation;
        }
    }
}
