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
    [Route("api/PolicyAPI")]
    public class PolicyAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/PolicyAPI/GetAllPolicies")]
        public IEnumerable<PolicyDataModel> Get()
        {
            try
            {
                var data = from p in db.PolicyDetails
                           select new PolicyDataModel
                           {
                               PolicyNO = p.PolicyNo,
                               UserMobNo = p.UserMobNo,
                               VehID = (int)p.VehId,
                               PolicyName = p.PolicyName,
                               Period = p.Period,
                               PolicyAmt = p.PolicyAmt,
                               PolicyStatus = p.PolicyStatus,
                               StartDate = p.StartDate,
                               EndDate = p.EndDate
                           };
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/PolicyAPI/PolicyDetails")]
        [HttpPost]
        public bool Post([FromBody] PolicyDetail p)
        {
            try
            {
                db.PolicyDetails.Add(p);
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
        [Route("api/PolicyAPI/GetPolicyByID/{id}")]
        [HttpGet]
        public IEnumerable<proc_GetAllPoliciesOfUser_Result> Get(string id)
        {
            try
            {
                var res = db.proc_GetAllPoliciesOfUser(id);
                if (res == null)
                    throw new Exception("Invalid projid");
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
