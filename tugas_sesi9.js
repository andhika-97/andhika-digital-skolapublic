const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('tugas sesi 9', ()=>{
     it('Visit SauceDemo dan cek page title', async function () {
       let options = new chrome.Options();
       options.addArguments('--incognito');
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.get('https://www.saucedemo.com');
        await driver.findElement(By.id ('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
        await driver.findElement(By.xpath('//*[@data-test="product-sort-container"]')).click();
        await driver.findElement(By.xpath('//*[@value="za"]')).click();
        await driver.sleep(5000);
        await driver.quit();
        
        
     });
    });