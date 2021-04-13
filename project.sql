--1. Creating Data base

create database GeneralInsurance

--2. Creating table UserDetails

create table UserDetails
( MobNo numeric primary key, 
Email varchar(50) unique,
UserName varchar(50) not null,
Password varchar(50) not null ,
Address varchar(70) not null,
DOB date not null
)

insert into UserDetails Values (9123456789,'mitesh@gmail.com','mitesh09', 'test09', 'Vikhroli','09-11-1998');
insert into UserDetails Values (8123456789,'azim@gmail.com','azim08', 'test08', 'Mulund','08-01-1998');
insert into UserDetails Values (7123456789,'mrunal@gmail.com','mrunal07', 'test07', 'Andheri','07-02-1998');
insert into UserDetails Values (6123456789,'nupur@gmail.com','nupur06', 'test06', 'Airoli','06-03-1998');
insert into UserDetails Values (5123456789,'azar@gmail.com','azar05', 'test05', 'Chennai','05-14-1998');
select * from UserDetails

  
create or alter proc proc_UserLoginCheck(@uid varchar(15),@pswd varchar(15))
as
begin
	select MobNo from UserDetails where UserName =@uid and Password=@pswd
end
proc_UserLoginCheck 'mitesh09','test09'
proc_UserLoginCheck 'azar05','test05'

--3. Creating table VehicleDetails

create table VehicleDetails(
VehicleID int primary key,
UserMobNo numeric foreign key references UserDetails(MobNo) ,
Maufacturer varchar(50) not null,
Model varchar(50) not null,
VehicleType varchar(30) not null,
DrivingLicense varchar(30) not null,
RegistrationNo varchar(10) not null, --the one written on number plate
EngineNo varchar(20) not null,
ChassisNo varchar (20) not null, 
PurchaseDate date not null
)

select * from VehicleDetails
insert into VehicleDetails Values(1,9123456789,'Maruti','Maruti Dezirezxi','Four Wheeler','MH18202000008775',
'MH13HQ9868','K12HJ7507844','KH4CGF63SKJ687058','08-08-2019');
insert into VehicleDetails Values(2,8123456789,'Honda','Maruti Suzuki','Two Wheeler','MH15202000008775',
'MH11HQ9908','A12MN7503323','MA4CGF63SKJ687058','08-08-2002');
insert into VehicleDetails Values(3,7123456789,'Honda','Maruti ALTO','Two Wheeler','MH35201000008775',
'MH11HQ9898','B12MN7503344','OP4CGF63SKJ687058','08-09-2002');
insert into VehicleDetails Values(4,6123456789,'Tata','Truck','Four Wheeler','MH12202000008775',
'MH14DG9768','K56MN7503344','KL4CGF63SKJ687058','11-08-2019');
insert into VehicleDetails Values(5,5123456789,'Kia','Maruti Dezirezxi','Four Wheeler','MH14202000008775',
'MH11CH9863','K12LK7503344','JK4CGF63SKJ687058','02-08-2009');

--4.Creating table PolicyDetails

create table PolicyDetails(
PolicyNo int primary key,
UserMobNo numeric foreign key references UserDetails(MobNo) ,
VehId int references VehicleDetails(VehicleID),
PolicyName varchar(50) not null,
Period int not null,
PolicyAmt money not null,
PolicyStatus varchar(20) not null,
StartDate date not null,
EndDate date not null,
)

insert into PolicyDetails Values(23,9123456789,1,'BAJAJ ALLIANZ',10,20000,'ACTIVE','12-12-2012','11-12-2022');
insert into PolicyDetails Values(24,8123456789,2,'BAJAJ ALLIANZ',5,1200,'ACTIVE','11-1-2009','11-1-2019');
insert into PolicyDetails Values(89,7123456789,3,'BAJAJ ALLIANZ',9,8900,'ACTIVE','1-3-2008','1-13-2022');
insert into PolicyDetails Values(34,6123456789,4,'BAJAJ ALLIANZ',7,2890,'ACTIVE','1-12-2013','1-12-2022');
insert into PolicyDetails Values(56,5123456789,5,'BAJAJ ALLIANZ',5,2300,'ACTIVE','11-11-2012','11-12-2022');
select * from PolicyDetails

--5. Creating Table ClaimDetails

create table ClaimDetails
(
	ClaimNo int primary key,
	UserMobNo numeric references UserDetails(MobNo) ,
	VehId int references VehicleDetails(VehicleID),
	PolNo int references PolicyDetails(PolicyNo),
	ClaimReason varchar(100) not null,
	ClaimStatus varchar(20) not null,
	ClaimAmt money not null,
	ClaimDate date not null
)

select * from ClaimDetails
insert into ClaimDetails Values(1,9123456789,1,23,'Accident','Approved',300000,'12-10-2010');
insert into ClaimDetails Values(2,8123456789,2,24,'Accident','Approved',37000,'2-08-2010');
insert into ClaimDetails Values(3,7123456789,3,89,'Accident','Approved',200000,'12-11-2008');
insert into ClaimDetails Values(5,5123456789,5,56,'Accident','Pending',400000,'12-08-2008');



--6. Creating Table ticket details
create table TicketDetails
(
	TicketNo int primary key,
	Source varchar(10) not null,
	Destination varchar(10) not null,
	DateOfTravel date not null,
	NoOfPassengers int not null,
	--InsuraceAmount money not null,
	ValidityOfInsurance numeric not null
)
select * from TicketDetails
--To calculate the premium
create or alter proc proc_calcprem(@policyid bigint, @manu varchar(20),@model varchar(40))
as
begin
select Maufacturer, PolicyNo  from PolicyDetails p, VehicleDetails v where v.Maufacturer=@manu and v.Model=@model and p.PolicyNo=@policyid 
end

exec proc_calcprem 23, 'Maruti', 'Maruti Dezirezxi'

--Get all policies
create or alter proc proc_GetAllPoliciesOfUser(@mobile varchar(12))
as
begin
	select * from PolicyDetails where UserMobNo=@mobile
end

exec proc_GetAllPoliciesOfUser '9123456789'

--Get all claims
create or alter proc proc_GetAllClaimsOfUser(@mobile varchar(12))
as
begin
	select * from ClaimDetails where UserMobNo=@mobile
end

exec proc_GetAllClaimsOfUser '9123456789'

create table MotorClaimDetailsTable
(
Claim_Id bigint identity(110001,1) primary key,
Policy_Id int foreign key references PolicyDetails(PolicyNo),
Name varchar(30),
Mobile_Number varchar(12),
Reason varchar(15),
Date_Of_Applying date,
Insurance_Copy varchar(200),
License_Copy varchar(200),
RC_Copy varchar(200),
Authenticated_Letter_from_RTO varchar(200),
Estimated_Amount_For_Repair float,
Bill_Copy varchar(200),
Amount_Sanctioned float, 
Claim_Status varchar(20),
)

select * from MotorClaimDetailsTable

create PROCEDURE sp_insertMotorClaim (
										@Policy_Id   int,  
                                          @Name    VARCHAR(200),  
                                          @Mobile_Number      varchar(30),  
                                          @Reason         VARCHAR(12), 
                                          @Date_Of_Applying date,
										  @Estimated_Amount_For_Repair float,
										  @License_Copy varchar(200),
										  @RC_Copy varchar(200),
										  @Insurance_Copy varchar(200),
										  @Bill_Copy varchar(200),
										  @Authenticated_Letter_from_RTO varchar(200),
										  @Claim_Status varchar(20)
										    )  
AS  
  BEGIN  
     
            INSERT INTO MotorClaimDetailsTable  
                        (Policy_Id   ,  
                                          Name,  
                                          Mobile_Number,  
                                          Reason, 
                                          Date_Of_Applying ,
										  Estimated_Amount_For_Repair ,
										  License_Copy ,
										  RC_Copy ,
										  Insurance_Copy ,
										  Bill_Copy ,
										  Authenticated_Letter_from_RTO ,
										  Claim_Status  
)  
            VALUES     ( 				  @Policy_Id   ,  
                                          @Name,  
                                          @Mobile_Number,  
                                          @Reason, 
                                          @Date_Of_Applying ,
										  @Estimated_Amount_For_Repair ,
										  @License_Copy ,
										  @RC_Copy ,
										  @Insurance_Copy ,
										  @Bill_Copy ,
										  @Authenticated_Letter_from_RTO ,
										  @Claim_Status 
										   )  
        END
exec sp_insertMotorClaim @Policy_Id=23,@Name='azar',@Mobile_Number='9894101041',@Reason='Accident',@Date_Of_Applying='2020-12-12',@Estimated_Amount_For_Repair=230000.0,@License_Copy='azarlic.txt'
,@RC_Copy='azar.txt',@Insurance_Copy='azar2.txt',@Bill_Copy='azar3.txt',@Authenticated_Letter_from_RTO='azar4.txt',@Claim_Status='pending'