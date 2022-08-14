// @ts-check
const { test, chromium, expect } = require('@playwright/test');

test('aviasales test demo', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("http://aviasales.com");
 
  //origin
  await page.locator("//span[@class='mark_bc31d76 line_bc31d76']").click()

  await page.fill("//input[@id = 'origin']", "New York")

  //destination
  await page.locator('//*[@id="origin-item-2"]/div[2]/span/span').click()

  await page.fill("//input[@id = 'destination']", "Berlin")

  

  
  //setting month
  await page.selectOption('xpath=//div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[3]/div/div[3]/div/div/div[2]/div[2]/div/div/div/div[2]/div[1]/div[1]/div/select', { label: 'July' });
  

  
  
  //click on the right arrow
  await page.locator("//span[contains(@class, 'calendar-navbar__icon --next')]").click()

  
  // setting day
  await page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[3]/div/div[3]/div/div/div[2]/div[2]/div/div/div/div[2]/div[1]/div[3]/div[2]/div[2]/div/div[1]").click()

  //don't need a return ticket
  await page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[3]/div/div[3]/div/div/div[1]/button").click()

  
  //passengers button
  await page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[4]/div/div[1]/div[3]").click()

  //select number of passengers
  await page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[4]/div/div[2]/div[1]/div/div/div[1]/div[1]/div[2]/div[2]/a").click()

  //search
  await page.locator("xpath=/html/body/div[2]/div/div/div[3]/div/div[1]/div[3]/div/div/form/div[5]/button").click()

  await delay(12000);

  expect(page.locator("//span[@class='mark_bc31d76 line_bc31d76']")).toBeVisible
  expect(page.locator('//*[@id="origin-item-2"]/div[2]/span/span')).toBeVisible
  expect(page.locator("/html/body/div[2]/div/div/div[2]/div/div/div[2]/div/div/form/div[3]/div/div[1]/div")).toBeVisible
  expect(page.locator("/html/body/div[2]/div/div/div[2]/div/div/div[2]/div/div/form/div[3]/div/div[2]/div")).toBeVisible
  expect(page.locator("/html/body/div[2]/div/div/div[2]/div/div/div[2]/div/div/form/div[4]/div/div/div[2]")).toBeVisible
  

  await browser.close();

  function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
});
