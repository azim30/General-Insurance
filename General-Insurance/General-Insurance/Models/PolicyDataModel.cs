using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class PolicyDataModel
    {
        public int PolicyNo { get; set; }
        public string UserMobNo { get; set; }
        public string PolicyName { get; set; }
        public Nullable<int> VehId { get; set; }
        public int Period { get; set; }
        public decimal PolicyAmt { get; set; }
        public string PolicyStatus { get; set; }
        public System.DateTime StartDate { get; set; }
    }
}