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
    [Route("api/AdminAPI")]
    public class AdminController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [Route("api/AdminAPI/Login/{mob}/{pwd}")]
        [HttpGet]
        public string Get(string mob, string pwd)     // To verify Admin Using Mob and Pwd
        {
            string result = "";
            try
            {
                var data = db.AdminDetails.Where(x => x.MobNo == mob && x.Password == pwd);   // Present in Database or not
                if (data.Count() == 0)
                    result = "invalid credentials";
                else
                    result = "Login Successful";
            }
            catch (Exception ex)                   //try catch block will handle the exception to ensure that the application does not cause an unhandled exception.
            {
                throw ex;
            }
            return result;
        }
    }
}
