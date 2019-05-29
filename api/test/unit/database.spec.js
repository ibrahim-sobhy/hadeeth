import sinon from 'sinon';
import { expect } from 'chai';

import { Database } from '../../lib/database';
import { DynamodbWrapper } from '../../lib/dynamodb-wrapper';


describe('databe operations against different databases providers', () => {

    let database;

    beforeEach( () => {
        database = new Database();
    });

    it('should return the required object from dynamodb', () => {
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

        const dynamodbMock = sinon.mock(DynamodbWrapper.prototype);
        dynamodbMock.expects('get')
                .once()
                .withArgs(hadeeth.id)
                .returns(hadeeth);

        expect( database.get(hadeeth.id) ).to.equals(hadeeth);
    });
    
});