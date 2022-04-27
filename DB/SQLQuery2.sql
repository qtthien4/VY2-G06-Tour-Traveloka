  
 create database traveloka
 
 use traveloka
 
 create table country
(
	IdCountry char(20),
	CountryName ntext,
	imageUrl ntext
	PRIMARY KEY (IdCountry)
)

create table City
(
	IdCity char(20),	
	IdCountry char(20),
	CityName nvarchar(50)
	PRIMARY KEY (IdCity)
)


create table Partner
(
	IdPartner char(20),
	PartnerName nvarchar(50),	
	password char(200)
	PRIMARY KEY (IdPartner)
)

create table Activity
(
	IdActivity char(20),
	IdCountry char(20),
	IdCity char(20),
	IdPartner char(20),
	idtype char(20),
	ActivityName nvarchar(500),	
	Location ntext,	
	Amount int,
	Stt bit,
	Price int,
	Desr ntext null, 
	imageUrl text,
	PRIMARY KEY (IdActivity)
)


create table Schedule
(
	IdSchedule char(20),
	IdActivity char(20),
	StartTime datetime,
	EndTime dateTime,	
	PRIMARY KEY (IdSchedule)
)

create table customer(
	IdCustomer char(20),
	Name nvarchar(50),
	Phone nvarchar(15),
	age int,
	address nvarchar(50),
	email nvarchar(50),
	gender char(10),
	point int,
	password char(200)
	PRIMARY KEY (IdCustomer)
)

insert into customer (IdCustomer, Name, Phone, age, address, email, gender, point, password) values('1', 'thienvo', '0915313964', 20, 'lam dong', 'qtthien@gmail.com', 'nam', 0,'123123')

create table keysearch(
	IdSearch char(20),
	IdCustomer char(20),
	keyword nvarchar(50)
	PRIMARY KEY (IdSearch)
)

create table favourite (
	IdFavourite char(20),
	IdCustomer char(20),
	IdActivity char(20),
	PRIMARY KEY (IdFavourite)
)


create table Booking(	
	IdBooking char(20),
	IdSchedule char(20),
	IdCustomer char(20),
	IdVoucher char(20) null,
	PaymentOption char(2),
	BookingTime DateTime null,
	Total text,
	SttBooking bit,
	AmountPeople int,		
	Discount float null,	
	PRIMARY KEY (IdBooking)
)

create table CusDetail(	
	IdDetail char(20),
	IdBooking char(20),
	CustomerName ntext,
	CusPhoneNum text,
	EmailCus text,	
	Gender text
	PRIMARY KEY (IdDetail)
)
--Create table Voucher (
	--IdVoucher char(20),
	--voucher nvarchar(500),
	--Date DateTime,
	--status bit
	--PRIMARY KEY (IdVoucher)
--)

--Create table Payment (
	--IdPayment char(20),
	--IdBooking char(20),
	--IdVoucher char(20),
	--PaymentTime DateTime,
	--PaymentOption char(20) null, 
	--PRIMARY KEY (IdPayment)
--)

create table Image(
	IdImage char(20),
	IdActivity char(20),
	Link ntext
	PRIMARY KEY (IdImage)
)
create table type(
	idtype char(20),
	type char(20),	
	PRIMARY KEY (idtype)
)


alter table Activity 
add constraint FK_Activity_type
foreign key(Idtype)
references type(Idtype)

alter table Activity 
add constraint FK_Activity_city
foreign key(IdCity)
references city(IdCity)

alter table Activity 
add constraint FK_Activity_country
foreign key(IdCountry)
references country(IdCountry)

alter table Activity 
add constraint FK_Activity_partner
foreign key(idpartner)
references partner(idpartner)

alter table Image 
add constraint FK_Activity_IMG
foreign key(IdActivity)
references Activity(IdActivity)

alter table favourite 
add constraint FK_Activity_Favourite
foreign key(IdActivity)
references Activity(IdActivity)



alter table Favourite 
add constraint FK_customer_Favourite
foreign key(IdCustomer)
references customer(IdCustomer)

alter table Schedule 
add constraint FK_Schedule_Activity
foreign key(IdActivity)
references Activity(IdActivity)

alter table Booking 
add constraint FK_booking_schedule
foreign key(IdSchedule)
references Schedule(IdSchedule)

alter table Booking 
add constraint FK_booking_customer
foreign key(IdCustomer)
references customer(IdCustomer)

alter table CusDetail 
add constraint FK_booking_detail
foreign key(IdBooking)
references Booking(IdBooking)


--alter table Payment
--add constraint FK_Pay_booking
--foreign key(IdBooking)
--references Booking(IdBooking)

--alter table Payment
--add constraint FK_Payment_voucher
--foreign key(IdVoucher)
--references Voucher(IdVoucher)

alter table keysearch
add constraint FK_keysearch_customer
foreign key(IdCustomer)
references customer(IdCustomer)

