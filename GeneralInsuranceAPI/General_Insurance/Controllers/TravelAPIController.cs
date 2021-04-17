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
    [Route("api/TravelAPI/RegisterTravelDetails")]
    [HttpPost]
    public bool Post(TravelInsurance u)
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
  }
}
