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
    [Route("api/ClaimAPI")]
    public class ClaimAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();

        [HttpGet]
        [Route("api/ClaimAPI/GetAllClaims")]
        public IEnumerable<ClaimDataModel> GetAllClaims()
        {
            try
            {
                var data = from c in db.ClaimDetails
                           select new ClaimDataModel
                           {
                               ClaimNo = c.ClaimNo,
                               UserMobNo = c.UserMobNo,
                               VehID = (int)c.VehId,
                               PolNo = (int)c.PolNo,
                               ClaimReason = c.ClaimReason,
                               ClaimStatus = c.ClaimStatus,
                               ClaimAmt = c.ClaimAmt,
                               ClaimDate = c.ClaimDate,
                     

                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/ClaimAPI/RegisterClaim")]
        [HttpPost]
        public bool Post([FromBody] ClaimDetail c)
        {
            try
            {
                db.ClaimDetails.Add(c);
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
        [Route("api/ClaimAPI/GetClaimByID/{id}")]
        [HttpGet]
        public IEnumerable<proc_GetAllClaimsOfUser_Result> Get(string id)
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

    }
}
