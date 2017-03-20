using System;
using System.Collections.Generic;

namespace EM_API.ViewModels
{
    public class NewEventViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime Date { get; set; }
        public IEnumerable<string> AdditionalInformation { get; set; }
    }
}
