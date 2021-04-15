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
    public class VehicleAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();

        [HttpGet]
        [Route("api/VehicleAPI/GetAllVehicles")]
        public IEnumerable<VehicleDataModel> GetAllVehicles()
        {
            try
            {
                var data = from u in db.VehicleDetails
                           select new VehicleDataModel
                           {
                               VehicleID = u.VehicleID,
                               UserMobNo = u.UserMobNo,
                               VehicleType = u.VehicleType,
                               Manufacturer = u.Manufacturer,
                               Model = u.Model,
                               DrivingLicense = u.DrivingLicense,
                               RegistrationNo = u.RegistrationNo,
                               PurchaseDate = u.PurchaseDate,
                               Price = u.Price,
                               ChassisNo = u.ChassisNo,
                               EngineNo = u.EngineNo,

                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/VehicleAPI/RegisterVehicle")]
        [HttpPost]
        public bool Post([FromBody] VehicleDetail v)
        {
            try
            {
                db.VehicleDetails.Add(v);
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
        [Route("api/VehicleAPI/GetVehicleByID/{id}")]
        [HttpGet]
        public VehicleDetail Get(int id)
        {
            try
            {
                var data = db.VehicleDetails.Where(x => x.VehicleID == id).SingleOrDefault();
                if (data == null)
                {
                    throw new Exception("Invalid");
                }
                else
                    return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
