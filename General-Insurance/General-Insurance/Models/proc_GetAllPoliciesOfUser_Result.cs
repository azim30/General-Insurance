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
    
    public partial class proc_GetAllPoliciesOfUser_Result
    {
        public int PolicyNo { get; set; }
        public string UserMobNo { get; set; }
        public Nullable<int> VehId { get; set; }
        public string PolicyName { get; set; }
        public int Period { get; set; }
        public decimal PolicyAmt { get; set; }
        public string PolicyStatus { get; set; }
        public System.DateTime StartDate { get; set; }
    }
}