const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer')

Given('A page', {timeout:1000} ,  async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.ca/');
  await page.screenshot({path: 'example.png'});
  await browser.close();
  return await console.log('hello');
});

When('Best Actor is clicked', function () {
  console.log("This is clicked");
  return 'pending';
});

Then('Go to actors page', function () {
  console.log("This is about");
  return 'pending';
});
