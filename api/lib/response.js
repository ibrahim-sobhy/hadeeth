export const success = result => {
    return {
        statusCode: 200,
        body: JSON.stringify(result),
        isBase64Encoded: false
    };
}

export const notfound = () => {
    return {
        statusCode: 404,
        body: "No item found with the specified id",
        isBase64Encoded: false
    };
}