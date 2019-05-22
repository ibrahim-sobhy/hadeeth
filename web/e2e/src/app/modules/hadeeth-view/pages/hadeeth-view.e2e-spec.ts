import { HadeethViewPage } from './hadeeth-view.po';

describe('Show the hadeeth view page', () => {
    let page: HadeethViewPage;

    beforeEach( () => {
        page = new HadeethViewPage();
    });

    it('show source of hadeeth as Muhamed', () => {
        page.navigateTo();
        expect(page.getHadeethSource()).toEqual('Muhamed');
    });

    it('show hadeeth tellers as Single', () => {
        page.navigateTo();
        expect(page.getHadeethTellers()).toEqual('Single');
    });
});
