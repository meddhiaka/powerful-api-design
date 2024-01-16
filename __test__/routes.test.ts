import app from './../src/server';
import supertest from 'supertest';

describe('GET /', () => {
    it("should return hello world", async function () {
        const response = await supertest(app).get("/");

        expect(response.body.message).toBe("hello world");
    })
});