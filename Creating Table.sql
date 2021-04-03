
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

--3. Creating table VehicleDetails

create table VehicleDetails(
VehicleID int primary key,
UserMobNo numeric references UserDetails(MobNo) ,
Maufacturer varchar(50) not null,
Model varchar(50) not null,
VehicleType varchar(30) not null,
DrivingLicense varchar(30) not null,
RegistrationNo varchar(10) not null, --the one written on number plate
EngineNo varchar(20) not null,
ChassisNo varchar (20) not null, 
PurchaseDate date not null,
)

--4.Creating table PolicyDetails

create table PolicyDetails(
PolicyNo int primary key,
UserMobNo numeric references UserDetails(MobNo) ,
VehId int references VehicleDetails(VehicleID),
PolicyName varchar(50) not null,
Period int not null,
PolicyAmt money not null,
PolicyStatus varchar(20) not null,
StartDate date not null,
EndDate date not null,
)

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

