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
    [Route("api/TravelAPI")]
    public class TravelAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/TravelAPI/GetAllTravels")]                        // To get all Travels registered by user
        public IEnumerable<TravelDataModel> GetAllTravels()
        {
            try
            {
                var data = from p in db.TravelInsurances
                           select new TravelDataModel
                           {
                               PolicyNo = p.PolicyNo,
                               Source = p.Source,
                               Destination = p.Destination,
                               TripStart = p.TripStart,
                               TripEnd = p.TripEnd,
                               Name = p.Name,
                               Address = p.Address,
                               Age = p.Age,
                               MobileNo = p.MobileNo,
                               NoOfPassengers = p.NoOfPassengers,
                               IPlan = p.IPlan,
                               Amount= p.Amount
                               

                           };
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/TravelAPI/RegisterTravelDetails")]           // To register new Travel
        [HttpPost]
        public bool Post( [FromBody]TravelInsurance u)
        {
            try
            {
                db.TravelInsurances.Add(u);
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
        [Route("api/TravelAPI/GetTravelByID/{id}")]                  // Get Particular User by ID
        [HttpGet]
        public IEnumerable<proc_GetAllTravelOfUser_Result> Get(string id)
        {
            try
            {
                var res = db.proc_GetAllTravelOfUser(id);
                if (res == null)
                    throw new Exception("Invalid travelid");
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