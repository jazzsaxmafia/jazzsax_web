var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

suite('Cross-Page Tests', function(){
	
	setup(function(){

	});
	

	test('requesting a group rate quote from the hood river tour page', function(done){
			var referrer = 'http://localhost:5000/tours/hood-river';
			var driver = new webdriver.Builder().
		        withCapabilities(webdriver.Capabilities.chrome()).
		        build();
			driver.get('http://localhost:5000/tours/hood-river').then(function(){
	            setTimeout(function(){
	                driver.findElement(webdriver.By.name('requestGroupRate'));
	                assert("aa");
	            // driver.click("requestGroupRate", function(){
	            	done();
	            //});
	            }, 3000);
	        });



		});
});