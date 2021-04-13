import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private httpc:HttpClient) { }
   public addMotorClaim(

        Policy_Id: any,
    
            Name: any,
    
            Mobile_Number: any,
    
            Reason: any,
    
            Date_Of_Applying: any,
    
            Estimated_Amount_For_Repair: any,
    
            licenceFile:File,
    
            rcFile:File,
    
            insuranceFile:File,
    
            billFile:File,
    
      )
    
      {
    
        const formData=new FormData();
    
        formData.append("Policy_Id",Policy_Id);
    
        formData.append("Name",Name);
    
        formData.append("Mobile_Number",Mobile_Number);
    
        formData.append("Reason",Reason);
    
        formData.append("Date_Of_Applying",Date_Of_Applying);
    
        formData.append("Estimated_Amount_For_Repair",Estimated_Amount_For_Repair);
    
        formData.append("License_Copy",licenceFile,licenceFile.name);
    
        formData.append("RC_Copy",rcFile,rcFile.name);
    
        formData.append("Insurance_Copy",insuranceFile,insuranceFile.name);
    
        formData.append("Bill_Copy",billFile,billFile.name)
    
        return this.httpc.post("http://localhost:49356/api/Claim/Accident",formData);
    
      }
    public addMotorClaimTheft(

          Policy_Id: any,
      
              Name: any,
      
              Mobile_Number: any,
      
              Reason: any,
      
              Date_Of_Applying: any,
      
              licenceFile:File,
      
              rcFile:File,
      
              insuranceFile:File,
      
              rtoFile:File,
      
        )
      
        {
      
          const formData=new FormData();
      
          formData.append("Policy_Id",Policy_Id);
      
          formData.append("Name",Name);
      
          formData.append("Mobile_Number",Mobile_Number);
      
          formData.append("Reason",Reason);
      
          formData.append("Date_Of_Applying",Date_Of_Applying);
      
          formData.append("License_Copy",licenceFile,licenceFile.name);
      
          formData.append("RC_Copy",rcFile,rcFile.name);
      
          formData.append("Insurance_Copy",insuranceFile,insuranceFile.name);
      
          formData.append("Authenticated_Letter_from_RTO",rtoFile,rtoFile.name)
      
          return this.httpc.post("http://localhost:49356/api/Claim/Theft",formData);
      
        }
      
}
