var dynamodb = require('serverless-dynamodb-client');

export class DynamodbWrapper {
    constructor(tableName) {
        this.db = dynamodb.doc;
        this.tableName = tableName;
    }

    async get(id, callback) {
        const params = {
            TableName: this.tableName,
            Key: { id: `${id}`}
        };
       return await this.db.get(params, callback).promise()
                .then(data => {
                    data = Object.assign({id:id},data);
                    return data;
                }).catch(error => {
                    console.error(error);
                });
    }

}