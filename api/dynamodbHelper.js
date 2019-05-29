const AWS = require('aws-sdk');

// Connect to local dynamodb
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
});

// Prefix database
exports.prefixTable = 'dev';

//Save sets of data
exports.setData = (dataset, done) => {
    const buildSetData = { RequestItems: {} };

    dataset.forEach(data => {
        buildSetData.RequestItems[data.table] = data.items.map(
            item => { PutRequest: item }
        );
    });

    docClient.batchWriteItem(buildSetData, error => {
        if (error) return done(error);
        return done();
    })
}


// Remove all data from database names
exports.emptyTables = (tableNames, done) => {
    const that = this;
    if (tableNames.length === 0) return done();

    const tableName = tableNames[0];
    const reduceTableNames = tableNames.slice(1, tableNames.length);
    const scanParams = {
        TableName: tableName.table
    };

    docClient.scan(scanParams, (err, data) => {
        if (err) return done(err);
        const buildDeleteData = {
            RequestItems: { [scanParams.TableName]: [] }
        };
        data.Items.forEach((obj) => {
            const hashkeys = {};
            tableName.hashKey.forEach(
                (key) => { hashkeys[key] = obj[key]; }
            );
            buildDeleteData.RequestItems[scanParams.TableName].push(
                { DeleteRequest: { Key: hashkeys } }
            );
        });

        return docClient.batchWriteItem(buildDeleteData, (error) => {
            if (error) return done(error);
            return that.emptyTables(reduceTableNames, done);
        });
    });
};