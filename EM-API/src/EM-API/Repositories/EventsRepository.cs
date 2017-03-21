using EM_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EM_API.Repositories
{
    public class EventsRepository : InMemoryRepository<Event>
    {
        public static readonly List<Event> Events = new List<Event>
        {
            new Event(1, "Developing Web Applications with .Net Core","Come out and learn how to make Web Apps using the latest .Net Core framework. We'll go through all the steps and leave you with a working application.",0.00m, DateTime.Parse("01/02/2017 5:00 PM"),new[] { "Beginners welcome","C# proficiency preferred" }),
            new Event(2, "Game Development for Newbies","Want to make games but don't know how? We'll teach you the basics of programming, art, sound, and design!",0.0m, DateTime.Parse("01/10/2017 5:30 PM")),
            new Event(3, "NewWave Development Competition","You have what it takes, you've got the experience, now it's time to put it to the test! This is a winner take all competition for developing the best application ever.",25.00m, DateTime.Parse("01/25/2017 7:00 PM")),

        };

        public int GetNextId()
        {
            if (Events.Count == 0) return 1;
            return Events.Max(e => e.Id) + 1;
        }

        protected override List<Event> Data { get { return Events; } }

    }
}
