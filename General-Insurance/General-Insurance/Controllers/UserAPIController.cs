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
    [EnableCors(origins: "*", headers: "*", methods: "*")]               //cross-domain access to your Web API methods.
    [Route("api/UserAPI")]
    public class UserAPIController : ApiController
    {
        GeneralInsuranceEntities db = new GeneralInsuranceEntities();
        [HttpGet]
        [Route("api/UserAPI/GetAllUsers")]                               // To get all users 
        public IEnumerable<UserDataModel> Get()
        {
            try                                                            //try catch block will handle the exception to ensure that the application does not cause an unhandled exception.
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
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [Route("api/UserAPI/GetUserName/{id}")]           // will get particular row by id
        [HttpGet]
        public string GetName(string id)
        {
            try
            {
                var res = db.UserDetails.Where(x=> x.MobNo == id ).SingleOrDefault();
                if (res == null)
                    throw new Exception("Invalid id");
                else
                    return res.UserName;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


       
        [Route("api/UserAPI/Login/{mob}/{pwd}")]               // Login using Mob and Pwd
        [HttpGet]
        public string Get(string mob, string pwd)
        {
            string result = "";
            try
            {
                pwd = Convert.ToBase64String(System.Security.Cryptography.SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(pwd)));   // For password encryption. Base64 is a way to encode binary data into an ASCII character. Sha256 is most secure.
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
        [Route("api/UserAPI/Register")]             // To register New User
        [HttpPost]
        public bool Post(UserDetail u)
        {
            try
            {
                Console.WriteLine(u.Password);
                u.Password= Convert.ToBase64String(System.Security.Cryptography.SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(u.Password)));
                var data = db.UserDetails.Where(x => x.Email == u.Email).SingleOrDefault();
                if (data != null)
                {
                    return false;
                }
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



       
        [Route("api/UserAPI/CheckEmail/{email}")]      // To check whether Email is present or not. 
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


        [Route("api/UserAPI/VerifyLinkEmail")]                   // For verification link
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
                data.ActivetionCode = Guid.NewGuid();                   //A GUID (Global Unique IDentifier) is a 128-bit integer used as a unique identifier.
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
            [Route("api/UserAPI/SetNewPassword")]           // To change Password
            [HttpPost]
            public bool Put([FromBody] UserDetail usr)
            {
                bool result = false;
                try
                {
                    string otp = usr.OTP; ;
                usr.Password = Convert.ToBase64String(System.Security.Cryptography.SHA256.Create().ComputeHash(Encoding.UTF8.GetBytes(usr.Password)));

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
