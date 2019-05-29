import sinon from 'sinon';
import { expect } from 'chai';

import { HadeethService } from '../../lib/hadeeth-service';
import { Database } from '../../lib/database';


describe('Execute CRUD operations for the hadeeth', () => {
     let hadeethService;

    beforeEach( () => {
        hadeethService = new HadeethService();
    });

    it('should return undefined if try to get hadeeth which is not there', () => {
        const hadeethId = 1;

        const databaseMock = sinon.mock(Database.prototype);
        databaseMock.expects('get').once().withArgs(hadeethId).returns(undefined);

        expect( hadeethService.find(hadeethId) ).be.undefined;

        databaseMock.restore();
        databaseMock.verify();
    });

    it('should return error if try to get hadeeth with empty id', () => {
        const hadeethId = null;

        const databaseMock = sinon.mock(Database.prototype);
        databaseMock.expects('get').never().withArgs(hadeethId);

        expect( () => hadeethService.find(hadeethId) ).to.throw('Id is invalid');

        databaseMock.restore();
        databaseMock.verify(); 
    });

    it('should return the hadeeth model', () => {
        const hadeeth = {
            id: 1,
            source: 'Mohamed',
            typeOfTellers: 'Single',
            validity: {
                accepted: true,
                rate: 'Hassan',
                shouldUsed: {
                    used: true,
                    level: 'Command'
                }
            }
        };


        const databaseMock = sinon.mock(Database.prototype);
        databaseMock.expects('get').once().withArgs(hadeeth.id).returns(hadeeth);

        expect( hadeethService.find(hadeeth.id) ).to.equals(hadeeth);

        databaseMock.restore();
        databaseMock.verify(); 
    });
});