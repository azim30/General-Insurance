using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using General_Insurance.Models;
using System.Web.Http.Cors;
using System.Text;
using System.Runtime;

namespace General_Insurance.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/UserAPI")]
    public class UserAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/UserAPI/GetAllUsers")]
        public IEnumerable<UserDataModel> Get()
        {
            try
            {
                var data = from u in db.UserDetails
                           select new UserDataModel
                           {
                               CustID= u.CustID,
                               MobNo = u.MobNo,
                               Email = u.Email,
                               UserName = u.UserName,
                               Address = u.Address,
                               DOB = u.DOB,
                               Gender= u.Gender
                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpGet]
        [Route("api/UserAPI/GetAllVehicles")]
        public IEnumerable<VehicleDataModel> GetVehicle()
        {
            try
            {
                var data = from u in db.VehicleDetails
                           select new VehicleDataModel
                           {
                               VehicleID=u.VehicleID,
                               UserMobNo=u.UserMobNo,
                               VehicleType=u.VehicleType,
                               Manufacturer=u.Manufacturer,
                               Model=u.Model,
                               DrivingLicense=u.DrivingLicense,
                               RegistrationNo=u.RegistrationNo,
                               PurchaseDate=u.PurchaseDate,
                               Price=u.Price,
                               ChassisNo=u.ChassisNo,
                               EngineNo=u.EngineNo,
                               
                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [Route("api/UserAPI/Login/{mob}/{pwd}")]
        [HttpGet]
        public string Get(string mob, string pwd)
        {
            string result = "";
            try
            {
                pwd = Convert.ToBase64String(System.Security.Cryptography.SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(pwd)));
                var data = db.UserDetails.Where(x => x.MobNo == mob && x.Password == pwd);
                if (data.Count() == 0)
                    result = "invalid credentials";
                else
                    result = "Login Successful";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }
        [Route("api/UserAPI/Register")]
        [HttpPost]
        public bool Post(UserDetail u)
        {
            try
            {
                Console.WriteLine(u.Password);
                u.Password= Convert.ToBase64String(System.Security.Cryptography.SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(u.Password)));
                db.UserDetails.Add(u);
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



        [Route("api/UserAPI/Contact")]
        [HttpPost]
        public bool PostContact(ContactU u)
        {
            try
            {
                db.ContactUs.Add(u);
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


        [HttpGet]
        [Route("api/UserAPI/GetAllContact")]
        public IEnumerable<ContactDataModel> GetContact()
        {
            try
            {
                var data = from u in db.ContactUs
                           select new ContactDataModel
                           {
                               MobNo = u.MobNo,
                               Email = u.Email,
                               UserName = u.UserName,
                               Subject=u.Subject,
                               Message=u.Message
                           };
                return data;
            }
            //this Get() method retrieves all employees from the table
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [Route("api/UserAPI/CheckEmail/{email}")]
        [HttpGet]
        public string Get(string email)
        {
            string result = "";
            try
            {
                var data = db.UserDetails.Where(x => x.Email == email).SingleOrDefault();
                if (data != null)
                {
                    result = "success";
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;

        }


        [Route("api/UserAPI/VerifyLinkEmail")]
        [HttpPost]
        public string post([FromBody] UserDetail usr)
        {
            string result = "";
            try
            {
                var data = db.UserDetails.Where(x => x.Email == usr.Email).FirstOrDefault();
                if (data == null)
                    return result;
                string OTP = GeneratePassword();
                data.ActivetionCode = Guid.NewGuid();
                data.OTP = OTP;
                db.Entry(data).State = System.Data.EntityState.Modified;
                var res = db.SaveChanges();
                if (res > 0)
                {
                    ForgetPasswordEmailToUser(data.Email, data.ActivetionCode.ToString(), data.OTP);
                    result = "success";
                    return result;
                }
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public string GeneratePassword()                //Generates OTP for ForgotPassword
        {
            string OTPLength = "4";
            string OTP = string.Empty;

            string Chars = string.Empty;
            Chars = "1,2,3,4,5,6,7,8,9,0";

            char[] seplitChar = { ',' };
            string[] arr = Chars.Split(seplitChar);
            string NewOTP = "";
            string temp = "";
            Random rand = new Random();
            for (int i = 0; i < Convert.ToInt32(OTPLength); i++)
            {
                temp = arr[rand.Next(0, arr.Length)];
                NewOTP += temp;
                OTP = NewOTP;
            }
            return OTP;
        }

        public void ForgetPasswordEmailToUser(string emailid, string activationCode, string OTP)
        {
            var GenarateUserVerificationLink = "//localhost:4200/forget-password";
            var link = GenarateUserVerificationLink;


            //var link= Request.RequestUri.AbsoluteUri.Replace(Request.RequestUri.PathAndQuery, GenarateUserVerificationLink);
            //string current_url = System.Web.HttpContext.Current.Request.Url.ToString();
            //var link = System.Web.HttpContext.Current.Request.Url.ToString().Replace(current_url, GenarateUserVerificationLink);

            var fromMail = new MailAddress("projectgiteam5@gmail.com", "Team05"); //enter your mail id
            var fromEmailpassword = "Project@5"; // Set your email password
            var toEmail = new MailAddress(emailid);

            var smtp = new SmtpClient();
            smtp.UseDefaultCredentials = false;
            smtp.EnableSsl = true;
            smtp.Credentials = new NetworkCredential(fromMail.Address, fromEmailpassword);
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            var Message = new MailMessage(fromMail, toEmail);
            Message.Subject = "Password Reset-Demo";
            Message.Body = "< br /> Please click on the below link for password change " + "<br/><a href=" + link + ">" + link + "</a>" +
              "<br/> OTP for password change : " + OTP;
            Message.IsBodyHtml = true;

            smtp.Send(Message);
        }
            [Route("api/UserAPI/SetNewPassword")]
            [HttpPost]
            public bool Put([FromBody] UserDetail usr)
            {
                bool result = false;
                try
                {
                    string otp = usr.OTP; ;
                    string NewPass = usr.Password;

                    var res = db.proc_UpdatePassword(otp, NewPass);
                    if (res > 0)
                    {
                        result = true;
                        return result;
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return result;
            }
        }

    }
