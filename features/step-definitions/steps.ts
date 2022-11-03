import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given("Navigate to the URL", async () => {
    await browser.url("https://osa-web.t-cg.co.uk/")
});

When("Click on the Contact Group", async ()=> {
    await LoginPage.inputSchoolSearch.setValue("B16 8PE");
    await LoginPage.clickSearch.click();
    await LoginPage.clickContactGroup.scrollIntoView()
    await LoginPage.clickContactGroup.click()
});

Given("Verify news exists {string}", async (message) => {
    await expect(LoginPage.verifyNewsExists).toBeExisting();
    await expect(LoginPage.verifyNewsExists).toHaveTextContaining(message);
});

Then("Verify news does not exists in broken link", async () => {
    await browser.url("https://osa-web.t-cg.co.uk/qatest")
    await expect(LoginPage.verifyNewsExists).toBeExisting();
});

