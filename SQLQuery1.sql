 create database traveloka
 
 use traveloka
 
 create table country
(
	IdCountry char(20),
	CountryName nvarchar(50)
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
	PRIMARY KEY (IdPartner)
)

create table Tour
(
	IdTour char(20),
	IdCountry char(20),
	IdPartner char(20),
	TourName nvarchar(500),	
	Location ntext,	
	Price int,	
	PRIMARY KEY (IdTour)
)

create table Schedule
(
	IdSchedule char(20),
	IdTour char(20),
	StartTime datetime,
	EndTime dateTime,
	Amount int,
	Stt bit,
	Desr ntext null, 
	PRIMARY KEY (IdSchedule)
)


create table Booking(	
	IdBooking char(20),
	IdSchedule char(20),
	BookingTime DateTime,
	Total int,
	SttBooking bit,
	AmountPeople int,	
	TourTimeStart DateTime,
	PhoneNumber char(11),
	Reservationist nvarchar(50),
	Discount float null,	
	PRIMARY KEY (IdBooking)
)

Create table Payment (
	IdPayment char(20),
	IdBooking char(20),
	PaymentTime DateTime,
	PaymentOption char(20) null, 
	voucher char(50) 
	PRIMARY KEY (IdPayment)
)

create table Image(
	IdImage char(20),
	IdTour char(20),
	Link ntext
	PRIMARY KEY (IdImage)
)


alter table City 
add constraint FK_country_city
foreign key(IdCountry)
references country(IdCountry)

alter table Tour 
add constraint FK_Tour_country
foreign key(IdCountry)
references country(IdCountry)

alter table Booking 
add constraint FK_booking_schedule
foreign key(IdSchedule)
references Schedule(IdSchedule)

alter table Payment
add constraint FK_Pay_booking
foreign key(IdBooking)
references Booking(IdBooking)

alter table Schedule 
add constraint FK_Schedule_Tour
foreign key(IdTour)
references Tour(IdTour)

alter table Image 
add constraint FK_IdTour_IMG
foreign key(IdTour)
references Tour(IdTour)

alter table tour 
add constraint FK_IdTour_partner
foreign key(idpartner)
references partner(idpartner)


