using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class TravelClaimDataModel
    {
        public int Travel_Claim_Id { get; set; }
        public Nullable<int> PolicyNo { get; set; }
        public string Reason_for_Claim { get; set; }
        public string MobNo { get; set; }
        public decimal Amount { get; set; }
        public string Claim_Status { get; set; }
    }
}