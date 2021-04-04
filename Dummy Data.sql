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
insert into UserDetails Values (9123456789,'mitesh@gmail.com','mitesh09', 'test09', 'Vikhroli','09-11-1998');
insert into UserDetails Values (8123456789,'azim@gmail.com','azim08', 'test08', 'Mulund','08-01-1998');
insert into UserDetails Values (7123456789,'mrunal@gmail.com','mrunal07', 'test07', 'Andheri','07-02-1998');
insert into UserDetails Values (6123456789,'nupur@gmail.com','nupur06', 'test06', 'Airoli','06-03-1998');
insert into UserDetails Values (5123456789,'azar@gmail.com','azar05', 'test05', 'Chennai','05-14-1998');
select * from UserDetails

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

select * from VehicleDetails

insert into PolicyDetails Values(23,9123456789,1,'BAJAJ ALLIANZ',10,20000,'ACTIVE','12-12-2012','11-12-2022');
insert into PolicyDetails Values(24,8123456789,2,'BAJAJ ALLIANZ',5,1200,'ACTIVE','11-1-2009','11-1-2019');
insert into PolicyDetails Values(89,7123456789,3,'BAJAJ ALLIANZ',9,8900,'ACTIVE','1-3-2008','1-13-2022');
insert into PolicyDetails Values(34,6123456789,4,'BAJAJ ALLIANZ',7,2890,'ACTIVE','1-12-2013','1-12-2022');
insert into PolicyDetails Values(56,5123456789,5,'BAJAJ ALLIANZ',5,2300,'ACTIVE','11-11-2012','11-12-2022');

select * from   PolicyDetails

insert into ClaimDetails Values(1,9123456789,1,23,'Accident','Approved',300000,'12-10-2010');
insert into ClaimDetails Values(2,8123456789,2,24,'Accident','Approved',37000,'2-08-2010');
insert into ClaimDetails Values(3,7123456789,3,89,'Accident','Approved',200000,'12-11-2008');
insert into ClaimDetails Values(5,5123456789,5,56,'Accident','Pending',400000,'12-08-2008');

select * from ClaimDetails


Drop Table VehicleDetails 
Drop Table UserDetails
Drop Table PolicyDetails
Drop Table ClaimDetails