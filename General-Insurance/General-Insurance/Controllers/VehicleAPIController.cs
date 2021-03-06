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
    [Route("api/VehicleAPI")]
    public class VehicleAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();

        [HttpGet]
        [Route("api/VehicleAPI/GetAllVehicles")]                 // To get all registered vehicles
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
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/VehicleAPI/GetVehicleByID/{id}")]                       // To get Particular Vehicle By ID
        [HttpGet]
        public IEnumerable<proc_GetAllVehiclesOfUser_Result> Get(string id)
        {
            try
            {
                var res = db.proc_GetAllVehiclesOfUser(id);
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
        [Route("api/VehicleAPI/RegisterVehicle")]                  // To register new Vehicle 
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
        [Route("api/VehicleAPI/DeleteVehicle/{id}")]                        // To delete Vehicle
        [HttpDelete]
        public bool Delete(int id)
        {
            try
            {
                var del = db.VehicleDetails.Where(x => x.VehicleID == id).SingleOrDefault();
                if (del == null)
                    throw new Exception("Id cannot be null");
                else
                {
                    db.VehicleDetails.Remove(del);
                    var res = db.SaveChanges();
                    if (res > 0)
                        return true;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return false;
        }
       

    }
}
