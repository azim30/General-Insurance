using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class ClaimDataModel
    {
        public int ClaimNo { get; set; }
        public string UserMobNo { get; set; }
        public Nullable<int> VehId { get; set; }
        public Nullable<int> PolNo { get; set; }
        public string ClaimReason { get; set; }
        public string ClaimStatus { get; set; }
        public decimal ClaimAmt { get; set; }
        public DateTime ClaimDate { get; set; }
    }
}