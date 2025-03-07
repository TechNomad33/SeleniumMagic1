import { Builder, By, Key, until } from "selenium-webdriver";
import { assert, expect } from "chai";
// var assert = require('chai').assert

describe("add google home page tests", function () {
  it("successfully land on google page & search", async function () {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to app
    await driver.get("https://www.google.com/ncr");

    // add a todo
   let element =  await driver.findElement(By.name("q"))
    element.sendKeys("wiki")
    element.submit();
    // await driver.findElement(By.className("gLFyF")).click()
    driver.wait(check_title, 1000)

    function check_title(){
      let promise = driver.getTitle().then(function(title){
        if(title === "wiki - Google Serach"){
          console.log('success')
          return true
        // } else {
        //   console.log('fail -- ' + title)
        }
      })
      return promise
    }
    // assert
//     let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

//     assert.strictEqual(todoText, "
    // close the browser
    await driver.quit();
  });
});
