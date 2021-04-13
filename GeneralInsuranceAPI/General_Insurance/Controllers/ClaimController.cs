using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using General_Insurance.Models;
using System.Web.Http.Cors;
using System.Web;
using System.IO;
using System.Data.Entity;




namespace General_Insurance.Controllers
{
  [EnableCors(origins: "http://localhost :4200", headers: "*", methods: "*")]
  public class ClaimController : ApiController
  {
    GeneralInsuranceEntities2 objEntity = new GeneralInsuranceEntities2();
    public IEnumerable<MotorClaimDetailsTable> GetMotor()
    {
      return objEntity.MotorClaimDetailsTables.ToList();
    }
    //[HttpPost]
    [HttpPost]
    [Route("api/Claim/Accident")]
    public HttpResponseMessage PostClaimAccident()
    {
      string document1 = null;
      string document2 = null;
      string document3 = null;
      string document4 = null;

      var httpRequest = HttpContext.Current.Request;
      var postedFile = httpRequest.Files["License_Copy"];
      var postedFile2 = httpRequest.Files["RC_Copy"];
      var postedFile3 = httpRequest.Files["Insurance_Copy"];
      var postedFile4 = httpRequest.Files["Bill_Copy"];

      document1 = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(15).ToArray()).Replace(" ", "-");
      document2 = new string(Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(15).ToArray()).Replace(" ", "-");
      document3 = new string(Path.GetFileNameWithoutExtension(postedFile3.FileName).Take(15).ToArray()).Replace(" ", "-");
      document4 = new string(Path.GetFileNameWithoutExtension(postedFile4.FileName).Take(15).ToArray()).Replace(" ", "-");

      document1 = document1 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
      document2 = document2 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile2.FileName);
      document3 = document3 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile3.FileName);
      document4 = document4 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile4.FileName);

      var filepath = HttpContext.Current.Server.MapPath("~/Files/" + document1);
      var filepath2 = HttpContext.Current.Server.MapPath("~/Files/" + document2);
      var filepath3 = HttpContext.Current.Server.MapPath("~/Files/" + document3);
      var filepath4 = HttpContext.Current.Server.MapPath("~/Files/" + document4);

      postedFile.SaveAs(filepath);
      postedFile2.SaveAs(filepath2);
      postedFile3.SaveAs(filepath3);
      postedFile4.SaveAs(filepath4);

      MotorClaimDetailsTable motorClaim = new MotorClaimDetailsTable();
      motorClaim.Policy_Id = Convert.ToInt32(httpRequest["Policy_Id"]);
      motorClaim.Name = httpRequest["Name"];
      motorClaim.Mobile_Number = httpRequest["Mobile_Number"];
      motorClaim.Reason = httpRequest["Reason"];
      motorClaim.Date_Of_Applying = Convert.ToDateTime(httpRequest["Date_Of_Applying"]);
      motorClaim.Estimated_Amount_For_Repair = Convert.ToInt64(httpRequest["Estimated_Amount_For_Repair"]);
      motorClaim.License_Copy = filepath;
      motorClaim.RC_Copy = filepath2;
      motorClaim.Insurance_Copy = filepath3;
      motorClaim.Bill_Copy = filepath4;
      motorClaim.Claim_Status = "pending";
      motorClaim.Authenticated_Letter_from_RTO = "Not required";
     // DbContextTransaction transaction = objEntity.Database.BeginTransaction();
      if (ModelState.IsValid)
      {
        try
        {
          objEntity.sp_insertMotorClaim(
                               motorClaim.Policy_Id,
                               motorClaim.Name,
                               motorClaim.Mobile_Number,
                               motorClaim.Reason,
                               motorClaim.Date_Of_Applying,
                               motorClaim.Estimated_Amount_For_Repair,
                               motorClaim.License_Copy,
                               motorClaim.RC_Copy,
                               motorClaim.Insurance_Copy,
                               motorClaim.Bill_Copy,
                               motorClaim.Authenticated_Letter_from_RTO,
                               motorClaim.Claim_Status);
          objEntity.SaveChanges();
         // transaction.Commit();
        }
        catch (Exception)
        {
         // transaction.Rollback();
          return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not place request");
        }

      }
      return Request.CreateResponse(HttpStatusCode.Created, motorClaim);

    }
    [HttpPost]
    [Route("api/Claim/Theft")]
    public HttpResponseMessage PostClaimTheft()
    {
      string document1 = null;
      string document2 = null;
      string document3 = null;
      string document4 = null;

      var httpRequest = HttpContext.Current.Request;
      var postedFile = httpRequest.Files["License_Copy"];
      var postedFile2 = httpRequest.Files["RC_Copy"];
      var postedFile3 = httpRequest.Files["Insurance_Copy"];
      var postedFile4 = httpRequest.Files["Authenticated_Letter_from_RTO"];

      document1 = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(15).ToArray()).Replace(" ", "-");
      document2 = new string(Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(15).ToArray()).Replace(" ", "-");
      document3 = new string(Path.GetFileNameWithoutExtension(postedFile3.FileName).Take(15).ToArray()).Replace(" ", "-");
      document4 = new string(Path.GetFileNameWithoutExtension(postedFile4.FileName).Take(15).ToArray()).Replace(" ", "-");

      document1 = document1 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
      document2 = document2 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile2.FileName);
      document3 = document3 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile3.FileName);
      document4 = document4 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile4.FileName);

      var filepath = HttpContext.Current.Server.MapPath("~/Files/" + document1);
      var filepath2 = HttpContext.Current.Server.MapPath("~/Files/" + document2);
      var filepath3 = HttpContext.Current.Server.MapPath("~/Files/" + document3);
      var filepath4 = HttpContext.Current.Server.MapPath("~/Files/" + document4);

      postedFile.SaveAs(filepath);
      postedFile2.SaveAs(filepath2);
      postedFile3.SaveAs(filepath3);
      postedFile4.SaveAs(filepath4);

      MotorClaimDetailsTable motorClaim = new MotorClaimDetailsTable();
      motorClaim.Policy_Id = Convert.ToInt32(httpRequest["Policy_Id"]);
      motorClaim.Name = httpRequest["Name"];
      motorClaim.Mobile_Number = httpRequest["Mobile_Number"];
      motorClaim.Reason = httpRequest["Reason"];
      motorClaim.Date_Of_Applying = Convert.ToDateTime(httpRequest["Date_Of_Applying"]);
      motorClaim.Estimated_Amount_For_Repair = Convert.ToInt64(httpRequest["Estimated_Amount_For_Repair"]);
      motorClaim.License_Copy = filepath;
      motorClaim.RC_Copy = filepath2;
      motorClaim.Insurance_Copy = filepath3;
      motorClaim.Bill_Copy = "Not Required";
      motorClaim.Claim_Status = "pending";
      motorClaim.Authenticated_Letter_from_RTO = filepath4;
      //DbContextTransaction transaction = objEntity.Database.BeginTransaction();
      if (ModelState.IsValid)
      {
        try
        {
          objEntity.sp_insertMotorClaim(
                                 motorClaim.Policy_Id,
                                motorClaim.Name,
                               motorClaim.Mobile_Number,
                               motorClaim.Reason,
                               motorClaim.Date_Of_Applying,
                               motorClaim.Estimated_Amount_For_Repair,
                               motorClaim.License_Copy,
                               motorClaim.RC_Copy,
                               motorClaim.Insurance_Copy,
                               motorClaim.Bill_Copy,
                               motorClaim.Authenticated_Letter_from_RTO,
                               motorClaim.Claim_Status);
          objEntity.SaveChanges();
          //transaction.Commit();
        }
        catch (Exception)
        {
         // transaction.Rollback();
          return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not place request");
        }

      }
      return Request.CreateResponse(HttpStatusCode.Created, motorClaim);

    }

  }
}









  
