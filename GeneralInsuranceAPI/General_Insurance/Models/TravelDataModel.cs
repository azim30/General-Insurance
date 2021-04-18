using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class TravelDataModel
    {
        public int PolicyNo { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public System.DateTime TripStart { get; set; }
        public System.DateTime TripEnd { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public decimal MobileNo { get; set; }
        public int NoOfPassengers { get; set; }
        public string IPlan { get; set; }
    }
}