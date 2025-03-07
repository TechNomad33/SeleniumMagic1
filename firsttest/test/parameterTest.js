// import { Browser, Builder, By, Key } from "selenium-webdriver";
// // import { browser } from '@wdio/globals'
// import capabilities from "../Capabilities.js"
// import { assert, expect } from "chai";
// // var assert = require('chai').assert

// describe("add todo tests", function () {
//   var driver
//   //username
// const USERNAME = capabilities.capabilities.username
//   // key

// const KEY = capabilities.capabilities.accessKey
//   //host
// const GRID_HOST = "hub.lambdatest.com/wd/hub"

// const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST

// browsers = [
//     {
//         browser : "Chrome"},
//         {browser : "firefox"}
// ];

// browsers.forEach(({browser}) => {
//   it("successfully adds a todo to the application", async function () {
//     capabilities.capabilities.browserName = browser
//     capabilities.capabilities.name = this.test.title
//     // launch the browser
   
//     driver = new Builder()
//     .usingServer(gridUrl)
//     .withCapabilities(capabilities.capabilities)
//     .build();

//     // navigate to app
//     await driver.get("https://lambdatest.github.io/sample-todo-app/");

//     // add a todo
//     await driver
//       .findElement(By.id("sampletodotext"))
//       .sendKeys("learn JS", Key.RETURN);

//     // assert
//     let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

//     assert.strictEqual(todoText, "learn JS");
//     await driver.quit();
//   });
// });
// });
