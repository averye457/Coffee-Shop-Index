function initMap() {

  function oneFunction(name, shop, googleMaps, street, cityStateZip) {
    return '<div id="info-window"><h1>'+name+'</h1><p>'+shop+'</p><a href='+googleMaps+' target="_blank">'+street+'<br />'+cityStateZip+'</a></div></div>'
  }











	let dailyOffOne = {
		info: oneFunction('Barista Social', 'Coffee Shop', 'https://goo.gl/maps/HXQC8yGDfnE2', '29 W Main St', 'Lexington, KY 40507'),

		lat: 38.050015,
		long: -84.500021
	};

	let dailyOffTwo = {
    info: oneFunction('Barista Social', 'Coffee Shop', 'https://goo.gl/maps/Qn3cyLWLr2D2', '124 Malabu Dr #110', 'Lexington, KY 40503'),

		lat: 37.994670,
		long: -84.508370
	};

  let sunergosOne = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/gMaGKXqZcqt', '2122 S Preston St', 'Louisville, KY 40217'),

		lat: 38.216682,
		long: -85.745239
	};

  let sunergosTwo = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/4CKiiUfLjh32', '306 West Woodlawn Ave', 'Louisville, KY 40214'),

		lat: 38.181480,
		long: -85.766998
	};

  let sunergosThree = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop', 'https://goo.gl/maps/VirbejfU5zv', '231 South 5th St', 'Louisville, KY 40202'),

		lat: 38.254517,
		long: -85.758438
	};

  let sunergosFour = {
    info: oneFunction('Sunergos Coffee', 'Coffee Shop', 'https://goo.gl/maps/PFJVu1YRqXF2', '1647 Norris Place', 'Louisville, KY 40205'),

		lat: 38.224983,
		long: -85.706398
	};

  let quillsOne = {
    info: oneFunction('Quills Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/A2G1CBkZawB2', '802 E Main St', 'Louisville, KY 40206'),

    lat: 38.254379,
    long: -85.737556
};

  let quillsTwo = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/2FiFfSoXANS2', '930 Baxter Ave', 'Louisville, KY 40204'),

      lat: 38.241535,
      long: -85.725563
};

  let quillsThree = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/77NaaDE668y', '327 W Cardinal Blvd', 'Louisville, KY 40208'),

      lat: 38.220856,
      long: -85.762146
};


  let quillsFour = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/Cc7bpgbJLN92', '117 St. Matthews Ave #3117', 'Louisville, KY 40207'),

      lat: 38.253548,
      long: -85.652733
};

  let quillsFive = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/43iZ5KCtQiK2', '137 E Market St', 'New Albany, IN 47150'),

      lat: 38.285255,
      long: -85.821808
};

  let quillsSix = {
      info: oneFunction('Quills Coffee', 'Coffee Shop', 'https://goo.gl/maps/aE1eAyrr6LF2', '335 W 9th St', 'Indianapolis, IN 46202'),

      lat: 39.779377,
      long: -86.164472
};

  let baristaParOne= {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/tedz7U9ZjT92', '519 Gallatin Ave', 'Nashville, TN 37206'),

    lat: 36.181824,
    long: -86.749100
};

  let baristaParTwo = {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/vTZ9wg7fnjS2', '610 Magazine St', 'Nashville, TN 37203'),

    lat: 36.152016,
    long: -86.782898
};

  let baristaParThree = {
    info: oneFunction('Barista Parlor', 'Coffee Shop', 'https://goo.gl/maps/1bHNCqEhej82', '1230 4th Ave N', 'Nashville, TN 37208'),

    lat: 36.176331,
    long: -86.787041
};

  let revelatorOne = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/C1YENqbgXsp', '1826 3rd Ave N #101', 'Birmingham, AL 35203'),

    lat: 33.511986,
    long: -86.815964
};

  let revelatorTwo = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/bT4p76xVSLF2', '2510 Park Lane Ct S', 'Mountain Brook, AL 35223'),

    lat: 33.486469,
    long: -86.774100
};

  let revelatorThree = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/6a6EJKDz2sB2', '437 Memorial Dr SE A5', 'Atlanta, GA 30312'),

    lat: 33.768284,
    long: -84.251732
};

  let revelatorFour = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/zwSVsazuKNC2', '675 Ponce De Leon Ave NE Ste NW127', 'Atlanta, GA 30308'),

    lat: 33.772310,
    long: -84.365920
};

  let revelatorFive = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/iW13mqYyvYL2', '637 Tchoupitoulas St', 'New Orleans, LA 70130'),

    lat: 29.946800,
    long: -90.067740
};

  let revelatorSix = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/kFRpkCHmDX22', '900 Camp St', 'New Orleans, LA 70130'),

    lat: 29.943600,
    long: -90.070640
};

  let revelatorSeven = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/9p2pHwwq39o', '1817 21st Ave S', 'Nashville, TN 37212'),

    lat: 36.142450,
    long: -86.800090
};

  let revelatorEight = {
    info: oneFunction('Revelator Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/iayp7eR8fYD2', '550 King St #150', 'Charleston, SC 29403'),

    lat: 32.792450,
    long: -79.940480
};

let heartOne = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/hBEzH8Vhkzm', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.479200,
    long: -122.608470
};

let heartTwo = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/q3oxjt8FGKQ2', '537 SW 12th Ave', 'Portland, OR 97205'),

    lat: 45.523320,
    long: -122.698300
};

let heartThree = {
    info: oneFunction('Heart', 'Coffee Shop', 'https://goo.gl/maps/GnX5KWWct452', '5181 SE Woodstock Blvd', 'Portland, OR 97206'),

    lat: 45.523110,
    long: -122.643180
};

let verveOne = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/CkaKEj8qBVJ2', '2101 Market St', 'San Francisco, CA 94114'),

    lat: 37.767077,
    long: -122.429056
};

let verveTwo = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/QazVZbDUPW22', '1010 Fair Ave', 'Santa Cruz, CA 95060'),

    lat: 36.958950,
    long: -122.045230
};

let verveThree = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/CHfa8W61NUS2', '1540 Pacific Ave', 'Santa Cruz, CA 95060'),

    lat: 36.976831,
    long: -122.026812
};

let verveFour = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/SM1VtpoiQft', '816 41st Ave', 'Santa Cruz, CA 95062'),

    lat: 36.964210,
    long: -121.964460
};

let verveFive = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/LwGyw3fMYL52', '104 Bronson St', 'Santa Cruz, CA 95062'),

    lat: 36.968350,
    long: -122.005810
};

let verveSix = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/3ptx1MyVvJ92', '8051 W 3rd St', 'Los Angeles, CA 90048'),

    lat: 34.072557,
    long: -118.365062
};

let verveSeven = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/4mt3GydDBFF2', '8925 Melrose Avenue', 'West Hollywood, CA 90069'),

    lat: 34.081046,
    long: -118.387427
};

let verveEight = {
    info: oneFunction('Verve', 'Coffee Shop', 'https://goo.gl/maps/nQjXSL2qe8z', '833 S. Spring Street', 'Los Angeles, CA 90014'),

    lat: 34.042379,
    long: -118.254488
};

let publikOne = {
    info: oneFunction('Publik Coffee', 'Coffee Shop', 'https://goo.gl/maps/7nk2WBMvEn72', '975 S W Temple', 'Salt Lake City, UT 84101'),

    lat: 40.748078,
    long: -111.893651
};

let publikTwo = {
    info: oneFunction('Publik Kitchen', 'Coffee Shop + Brunch', 'https://goo.gl/maps/YVXf5xi7XXs', '931 East 900 South', 'Salt Lake City, UT 84105'),

    lat: 40.750124,
    long: -111.864208
};

let publikThree = {
    info: oneFunction('Publik Kitchen', 'Coffee Shop', 'https://goo.gl/maps/SjHy1ZMq8HG2', '502 3rd Ave', 'Salt Lake City, UT 84103'),

    lat: 40.772674,
    long: -111.874080
};

let stumptownOne = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/RUX9kErXJ4v', '4525 SE Division St', 'Portland, OR 97206'),

    lat: 45.505481,
    long: -122.615562
};

let stumptownTwo = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/4dwveefgxg72', '3356 SE Belmont St', 'Portland, OR 97214'),

    lat: 45.516354,
    long: -122.629689
};

let stumptownThree = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/PhotyaL7WcC2', '1026 SE Stark St', 'Portland, OR 97214'),

    lat: 45.522034,
    long: -122.681717
};

let stumptownFour = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/ERSsSkybPZD2', '128 SW 3rd Ave', 'Portland, OR 97204'),

    lat: 45.521780,
    long: -122.673295
};

let stumptownFive = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the PDX Airport)', 'Coffee Shop', 'https://goo.gl/maps/1bDk6qyyjWK2', '7000 NE Airport Way', 'Portland, OR 97218'),

    lat: 45.589231,
    long: -122.593477
};

let stumptownSix = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/MKPitbmX7M52', '1115 12th Ave', 'Seattle, WA 98122'),

    lat: 47.612096,
    long: -122.317104
};

let stumptownSeven = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/UTJ65dH4QiM2', '212b Pacific St', 'Brooklyn, NY 11201'),

    lat: 40.688855,
    long: -73.992174
};

let stumptownEight = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/jQAtk2RgmVF2', '30 W 8th St', 'New York, NY 10011'),

    lat: 40.732774,
    long: -73.998001
};

let stumptownNine = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/R3MvXhEsWuP2', '18 W 29th St', 'New York, NY 10001'),

    lat: 40.745754,
    long: -73.988197
};

let stumptownTen = {
    info: oneFunction('Stumptown Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/GNPU4j6xmT92', '806 S Santa Fe Ave', 'Los Angeles, CA 90021'),

    lat: 34.033281,
    long: -118.229728
};

let stumptownEleven = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/4tW65Fcn2u42', '610 Carondelet St', 'New Orleans, LA 70130'),

    lat: 29.948259,
    long: -90.072167
};

let stumptownTwelve = {
    info: oneFunction('Stumptown Coffee Roasters<br />(in the Ace Hotel)', 'Coffee Shop', 'https://goo.gl/maps/15StdtEC25L2', '311 N Morgan St', 'Chicago, IL 60607'),

    lat: 41.887271,
    long: -87.651744
};

let passengerOne = {
    info: oneFunction('Passenger Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/mXBESiSpQW42', '7 W King St', 'Lancaster, PA 17603'),

    lat: 40.038048,
    long: -76.306336
};

let onyxOne = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/9hnefuh21RB2', '2418 N Gregg Ave', 'Fayetteville, AR 72703'),

    lat: 36.096031,
    long: -94.160137
};

let onyxTwo = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/pHC9uwZKrEP2', '7058 W Sunset Ave #1A', 'Springdale, AR 72762'),

    lat: 36.177048,
    long: -94.208701
};

let onyxThree = {
    info: oneFunction('Onyx Coffee Lab', 'Coffee Shop', 'https://goo.gl/maps/2PzwwVWv9uC2', '100 NW 2nd St #106', 'Bentonville, AR 72712'),

    lat: 36.373135,
    long: -94.210036
};

let percOne = {
    info: oneFunction('Perc Coffee', 'Coffee Shop & Roastery', 'https://goo.gl/maps/ticC82Q1QTH2', '1802 E Broad St', 'Savannah, GA 31401'),

    lat: 32.057554,
    long: -81.091827
};

let methodicalOne = {
    info: oneFunction('Methodical Coffee', 'Coffee Shop', 'https://goo.gl/maps/aB7aXMZfDD72', '101 N Main St Suite D', 'Greenville, SC 29601'),

    lat: 34.851876,
    long: -82.400013
};

let honestOne = {
    info: oneFunction('Honest Coffee Roasters', 'Coffee Shop & Roastery', 'https://goo.gl/maps/RH2khtJAEuC2', '230 Franklin Rd #11A', 'Franklin, TN 37064'),

    lat: 35.931969,
    long: -86.859699
};

let honestTwo = {
    info: oneFunction('Honest Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/QanW29FHYz12', '114 Clinton Ave E #106', 'Huntsville, AL 35801'),

    lat: 34.731588,
    long: -86.585734
};

let cremaOne = {
    info: oneFunction('Crema', 'Coffee Shop', 'https://goo.gl/maps/nhiHBcFTH992', '15 Hermitage Ave', 'Nashville, TN 37210'),

    lat: 36.156918,
    long: -86.769730
};

let voidOne = {
    info: oneFunction('Void Coffee Company', 'Coffee Shop', 'https://goo.gl/maps/qTmdSBCGHnA2', '320 Washington Street West', 'Charleston, WV 25302'),

    lat: 38.361710,
    long: -81.641308
};

let messengerOne = {
    info: oneFunction('Messenger Coffee Co', 'Coffee Shop & Bakery', 'https://goo.gl/maps/AGmc8yBUmJm', '1624 Grand Blvd', 'Kansas City, MO 64108'),

    lat: 39.093520,
    long: -94.581623
};

let persephoneOne = {
    info: oneFunction('Persephone Bakery', 'Coffee Shop & Bakery', 'https://goo.gl/maps/7LFXj148GH12', '145 E Broadway Ave', 'Jackson, WY 83001'),

    lat: 43.479765,
    long: -110.760006
};

let chaleurOne = {
    info: oneFunction('Chaleur Method Brew<br />+ Espresso', 'Coffee Shop', 'https://goo.gl/maps/S2VFdVjknCz', '1714 Dauphin St', 'Mobile, AL 36604'),

    lat: 30.687042,
    long: -88.078894
};

let corvusOne = {
    info: oneFunction('Corvus Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/gpPupaMhYt32', '1740 S Broadway', 'Denver, CO 80210'),

    lat: 39.684913,
    long: -104.987252
};

let corvusTwo = {
    info: oneFunction('Corvus Coffee Roasters', 'Coffee Shop', 'https://goo.gl/maps/ShiK99LsER32', '4925 S Newport St', 'Denver, CO 80237'),

    lat: 39.624990,
    long: -104.907144
};

let loyalOne = {
    info: oneFunction('Loyal Coffee', 'Coffee Shop', 'https://goo.gl/maps/Ux2WPKrSGCK2', '408 S Nevada Ave', 'Colorado Springs, CO 80903'),

    lat: 38.827805,
    long: -104.822335
};

let chromeyellowOne = {
    info: oneFunction('Chrome Yellow Trading Co.', 'Coffee Shop & Store', 'https://goo.gl/maps/3WNcZUQnZKu', '501 Edgewood Ave SE', 'Atlanta, GA 30312'),

    lat: 33.753893,
    long: -84.371021
};

let pleaseandthanksOne = {
    info: oneFunction('Please & Thank You', 'Coffee Shop & Record Store', 'https://goo.gl/maps/RSDeUfEBbsD2', '800 E Market St', 'Louisville, KY 40206'),

    lat: 38.253005,
    long: -85.737893
};

let pleaseandthanksTwo = {
    info: oneFunction('Please & Thank You', 'Coffee Shop', 'https://goo.gl/maps/Apzd31UQyhT2', '2341 Frankfort Ave', 'Louisville, KY 40206'),

    lat: 38.253682,
    long: -85.701428
};

let pleaseandthanksThree = {
    info: oneFunction('Please & Thank You', 'Coffee Shop', 'https://goo.gl/maps/HNXCn732RRk', '252 E Market St', 'Louisville, KY 40204'),

    lat: 38.254045,
    long: -85.748408
};

let secondstateOne = {
    info: oneFunction('Second State Coffee', 'Coffee Shop', 'https://goo.gl/maps/uTGFeupCkmK2', '70.5 Beaufain St', 'Charleston, SC 29401'),

    lat: 32.779886,
    long: -79.937666
};

let saintfranksOne = {
    info: oneFunction('Saint Frank', 'Coffee Shop', 'https://goo.gl/maps/zPav2bGBVR62', '2340 Polk St', 'San Francisco, CA 94109'),

    lat: 37.798479,
    long: -122.422188
};

let saintfranksTwo = {
    info: oneFunction('Saint Frank', 'Coffee Shop', 'https://goo.gl/maps/zPav2bGBVR62', '1081 Mission St', 'San Francisco, CA 94103'),

    lat: 37.779469,
    long: -122.410290
};

let caferoseOne = {
    info: oneFunction('Cafe Roze', 'Coffee Shop & All-Day Cafe', 'https://goo.gl/maps/Wg9mSa23nHx', '1115 Porter Rd', 'Nashville, TN 37206'),

    lat: 36.188609,
    long: -86.729116
};

let veloOne = {
    info: oneFunction('Velo Coffee Roasters', 'Coffee Roaster with Service', 'https://goo.gl/maps/RdzrG4ywKm72', '1410, 509 E Main St #3', 'Chattanooga, TN 37408'),

    lat: 35.033985,
    long: -85.301419
};

let kbrewOne = {
    info: oneFunction('K Brew', 'Coffee Shop', 'https://goo.gl/maps/1m9ATqiY1oz', '1138 N Broadway', 'Knoxville, TN 37917'),

    lat: 35.983771,
    long: -83.922141
};

let amethystOne = {
    info: oneFunction('Amethyst Coffee', 'Coffee Shop', 'https://goo.gl/maps/zo9Nh6BW3K62', '1111 Broadway #101', 'Denver, CO 80203'),

    lat: 39.734137,
    long: -104.987665
};

let amethystTwo = {
    info: oneFunction('Amethyst Coffee', 'Coffee Shop', 'https://goo.gl/maps/tf5pkKy2T2H2', '4999 W 44th Ave', 'Denver, CO 80212'),

    lat: 39.776727,
    long: -105.050661
};

let baristaalleyOne = {
    info: oneFunction('Barista Alley', 'Coffee Shop & Smoothie Bar', 'https://goo.gl/maps/9Yo6HvxuHjq', '125 E Poinsett St', 'Greer, SC 29651'),

    lat: 34.938428,
    long: -82.226168
};

let hiddenhouseOne = {
    info: oneFunction('Hidden House Coffee', 'Coffee Shop', 'https://goo.gl/maps/2EMAzHcfU922', '511 E Santa Ana Blvd', 'Santa Ana, CA 92701'),

    lat: 33.750432,
    long: -117.863091
};

let theboyandthebearOne = {
    info: oneFunction('The Boy & the Bear', 'Coffee Shop', 'https://goo.gl/maps/FHFCbM7g8ES2', '12712 W Washington Blvd Suite 101', 'Los Angeles, CA 90066'),

    lat: 33.996553,
    long: -118.434946
};

let theboyandthebearTwo = {
    info: oneFunction('The Boy & the Bear', 'Coffee Shop', 'https://goo.gl/maps/vXTyfKPJkxR2', '350 N Pacific Coast Hwy', 'Redondo Beach, CA 90277'),

    lat: 33.847128,
    long: -118.387487
};

let retrogradeOne = {
    info: oneFunction('Retrograde Coffee', 'Coffee Shop', 'https://goo.gl/maps/MYKfBAm9af22', '1305 Dickerson Pike', 'Nashville, TN 37207'),

    lat: 36.195047,
    long: -86.771829
};

let postcommonsOne = {
    info: oneFunction('Post Commons', 'Coffee Shop', 'https://goo.gl/maps/ieUECF9CapB2', '300 Alby St', 'Alton, IL 62002'),

    lat: 38.891259,
    long: -90.184550
};

let octaneOne = {
    info: oneFunction('Octane Coffee', 'Coffee Shop', 'https://goo.gl/maps/s4kJ9NFH8R92', '1009 Marietta St NW', 'Atlanta, GA 30318'),

    lat: 33.779410,
    long: -84.410264
};

let octaneTwo = {
    info: oneFunction('Octane Coffee', 'Coffee Shop', 'https://goo.gl/maps/nHokvRCjSPA2', 'Suite 100-A, 1280 Peachtree St NE', 'Atlanta, GA 30309'),

    lat: 33.789703,
    long: -84.384943
};

let octaneThree = {
    info: oneFunction('Octane Coffee', 'Coffee Shop', 'https://goo.gl/maps/mRbHYX4SQWv', '2221 Richard Arrington Jr Blvd N', 'Birmingham, AL 35203'),

    lat: 33.525780,
    long: -86.808051
};

let octaneFour = {
    info: oneFunction('Octane Coffee', 'Coffee Shop', 'https://goo.gl/maps/fdiSycCdv8U2', '2822 Central Ave', 'Homewood, AL 35209'),

    lat: 33.479564,
    long: -86.795683
};

let colonykcOne = {
    info: oneFunction('Colony KC', 'Coffee Shop', 'https://goo.gl/maps/q7uby3xBpU42', '312 Armour Rd', 'North Kansas City, MO 64116'),

    lat: 39.142277,
    long: -94.576576
};

let blackeyeOne = {
    info: oneFunction('Black Eye Coffee', 'Coffee Shop', 'https://goo.gl/maps/2EmtYAEGZzt', '3408 Navajo St', 'Denver, CO 80211'),

    lat: 39.764695,
    long: -105.003965
};

let hardenOne = {
    info: oneFunction('Harden Coffee', 'Coffee Shop', 'https://goo.gl/maps/CmpzqvEsDo22', '202 East Main Street', 'Campbellsville, KY 42718'),

    lat: 37.340923,
    long: -85.343947
};

let ilLupoOne = {
    info: oneFunction('il Lupo Coffee', 'Coffee Shop', 'https://goo.gl/maps/WXDwv5QrBZK2', '8RVV+FH', 'Jackson, Mississippi 39211'),

    lat: 32.343747,
    long: -90.156036
};

let greaterGoodOne = {
    info: oneFunction('Greater Goods Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/zgMmVihsqFu', '2501 East 5th Street', 'Austin, TX 78702'),

    lat: 30.257685,
    long: -97.714981
};

let greaterGoodTwo = {
    info: oneFunction('Greater Goods Coffee Roasters', 'Coffee Shop & Roastery' , 'https://goo.gl/maps/nJ8QmEd5eb32', '160 McGregor Lane', 'Dripping Springs, TX 78620'),

    lat: 30.208048,
    long: -98.141031
};

let greaterGoodThree = {
    info: oneFunction('Greater Goods Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/Umn76P4RUD52', '12005 Bee Cave Road #4B', 'Bee Cave, TX 78738'),

    lat: 30.307696,
    long: -97.927098
};

let meritOne = {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/jXzicZ2s3Wn', '222 West Ave #120', 'Austin, TX 78701'),

    lat: 30.267594,
    long: -97.752088
};

let meritTwo = {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/mg1ZdbqApay', '1105 S Lamar Blvd', 'Austin, TX 78704'),

    lat: 30.255275,
    long: -97.761778
};

let meritThree= {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/WoiTnrcPenS2', '700 E Sonterra Blvd #1113', 'San Antonio, TX 78258'),

    lat: 29.614300,
    long: -98.484035
};

let meritFour= {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/YoHWRwUEep62', '302 Pearl Pkwy', 'San Antonio, TX 78215'),

    lat: 29.442191,
    long: -98.479540
};

let meritFive= {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/oCp2j88ixdU2', '7338 Louis Pasteur Dr #204', 'San Antonio, TX 78229'),

    lat: 29.503428,
    long: -98.574261
};

let meritSix= {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/rrGyp5nykP82', '24175 I-10 #110', 'San Antonio, TX 78257'),

    lat: 29.666040,
    long: -98.632636
};

let meritSeven= {
    info: oneFunction('Merit Coffee', 'Coffee Shop' , 'https://goo.gl/maps/2eVUQRZTMyw', '4115 Pond, Hill Ln Suite 101', 'San Antonio, TX 78231'),

    lat: 29.597964,
    long: -98.563303
};

let rivalBrosOne = {
    info: oneFunction('Rival Bros Coffee Bar', 'Coffee Bar' , 'https://goo.gl/maps/PAaUmFCUiXn', '2400 Lombard Street', 'Philadelphia, PA 19146'),

    lat: 39.946481,
    long: -75.180650
};

let rivalBrosTwo = {
    info: oneFunction('Rival Bros Coffee Bar', 'Coffee Bar' , 'https://goo.gl/maps/PRbvgThqTYF2', '1528 Spruce Street', 'Philadelphia, PA 19102'),

    lat: 39.947240,
    long: -75.167733
};

let rivalBrosThree = {
    info: oneFunction('Rival Bros Coffee Bar', 'Coffee Bar' , 'https://goo.gl/maps/M5Kyz2XcLg22', '1100 Tasker Street', 'Philadelphia, PA 19148'),

    lat: 39.929732,
    long: -75.163243
};

let publicEspressoOne = {
    info: oneFunction('Public Espresso + Coffee', 'Coffee Shop' , 'https://goo.gl/maps/sS9yJu6rUo12', '391 Washington Street', 'Buffalo, NY 14203'),

    lat: 42.885101,
    long: -78.873254
};

let monarchOne = {
    info: oneFunction('Monarch Coffee', 'Coffee Shop' , 'https://goo.gl/maps/KcURqho7nRQ2', '3550 Broadway Blvd', 'Kansas City, MO 64111'),

    lat: 39.062604,
    long: -94.590584
};

let neverOne = {
    info: oneFunction('Never Coffee Lab', 'Coffee Shop' , 'https://goo.gl/maps/aEzLheDRXuS2', '34243 SE Belmont St #200', 'Portland, OR 97215'),

    lat: 45.516661,
    long: -122.618777
};

let novaOne = {
    info: oneFunction('Nova Espresso', 'Coffee Shop' , 'https://goo.gl/maps/XegzqGpgBiQ2', '306 Saint Athony Street', 'Mobile, AL 36603'),

    lat: 30.694224,
    long: -88.047102
};

let blueCopperOne = {
    info: oneFunction('Blue Copper Coffee Room', 'Coffee Shop' , 'https://goo.gl/maps/7Ht8eBS1jNR2', '179 W 900 S', 'Salt Lake City, UT 84101'),

    lat: 40.749539,
    long: -111.896236
};

let sweetLalasOne = {
    info: oneFunction("Sweet Lala's Bakery", 'Bakery & Coffee Shop' , 'https://goo.gl/maps/qmZdnEfcoc72', '6150 Poplar Ave Suite 118', 'Memphis, TN 38119'),

    lat: 35.102971,
    long: -89.857792
};

let cornerPerkOne = {
    info: oneFunction('Corner Perk', 'Coffee Shop' , 'https://goo.gl/maps/KgvRhLUHR342', '1297 May River Rd #101', 'Bluffton, SC 29910'),

    lat: 32.237372,
    long: -80.861905
};

let notJustCoffeeOne = {
    info: oneFunction('Not Just Coffee', 'Coffee Shop' , 'https://goo.gl/maps/MFEaf6C7fuv', '224 E 7th St', 'Charlotte, NC 28202'),

    lat: 35.227440,
    long: -80.838239
};

let notJustCoffeeTwo = {
    info: oneFunction('Not Just Coffee', 'Coffee Shop' , 'https://goo.gl/maps/T9KZMWhNCpr', '222 S Church St', 'Charlotte, NC 28202'),

    lat: 35.226997,
    long: -80.845969
};

let notJustCoffeeThree = {
    info: oneFunction('Not Just Coffee', 'Coffee Shop' , 'https://goo.gl/maps/35kQKv1F5cL2', '2000 South Blvd', 'Charlotte, NC 28203'),

    lat: 35.209313,
    long: -80.860876
};

let notJustCoffeeFour = {
    info: oneFunction('Not Just Coffee', 'Coffee Shop' , 'https://goo.gl/maps/6KF9MYnrn142', '421 Providence Rd', 'Charlotte, NC 28207'),

    lat: 35.204189,
    long: -80.824238
};

let notJustCoffeeFive = {
    info: oneFunction('Not Just Coffee', 'Coffee Shop' , 'https://goo.gl/maps/qHB6v62joRw', '2230 Park Rd Suite 102', 'Charlotte, NC 28203'),

    lat: 35.199070,
    long: -80.852526
};

let honeybeeOne = {
    info: oneFunction('HoneyBee Coffee', 'Coffee Shop' , 'https://goo.gl/maps/aAgiFLBHKKS2', '700 Sevier Ave', 'Knoxville, TN 37920'),

    lat: 35.957369,
    long: -83.908974
};

let honeybeeTwo = {
    info: oneFunction('HoneyBee Coffee', 'Coffee Shop' , 'https://goo.gl/maps/5i7J2tqjS712', '10716 Kingston Pike', 'Knoxville, TN 37934'),

    lat: 35.894562,
    long: -84.138958
};

let laBarbaOne = {
    info: oneFunction('La Barba Coffee', 'Coffee Shop' , 'https://goo.gl/maps/MHNTWWuoot62', '113811 Sprague Ln', 'Draper, UT 84020'),

    lat: 40.500391,
    long: -111.887293
};

let laBarbaTwo = {
    info: oneFunction('La Barba Coffee', 'Coffee Shop' , 'https://goo.gl/maps/8HGn6BcmSLR2', '327 W 200 S', 'Salt Lake City, UT 84101'),

    lat: 40.764976,
    long: -111.900810
};

let laBarbaThree = {
    info: oneFunction('La Barba Coffee', 'Coffee Shop' , 'https://goo.gl/maps/x6KTwVJk9NA2', '9 S Rio Grande St', 'Salt Lake City, UT 84101'),

    lat: 40.768899,
    long: -111.903866
};

let falconOne = {
    info: oneFunction('Falcon Coffee Bar', 'Coffee Shop' , 'https://goo.gl/maps/5kBvwLaox962', '509 Houston St', 'Nashville, TN 37203'),

    lat: 36.142684,
    long: -86.768328
};

let manchesterOne = {
    info: oneFunction('Manchester Coffee Co.', 'Coffee Shop' , 'https://goo.gl/maps/jiFukLb1y2P2', '903 Manchester St St. 180', 'Lexington, KY 40508'),

    lat: 38.053286,
    long: -84.509601
};

let redhawkOne = {
    info: oneFunction('Redhawk Coffee', 'Coffee Shop' , 'https://goo.gl/maps/nAYTAE5XLQF2', '120 Meyran Ave', 'Pittsburgh, PA 15213'),

    lat: 40.440699,
    long: -79.958652
};

let redhawkTwo = {
    info: oneFunction('Redhawk Coffee', 'Coffee Shop' , 'https://goo.gl/maps/76PNvKbNgpk', '536 Smithfield St', 'Pittsburgh, PA 15222'),

    lat: 40.441135,
    long: -79.997780
};

let deeperRootsOne = {
    info: oneFunction('Deeper Roots Coffee', 'Coffee Shop' , 'https://goo.gl/maps/NKJdm7rV5p72', '3056 Madison Rd', 'Cincinnati, OH 45209'),

    lat: 39.152172,
    long: -84.431952
};

let deeperRootsTwo = {
    info: oneFunction('Deeper Roots Coffee', 'Coffee Shop' , 'https://goo.gl/maps/7ANePEmpBK62', '1814 Race St', 'Cincinnati, OH 45202'),

    lat: 39.115938,
    long: -84.518135
};

let carabelloOne = {
    info: oneFunction('Carabello Coffee Company', 'Coffee Shop' , 'https://goo.gl/maps/VcVSru2BdSq', '107 E 9th St', 'Newport, KY 41071'),

    lat: 39.088613,
    long: -84.490019
};

let collectiveEspressoOne = {
    info: oneFunction('Collective Espresso', 'Coffee Shop' , 'https://goo.gl/maps/6xvgrpj4RaU2', '207 Woodward St', 'Cincinnati, OH 45202'),

    lat: 39.110402,
    long: -84.511534
};

let collectiveEspressoTwo = {
    info: oneFunction('Collective Espresso', 'Coffee Shop' , 'https://goo.gl/maps/99QrohVTy1z', '4037 Hamilton Ave', 'Cincinnati, OH 45223'),

    lat: 39.159791,
    long: -84.539645
};

let steadfastOne = {
    info: oneFunction('Steadfast Coffee', 'Coffee Shop' , 'https://goo.gl/maps/9KssEMjDMJN2', '603 Taylor St', 'Nashville, TN 37208'),

    lat: 36.177825,
    long: -86.791482
};

let embassyOne = {
    info: oneFunction('Embassy Coffee Co.', 'Coffee Shop' , 'https://goo.gl/maps/31TbakJpDMEA2ThG7', '209 W Lincoln Ave', 'Goshen, IN 46528'),

    lat: 41.586643,
    long: -85.836827
};

let peaksOne = {
    info: oneFunction('Peaks Coffee Company', 'Coffee Shop' , 'https://goo.gl/maps/jDZifX8SycKtkPvx8', '1200 E Genesee St', 'Syracuse, NY 13210'),

    lat: 43.046601,
    long: -76.131652
};

let pearlOne = {
    info: oneFunction('Pearl on Union', 'Coffee Shop' , 'https://goo.gl/maps/XZDdBLdbQs9cp1NX9', '513 Union Ave SW', 'Knoxville, TN 37902'),

    lat: 35.964367,
    long: -83.920682
};

let seyOne = {
    info: oneFunction('SEY COFFEE', 'Coffee Shop' , 'https://goo.gl/maps/atqHnQUzUmjpgN3PA', '18 Grattan St', 'Brooklyn, NY 11206'),

    lat: 40.705317,
    long: -73.932418
};

let brashOne = {
    info: oneFunction('BRASH Coffee', 'Coffee Shop' , 'https://goo.gl/maps/TooEeWyWWy1SJUqLA', '0516, 1168 Howell Mill Rd', 'Atlanta, GA 30318'),

    lat: 33.785565,
    long: -84.411985
};

let brashTwo = {
    info: oneFunction('BRASH Coffee', 'Coffee Shop' , 'https://goo.gl/maps/Pygs71ZvfGuKVaZE9', 'Atlanta History Center, 130 West Paces Ferry Rd NW', 'Atlanta, GA 30305'),

    lat: 33.842006,
    long: -84.386063
};

let brashThree = {
    info: oneFunction('Huge x BRASH Coffee', 'Coffee Shop' , 'https://goo.gl/maps/5cyaSDWEy6Rk2bpd9', '1375 Peachtree St NE', 'Atlanta, GA 30309'),

    lat: 33.792540,
    long: -84.386068
};

let elementalOne = {
    info: oneFunction('Elemental Coffee', 'Coffee Shop' , 'https://goo.gl/maps/v6gUCsoroSMggmx27', '815 N Hudson Ave', 'Oklahoma City, OK 73102'),

    lat: 35.475783,
    long: -97.519473
};

let clarityOne = {
    info: oneFunction('Clarity Coffee', 'Coffee Shop' , 'https://goo.gl/maps/V6RecdSUzHcvsKaB7', '431 W Main St', 'Oklahoma City, OK 73102'),

    lat: 35.468003,
    long: -97.520222
};

let evokeOne = {
    info: oneFunction('Café Evoke', 'Coffee Shop' , 'https://goo.gl/maps/ZYzAFzUqGx3aLFEQ9', '3843, 103 S Broadway', 'Edmond, OK 73034'),

    lat: 35.654037,
    long: -97.481677
};

let coffeeSlingersOne = {
    info: oneFunction('Coffee Slingers', 'Coffee Shop' , 'https://goo.gl/maps/eB2QxaKGBj87gYeC6', '1015 N Broadway Ave', 'Oklahoma City, OK 73102'),

    lat: 35.477694,
    long: -97.514310
};

let wholeshotOne = {
    info: oneFunction('Wholeshot Coffee', 'Coffee Shop' , 'https://goo.gl/maps/sxZkRh7FZPvHktsX6', '2200 W Hefner Rd Ste 1', 'The Village, OK 73120'),

    lat: 35.579768,
    long: -97.552637
};

let pressOne = {
    info: oneFunction('Press Coffee Bar', 'Coffee Shop' , 'https://goo.gl/maps/WjkXPpFbGDb6mgqe6', '257 Wayne Ave', 'Dayton, OH 45402'),

    lat: 39.757442,
    long: -84.182726
};

let pressTwo = {
    info: oneFunction('Press Coffee Bar', 'Coffee Shop' , 'https://goo.gl/maps/MXZXHx91XiMM3ABn6', '732 Watervliet Ave', 'Dayton, OH 45420'),

    lat: 39.731035,
    long: -84.141611
};

let landlockedOne = {
    info: oneFunction('Landlocked Social House', 'Coffee Shop, Food, Cocktails' , 'https://goo.gl/maps/RS9HWYpc3PYF2ixd9', '648 E McMillan St.', 'Cincinnati, OH 45206'),

    lat: 39.126425,
    long: -84.496030
};

let elmOne = {
    info: oneFunction('Elm Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/9ZjjhzsbYGc6RrgU7', '240 2nd Ave S #103', 'Seattle, WA 98104'),

    lat: 47.600137,
    long: -122.331071
};

let elmTwo = {
    info: oneFunction('Elm Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/d7Jj2YT48wbDFNm68', '230 9th Ave N', 'Seattle, WA 98109'),

    lat: 47.620074,
    long: -122.339466
};

let analogOne = {
    info: oneFunction('Analog Coffee', 'Coffee Shop' , 'https://goo.gl/maps/mMM9Yvq2F2c7EVAQ7', '235 Summit Ave E', 'Seattle, WA 98102'),

    lat: 47.620736,
    long: -122.325435
};

let victrolaOne = {
    info: oneFunction('Victrola Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/EEuEsDyn7bg1aP7F9', '310 E Pike St', 'Seattle, WA 98122'),

    lat: 47.614324,
    long: -122.327287
};

let tougoOne = {
    info: oneFunction('Tougo Coffee', 'Coffee Shop' , 'https://goo.gl/maps/M9tK2Wwves58845A7', '860 Yesler Way', 'Seattle, WA 98104'),

    lat: 47.601834,
    long: -122.321171
};

let porchlightOne = {
    info: oneFunction('Porchlight Coffee & Records', 'Coffee & Records Shop' , 'https://goo.gl/maps/gKSsbzKC7R9Y68rb9', '1517 14th Ave', 'Seattle, WA 98122'),

    lat: 47.614695,
    long: -122.314407
};

let goodOne = {
    info: oneFunction('Good Coffee', 'Coffee Shop' , 'https://goo.gl/maps/ewQP2e6dZDpCq1XF9', '1150 SE 12th Ave', 'Portland, OR 97214'),

    lat: 45.514470,
    long: -122.653443
};

let goodTwo = {
    info: oneFunction('Good Coffee', 'Coffee Shop' , 'https://goo.gl/maps/C1MF6vPJ2Fq2mLU77', '4747 SE Division St', 'Portland, OR 97206'),

    lat: 45.505490,
    long: -122.613600
};

let goodThree = {
    info: oneFunction('Good Coffee', 'Coffee Shop' , 'https://goo.gl/maps/vFdt6BkpUk4136cU7', '2175 NW Raleigh St #106', 'Portland, OR 97210'),

    lat: 45.534468,
    long: -122.696251
};

let goodFour = {
    info: oneFunction('Good Coffee', 'Coffee Shop' , 'https://goo.gl/maps/bFAkzongkDVrVmLQ8', '813 SW Alder St', 'Portland, OR 97205'),

    lat: 45.520464,
    long: -122.680517
};

let coavaOne = {
    info: oneFunction('Coava Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/cnmCLn8YFgnZB5Zb8', '1300 Southeast Grand Avenue', 'Portland, OR 97214'),

    lat: 45.513553,
    long: -122.660600
};

let coavaTwo = {
    info: oneFunction('Coava Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/qHuHLo1PJ5t4i2qX7', '2631 SE Hawthorne Blvd', 'Portland, OR 97214'),

    lat: 45.512193,
    long: -122.638520
};

let coavaThree = {
    info: oneFunction('Coava Public Brew Bar & Roastery', 'Coffee Shop & Roastery' , 'https://goo.gl/maps/LKLRKG647KGa82u67', '1015 SE Main St', 'Portland, OR 97214'),

    lat: 45.513553,
    long: -122.660600
};

let coavaFour = {
    info: oneFunction('Coava Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/RsZ28Nyf2vZE9Myx5', '400 West Broadway', 'San Diego, CA 92101'),

    lat: 32.715911,
    long: -117.167259
};

let coavaFive = {
    info: oneFunction('Coava Coffee Roasters', 'Coffee Shop' , 'https://goo.gl/maps/PpEc9xRtKHkexMSV6', '1171 SW Jefferson St', 'Portland, OR 97201'),

    lat: 45.516656,
    long: -122.686034
};

let upperLeftOne = {
    info: oneFunction('Upper Left Roasters', 'Coffee Shop' , 'https://goo.gl/maps/gqzRQTPYiGLDS9dr9', '555 SW Morrison St Suite 100', 'Portland, OR 97204'),

    lat: 45.519164,
    long: -122.678066
};

let upperLeftTwo = {
    info: oneFunction('Upper Left Roasters', 'Coffee Shop' , 'https://goo.gl/maps/6oQzMMTDizcqrAnL9', '1204 SE Clay St', 'Portland, OR 97214'),

    lat: 45.511372,
    long: -122.653423
};

let camberOne = {
    info: oneFunction('Camber   ', 'Coffee Shop' , 'https://goo.gl/maps/FCnzF7CFpLHCVPL29', '221 W Holly St', 'Bellingham, WA 98225'),

    lat: 48.750839,
    long: -122.481257
};

let neckarOne = {
    info: oneFunction('Neckar Coffee', 'Coffee Shop' , 'https://goo.gl/maps/yGwHrokzx7p9iye18', '117 S 10th St', 'Boise, ID 83702'),

    lat: 43.616570,
    long: -116.206554
};

























	let locations = [
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
      [retrogradeOne.info, retrogradeOne.lat, retrogradeOne.long, 80],
      [postcommonsOne.info, postcommonsOne.lat, postcommonsOne.long, 81],
      [octaneOne.info, octaneOne.lat, octaneOne.long, 82],
      [octaneTwo.info, octaneTwo.lat, octaneTwo.long, 83],
      [octaneThree.info, octaneThree.lat, octaneThree.long, 84],
      [octaneFour.info, octaneFour.lat, octaneFour.long, 85],
      [colonykcOne.info, colonykcOne.lat, colonykcOne.long, 86],
      [blackeyeOne.info, blackeyeOne.lat, blackeyeOne.long, 87],
      [hardenOne.info, hardenOne.lat, hardenOne.long, 88],
      [ilLupoOne.info, ilLupoOne.lat, ilLupoOne.long, 89],
      [greaterGoodOne.info, greaterGoodOne.lat, greaterGoodOne.long, 90],
      [greaterGoodTwo.info, greaterGoodTwo.lat, greaterGoodTwo.long, 91],
      [greaterGoodThree.info, greaterGoodThree.lat, greaterGoodThree.long, 92],
      [meritOne.info, meritOne.lat, meritOne.long, 93],
      [meritTwo.info, meritTwo.lat, meritTwo.long, 94],
      [meritThree.info, meritThree.lat, meritThree.long, 95],
      [meritFour.info, meritFour.lat, meritFour.long, 96],
      [meritFive.info, meritFive.lat, meritFive.long, 97],
      [meritSix.info, meritSix.lat, meritSix.long, 98],
      [meritSeven.info, meritSeven.lat, meritSeven.long, 99],
      [rivalBrosOne.info, rivalBrosOne.lat, rivalBrosOne.long, 100],
      [rivalBrosTwo.info, rivalBrosTwo.lat, rivalBrosTwo.long, 101],
      [rivalBrosThree.info, rivalBrosThree.lat, rivalBrosThree.long, 102],
      [publicEspressoOne.info, publicEspressoOne.lat, publicEspressoOne.long, 103],
      [monarchOne.info, monarchOne.lat, monarchOne.long, 104],
      [neverOne.info, neverOne.lat, neverOne.long, 105],
      [novaOne.info, novaOne.lat, novaOne.long, 106],
      [blueCopperOne.info, blueCopperOne.lat, blueCopperOne.long, 107],
      [sweetLalasOne.info, sweetLalasOne.lat, sweetLalasOne.long, 108],
      [cornerPerkOne.info, cornerPerkOne.lat, cornerPerkOne.long, 109],
      [notJustCoffeeOne.info, notJustCoffeeOne.lat, notJustCoffeeOne.long, 110],
      [notJustCoffeeTwo.info, notJustCoffeeTwo.lat, notJustCoffeeTwo.long, 111],
      [notJustCoffeeThree.info, notJustCoffeeThree.lat, notJustCoffeeThree.long, 112],
      [notJustCoffeeFour.info, notJustCoffeeFour.lat, notJustCoffeeFour.long, 113],
      [notJustCoffeeFive.info, notJustCoffeeFive.lat, notJustCoffeeFive.long, 114],
      [honeybeeOne.info, honeybeeOne.lat, honeybeeOne.long, 115],
      [honeybeeTwo.info, honeybeeTwo.lat, honeybeeTwo.long, 116],
      [laBarbaOne.info, laBarbaOne.lat, laBarbaOne.long, 117],
      [laBarbaTwo.info, laBarbaTwo.lat, laBarbaTwo.long, 118],
      [laBarbaThree.info, laBarbaThree.lat, laBarbaThree.long, 119],
      [falconOne.info, falconOne.lat, falconOne.long, 120],
      [manchesterOne.info, manchesterOne.lat, manchesterOne.long, 121],
      [redhawkOne.info, redhawkOne.lat, redhawkOne.long, 122],
      [redhawkTwo.info, redhawkTwo.lat, redhawkTwo.long, 123],
      [deeperRootsOne.info, deeperRootsOne.lat, deeperRootsOne.long, 124],
      [deeperRootsTwo.info, deeperRootsTwo.lat, deeperRootsTwo.long, 125],
      [carabelloOne.info, carabelloOne.lat, carabelloOne.long, 126],
      [collectiveEspressoOne.info, collectiveEspressoOne.lat, collectiveEspressoOne.long, 127],
      [collectiveEspressoTwo.info, collectiveEspressoTwo.lat, collectiveEspressoTwo.long, 128],
      [steadfastOne.info, steadfastOne.lat, steadfastOne.long, 129],
      [embassyOne.info, embassyOne.lat, embassyOne.long, 130],
      [peaksOne.info, peaksOne.lat, peaksOne.long, 131],
      [pearlOne.info, pearlOne.lat, pearlOne.long, 132],
      [seyOne.info, seyOne.lat, seyOne.long, 133],
      [brashOne.info, brashOne.lat, brashOne.long, 134],
      [brashTwo.info, brashTwo.lat, brashTwo.long, 135],
      [brashThree.info, brashThree.lat, brashThree.long, 136],
      [elementalOne.info, elementalOne.lat, elementalOne.long, 137],
      [clarityOne.info, clarityOne.lat, clarityOne.long, 138],
      [evokeOne.info, evokeOne.lat, evokeOne.long, 139],
      [coffeeSlingersOne.info, coffeeSlingersOne.lat, coffeeSlingersOne.long, 140],
      [wholeshotOne.info, wholeshotOne.lat, wholeshotOne.long, 141],
      [pressOne.info, pressOne.lat, pressOne.long, 142],
      [pressTwo.info, pressTwo.lat, pressTwo.long, 143],
      [landlockedOne.info, landlockedOne.lat, landlockedOne.long, 144],
      [elmOne.info, elmOne.lat, elmOne.long, 145],
      [elmTwo.info, elmTwo.lat, elmTwo.long, 146],
      [analogOne.info, analogOne.lat, analogOne.long, 147],
      [victrolaOne.info, victrolaOne.lat, victrolaOne.long, 148],
      [tougoOne.info, tougoOne.lat, tougoOne.long, 149],
      [porchlightOne.info, porchlightOne.lat, porchlightOne.long, 150],
      [goodOne.info, goodOne.lat, goodOne.long, 151],
      [goodTwo.info, goodTwo.lat, goodTwo.long, 152],
      [goodThree.info, goodThree.lat, goodThree.long, 153],
      [goodFour.info, goodFour.lat, goodFour.long, 154],
      [coavaOne.info, coavaOne.lat, coavaOne.long, 155],
      [coavaTwo.info, coavaTwo.lat, coavaTwo.long, 156],
      [coavaThree.info, coavaThree.lat, coavaThree.long, 157],
      [coavaFour.info, coavaFour.lat, coavaFour.long, 158],
      [coavaFive.info, coavaFive.lat, coavaFive.long, 159],
      [upperLeftOne.info, upperLeftOne.lat, upperLeftOne.long, 160],
      [upperLeftTwo.info, upperLeftTwo.lat, upperLeftTwo.long, 161],
      [camberOne.info, camberOne.lat, camberOne.long, 162],
      [neckarOne.info, neckarOne.lat, neckarOne.long, 162]
    ];

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 38.686, lng: -97.324},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

	let infowindow = new google.maps.InfoWindow({});

	let marker, i;

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
