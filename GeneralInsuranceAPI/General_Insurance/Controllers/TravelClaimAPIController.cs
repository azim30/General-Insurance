using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using General_Insurance.Models;
using System.Web.Http.Cors;

namespace General_Insurance.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/TravelClaimAPI")]
    public class TravelClaimAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/TravelClaimAPI/GetAllClaims")]
        public IEnumerable<TravelClaimDataModel> Get()
        {
            try
            {
                var data = from p in db.TravelClaimDetails
                           select new TravelClaimDataModel
                           {
                               Travel_Claim_Id = p.Travel_Claim_Id,
                               PolicyNO = (int)p.PolicyNo,
                               Reason_for_Claim = p.Reason_for_Claim,
                               MobNo = p.MobNo,
                               //TicketCopy = p.Ticket_Copy,
                               Amount = (decimal)p.Amount,
                               //ComplaintCopy = p.Complaint_Copy,
                               Claim_Status = p.Claim_Status,


                           };
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/TravelClaimAPI/TravelClaimDetails")]
        [HttpPost]
        public bool Post([FromBody] TravelClaimDetail p)
        {
            try
            {
                db.TravelClaimDetails.Add(p);
                var res = db.SaveChanges();
                if (res > 0)
                    return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return false;
        }
    }
}
