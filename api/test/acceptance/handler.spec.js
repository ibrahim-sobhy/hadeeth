const request = require('supertest');

describe('Testing of handler', () => {

    const server = request('https://tro56cbhni.execute-api.us-east-1.amazonaws.com/dev');

    it('should return 404 if no data found', () => {
        console.log(`URL is: ${process.env.URL}`);
        const id = 1234567;
        server.get(`/api/hadeeth/${id}`)
            .expect(404);
    });

    it('should get the hadeeth', () => {
        const id = 1;
        server.get(`/api/hadeeth/${id}`)
            .expect(200)
            .end((error, result) => {
                if (error) {
                    console.error(error);
                }
                console.log(result.body);
            });
    });
});