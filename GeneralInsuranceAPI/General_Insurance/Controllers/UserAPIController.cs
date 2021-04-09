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
    [Route("api/UserAPI")]
    public class UserAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/UserAPI/GetAllUsers")]
        public IEnumerable<UserDataModel> Get()
        {
            try
            {
                var data = from u in db.UserDetails
                           select new UserDataModel
                           {
                               MobNo = u.MobNo,
                               Email = u.Email,
                               UserName = u.UserName,
                               Password = u.Password,
                               Address = u.Address,
                               DOB = u.DOB
                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/UserAPI/Login/{mob}/{pwd}")]
        [HttpGet]
        public string Get(long mob, string pwd)
        {
            string result = "";
            try
            {
                var data = db.UserDetails.Where(x => x.MobNo == mob && x.Password == pwd);
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
        [Route("api/UserAPI/Register")]
        [HttpPost]
        public bool Post(UserDetail u)
        {
            try
            {
                db.UserDetails.Add(u);
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
