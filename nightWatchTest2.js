describe('NightWatchJS Example', function() {
  it('quick start test', async function(browser) {
		  await browser
		  .navigateTo('https://demo-bank.ct.digital.ai/login')
		  .useXpath()
		  .waitForElementVisible('//*[@data-auto="username"]//input')
		  .sendKeys('//*[@data-auto="username"]//input', ['company'])
		  .sendKeys('//*[@data-auto="password"]//input', ['company'])
		  .click('//*[@data-auto="login"]')
		  .click('//*[@data-auto="transfer-funds"]')
		  .sendKeys('//input[@name="NAME"]', ['John'])
		  .sendKeys('//input[@name="PHONE"]', ['1-234-5678'])
		  .sendKeys('//input[@name="AMOUNT"]', ['1000'])
		  .click('//*[@id="country-arrow"]')
		  .click('//*[text()="India"]')
		  .click('//*[@data-auto="transfer-button"]')
      .pause(1000);
  });
  after(browser=>browser.end());
});