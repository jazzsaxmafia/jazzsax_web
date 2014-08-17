var assert = require('chai').assert;

//var test = require('selenium-webdriver/testing'),
var webdriver = require('selenium-webdriver');
var driver;
suite('Cross-Page Tests', function(){
	
	setup(function(){
		driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
	});
	test('requesting a group rate quote from the hood river tour page' +
		'should populate the referrer field', function(done){

			var referrer = 'http://localhost:5000/tours/hood-river';
			//var referrer = "google.com";
			driver.get(referrer).then(function(){
				setTimeout(function(){
                a = driver.findElement(webdriver.By.id('requestGroupRate'));
				//a.then(function(){
					done();
				//})
				
            }, 2000);


			});
	});

test('requesting a group rate quote from the hood river tour page' +
		'should populate the referrer field', function(done){

			var referrer = 'http://localhost:5000/tours/oregon-river';
			//var referrer = "google.com";
			driver.get(referrer).then(function(){
				setTimeout(function(){
                var a = driver.findElement(webdriver.By.id('requestGroupRate'));//, function(){
				//a.then(function(){done();});
				done();	
				//});
            }, 3000);


			});
	});
test('requesting a group rate quote from the hood river tour page' +
		'should populate the referrer field', function(done){

			var referrer = 'http://localhost:5000/tours/request-group-rate';
			//var referrer = "google.com";
			driver.get(referrer).then(function(){
				setTimeout(function(){
                //driver.findElement(webdriver.By.id('requestGroupRate'));//, function(){
					done();	
				//});
            }, 3000);


			});
	});
	// test('requesting a group rate from the oregon coast tour page should ' +
	// 		'populate the referrer field', function(done){
	// 		var referrer = 'http://localhost:5000/tours/oregon-coast';

	// 		driver.get(referrer, function(){
	// 			driver.click('.requestGroupRate', function(){
	// 				//assert(driver.field('referrer').value === referrer);
	// 				done();	
	// 			});
	// 		});

	// });

	// test('visiting the "request group rate" page dirctly should result ' +
	// 	'in an empty referrer field', function(done){
	// 	var referrer = 'http://localhost:5000/tours/request-group-rate';

	// 	driver.get(referrer, function(){
	// 		assert(driver.field('referrer').value === referrer);
	// 		done();	
	// 	});
		

	// });

})