insert into country (IdCountry, CountryName) values ('10009958', 'Vietnam');
insert into country (IdCountry, CountryName) values ('10000001', 'Singapore');
insert into country (IdCountry, CountryName) values ('10000007', 'Thailand');
insert into country (IdCountry, CountryName) values ('108416', 'Malaysia');
insert into country (IdCountry, CountryName) values ('20001756', 'Japan');
insert into country (IdCountry, CountryName) values ('20004311', 'South Korea');
insert into country (IdCountry, CountryName) values ('100003', 'Indonesia');
insert into country (IdCountry, CountryName) values ('4001668284', 'Taiwan');
insert into country (IdCountry, CountryName) values ('10010821', 'Hong Kong');
insert into country (IdCountry, CountryName) values ('42077456', 'Australia');


--CITY
insert into City (IdCity, CityName) values ('10010083', 'Da Nang');
insert into City (IdCity, CityName) values ('10009794',  'Ho Chi Minh City');
insert into City (IdCity, CityName) values ('10009843', 'Hanoi');
insert into City (IdCity, CityName) values ('10009866',  'Can Tho City');
insert into City (IdCity, CityName) values ('10009889', 'Ba Ria - Vung Tau');

insert into City (IdCity, CityName) values ('107531',  'Bugis');
insert into City (IdCity, CityName) values ('107517',  'Orchard');
insert into City (IdCity, CityName) values ('107648',  'Changi');
insert into City (IdCity, CityName) values ('107548',  'Marina Bay');
insert into City (IdCity, CityName) values ('107509',  'Chinatown');

insert into City (IdCity, CityName) values ('10000045',  'Bangkok');
insert into City (IdCity, CityName) values ('10000054',  'Chiang Mai');
insert into City (IdCity, CityName) values ('10000077',  'Phuket');
insert into City (IdCity, CityName) values ('10000176',  'Kanchanaburi');
insert into City (IdCity, CityName) values ('10011104', 'Chiang Rai');

insert into City (IdCity, CityName) values ('107984',  'Penang');
insert into City (IdCity, CityName) values ('107980', 'Melaka');
insert into City (IdCity, CityName) values ('10011654',  'Johor');
insert into City (IdCity, CityName) values ('107982', 'Terengganu');
insert into City (IdCity, CityName) values ('108418',  'Selangor');

insert into City (IdCity, CityName) values ('20003483',  'Okinawa Prefecture');
insert into City (IdCity, CityName) values ('20001450',  'Hokkaido');
insert into City (IdCity, CityName) values ('20004599',  'Tohoku');
insert into City (IdCity, CityName) values ('20002454',  'Kyushu');
insert into City (IdCity, CityName) values ('20004117',  'Shikoku');

insert into City (IdCity, CityName) values ('20003986',  'Seoul');
insert into City (IdCity, CityName) values ('20000337', 'Busan');
insert into City (IdCity, CityName) values ('20001759',  'Jeju Island');
insert into City (IdCity, CityName) values ('20001674', 'Incheon');
insert into City (IdCity, CityName) values ('20000566',  'Daegu');

insert into City (IdCity, CityName) values ('102813', 'Jakarta');
insert into City (IdCity, CityName) values ('102746', 'Bali');
insert into City (IdCity, CityName) values ('107409', 'Yogyakarta Province');
insert into City (IdCity, CityName) values ('100004', 'Lampung Province');
insert into City (IdCity, CityName) values ('105319',  'Bangka Belitung Islands');

insert into City (IdCity, CityName) values ('30016984',  'Southern Taiwan');
insert into City (IdCity, CityName) values ('30016985',  'Eastern Taiwan');
insert into City (IdCity, CityName) values ('30016982',  'Northern Taiwan');
insert into City (IdCity, CityName) values ('30016983',  'Central Taiwan');
insert into City (IdCity, CityName) values ('10011651', 'Hong Kong');

insert into City (IdCity, CityName) values ('4002155400',  'State of New South Wales');
insert into City (IdCity, CityName) values ('4002058645',  'tate of Western Australia');
insert into City (IdCity, CityName) values ('4002177478',  'Australian Capital Territory');
insert into City (IdCity, CityName) values ('4002152274',  'State of Queensland');
insert into City (IdCity, CityName) values ('4002145234',  'State of Victoria');

--PARTNER
insert into partner (IdPartner, Partnername) values (54, 'Terocin');
insert into partner (IdPartner, Partnername) values (59, 'Atenolol');
insert into partner (IdPartner, Partnername) values (46, 'studio 35 beauty');
insert into partner (IdPartner, Partnername) values (89, 'Treatment Set TS329915');
insert into partner (IdPartner, Partnername) values (38, 'DIVALPROEX SODIUM EXTENDED-RELEASE');

insert into partner (IdPartner, Partnername) values (99, 'Belladonna and Opium');
insert into partner (IdPartner, Partnername) values (64, 'SHISEIDO THE SKINCARE DAY MOISTURE PROTECTION');
insert into partner (IdPartner, Partnername) values (71, 'Notatum-Quentans');
insert into partner (IdPartner, Partnername) values (53, 'Simvastatin');
insert into partner (IdPartner, Partnername) values (30, 'Jantoven');
--TOUR
insert into type(Idtype, type) values 
('1' , 'Tour'),
('2' , 'Di Chuyen'),
('3' , 'San Choi'),
('4' , 'The Thao'),
('5' , 'Diem Tham Quan')

--VietNam
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001798092415', '10009958','10009794', 54,'1' , 'Ăn tối trên sông Sài Gòn - Tour đêm', 'District 1', '500000');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001485599895', '10009958','10009843', 54,'1', 'Tour khám phá 3 đảo tại Phú Quốc - 1 ngày', 'Phu Quoc', '285000');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001281414916', '10009958','10009889', 54,'1', 'Tour đảo Điệp Sơn bằng tàu siêu tốc - 1 ngày', 'Nha Trang', '300000');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '4741925273130', '10009958','10010083', 54,'1' , 'DIY Da Nang City Tour - 1 Day', 'Da nang', '2350000');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2000661012517', '10009958','10009866', 54,'1', 'Can Tho International Airport Private Transfer to Can Tho City Center', 'Can Tho', '216000');

--Singapore
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1000767877110', '10000001','107531', 59, '1', 'Vé Marina Bay Sands', 'Marina Bay', '320150');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001086258347', '10000001','107517', 59, '1', 'Tour tham quan Singapore trên xe thuyền DUCKtours', 'Marina Bay', '219050');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1001717214853', '10000001','107648', 59, '1', 'Chụp ảnh với nhiếp ảnh gia chuyên nghiệp ở Singapore', 'Singapore', '3370000');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1000798145340', '10000001','107548', 59, '1', 'Ăn tối trên cáp treo', 'HarbourFront', '1289025');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1002099418305', '10000001','107509', 59, '1', 'Tour tham quan các điểm quay Crazy Rich Asians ở Singapore bằng Sidecar', 'Singapore', '5729000');

--Thailand
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001404435354', '10000007', '10000045' ,46,'1', 'Tour 4 đảo tại Krabi 7 ngày - Srisawat Travel & Tour', 'Mueang Krabi District', '610225');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2002030713046', '10000007','10000054' ,46,'1', 'Tour quần đảo Phi Phi, vịnh Maya, đảo Bamboo 1 ngày - Sea Star', 'Mueang Phuket District', '1578956');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '8690798864005', '10000007', '10000077' ,46,'1', 'Ayutthaya Tour from Bangkok', 'Ayutthaya District', '3075294');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001099683120', '10000007', '10000176' ,46,'1', 'Khám phá quần đảo Similan - Tour 1 ngày - We Love Andaman', 'Thai Mueang District', '1509620');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001099682314', '10000007', '10011104' ,46,'1', 'Tham quan đảo Coral bằng thuyền hai thân Catamaran - Tour ngắm hoàng hôn nửa ngày (của We Love Andaman)', 'Thalang District', '823803');

--Malaysia
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001661801973', '108416', '107984' ,89,'1', 'Ăn tối trên du thuyền tại thành phố KK', 'Kota Kinabalu', '217284');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001213304997', '108416', '107980' ,89,'1', 'Tour hang Batu và cao nguyên Genting 1 ngày', 'Kuala Lumpur', '434567');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2000834351036', '108416', '10011654' ,89,'1', 'Tour khám phá Penang Hill và chùa', 'Pulau Pinang', '298765');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2000834351717', '108416', '107982' ,89,'1', 'Tour khám phá lịch sử Malacca', 'Melaka City', '597530');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '2001213304998', '108416', '108418' ,89,'1', 'Hang Batu + Suối nước nóng + Công viên Templer - Tour 1 ngày', 'Kuala Lumpur', '325925');

--Japan
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1000238512765', '20001756','20003483' , 38, '1', 'Chụp ảnh với nhiếp ảnh gia chuyên nghiệp tại Tokyo', 'Chuo', '3791250');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1000572561752', '20001756', '20001450', 38, '1', 'Trải nghiệm ẩm thực và Thư pháp ở Tokyo', 'Toshima', '3082708');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1000097609045', '20001756','20004599' , 38, '1', 'Chụp ảnh với nhiếp ảnh gia chuyên nghiệp tại Osaka', 'Osaka', '3791250');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1002122792647', '20001756','20002454' , 38, '1', 'Chụp ảnh với nhiếp ảnh gia chuyên nghiệp tại Kyoto', 'Kyoto', '3791250');
insert into Activity (IdActivity, IdCountry, IdCity, IdPartner, idtype , ActivityName, Location, Price) values ( '1001967379033', '20001756','20004117' , 38, '1', 'Xe Bus Hop-On Hop-Off Tokyo', 'Chiyoda', '262186');

--IMAGE
--Vietnam
insert into image (IdImage, IdActivity, Link) values ('img01', '2001798092415', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img02', '2001485599895', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001485599895/Three%2520Islands%2520Hopping%2520in%2520Phu%2520Quoc%2520-%2520Day%2520Tour-43b00c21-8fe9-4a7b-b272-1bf46dbe3590.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img03', '2001281414916', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001281414916/Diep%2520Son%2520Island%2520Speedboating%2520-%2520Day%2520Tour-e39531bd-eada-4926-be2c-07a61d8e52a9.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img04', '4741925273130', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4741925273130/DIY%2520Da%2520Nang%2520City%2520Tour%2520-%25201%2520Day%2520-185d7b7c-87bb-4555-ab09-314496c52861.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img05', '2000661012517', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000661012517/Can%2520Tho%2520International%2520Airport%2520Private%2520Transfer%2520to%2520Can%2520Tho%2520City%2520Center-89918180-3c5d-4c09-b5d2-0ee2de884ee9.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');

--Singapore
insert into image (IdImage, IdActivity, Link) values ('img06', '2001798092415', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000767877110/Marina%2520Bay%2520Sands%2520SkyPark%2520Observation%2520Deck-3d2339b6-c66c-48fc-ad6e-cbe9cb986b47.png?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img07', '2001086258347', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001086258347/Singapore%2520DUCKtours-e542d38f-969b-4c8e-8b4a-748947003495.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img08', '1001335874435', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001335874435/Private%2520Tour%2520with%2520a%2520Professional%2520Photographer%2520in%2520Singapore-91560f8a-1771-4bb1-9d47-fa022ead6135.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img09', '1000798145340', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000798145340/Cable%2520Car%2520Sky%2520Dining-8e633f9d-511b-4d48-9212-3bebd929f1d0.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img10', '1002099418305', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1002099418305/Singapore%2520Crazy%2520Rich%2520Asians%2520Sidecar%2520Tour%2520PLUS%2520Mandarin%2520Oriental%2520MOBAR%2520Cocktail%2520Workshop-507c5054-0822-4508-bc5d-c9b64687feba.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');

--Thailand
insert into image (IdImage, IdActivity, Link) values ('img11', '2001404435354', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001404435354/Krabi%25204%2520Islands%2520by%2520Speedboat%2520-%2520Day%2520Tour%2520%2528by%2520TTD%2529-c4da74d0-4241-460d-bc95-3df7e3d765b7.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img12', '2002030713046', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2002030713046/Phi%2520Phi%2520%2526%2520Bamboo%2520Island%2520%2528by%2520SeaStar%2520Andaman%2529%2520-%2520Day%2520Tour-21edc0a5-2d0f-41b8-a07b-3338e5bd017f.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img13', '8690798864005', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/8690798864005/Ayutthaya%2520Tour%2520from%2520Bangkok-2e8ee1c4-39a6-4d94-a0e2-2185d1fceae0.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img14', '2001099683120', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001099683120/Similan%2520Islands%2520-%25201-day%2520Tour%2520%2528by%2520We%2520Love%2520Andaman%2529-e5e8a333-d00b-472c-9221-7ad4ccece470.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img15', '2001099682314', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001099682314/Coral%2520Island%2520by%2520Catamaran%2520Yacht%2520-%2520Half-day%2520Sunset%2520Program%2520%2528by%2520We%2520Love%2520Andaman%2529-ad880ab9-2e2c-43ac-b8b0-0598d4d81cf2.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');


--Malaysia
insert into image (IdImage, IdActivity, Link) values ('img16', '2001661801973', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001661801973/KK%2520City%2520Night%2520Dinner%2520Cruise-a54329e3-639d-4eca-9fb5-5b799536f18a.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img17', '2001213304997', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001213304997/Batu%2520Caves%2520%252B%2520Genting%2520Highland%2520-%25201%2520Day%2520Trip-30701b18-3229-4231-8a1c-9e462af86f3d.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img18', '2000834351036', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000834351036/Penang%2520Hill%2520and%2520Temple%2520Tour-f712631a-f2bd-47fc-97bf-e38f15801471.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img19', '2000834351717', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000834351717/Malacca%2520Historical%2520Tour-bc89aa45-eda4-4abd-84ba-1abe89f62519.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img20', '2001213304998', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001213304998/Batu%2520Caves%2520%252B%2520Hot%2520Springs%2520%252B%2520Templer%2520Park%2520-%25201%2520Day%2520Trip-97ac0797-2b33-4969-bb38-b0a7a7e95a37.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');


--Japan
insert into image (IdImage, IdActivity, Link) values ('img21', '1000238512765', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000238512765/Professional%2520Photo%2520Shoot%2520in%2520Tokyo-cfc4f5c6-63ad-4818-89b6-dff2a10f96a6.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img22', '1000572561752', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000572561752/Tokyo%2520Food%2520Tour%2520with%2520Calligraphy%2520Experience-0a9f9b21-b6a4-4c77-9194-d4e274aba41e.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img23', '1000097609045', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000097609045/Professional%2520Photo%2520Shoot%2520in%2520Osaka-a12945d5-0527-4852-97d7-e4ecdba8cbc3.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img24', '1002122792647', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1002122792647/Professional%2520Photo%2520Shoot%2520in%2520Kyoto-8ac393e1-0520-45cc-a4ba-7267821e17c0.jpeg?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');
insert into image (IdImage, IdActivity, Link) values ('img25', '1001967379033', 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001967379033/Tokyo%2520Hop-On%2520Hop-Off%2520Sightseeing%2520Bus-b269101c-6442-417e-b989-25e00ea92f6f.png?tr=q-60,c-at_max,w-540,h-960&_src=imagekit');


