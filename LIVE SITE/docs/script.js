function initMap() {

  function oneFunction(name, shop, googleMaps, street, cityStateZip) {
    return '<div id="info-window"><h1>'+name+'</h1><p>'+shop+'</p><a href='+googleMaps+' target="_blank">'+street+'<br />'+cityStateZip+'</a></div></div>'
  }











	var dailyOffOne = {
		info: oneFunction('Daily Offerings', 'Coffee Shop & Roastery', 'https://goo.gl/maps/HXQC8yGDfnE2', '29 W Main St', 'Lexington, KY 40507'),

		lat: 38.050015,
		long: -84.500021
	};

	var dailyOffTwo = {
    info: oneFunction('Daily Offerings', 'Coffee Shop', 'https://goo.gl/maps/Qn3cyLWLr2D2', '124 Malabu Dr #110', 'Lexington, KY 40503'),

		lat: 37.994670,
		long: -84.508370
	};

  var sunergosOne = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/gMaGKXqZcqt', '2122 S Preston St', 'Louisville, KY 40217'),

		lat: 38.216682,
		long: -85.745239
	};

  var sunergosTwo = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/4CKiiUfLjh32', '306 West Woodlawn Ave', 'Louisville, KY 40214'),

		lat: 38.181480,
		long: -85.766998
	};

  var sunergosThree = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop', 'https://goo.gl/maps/VirbejfU5zv', '231 South 5th St', 'Louisville, KY 40202'),

		lat: 38.254517,
		long: -85.758438
	};

  var sunergosFour = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop', 'https://goo.gl/maps/PFJVu1YRqXF2', '1647 Norris Place', 'Louisville, KY 40205'),

		lat: 38.224983,
		long: -85.706398
	};

  var quillsOne = {
    info: oneFunction('Quills Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/A2G1CBkZawB2', '802 E Main St', 'Louisville, KY 40206'),

    lat: 38.254379,
    long: -85.737556
};

  var quillsTwo = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/2FiFfSoXANS2', '930 Baxter Ave', 'Louisville, KY 40204'),

      lat: 38.241535,
      long: -85.725563
};

  var quillsThree = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/77NaaDE668y', '327 W Cardinal Blvd', 'Louisville, KY 40208'),

      lat: 38.220856,
      long: -85.762146
};


  var quillsFour = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/Cc7bpgbJLN92', '117 St. Matthews Ave #3117', 'Louisville, KY 40207'),

      lat: 38.253548,
      long: -85.652733
};

  var quillsFive = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/43iZ5KCtQiK2', '137 E Market St', 'New Albany, IN 47150'),

      lat: 38.285255,
      long: -85.821808
};

  var quillsSix = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/aE1eAyrr6LF2', '335 W 9th St', 'Indianapolis, IN 46202'),

      lat: 39.779377,
      long: -86.164472
};

  var baristaParOne= {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/tedz7U9ZjT92', '519 Gallatin Ave', 'Nashville, TN 37206'),

    lat: 36.181824,
    long: -86.749100
};

  var baristaParTwo = {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/vTZ9wg7fnjS2', '610 Magazine St', 'Nashville, TN 37203'),

    lat: 36.152016,
    long: -86.782898
};

  var baristaParThree = {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/1bHNCqEhej82', '1230 4th Ave N', 'Nashville, TN 37208'),

    lat: 36.176331,
    long: -86.787041
};

  var revelatorOne = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/C1YENqbgXsp', '1826 3rd Ave N #101', 'Birmingham, AL 35203'),

    lat: 33.511986,
    long: -86.815964
};

  var revelatorTwo = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/bT4p76xVSLF2', '2510 Park Lane Ct S', 'Mountain Brook, AL 35223'),

    lat: 33.486469,
    long: -86.774100
};

  var revelatorThree = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/6a6EJKDz2sB2', '437 Memorial Dr SE A5', 'Atlanta, GA 30312'),

    lat: 33.768284,
    long: -84.251732
};

  var revelatorFour = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/zwSVsazuKNC2', '675 Ponce De Leon Ave NE Ste NW127', 'Atlanta, GA 30308'),

    lat: 33.772310,
    long: -84.365920
};

  var revelatorFive = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/iW13mqYyvYL2', '637 Tchoupitoulas St', 'New Orleans, LA 70130'),

    lat: 29.946800,
    long: -90.067740
};

  var revelatorSix = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/kFRpkCHmDX22', '900 Camp St', 'New Orleans, LA 70130'),

    lat: 29.943600,
    long: -90.070640
};

  var revelatorSeven = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/9p2pHwwq39o', '1817 21st Ave S', 'Nashville, TN 37212'),

    lat: 36.142450,
    long: -86.800090
};

  var revelatorEight = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/iayp7eR8fYD2', '550 King St #150', 'Charleston, SC 29403'),

    lat: 32.792450,
    long: -79.940480
};

var heartOne = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/hBEzH8Vhkzm', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.479200,
    long: -122.608470
};

var heartTwo = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/q3oxjt8FGKQ2', '537 SW 12th Ave', 'Portland, OR 97205'),

    lat: 45.523320,
    long: -122.698300
};

var heartThree = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/GnX5KWWct452', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.523110,
    long: -122.643180
};

var verveOne = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/CkaKEj8qBVJ2', '2101 Market St', 'San Francisco, CA 94114'),

    lat: 37.767077,
    long: -122.429056
};

var verveTwo = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/QazVZbDUPW22', '1010 Fair Ave', 'Santa Cruz, CA 95060'),

    lat: 36.958950,
    long: -122.045230
};

var verveThree = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/CHfa8W61NUS2', '1540 Pacific Ave', 'Santa Cruz, CA 95060'),

    lat: 36.976831,
    long: -122.026812
};

var verveFour = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/SM1VtpoiQft', '816 41st Ave', 'Santa Cruz, CA 95062'),

    lat: 36.964210,
    long: -121.964460
};

var verveFive = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/LwGyw3fMYL52', '104 Bronson St', 'Santa Cruz, CA 95062'),

    lat: 36.968350,
    long: -122.005810
};

var verveSix = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/3ptx1MyVvJ92', '8051 W 3rd St', 'Los Angeles, CA 90048'),

    lat: 34.072557,
    long: -118.365062
};

var verveSeven = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/4mt3GydDBFF2', '8925 Melrose Avenue', 'West Hollywood, CA 90069'),

    lat: 34.081046,
    long: -118.387427
};

var verveEight = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/nQjXSL2qe8z', '833 S. Spring Street', 'Los Angeles, CA 90014'),

    lat: 34.042379,
    long: -118.254488
};

var publikOne = {
    info: oneFunction('Publik Coffee', 'Coffee Shop', 'https://goo.gl/maps/7nk2WBMvEn72', '975 S W Temple', 'Salt Lake City, UT 84101'),

    lat: 40.748078,
    long: -111.893651
};

var publikTwo = {
    info: oneFunction('Publik Kitchen', 'Coffee Shop + Brunch', 'https://goo.gl/maps/YVXf5xi7XXs', '931 East 900 South', 'Salt Lake City, UT 84105'),

    lat: 40.750124,
    long: -111.864208
};

var publikThree = {
    info: oneFunction('Publik Kitchen', 'Coffee Shop', 'https://goo.gl/maps/SjHy1ZMq8HG2', '502 3rd Ave', 'Salt Lake City, UT 84103'),

    lat: 40.772674,
    long: -111.874080
};

var stumptownOne = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/RUX9kErXJ4v', '4525 SE Division St', 'Portland, OR 97206'),

    lat: 45.505481,
    long: -122.615562
};

var stumptownTwo = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/4dwveefgxg72', '3356 SE Belmont St', 'Portland, OR 97214'),

    lat: 45.516354,
    long: -122.629689
};

var stumptownThree = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/PhotyaL7WcC2', '1026 SE Stark St', 'Portland, OR 97214'),

    lat: 45.519155,
    long: -122.655086
};

var stumptownFour = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/ERSsSkybPZD2', '128 SW 3rd Ave', 'Portland, OR 97204'),

    lat: 45.521780,
    long: -122.673295
};

var stumptownFive = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the PDX Airport)', 'Coffee Shop', 'https://goo.gl/maps/1bDk6qyyjWK2', '7000 NE Airport Way', 'Portland, OR 97218'),

    lat: 45.589231,
    long: -122.593477
};

var stumptownSix = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/MKPitbmX7M52', '1115 12th Ave', 'Seattle, WA 98122'),

    lat: 47.612096,
    long: -122.317104
};

var stumptownSeven = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/UTJ65dH4QiM2', '212b Pacific St', 'Brooklyn, NY 11201'),

    lat: 40.688855,
    long: -73.992174
};

var stumptownEight = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/jQAtk2RgmVF2', '30 W 8th St', 'New York, NY 10011'),

    lat: 40.732774,
    long: -73.998001
};

var stumptownNine = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/R3MvXhEsWuP2', '18 W 29th St', 'New York, NY 10001'),

    lat: 40.745754,
    long: -73.988197
};

var stumptownTen = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/GNPU4j6xmT92', '806 S Santa Fe Ave', 'Los Angeles, CA 90021'),

    lat: 34.033281,
    long: -118.229728
};

var stumptownEleven = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/4tW65Fcn2u42', '610 Carondelet St', 'New Orleans, LA 70130'),

    lat: 29.948259,
    long: -90.072167
};

var stumptownTwelve = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/15StdtEC25L2', '311 N Morgan St', 'Chicago, IL 60607'),

    lat: 41.887271,
    long: -87.651744
};

var passengerOne = {
    info: oneFunction('Passenger Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/mXBESiSpQW42', '7 W King St', 'Lancaster, PA 17603'),

    lat: 40.038048,
    long: -76.306336
};

var onyxOne = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/9hnefuh21RB2', '2418 N Gregg Ave', 'Fayetteville, AR 72703'),

    lat: 36.096031,
    long: -94.160137
};

var onyxTwo = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/pHC9uwZKrEP2', '7058 W Sunset Ave #1A', 'Springdale, AR 72762'),

    lat: 36.177048,
    long: -94.208701
};

var onyxThree = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/2PzwwVWv9uC2', '100 NW 2nd St #106', 'Bentonville, AR 72712'),

    lat: 36.373135,
    long: -94.210036
};

var percOne = {
    info: oneFunction('Perc Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/ticC82Q1QTH2', '1802 E Broad St', 'Savannah, GA 31401'),

    lat: 32.057554,
    long: -81.091827
};

var methodicalOne = {
    info: oneFunction('Methodical Coffee', 'Coffee Shop', 'https://goo.gl/maps/aB7aXMZfDD72', '101 N Main St Suite D', 'Greenville, SC 29601'),

    lat: 34.851876,
    long: -82.400013
};

var honestOne = {
    info: oneFunction('Honest Coffee Roasters', 'Coffee Shop & Roastery', 'https://goo.gl/maps/RH2khtJAEuC2', '230 Franklin Rd #11A', 'Franklin, TN 37064'),

    lat: 35.931969,
    long: -86.859699
};

var honestTwo = {
    info: oneFunction('Honest Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/QanW29FHYz12', '114 Clinton Ave E #106', 'Huntsville, AL 35801'),

    lat: 34.731588,
    long: -86.585734
};

var cremaOne = {
    info: oneFunction('Crema', 'Coffee Shop', 'https://goo.gl/maps/nhiHBcFTH992', '15 Hermitage Ave', 'Nashville, TN 37210'),

    lat: 36.156918,
    long: -86.769730
};

var voidOne = {
    info: oneFunction('Void Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/qTmdSBCGHnA2', '320 Washington Street West', 'Charleston, WV 25302'),

    lat: 38.361710,
    long: -81.641308
};

var messengerOne = {
    info: oneFunction('Messenger Coffee Co<br />& Ibis Bakery', 'Coffee Shop & Bakery', 'https://goo.gl/maps/AGmc8yBUmJm', '1624 Grand Blvd', 'Kansas City, MO 64108'),

    lat: 39.093520,
    long: -94.581623
};

var persephoneOne = {
    info: oneFunction('Pesephone Bakery', 'Coffee Shop & Bakery', 'https://goo.gl/maps/7LFXj148GH12', '145 E Broadway Ave', 'Jackson, WY 83001'),

    lat: 43.479765,
    long: -110.760006
};

var chaleurOne = {
    info: oneFunction('Chaleur Method Brew<br />+ Espresso', 'Coffee Shop', 'https://goo.gl/maps/S2VFdVjknCz', '1714 Dauphin St', 'Mobile, AL 36604'),

    lat: 30.687042,
    long: -88.078894
};

var corvusOne = {
    info: oneFunction('Corvus Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/gpPupaMhYt32', '1740 S Broadway', 'Denver, CO 80210'),

    lat: 39.684913,
    long: -104.987252
};

var corvusTwo = {
    info: oneFunction('Corvus Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/ShiK99LsER32', '4925 S Newport St', 'Denver, CO 80237'),

    lat: 39.624990,
    long: -104.907144
};

var loyalOne = {
    info: oneFunction('Loyal Coffee', 'Coffee Shop', 'https://goo.gl/maps/Ux2WPKrSGCK2', '408 S Nevada Ave', 'Colorado Springs, CO 80903'),

    lat: 38.827805,
    long: -104.822335
};

var chromeyellowOne = {
    info: oneFunction('Chrome Yellow Trading Co.', 'Coffee Shop & Store', 'https://goo.gl/maps/3WNcZUQnZKu', '501 Edgewood Ave SE', 'Atlanta, GA 30312'),

    lat: 33.753893,
    long: -84.371021
};

var pleaseandthanksOne = {
    info: oneFunction('Please & Thank You', 'Coffee Shop & Record Store', 'https://goo.gl/maps/RSDeUfEBbsD2', '800 E Market St', 'Louisville, KY 40206'),

    lat: 38.253005,
    long: -85.737893
};

var pleaseandthanksTwo = {
    info: oneFunction('Please & Thank You', 'Coffee Shop', 'https://goo.gl/maps/Apzd31UQyhT2', '2341 Frankfort Ave', 'Louisville, KY 40206'),

    lat: 38.253682,
    long: -85.701428
};

var pleaseandthanksThree = {
    info: oneFunction('Please & Thank You', 'Coffee Shop', 'https://goo.gl/maps/HNXCn732RRk', '252 E Market St', 'Louisville, KY 40204'),

    lat: 38.254045,
    long: -85.748408
};

var secondstateOne = {
    info: oneFunction('Second State Coffee', 'Coffee Shop', 'https://goo.gl/maps/uTGFeupCkmK2', '70.5 Beaufain St', 'Charleston, SC 29401'),

    lat: 32.779886,
    long: -79.937666
};

var saintfranksOne = {
    info: oneFunction('Saint Frank', 'Coffee Shop', 'https://goo.gl/maps/zPav2bGBVR62', '2340 Polk St', 'San Francisco, CA 94109'),

    lat: 37.798479,
    long: -122.422188
};

var saintfranksTwo = {
    info: oneFunction('Saint Frank', 'Coffee Shop', 'https://goo.gl/maps/zPav2bGBVR62', '1081 Mission St', 'San Francisco, CA 94103'),

    lat: 37.779469,
    long: -122.410290
};

var caferoseOne = {
    info: oneFunction('Cafe Roze', 'Coffee Shop & All-Day Cafe', 'https://goo.gl/maps/Wg9mSa23nHx', '1115 Porter Rd', 'Nashville, TN 37206'),

    lat: 36.188609,
    long: -86.729116
};

var veloOne = {
    info: oneFunction('Velo Coffee Roasters', 'Coffee Roaster with Service', 'https://goo.gl/maps/RdzrG4ywKm72', '1410, 509 E Main St #3', 'Chattanooga, TN 37408'),

    lat: 35.033985,
    long: -85.301419
};

var kbrewOne = {
    info: oneFunction('K Brew', 'Coffee Shop', 'https://goo.gl/maps/1m9ATqiY1oz', '1138 N Broadway', 'Knoxville, TN 37917'),

    lat: 35.983771,
    long: -83.922141
};

var amethystOne = {
    info: oneFunction('Amethyst Coffee', 'Coffee Shop', 'https://goo.gl/maps/zo9Nh6BW3K62', '1111 Broadway #101', 'Denver, CO 80203'),

    lat: 39.734137,
    long: -104.987665
};

var amethystTwo = {
    info: oneFunction('Amethyst Coffee', 'Coffee Shop', 'https://goo.gl/maps/tf5pkKy2T2H2', '4999 W 44th Ave', 'Denver, CO 80212'),

    lat: 39.776727,
    long: -105.050661
};

var baristaalleyOne = {
    info: oneFunction('Barista Alley', 'Coffee Shop & Smoothie Bar', 'https://goo.gl/maps/9Yo6HvxuHjq', '125 E Poinsett St', 'Greer, SC 29651'),

    lat: 34.938428,
    long: -82.226168
};

var hiddenhouseOne = {
    info: oneFunction('Hidden House Coffee', 'Coffee Shop', 'https://goo.gl/maps/2EMAzHcfU922', '511 E Santa Ana Blvd', 'Santa Ana, CA 92701'),

    lat: 33.750432,
    long: -117.863091
};

var theboyandthebearOne = {
    info: oneFunction('The Boy & the Bear', 'Coffee Shop', 'https://goo.gl/maps/FHFCbM7g8ES2', '12712 W Washington Blvd Suite 101', 'Los Angeles, CA 90066'),

    lat: 33.996553,
    long: -118.434946
};

var theboyandthebearTwo = {
    info: oneFunction('The Boy & the Bear', 'Coffee Shop', 'https://goo.gl/maps/vXTyfKPJkxR2', '350 N Pacific Coast Hwy', 'Redondo Beach, CA 90277'),

    lat: 33.847128,
    long: -118.387487
};






















	var locations = [
      [dailyOffOne.info, dailyOffOne.lat, dailyOffOne.long, 0],
      [dailyOffTwo.info, dailyOffTwo.lat, dailyOffTwo.long, 1],
      [sunergosOne.info, sunergosOne.lat, sunergosOne.long, 2],
      [sunergosTwo.info, sunergosTwo.lat, sunergosTwo.long, 3],
      [sunergosThree.info, sunergosThree.lat, sunergosThree.long, 4],
      [sunergosFour.info, sunergosFour.lat, sunergosFour.long, 5],
      [quillsOne.info, quillsOne.lat, quillsOne.long, 6],
      [quillsTwo.info, quillsTwo.lat, quillsTwo.long, 7],
      [quillsThree.info, quillsThree.lat, quillsThree.long, 8],
      [quillsFour.info, quillsFour.lat, quillsFour.long, 9],
      [quillsFive.info, quillsFive.lat, quillsFive.long, 10],
      [quillsSix.info, quillsSix.lat, quillsSix.long, 11],
      [baristaParOne.info, baristaParOne.lat, baristaParOne.long, 12],
      [baristaParTwo.info, baristaParTwo.lat, baristaParTwo.long, 13],
      [baristaParThree.info, baristaParThree.lat, baristaParThree.long, 14],
      [revelatorOne.info, revelatorOne.lat, revelatorOne.long, 15],
      [revelatorTwo.info, revelatorTwo.lat, revelatorTwo.long, 16],
      [revelatorThree.info, revelatorThree.lat, revelatorThree.long, 17],
      [revelatorFour.info, revelatorFour.lat, revelatorFour.long, 18],
      [revelatorFive.info, revelatorFive.lat, revelatorFive.long, 19],
      [revelatorSix.info, revelatorSix.lat, revelatorSix.long, 20],
      [revelatorSeven.info, revelatorSeven.lat, revelatorSeven.long, 21],
      [revelatorEight.info, revelatorEight.lat, revelatorEight.long, 22],
      [heartOne.info, heartOne.lat, heartOne.long, 23],
      [heartTwo.info, heartTwo.lat, heartTwo.long, 24],
      [heartThree.info, heartThree.lat, heartThree.long, 25],
      [verveOne.info, verveOne.lat, verveOne.long, 26],
      [verveTwo.info, verveTwo.lat, verveTwo.long, 27],
      [verveThree.info, verveThree.lat, verveThree.long, 28],
      [verveFour.info, verveFour.lat, verveFour.long, 29],
      [verveFive.info, verveFive.lat, verveFive.long, 30],
      [verveSix.info, verveSix.lat, verveSix.long, 31],
      [verveSeven.info, verveSeven.lat, verveSeven.long, 32],
      [verveEight.info, verveEight.lat, verveEight.long, 33],
      [publikOne.info, publikOne.lat, publikOne.long, 34],
      [publikTwo.info, publikTwo.lat, publikTwo.long, 35],
      [publikThree.info, publikThree.lat, publikThree.long, 36],
      [stumptownOne.info, stumptownOne.lat, stumptownOne.long, 37],
      [stumptownTwo.info, stumptownTwo.lat, stumptownTwo.long, 38],
      [stumptownThree.info, stumptownThree.lat, stumptownThree.long, 39],
      [stumptownFour.info, stumptownFour.lat, stumptownFour.long, 40],
      [stumptownFive.info, stumptownFive.lat, stumptownFive.long, 41],
      [stumptownSix.info, stumptownSix.lat, stumptownSix.long, 42],
      [stumptownSeven.info, stumptownSeven.lat, stumptownSeven.long, 43],
      [stumptownEight.info, stumptownEight.lat, stumptownEight.long, 44],
      [stumptownNine.info, stumptownNine.lat, stumptownNine.long, 45],
      [stumptownTen.info, stumptownTen.lat, stumptownTen.long, 46],
      [stumptownEleven.info, stumptownEleven.lat, stumptownEleven.long, 47],
      [stumptownTwelve.info, stumptownTwelve.lat, stumptownTwelve.long, 48],
      [passengerOne.info, passengerOne.lat, passengerOne.long, 49],
      [onyxOne.info, onyxOne.lat, onyxOne.long, 49],
      [onyxTwo.info, onyxTwo.lat, onyxTwo.long, 50],
      [onyxThree.info, onyxThree.lat, onyxThree.long, 51],
      [percOne.info, percOne.lat, percOne.long, 52],
      [methodicalOne.info, methodicalOne.lat, methodicalOne.long, 53],
      [honestOne.info, honestOne.lat, honestOne.long, 54],
      [honestTwo.info, honestTwo.lat, honestTwo.long, 55],
      [cremaOne.info, cremaOne.lat, cremaOne.long, 56],
      [voidOne.info, voidOne.lat, voidOne.long, 57],
      [messengerOne.info, messengerOne.lat, messengerOne.long, 58],
      [persephoneOne.info, persephoneOne.lat, persephoneOne.long, 59],
      [chaleurOne.info, chaleurOne.lat, chaleurOne.long, 60],
      [corvusOne.info, corvusOne.lat, corvusOne.long, 61],
      [corvusTwo.info, corvusTwo.lat, corvusTwo.long, 62],
      [loyalOne.info, loyalOne.lat, loyalOne.long, 63],
      [chromeyellowOne.info, chromeyellowOne.lat, chromeyellowOne.long, 64],
      [pleaseandthanksOne.info, pleaseandthanksOne.lat, pleaseandthanksOne.long, 65],
      [pleaseandthanksTwo.info, pleaseandthanksTwo.lat, pleaseandthanksTwo.long, 66],
      [pleaseandthanksThree.info, pleaseandthanksThree.lat, pleaseandthanksThree.long, 67],
      [secondstateOne.info, secondstateOne.lat, secondstateOne.long, 68],
      [saintfranksOne.info, saintfranksOne.lat, saintfranksOne.long, 69],
      [saintfranksTwo.info, saintfranksTwo.lat, saintfranksTwo.long, 70],
      [caferoseOne.info, caferoseOne.lat, caferoseOne.long, 71],
      [veloOne.info, veloOne.lat, veloOne.long, 72],
      [kbrewOne.info, kbrewOne.lat, kbrewOne.long, 73],
      [amethystOne.info, amethystOne.lat, amethystOne.long, 74],
      [amethystTwo.info, amethystTwo.lat, amethystTwo.long, 75],
      [baristaalleyOne.info, baristaalleyOne.lat, baristaalleyOne.long, 76],
      [hiddenhouseOne.info, hiddenhouseOne.lat, hiddenhouseOne.long, 77],
      [theboyandthebearOne.info, theboyandthebearOne.lat, theboyandthebearOne.long, 78],
      [theboyandthebearTwo.info, theboyandthebearTwo.lat, theboyandthebearTwo.long, 79],
    ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 38.686, lng: -97.324},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
