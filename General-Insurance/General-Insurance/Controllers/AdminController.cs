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
    [Route("api/AdminAPI")]
    public class AdminController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [Route("api/AdminAPI/Login/{mob}/{pwd}")]
        [HttpGet]
        public string Get(string mob, string pwd)
        {
            string result = "";
            try
            {
                var data = db.AdminDetails.Where(x => x.MobNo == mob && x.Password == pwd);
                if (data.Count() == 0)
                    result = "invalid credentials";
                else
                    result = "Login Successful";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
    }
}
