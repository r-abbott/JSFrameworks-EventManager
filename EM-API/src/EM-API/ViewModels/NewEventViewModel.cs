using System;
using System.Collections.Generic;

namespace EM_API.ViewModels
{
    public class NewEventViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public IEnumerable<string> AdditionalInformation { get; set; }
        public DateTime DateTime { get
            {
                var date = DateTime.Parse(Date);
                var time = TimeSpan.Parse(Time);

                return date.Add(time);
            } }
    }
}
