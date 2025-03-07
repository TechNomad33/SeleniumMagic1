// import { Builder, By, Key } from "selenium-webdriver";
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

// beforeEach(function(){
//   capabilities.capabilities.name = this.currentTest.title
//   driver = new Builder()
//   .usingServer(gridUrl)
//   .withCapabilities(capabilities.capabilities)
//   .build();
// })

// afterEach(async function(){
//   await driver.quit();
// })

//   it("successfully adds a todo to the application", async function () {
//     // launch the browser


//     // navigate to app
//     await driver.get("https://lambdatest.github.io/sample-todo-app/");

//     // add a todo
//     await driver
//       .findElement(By.id("sampletodotext"))
//       .sendKeys("learn JS", Key.RETURN);

//     // assert
//     let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

//     assert.strictEqual(todoText, "learn JS");
//   });
// });
