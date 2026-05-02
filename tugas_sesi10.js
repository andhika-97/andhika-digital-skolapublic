const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('tugas sesi 10', ()=>{
    let driver;

    beforeEach =(async() =>{
               let options = new chrome.Options();
       options.addArguments('--incognito');
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.get('https://www.saucedemo.com');
    })


    afterEach =(async() =>{
        await driver.sleep(5000);
        await driver.quit();
    })
     it('correct ID', async function () {



        await driver.findElement(By.id ('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        
        
     });
      it('wrong ID', async function () {

        await driver.findElement(By.id ('user-name')).sendKeys('wrong_id');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
        
        
     });
     it('wrong password', async function () {

        await driver.findElement(By.id ('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('wrong_password');
        await driver.findElement(By.id('login-button')).click();
        
        
     });
    it('user locket', async function () {

        await driver.findElement(By.id ('user-name')).sendKeys('locket_out_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
        
        
     });
     
    });