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
    
    public partial class proc_GetAllClaimsOfUser_Result
    {
        public int ClaimNo { get; set; }
        public Nullable<decimal> UserMobNo { get; set; }
        public Nullable<int> VehId { get; set; }
        public Nullable<int> PolNo { get; set; }
        public string ClaimReason { get; set; }
        public string ClaimStatus { get; set; }
        public decimal ClaimAmt { get; set; }
        public System.DateTime ClaimDate { get; set; }
    }
}
