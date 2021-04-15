using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace General_Insurance.Models
{
    public class UserDataModel
    {
        public long MobNo { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public DateTime DOB { get; set; }

    }
}