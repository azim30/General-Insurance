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
    [Route("api/ContactUsAPI")]
    public class ContactUsController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/ContactUsAPI/GetAllDetails")]
        public IEnumerable<ContactDataModel> Get()
        {
            try
            {
                var data = from u in db.ContactUs
                           select new ContactDataModel
                           {
                               UserName = u.UserName,
                               Email = u.Email,
                               MobNo = u.MobNo,
                               Subject=u.Subject,
                               Message=u.Message
                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/ContactUsAPI/NewData")]
        [HttpPost]
        public bool Post([FromBody] ContactU v)
        {
            try
            {
                db.ContactUs.Add(v);
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
