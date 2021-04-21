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
    [EnableCors(origins: "*", headers: "*", methods: "*")]     //cross-domain access to your Web API methods.
    [Route("api/ClaimAPI")]
    public class ClaimAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();

        [HttpGet]
        [Route("api/ClaimAPI/GetAllClaims")]                      // To display All the claims of user
        public IEnumerable<ClaimDataModel> GetAllClaims()      // IEnumerable is an interface. It is the base interface for all non-generic collections.
        {
            try
            {
                var data = from c in db.ClaimDetails
                           select new ClaimDataModel
                           {
                               ClaimNo = c.ClaimNo,
                               UserMobNo = c.UserMobNo,
                               VehId = c.VehId,
                               PolNo = c.PolNo,
                               ClaimReason = c.ClaimReason,
                               ClaimStatus = c.ClaimStatus,
                               ClaimAmt = c.ClaimAmt,
                               ClaimDate = c.ClaimDate,


                           };
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/ClaimAPI/RegisterClaim")]                  // To register Claim of User
        [HttpPost]
        public bool Post([FromBody] ClaimDetail p)
        {
            try
            {
                db.ClaimDetails.Add(p);
                var data = db.ClaimDetails.Where(x => x.PolNo == p.PolNo).SingleOrDefault();    // will check if claim is already registered or not.
                if(data!=null)
                {
                    return false;
                }
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
        [Route("api/ClaimAPI/GetClaimByID/{id}")]                      // to get claim of particular user
        [HttpGet]
        public IEnumerable<proc_GetAllClaimsOfUser_Result> Get(string id)          // used SP to fetch data
        {
            try
            {
                var res = db.proc_GetAllClaimsOfUser(id);
                if (res == null)
                    throw new Exception("Invalid");
                else
                    return res;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/ClaimAPI/ApproveClaim")]                 // To Approve the Claim
        [HttpPut]
        public bool ApproveClaim([FromBody] int PolNo)
        {
            try
            {
                Console.WriteLine(PolNo);
                int res= db.proc_ApproveMotorClaim(PolNo);
                if(res>0)
                {
                    return true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            return false;
        }

        [Route("api/ClaimAPI/DeclineClaim")]               // To Decline the Claim
        [HttpPut]
        public bool DeclineClaim([FromBody] int PolNo)
        {
            try
            {
                Console.WriteLine(PolNo);
                int res = db.proc_DeclineMotorClaim(PolNo);
                if (res > 0)
                {
                    return true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            return false;
        }

    }
}