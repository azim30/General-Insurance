//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace General_Insurance.Models
{
    using System;
    
    public partial class proc_GetAllVehiclesOfUser_Result
    {
        public int VehicleID { get; set; }
        public string UserMobNo { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public string VehicleType { get; set; }
        public string DrivingLicense { get; set; }
        public string RegistrationNo { get; set; }
        public string EngineNo { get; set; }
        public string ChassisNo { get; set; }
        public System.DateTime PurchaseDate { get; set; }
        public Nullable<decimal> Price { get; set; }
    }
}
