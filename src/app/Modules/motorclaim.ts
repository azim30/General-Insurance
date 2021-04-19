export class Motorclaim {​​

    Policy_Id: number;

    Name: string;

    Mobile_Number: string;

    Reason: string;

    Date_Of_Applying: string='';

    Estimated_Amount_For_Repair: number;

    License_Copy:string;

    RC_Copy:string;

    Insurance_Copy:string;

    Bill_Copy:string;

    Authenticated_Letter_from_RTO:string;

    

constructor(

    Policy_Id:number=0,

    Name: string='',

    Mobile_Number: string='',

    Reason: string='',

    Date_Of_Applying: string='',

    Estimated_Amount_For_Repair: number=0,

    License_Copy:string='',

    RC_Copy:string='',

    Insurance_Copy:string='',

    Bill_Copy:string='',

    Authenticated_Letter_from_RTO:string='',

    ){​​

        this.Policy_Id=Policy_Id;

        this.Name=Name;

        this.Mobile_Number=Mobile_Number;

        this.Reason=Reason;

        this.Date_Of_Applying=Date_Of_Applying;

        this.Estimated_Amount_For_Repair=Estimated_Amount_For_Repair;

        this.License_Copy=License_Copy;

        this.RC_Copy=RC_Copy;

        this.Insurance_Copy=Insurance_Copy;

        this.Bill_Copy=Bill_Copy;

        this.Authenticated_Letter_from_RTO=Authenticated_Letter_from_RTO;

       

    }​​

}