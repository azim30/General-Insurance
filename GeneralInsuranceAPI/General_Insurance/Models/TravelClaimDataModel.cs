using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class TravelClaimDataModel
    {
        public int Travel_Claim_Id { get; set; }
        public int PolicyNO { get; set; }
        public string Reason_for_Claim { get; set; }
        public string MobNo { get; set; }
        //public string TicketCopy { get; set; }
        public Decimal Amount { get; set; }
        //public string ComplaintCopy { get; set; }
        public string Claim_Status { get; set; }
    }
}