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
    using System.Collections.Generic;
    
    public partial class PolicyDetail
    {
        public PolicyDetail()
        {
            this.ClaimDetails = new HashSet<ClaimDetail>();
            this.MotorClaimDetailsTables = new HashSet<MotorClaimDetailsTable>();
        }
    
        public int PolicyNo { get; set; }
        public string UserMobNo { get; set; }
        public Nullable<int> VehId { get; set; }
        public string PolicyName { get; set; }
        public int Period { get; set; }
        public decimal PolicyAmt { get; set; }
        public string PolicyStatus { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
    
        public virtual ICollection<ClaimDetail> ClaimDetails { get; set; }
        public virtual UserDetail UserDetail { get; set; }
        public virtual VehicleDetail VehicleDetail { get; set; }
        public virtual ICollection<MotorClaimDetailsTable> MotorClaimDetailsTables { get; set; }
    }
}
