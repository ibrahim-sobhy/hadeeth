import { DynamodbWrapper } from './dynamodb-wrapper';

export class Database {
    constructor(tableName) {
        this.databaseProvider = new DynamodbWrapper(tableName);
    }
    
    get(id) {
        return this.databaseProvider.get(id);
    }
    
}