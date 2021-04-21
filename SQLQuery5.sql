
---- database
create database GeneralInsurance




----User Details Table (1)
create table UserDetails
( CustID int identity(1,1),
MobNo varchar(50) primary key, 
Email varchar(50) unique,
UserName varchar(50) not null,
Password varchar(50) not null ,
Address varchar(70) not null,
DOB date not null
)


--- added this to change password
ALTER TABLE UserDetails ADD
EmailVerification [bit] Null,
[ActivetionCode] [uniqueidentifier],
[OTP] [nvarchar](4) Null
---added gender column
ALTER TABLE UserDetails ADD
Gender varchar(20)

insert into UserDetails Values (9123456789,'mitesh@gmail.com','mitesh09', 'test09', 'Vikhroli','09-11-1998');
insert into UserDetails Values (8123456789,'azim@gmail.com','azim08', 'test08', 'Mulund','08-01-1998');
insert into UserDetails Values (7123456789,'mrunal@gmail.com','mrunal07', 'test07', 'Andheri','07-02-1998');
insert into UserDetails Values (6123456789,'nupur@gmail.com','nupur06', 'test06', 'Airoli','06-03-1998');
insert into UserDetails Values (5123456789,'azar@gmail.com','azar05', 'test05', 'Chennai','05-14-1998');
select * from UserDetails

----- sp for reset password

create or alter proc proc_UpdatePassword(@otp varchar(20),@Password varchar(50))
as
begin 
	update UserDetails set Password=@Password where OTP=@otp
	update UserDetails set OTP=NUll where OTP=@otp
end
 ------sp for login
create or alter proc proc_UserLoginCheck(@uid varchar(15),@pswd varchar(15))
as
begin
	select MobNo from UserDetails where UserName =@uid and Password=@pswd
end
proc_UserLoginCheck 'mitesh09','test09'

---- To find username from userdetails table
create or alter proc proc_UserName(@mobile varchar(12))
as
begin
	select UserName from UserDetails where MobNo=@mobile
end

exec proc_UserName '1234567899'















-- Creating table VehicleDetails (2)

create table VehicleDetails(
VehicleID int primary key identity(1,1),
UserMobNo varchar(50) foreign key references UserDetails(MobNo) ,
Manufacturer varchar(50) not null,
Model varchar(50) not null,
VehicleType varchar(30) not null,
DrivingLicense varchar(30) not null,
RegistrationNo varchar(20) not null, --the one written on number plate
EngineNo varchar(20) not null,
ChassisNo varchar (20) not null, 
PurchaseDate date not null,
Price money
)

select * from VehicleDetails
insert into VehicleDetails Values(9123456789,'Maruti','Maruti Dezirezxi','Four Wheeler','MH18202000008775',
'MH13HQ9868','K12HJ7507844','KH4CGF63SKJ687058','08-08-2019', 800000);
insert into VehicleDetails Values(8123456789,'Honda','Maruti Suzuki','Two Wheeler','MH15202000008775',
'MH11HQ9908','A12MN7503323','MA4CGF63SKJ687058','08-08-2002', 1000000);
insert into VehicleDetails Values(7123456789,'Honda','Maruti ALTO','Two Wheeler','MH35201000008775',
'MH11HQ9898','B12MN7503344','OP4CGF63SKJ687058','08-09-2002', 1500000);
insert into VehicleDetails Values(6123456789,'Tata','Truck','Four Wheeler','MH12202000008775',
'MH14DG9768','K56MN7503344','KL4CGF63SKJ687058','11-08-2019', 200000);
insert into VehicleDetails Values(5123456789,'Kia','Maruti Dezirezxi','Four Wheeler','MH14202000008775',
'MH11CH9863','K12LK7503344','JK4CGF63SKJ687058','02-08-2009',450000);


-- Procedures to find estimate amt
--1)
create proc proc_GetManufacturers
as
begin
	select distinct Manufacturer from VehicleDetails
end

exec proc_GetManufacturers

---2)
create proc proc_GetCarsOfManufacturer(@manu varchar(20))
as
begin
	select Model from VehicleDetails where Manufacturer=@manu
end

exec proc_GetCarsOfManufacturer 'Honda'

---3)
create proc proc_GetBrandNewPrice(@manu varchar(20), @model varchar(40))
as
 begin
	select  PurchaseDate ,Price from VehicleDetails where Manufacturer=@manu and Model=@model
 end

 exec proc_GetBrandNewPrice 'Honda' , 'Maruti ALTO'

 
 ---4)
 create or alter proc proc_GetAllVehiclesOfUser(@mobile varchar(12))
as
begin
	select * from VehicleDetails where UserMobNo=@mobile
end

exec proc_GetAllVehiclesOfUser '9123456789'
















--Creating table PolicyDetails (3)

create table PolicyDetails(
PolicyNo int primary key identity(1,1),
UserMobNo varchar(50) foreign key references UserDetails(MobNo) ,
VehId int references VehicleDetails(VehicleID),
PolicyName varchar(50) not null,
Period int not null,
PolicyAmt money not null,
PolicyStatus varchar(20) not null,
StartDate date not null,
EndDate date not null,
)
alter table PolicyDetails
drop column EndDate
insert into PolicyDetails Values(9123456789,1,'BAJAJ ALLIANZ',10,20000,'ACTIVE','12-12-2012','11-12-2022');
insert into PolicyDetails Values(8123456789,2,'BAJAJ ALLIANZ',5,1200,'ACTIVE','11-1-2009','11-1-2019');
insert into PolicyDetails Values(7123456789,3,'BAJAJ ALLIANZ',9,8900,'ACTIVE','1-3-2008','1-13-2022');
insert into PolicyDetails Values(6123456789,4,'BAJAJ ALLIANZ',7,2890,'ACTIVE','1-12-2013','1-12-2022');
insert into PolicyDetails Values(5123456789,5,'BAJAJ ALLIANZ',5,2300,'ACTIVE','11-11-2012','11-12-2022');
select * from PolicyDetails









-- Creating Table ClaimDetails (4)

create table ClaimDetails
(
	ClaimNo int primary key identity (11,1),
	UserMobNo varchar(50) references UserDetails(MobNo) ,
	VehId int references VehicleDetails(VehicleID),
	PolNo int references PolicyDetails(PolicyNo),
	ClaimReason varchar(100) not null,
	ClaimStatus varchar(20) not null,
	ClaimAmt money not null,
	ClaimDate date not null
)


select * from ClaimDetails
insert into ClaimDetails Values(9123456789,1,23,'Accident','Approved',300000,'12-10-2010');
insert into ClaimDetails Values(8123456789,2,24,'Accident','Approved',37000,'2-08-2010');
insert into ClaimDetails Values(7123456789,3,89,'Accident','Approved',200000,'12-11-2008');
insert into ClaimDetails Values(1234567899,6,14,'Theft','Pending',400000,'12-08-2008');

---- to change status to approve 
create proc proc_ApproveMotorClaim(@policyid int)
as
begin 
	update ClaimDetails set ClaimStatus='Approved' where PolNo=@policyid;
	
end

exec proc_ApproveMotorClaim 12


----to change status to decline
create proc proc_DeclineMotorClaim(@policyid int)
as
begin 
	update ClaimDetails set ClaimStatus='Declined' where PolNo=@policyid;
	
end

exec proc_DeclineMotorClaim 12









----- creating travel insurance (5)
create table TravelInsurance
(
    PolicyNo int primary key identity(1,1) ,
	Source varchar(10) not null,
	Destination varchar(10) not null,
	TripStart date not null,
	TripEnd date not null,
	Name varchar(10) not null,
	Address varchar(50) not null,
	Age int  not null,
	MobileNo numeric not null,
	NoOfPassengers int not null,
	IPlan varchar(20) not null,
	Amount money not null
)
select * from TravelInsurance

---- to get all details of user 
create or alter proc proc_GetAllTravelOfUser(@mobile varchar(12))
as
begin
	select * from TravelInsurance where MobileNo=@mobile
end

exec proc_GetAllTravelOfUser '1234567899'




---- create travel claim (6)
create table TravelClaimDetails
(
Travel_Claim_Id int identity(1,1) primary key,
PolicyNo int foreign key references TravelInsurance(PolicyNo),
Reason_for_Claim varchar(30),
MobNo  varchar(50) foreign key references UserDetails(MobNo) ,
Amount money not null, 
Claim_Status varchar(20),
)
select * from TravelClaimDetails



---- to change status to approve
create proc proc_ApproveTravelClaim(@policyid int)
as
begin 
	update TravelClaimDetails set Claim_Status='Approved' where PolicyNo=@policyid;
	
end

exec proc_ApproveTravelClaim 1



------ to change status to decline
create proc proc_DeclineTravelClaim(@policyid int)
as
begin 
	update TravelClaimDetails set Claim_Status='Declined' where PolicyNo=@policyid;
	
end

exec proc_DeclineTravelClaim 1

----to get all travel claim of that user
create or alter proc proc_GetAllTravelClaimsOfUser(@mobile varchar(12))
as
begin
	select * from TravelClaimDetails where MobNo=@mobile
end

exec proc_GetAllTravelClaimsOfUser '1234567899'





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


-----creating contact us table (7)
create table ContactUs
( Id int primary key identity (1,1)  ,
UserName varchar(50) not null,
Email varchar(50) not null,
MobNo varchar(50) not null, 
Subject varchar(50) not null,
Message varchar(100) not null,
)

insert into ContactUs Values('Azim Shaikh', 'shaikh@gmail.com',9856741236,'ACTIVE','Hello How are you this is message');
select * from ContactUs


--- creating admin table (8)
create table AdminDetails
( AdminID int identity(1,1),
MobNo varchar(50) not null, 
Password varchar(50) not null 
)

insert into AdminDetails Values( 9876543211 , 'Azim@30');
insert into AdminDetails Values( 9856741236 , 'Mitesh@10');
insert into AdminDetails Values( 9856748886 , 'Nupur@20');
insert into AdminDetails Values(9856555236 , 'Mrunal@40');
insert into AdminDetails Values(9856544436 , 'Azhar@50');


select * from AdminDetails
select * from UserDetails
select * from ClaimDetails
select * from VehicleDetails
select * from PolicyDetails
select * from TravelInsurance
select * from TravelClaimDetails
select * from ContactUs

