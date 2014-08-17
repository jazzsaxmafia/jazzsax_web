var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 

    test.describe('Google Search', function() {
      test.it('should work', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        driver.get('http://localhost:5000/tours/hood-river').then(function(){
            setTimeout(function(){
                driver.findElement(webdriver.By.name('requestGroupRate'));
            // driver.click("requestGroupRate", function(){

            //});
            }, 3000);
        });
        //var searchBox = driver.findElement(webdriver.By.name('q'));
        //searchBox.sendKeys('simple programmer');
        // searchBox.getAttribute('value').then(function(value) {
        //   assert.equal(value, 'simple programmer');
        // });
        driver.quit();
      });
      test.it('should work', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        driver.get('http://localhost:5000/tours/oregon-river').then(function(){
            setTimeout(function(){
                driver.findElement(webdriver.By.name('requestGroupRate'));
            // driver.click("requestGroupRate", function(){

            //});
            }, 3000);
        });
        //var searchBox = driver.findElement(webdriver.By.name('q'));
        //searchBox.sendKeys('simple programmer');
        // searchBox.getAttribute('value').then(function(value) {
        //   assert.equal(value, 'simple programmer');
        // });
        driver.quit();
      });
      test.it('should work', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        driver.get('http://localhost:5000/tours/hood-river').then(function(){
            setTimeout(function(){
                driver.findElement(webdriver.By.name('requestGroupRate'));
            // driver.click("requestGroupRate", function(){

            //});
            }, 3000);
        });
        //var searchBox = driver.findElement(webdriver.By.name('q'));
        //searchBox.sendKeys('simple programmer');
        // searchBox.getAttribute('value').then(function(value) {
        //   assert.equal(value, 'simple programmer');
        // });
        driver.quit();
      });

       test.it('should work', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        driver.get('http://localhost:5000/tours/hood-river').then(function(){
            setTimeout(function(){
                driver.findElement(webdriver.By.name('requestGroupRate'));
            // driver.click("requestGroupRate", function(){

            //});
            }, 3000);
        });
        //var searchBox = driver.findElement(webdriver.By.name('q'));
        //searchBox.sendKeys('simple programmer');
        // searchBox.getAttribute('value').then(function(value) {
        //   assert.equal(value, 'simple programmer');
        // });
        driver.quit();
      });
    });
