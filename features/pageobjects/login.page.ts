import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputSchoolSearch () {
        return $('#main');
    }

    public get clickSearch () {
        return $('#searchPostcodeButton');
    }

    public get clickContactGroup () {
        return $("//li//p[text()='Active']/../..//.//strong[text()='Contact Group']");
    }

    public get verifyNewsExists () {
        return $("//*[text()='November 2021']");
    }
}

export default new LoginPage();
