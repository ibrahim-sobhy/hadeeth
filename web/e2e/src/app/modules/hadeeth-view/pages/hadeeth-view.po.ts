import { browser, element, by } from 'protractor';

export class HadeethViewPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getHadeethSource(): any {
        return element(by.css('.hadeeth-header__control #hadeeth-source')).getAttribute('data-value') as Promise<string>;
    }

    getHadeethTellers(): any {
        return element(by.css('.hadeeth-header__control #hadeeth-teller')).getAttribute('data-value') as Promise<string>;
    }

}
