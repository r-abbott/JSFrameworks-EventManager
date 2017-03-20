using System;
using System.Collections.Generic;

namespace EM_API.Models
{
    public class Event : Entity
    {
        public string Name { get; }
        public string Description { get; }
        public decimal Price { get; }
        public DateTime Date { get; }
        public IEnumerable<string> AdditionalInformation { get; }

        public Event(int id, string name, string description, decimal price, DateTime date)
            : this(id, name, description, price, date, new List<string>())
        {

        }

        public Event(int id, string name, string description, decimal price, DateTime date, IEnumerable<string> additionalInformation)
            : base(id)
        {
            Name = name;
            Description = description;
            Price = price;
            Date = date;
            AdditionalInformation = additionalInformation;
        }
    }
}
