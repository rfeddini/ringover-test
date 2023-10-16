const dotenv = require('dotenv');
dotenv.config();
const chai = require('chai');
const expect = chai.expect;
const {remote} = require('webdriverio');
const PermissionPage = require('../pages/PermissionPage');
const LoginPage = require('../pages/LoginPage');
const capabilities = require('../config/capabilities.json');

const wdOpts = {
    hostname: process.env.APPIUM_HOST,
    port: +process.env.APPIUM_PORT,
    logLevel: 'info',
    capabilities,
};

describe('E2E - Login test', function () {
    let driver;
    let permissionPage;
    let loginPage;
    this.timeout(50000)

    beforeEach(async () => {
        driver = await remote(wdOpts);
        permissionPage = new PermissionPage(driver);
        loginPage = new LoginPage(driver);
    })

    afterEach(async () => {
        await driver.pause(10000);
        await driver.deleteSession({shutdownDriver: true});

    })

    it('should login successfully', async () => {
        await permissionPage.grantAllPermissions();
        await loginPage.login('admin@ringover.com', 'admin');
        //expect(). login to be successful
    })


    it("should not login with invalid email format", async () => {
        await permissionPage.grantAllPermissions();
        await loginPage.login('invalid-mail', 'invalid-password');
        const text = await loginPage.getInvalidEmailFormatErrorMessage();
        expect(text).to.be.a('string', 'Login failed. 4 attempts remaining');
    })

    it("should not login with invalid credentials", async () => {
        await permissionPage.grantAllPermissions();
        await loginPage.login('invalid-mail@ringover.com', 'invalid-password');
        const text = await loginPage.getErrorMessage();
        expect(text).to.be.a('string', 'Login failed. 4 attempts remaining');
    })
})
