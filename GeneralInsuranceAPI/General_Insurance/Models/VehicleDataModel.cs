using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class VehicleDataModel
    {
        public int? VehicleID { get; set; }
        public long UserMobNo { get; set; }
        public string Maufacturer { get; set; }
        public string Model { get; set; }
        public string VehicleType { get; set; }
        public string DrivingLicense { get; set; }
        public string RegistrationNo { get; set; }
        public string EngineNo { get; set; }
        public string ChassisNo { get; set; }
        public DateTime PurchaseDate { get; set; }

    }

}